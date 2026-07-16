#!/usr/bin/env python3
"""マスターDB → frame_stats.csv / style_stats.csv 生成（import-stats.mjs の入力契約準拠）

- phase: all / early(開催1-4日目) / late(5日目以降) の3区分を出力
- キー(競馬場×芝ダ×距離×phase)は両ファイルで完全一致させる（importの必須条件）
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

MIN_RACES = 10  # このレース数未満の（コース×phase）は出力しない
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

    curated = curated_courses()
    # 閾値以上、または手書き掲載コース（こちらはphase別は出さず全体のみ＝少サンプルの
    # early/late分割はノイズになるため）
    valid_keys = {
        k for k, n in race_counts.items()
        if n >= MIN_RACES or (k[3] == 'all' and (k[0], k[1], k[2]) in curated)
    }

    def stats_rows(group_col, valid_values=None):
        """(track,surface,dist,phase,group_val,win_rate,place_rate,races) を列挙"""
        rows = []
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
                rows.append((tid, SURFACE_EN[sf], dist, gv, wr, pr, phase_filter, races))
        return rows

    frame_rows = stats_rows('frame')
    style_rows = stats_rows('style', valid_values={'逃げ', '先行', '差し', '追込'})

    # キー整合（両ファイルで競馬場×芝ダ×距離×phase を完全一致させる）
    fkeys = {(r[0], r[1], r[2], r[6]) for r in frame_rows}
    skeys = {(r[0], r[1], r[2], r[6]) for r in style_rows}
    common = fkeys & skeys
    frame_rows = [r for r in frame_rows if (r[0], r[1], r[2], r[6]) in common]
    style_rows = [r for r in style_rows if (r[0], r[1], r[2], r[6]) in common]

    with open(OUT_FRAME, 'w', encoding='utf-8') as f:
        f.write('track_id,surface,distance,frame,win_rate,place_rate,phase,races\n')
        for r in sorted(frame_rows):
            f.write(','.join(map(str, r)) + '\n')
    with open(OUT_STYLE, 'w', encoding='utf-8') as f:
        f.write('track_id,surface,distance,style,win_rate,place_rate,phase,races\n')
        for r in sorted(style_rows):
            f.write(','.join(map(str, r)) + '\n')

    n_courses = len({(k[0], k[1], k[2]) for k in common})
    n_phase_keys = len(common)
    print(f'コース数: {n_courses}／キー数(phase込み): {n_phase_keys}')
    print(f'frame_stats: {len(frame_rows)} 行 → {OUT_FRAME}')
    print(f'style_stats: {len(style_rows)} 行 → {OUT_STYLE}')
    dropped = (fkeys | skeys) - common
    if dropped:
        print(f'[INFO] 片方欠けで除外したキー: {sorted(dropped)}')
    con.close()


if __name__ == '__main__':
    main()
