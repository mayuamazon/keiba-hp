#!/usr/bin/env python3
"""マスターDB → lib/data/courses-generated.ts 生成

courses.ts に手書き掲載されていないコースを、5年実データ由来の説明文つきで
自動生成する（勝率の創作禁止方針：文中の数字はすべて実測値）。
手書きコースが常に優先される（courses.ts 側でマージ時に重複を除外）。

対象: レース数10以上の（競馬場×芝ダ×距離）
使い方: python3 scripts/jravan/export_courses.py
"""
import os
import re
import sqlite3

BASE = os.path.join(os.path.dirname(__file__), '..', '..')
DB = os.path.join(BASE, 'data', 'jra_master_5y.sqlite')
COURSES_TS = os.path.join(BASE, 'lib', 'data', 'courses.ts')
OUT = os.path.join(BASE, 'lib', 'data', 'courses-generated.ts')

MIN_RACES = 10
SURFACE_EN = {'芝': 'turf', 'ダ': 'dirt'}
TRACK_JA = {'tokyo': '東京', 'nakayama': '中山', 'kyoto': '京都', 'hanshin': '阪神',
            'chukyo': '中京', 'niigata': '新潟', 'fukushima': '福島',
            'sapporo': '札幌', 'hakodate': '函館', 'kokura': '小倉'}


def curated_courses():
    src = open(COURSES_TS, encoding='utf-8').read()
    pat = re.compile(
        r"trackId:\s*'(\w+)',\s*trackName:\s*'[^']*',\s*distance:\s*(\d+),\s*surface:\s*'(\w+)'",
        re.S)
    return {(t, s, int(d)) for t, d, s in pat.findall(src)}


def pct(con, extra_where, cond, base_where, params):
    """base_where に合う馬のうち cond を満たす率(%)。データ不足は None"""
    row = con.execute(
        f'SELECT COUNT(*), SUM(CASE WHEN {cond} THEN 1 ELSE 0 END) '
        f'FROM results WHERE {base_where} {extra_where}', params).fetchone()
    n, hit = row
    return (100.0 * (hit or 0) / n) if n and n >= 50 else None


def build_copy(con, tid, sf, dist):
    """実測値からkeyFactor/noteを組み立てる（数字はすべて実データ）"""
    base = ("status IN ('ran','中止') AND is_jump=0 "
            'AND track_id=? AND surface=? AND distance=?')
    params = (tid, sf, dist)
    n_races = con.execute(
        "SELECT COUNT(DISTINCT date||place||race_no) FROM results "
        f'WHERE {base}', params).fetchone()[0]

    inner = pct(con, ' AND frame<=3', 'finish<=3', base, params)
    outer = pct(con, ' AND frame>=7', 'finish<=3', base, params)
    front = pct(con, " AND style IN ('逃げ','先行')", 'finish=1', base, params)
    back = pct(con, " AND style IN ('差し','追込')", 'finish=1', base, params)

    parts = [f'5年実データ（{n_races}レース）：']
    if inner is not None and outer is not None:
        d = inner - outer
        if d >= 2:
            parts.append(f'内枠(1-3枠)複勝率{inner:.1f}%・外枠(7-8枠){outer:.1f}%で内枠優勢。')
        elif d <= -2:
            parts.append(f'外枠(7-8枠)複勝率{outer:.1f}%・内枠(1-3枠){inner:.1f}%で外枠優勢。')
        else:
            parts.append(f'内枠複勝率{inner:.1f}%・外枠{outer:.1f}%と枠の有利不利は小さい。')
    if front is not None and back is not None:
        if front >= back * 1.5:
            parts.append(f'逃げ・先行の勝率{front:.1f}%（差し・追込{back:.1f}%）と前有利。')
        elif back > front:
            parts.append(f'差し・追込の勝率{back:.1f}%が逃げ・先行{front:.1f}%を上回る差し届く馬場。')
        else:
            parts.append(f'逃げ・先行勝率{front:.1f}%・差し・追込{back:.1f}%。')
    key_factor = ''.join(parts)

    # 前後半差（各phase 10レース以上あるときだけ言及）
    note = f'JRA-VAN 2021-2026年・全着順{n_races}レースの自社集計。'
    ph_n = dict(con.execute(
        'SELECT phase, COUNT(DISTINCT date||place||race_no) FROM results '
        f'WHERE {base} GROUP BY phase', params).fetchall())
    if ph_n.get('early', 0) >= MIN_RACES and ph_n.get('late', 0) >= MIN_RACES:
        ie = pct(con, " AND frame<=3 AND phase='early'", 'finish<=3', base, params)
        il = pct(con, " AND frame<=3 AND phase='late'", 'finish<=3', base, params)
        if ie is not None and il is not None:
            d = il - ie
            if d <= -2:
                note += f'開催後半は内枠複勝率が{ie:.1f}%→{il:.1f}%へ低下し、外・差しが利きやすくなる。'
            elif d >= 2:
                note += f'開催後半も内枠複勝率が{ie:.1f}%→{il:.1f}%と上がり、内有利が続く。'
            else:
                note += f'開催前半/後半での内枠複勝率の変化は小さい（{ie:.1f}%→{il:.1f}%）。'
    return key_factor, note


def main():
    con = sqlite3.connect(DB)
    curated = curated_courses()
    combos = con.execute(
        "SELECT track_id, surface, distance, COUNT(DISTINCT date||place||race_no) n "
        "FROM results WHERE is_jump=0 GROUP BY 1,2,3 HAVING n>=? "
        "ORDER BY track_id, surface DESC, distance", (MIN_RACES,)).fetchall()

    entries = []
    for tid, sf, dist, n in combos:
        sf_en = SURFACE_EN[sf]
        if (tid, sf_en, dist) in curated:
            continue
        key_factor, note = build_copy(con, tid, sf, dist)
        entries.append(
            "  {\n"
            f"    trackId: '{tid}',\n"
            f"    trackName: '{TRACK_JA[tid]}',\n"
            f"    distance: {dist},\n"
            f"    surface: '{sf_en}',\n"
            f"    keyFactor: '{key_factor}',\n"
            f"    note: '{note}',\n"
            "  },")
    con.close()

    body = '\n'.join(entries)
    ts = f"""// このファイルは scripts/jravan/export_courses.py により生成されます（手動編集は上書きされます）
// 文中の数字はすべて JRA-VAN 2021-2026 全着順データの実測値（勝率の創作禁止方針に準拠）
import type {{ CourseData }} from '@/lib/types'

type BaseCourse = Omit<CourseData, 'frameStats' | 'runningStyleStats'>

/** courses.ts の手書きコースに無いコースの自動生成分（手書きが常に優先） */
export const generatedCourses: BaseCourse[] = [
{body}
]
"""
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(ts)
    print(f'生成コース数: {len(entries)}（手書き{len(curated)}コースは除外）→ {OUT}')


if __name__ == '__main__':
    main()
