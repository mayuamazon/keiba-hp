#!/usr/bin/env python3
"""マスターDB → frame_stats.csv / style_stats.csv 生成（import-stats.mjs の入力契約準拠）

- phase: all / early(開催1-4日目) / late(5日目以降) の3区分を出力
- 月別: 各（track×surface×distance×月）でレース数10以上の行を追加出力
  - 月別行の phase は 'all' 固定（月×前後半の複合分割はしない）
  - 月別行の month 列に 1〜12 の整数を入れる。従来行（全体・early・late）は month を空にする
- キー(競馬場×芝ダ×距離×phase×month)は両ファイルで完全一致させる（importの必須条件）
- レース数が閾値未満のキーは出力しない（少サンプルのノイズ防止）
- 障害レースは除外

使い方:
  python3 scripts/jravan/export_stats.py
  → data/frame_stats.csv, data/style_stats.csv
  → node scripts/jravan/import-stats.mjs --frame data/frame_stats.csv \
       --style data/style_stats.csv --source "JRA-VAN 5年分全着順 自社集計" --period "2021-2026"
"""
import os
import re
import sqlite3

BASE = os.path.join(os.path.dirname(__file__), '..', '..')
DB = os.path.join(BASE, 'data', 'jra_master_5y.sqlite')
OUT_FRAME = os.path.join(BASE, 'data', 'frame_stats.csv')
OUT_STYLE = os.path.join(BASE, 'data', 'style_stats.csv')
COURSES_TS = os.path.join(BASE, 'lib', 'data', 'courses.ts')

MIN_RACES = 10  # このレース数未満の（コース×phase / コース×month）は出力しない
SURFACE_EN = {'芝': 'turf', 'ダ': 'dirt'}


def curated_courses():
    """courses.ts に手書き掲載済みのコース（閾値未満でも統計を強制出力する）"""
    src = open(COURSES_TS, encoding='utf-8').read()
    pat = re.compile(
        r"trackId:\s*'(\w+)',\s*trackName:\s*'[^']*',\s*distance:\s*(\d+),\s*surface:\s*'(\w+)'",
        re.S)
    return {(t, s, int(d)) for t, d, s in pat.findall(src)}


def main():
    con = sqlite3.connect(DB)
    # コース×phase ごとのレース数（phase='all' は合算）
    race_counts = {}  # (track_id, surface, distance, phase) -> races
    for tid, sf, dist, phase, races in con.execute('''
        SELECT track_id, surface, distance, phase,
               COUNT(DISTINCT date || '_' || place || '_' || race_no)
        FROM results WHERE is_jump=0
        GROUP BY track_id, surface, distance, phase'''):
        key = (tid, SURFACE_EN[sf], dist)
        race_counts[key + (phase,)] = races
        race_counts[key + ('all',)] = race_counts.get(key + ('all',), 0) + races

    # コース×month ごとのレース数
    month_race_counts = {}  # (track_id, surface, distance, month_int) -> races
    for tid, sf, dist, month_str, races in con.execute('''
        SELECT track_id, surface, distance,
               CAST(SUBSTR(date,6,2) AS INTEGER) as month,
               COUNT(DISTINCT date || '_' || place || '_' || race_no)
        FROM results WHERE is_jump=0
        GROUP BY track_id, surface, distance, month'''):
        month_race_counts[(tid, SURFACE_EN[sf], dist, int(month_str))] = races

    curated = curated_courses()
    # 閾値以上、または手書き掲載コース（こちらはphase別は出さず全体のみ＝少サンプルの
    # early/late分割はノイズになるため）
    valid_keys = {
        k for k, n in race_counts.items()
        if n >= MIN_RACES or (k[3] == 'all' and (k[0], k[1], k[2]) in curated)
    }

    # 月別有効キー（閾値以上のもの）
    valid_month_keys = {
        k for k, n in month_race_counts.items()
        if n >= MIN_RACES
    }

    def stats_rows(group_col, valid_values=None):
        """(track,surface,dist,group_val,win_rate,place_rate,phase,races,month) を列挙
        従来行（全体・early・late）は month='' 、月別行は month=整数文字列
        """
        rows = []
        # ── 従来の phase 別行 ──
        for phase_filter in ('early', 'late', 'all'):
            cond = '' if phase_filter == 'all' else f"AND phase='{phase_filter}'"
            sql = f'''
              SELECT track_id, surface, distance, {group_col},
                COUNT(*) starts,
                ROUND(100.0*SUM(CASE WHEN finish=1 THEN 1 ELSE 0 END)/COUNT(*),1),
                ROUND(100.0*SUM(CASE WHEN finish<=3 THEN 1 ELSE 0 END)/COUNT(*),1)
              FROM results
              WHERE is_jump=0 AND status IN ('ran','中止') AND {group_col} IS NOT NULL
                {cond}
              GROUP BY track_id, surface, distance, {group_col}'''
            for tid, sf, dist, gv, starts, wr, pr in con.execute(sql):
                key = (tid, SURFACE_EN[sf], dist, phase_filter)
                if key not in valid_keys:
                    continue
                if valid_values and gv not in valid_values:
                    continue
                races = race_counts.get(key, 0)
                # month は空（従来行）
                rows.append((tid, SURFACE_EN[sf], dist, gv, wr, pr, phase_filter, races, ''))
        # ── 月別行（phase='all' 固定） ──
        for month in range(1, 13):
            sql = f'''
              SELECT track_id, surface, distance, {group_col},
                COUNT(*) starts,
                ROUND(100.0*SUM(CASE WHEN finish=1 THEN 1 ELSE 0 END)/COUNT(*),1),
                ROUND(100.0*SUM(CASE WHEN finish<=3 THEN 1 ELSE 0 END)/COUNT(*),1)
              FROM results
              WHERE is_jump=0 AND status IN ('ran','中止') AND {group_col} IS NOT NULL
                AND CAST(SUBSTR(date,6,2) AS INTEGER) = {month}
              GROUP BY track_id, surface, distance, {group_col}'''
            for tid, sf, dist, gv, starts, wr, pr in con.execute(sql):
                mkey = (tid, SURFACE_EN[sf], dist, month)
                if mkey not in valid_month_keys:
                    continue
                if valid_values and gv not in valid_values:
                    continue
                races = month_race_counts.get(mkey, 0)
                rows.append((tid, SURFACE_EN[sf], dist, gv, wr, pr, 'all', races, str(month)))
        return rows

    frame_rows = stats_rows('frame')
    style_rows = stats_rows('style', valid_values={'逃げ', '先行', '差し', '追込'})

    # キー整合（両ファイルで競馬場×芝ダ×距離×phase×month を完全一致させる）
    # キー = (track_id, surface, distance, phase, month)
    fkeys = {(r[0], r[1], r[2], r[6], r[8]) for r in frame_rows}
    skeys = {(r[0], r[1], r[2], r[6], r[8]) for r in style_rows}
    common = fkeys & skeys
    frame_rows = [r for r in frame_rows if (r[0], r[1], r[2], r[6], r[8]) in common]
    style_rows = [r for r in style_rows if (r[0], r[1], r[2], r[6], r[8]) in common]

    with open(OUT_FRAME, 'w', encoding='utf-8') as f:
        f.write('track_id,surface,distance,frame,win_rate,place_rate,phase,races,month\n')
        for r in sorted(frame_rows):
            f.write(','.join(map(str, r)) + '\n')
    with open(OUT_STYLE, 'w', encoding='utf-8') as f:
        f.write('track_id,surface,distance,style,win_rate,place_rate,phase,races,month\n')
        for r in sorted(style_rows):
            f.write(','.join(map(str, r)) + '\n')

    # 統計サマリー
    phase_keys = {(k[0], k[1], k[2], k[3]) for k in common if k[4] == ''}  # month 空 = 従来キー
    month_keys = {k for k in common if k[4] != ''}  # month あり = 月別キー
    n_courses = len({(k[0], k[1], k[2]) for k in common})
    n_phase_keys = len(phase_keys)
    n_month_keys = len(month_keys)
    print(f'コース数: {n_courses}／phaseキー数: {n_phase_keys}／月別キー数: {n_month_keys}')
    print(f'frame_stats: {len(frame_rows)} 行 → {OUT_FRAME}')
    print(f'style_stats: {len(style_rows)} 行 → {OUT_STYLE}')
    dropped = (fkeys | skeys) - common
    if dropped:
        print(f'[INFO] 片方欠けで除外したキー: {sorted(dropped)}')
    con.close()


if __name__ == '__main__':
    main()
