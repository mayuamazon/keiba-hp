#!/usr/bin/env python3
"""マスターDB → lib/data/jockey-rankings.ts 生成

集計期間: 5年全部（2021-01〜2026-07）
掲載: 最終騎乗日 >= 2026-01-20 の騎手のみ（引退者除外）
軸: 場（全国=all + 10場）× 馬場（all/turf/dirt）× 距離帯（all/sprint/mile/middle/long）
各組合せで閾値以上（全国=200、場別=50）の騎手を勝利数降順で上位20人

使い方:
  python3 scripts/jravan/export_jockeys.py
  → lib/data/jockey-rankings.ts
"""
import os
import sqlite3
import json

BASE = os.path.join(os.path.dirname(__file__), '..', '..')
DB = os.path.join(BASE, 'data', 'jra_master_5y.sqlite')
OUT = os.path.join(BASE, 'lib', 'data', 'jockey-rankings.ts')

LAST_RIDE_CUTOFF = '2026-01-20'
THRESHOLD_ALL = 200
THRESHOLD_TRACK = 50
TOP_N = 20

TRACKS = ['sapporo', 'hakodate', 'fukushima', 'niigata',
          'tokyo', 'nakayama', 'chukyo', 'kyoto', 'hanshin', 'kokura']

SURFACE_COND = {
    'all':  '',
    'turf': "AND surface='芝'",
    'dirt': "AND surface='ダ'",
}

DIST_COND = {
    'all':    '',
    'sprint': 'AND distance<=1400',
    'mile':   'AND distance BETWEEN 1401 AND 1600',
    'middle': 'AND distance BETWEEN 1601 AND 2200',
    'long':   'AND distance>=2201',
}


def div(a, b, decimals=1):
    return round(a / b, decimals) if b else 0.0


def build_key(track, surface, dist_band):
    return f'{track}-{surface}-{dist_band}'


def query_jockeys(con, active_jockeys: set, track_cond: str, surface_key: str, dist_key: str, threshold: int):
    """指定条件でのランキング（上位20人）を返す"""
    sf_cond = SURFACE_COND[surface_key]
    dt_cond = DIST_COND[dist_key]

    sql = f"""
        SELECT
            jockey,
            COUNT(*) as rides,
            SUM(CASE WHEN finish=1 THEN 1 ELSE 0 END) as wins,
            SUM(CASE WHEN finish<=3 THEN 1 ELSE 0 END) as places,
            SUM(CASE WHEN finish=1 THEN COALESCE(win_payout, 0) ELSE 0 END) as payout_sum
        FROM results
        WHERE is_jump=0
          AND status IN ('ran','中止')
          {track_cond}
          {sf_cond}
          {dt_cond}
        GROUP BY jockey
        HAVING COUNT(*) >= {threshold}
        ORDER BY wins DESC, rides DESC
        LIMIT {TOP_N * 3}
    """
    rows = con.execute(sql).fetchall()

    result = []
    for name, rides, wins, places, payout_sum in rows:
        if name not in active_jockeys:
            continue
        win_rate = div(wins * 100.0, rides)
        place_rate = div(places * 100.0, rides)
        win_roi = div(payout_sum, rides)
        result.append({
            'name': name,
            'rides': rides,
            'wins': wins,
            'winRate': win_rate,
            'placeRate': place_rate,
            'winRoi': win_roi,
        })
        if len(result) >= TOP_N:
            break

    return result


def main():
    con = sqlite3.connect(DB)

    # ── 直近騎乗のある騎手セット ──────────────────────────────────
    active_rows = con.execute(
        "SELECT jockey FROM results GROUP BY jockey HAVING MAX(date) >= ?",
        (LAST_RIDE_CUTOFF,),
    ).fetchall()
    active_jockeys = {r[0] for r in active_rows}
    print(f'アクティブ騎手数: {len(active_jockeys)}')

    record: dict = {}  # key -> JockeyRankRow[]

    surfaces = ['all', 'turf', 'dirt']
    dist_bands = ['all', 'sprint', 'mile', 'middle', 'long']

    # ── 全国 ────────────────────────────────────────────────────────
    for sf in surfaces:
        for db in dist_bands:
            key = build_key('all', sf, db)
            rows = query_jockeys(con, active_jockeys, '', sf, db, THRESHOLD_ALL)
            if rows:
                record[key] = rows

    # ── 場別 ────────────────────────────────────────────────────────
    for track in TRACKS:
        track_cond = f"AND track_id='{track}'"
        for sf in surfaces:
            for db in dist_bands:
                key = build_key(track, sf, db)
                rows = query_jockeys(con, active_jockeys, track_cond, sf, db, THRESHOLD_TRACK)
                if rows:
                    record[key] = rows

    con.close()

    total_keys = len(record)
    print(f'生成キー数: {total_keys}')

    # ── spot check: all-all-all トップ5 ────────────────────────────
    top5 = record.get('all-all-all', [])[:5]
    print('全国×全×全 トップ5:')
    for i, r in enumerate(top5, 1):
        print(f'  {i}. {r["name"]} 騎乗{r["rides"]} 勝利{r["wins"]} 勝率{r["winRate"]}% 複勝率{r["placeRate"]}% 回収率{r["winRoi"]}%')

    # ── TypeScript ファイル出力 ──────────────────────────────────────
    lines = [
        '// このファイルは scripts/jravan/export_jockeys.py により生成されます（手動編集は上書きされます）',
        '// 出典: JRA-VAN 2021-2026 全着順データ 自社集計',
        '// 掲載条件: 最終騎乗日 2026-01-20 以降（引退者除外）・全国200騎乗以上 / 場別50騎乗以上',
        '',
        'export interface JockeyRankRow {',
        '  name: string',
        '  rides: number',
        '  wins: number',
        '  winRate: number',
        '  placeRate: number',
        '  winRoi: number',
        '}',
        '',
        '/** キー: `{trackId|"all"}-{turf|dirt|"all"}-{sprint|mile|middle|long|"all"}` */',
        'export const jockeyRankings: Record<string, JockeyRankRow[]> = ' + json.dumps(record, ensure_ascii=False, indent=2),
        '',
    ]

    with open(OUT, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    size_kb = os.path.getsize(OUT) / 1024
    print(f'生成ファイルサイズ: {size_kb:.1f} KB → {OUT}')
    if size_kb > 1024:
        print('[WARNING] ファイルサイズが1MBを超えています')


if __name__ == '__main__':
    main()
