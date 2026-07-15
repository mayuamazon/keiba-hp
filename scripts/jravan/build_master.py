#!/usr/bin/env python3
"""JRA-VAN 5年分・全着順CSV → 分析用マスターDB (SQLite) 構築

入力: data/前半_1-4日目_UTF8.csv / data/後半_4日目以降_UTF8.csv
      （原本 Shift_JIS を iconv -f CP932 -t UTF-8 で変換済みのもの）
出力: data/jra_master_5y.sqlite（テーブル results）

最重要方針（引き継ぎ書より）:
  開催前半(1-4日目)=early と 後半(5日目以降)=late を phase 列で必ず区別する。

使い方:
  python3 scripts/jravan/build_master.py
"""
import csv
import os
import re
import sqlite3
import sys

BASE = os.path.join(os.path.dirname(__file__), '..', '..')
DATA = os.path.join(BASE, 'data')
DB_PATH = os.path.join(DATA, 'jra_master_5y.sqlite')

INPUTS = [
    ('前半_1-4日目_UTF8.csv', 'early'),
    ('後半_4日目以降_UTF8.csv', 'late'),
]

PLACE_MAP = {  # 開催の場略号 → track_id（scripts/jravan/README.md の10場）
    '東': 'tokyo', '中': 'nakayama', '京': 'kyoto', '阪': 'hanshin',
    '名': 'chukyo', '新': 'niigata', '福': 'fukushima',
    '札': 'sapporo', '函': 'hakodate', '小': 'kokura',
}
PLACE_JA = {
    '東': '東京', '中': '中山', '京': '京都', '阪': '阪神',
    '名': '中京', '新': '新潟', '福': '福島',
    '札': '札幌', '函': '函館', '小': '小倉',
}
DAY_MAP = {'A': 10, 'B': 11, 'C': 12}
ZENKAKU_NUM = {'１': 1, '２': 2, '３': 3, '４': 4, '５': 5, '６': 6, '７': 7, '８': 8, '９': 9}


def parse_finish(s):
    """着順 → (着順int or None, status)。止=競走中止(賭けは外れ) 外=除外 消=取消(返還)"""
    s = s.strip()
    if s in ZENKAKU_NUM:
        return ZENKAKU_NUM[s], 'ran'
    if s.isdigit():
        return int(s), 'ran'
    if s == '止':
        return None, '中止'
    if s == '外':
        return None, '除外'
    if s == '消':
        return None, '取消'
    return None, f'不明:{s}'


def parse_time(s):
    """走破タイム 'MSSs' → 秒。例 1084 = 1分08秒4 = 68.4"""
    s = s.strip()
    if not s.isdigit() or len(s) != 4 or s == '0000':
        return None
    return int(s[0]) * 60 + int(s[1:3]) + int(s[3]) / 10


def parse_weight_carried(s):
    """斤量 '54△' '51◇' ' 55 ' → float（減量マークを除去）"""
    m = re.search(r'\d+(\.\d+)?', s)
    return float(m.group()) if m else None


def parse_win(s, finish):
    """単勝配当列 → (勝ち馬への実配当円, 単勝オッズ)。
    勝ち馬=実配当(円)、非勝ち馬=(オッズ)表記、取消等=空"""
    s = s.strip()
    if not s:
        return 0, None
    m = re.match(r'^\((\d+(?:\.\d+)?)\)$', s)
    if m:
        return 0, float(m.group(1))
    if s.replace(',', '').isdigit():
        pay = int(s.replace(',', ''))
        return (pay if finish == 1 else 0), pay / 100
    return 0, None


def parse_payout_int(s):
    s = s.strip().replace(',', '')
    return int(s) if s.isdigit() else 0


def derive_frame(n_field, horse_no):
    """頭数(取消込み)と馬番 → 枠番。JRAの枠割り当て規則。
    n<=8: 枠=馬番 / 9-16頭: 後ろの枠から2頭ずつ / 17-18頭: 8枠(と7枠)が3頭"""
    if n_field <= 8:
        return horse_no
    counts = [1] * 8
    extra = n_field - 8
    i = 7
    while extra > 0:
        counts[i] += 1
        extra -= 1
        i -= 1
        if i < 0:
            i = 7
    cum = 0
    for k in range(8):
        cum += counts[k]
        if horse_no <= cum:
            return k + 1
    return 8


def parse_pos(s):
    s = s.strip()
    return int(s) if s.isdigit() else None


def derive_style(c2, c3, c4, n_field):
    """コーナー通過順 → 脚質（逃げ/先行/差し/追込）。
    逃げ=最初のコーナー1番手 / 先行=最終コーナーで前1/3 / 差し=前2/3 / 追込=それ以降"""
    corners = [p for p in (parse_pos(c2), parse_pos(c3), parse_pos(c4)) if p]
    if not corners:
        return None
    first, last = corners[0], corners[-1]
    if first == 1:
        return '逃げ'
    third = max(2, round(n_field / 3))
    if last <= third:
        return '先行'
    if last <= round(n_field * 2 / 3):
        return '差し'
    return '追込'


def parse_float_or_none(s):
    s = s.strip().replace('*', '')
    try:
        return float(s)
    except ValueError:
        return None


def main():
    rows_out = []
    n_in = 0
    for fname, phase in INPUTS:
        path = os.path.join(DATA, fname)
        with open(path, newline='', encoding='utf-8') as f:
            r = csv.reader(f)
            next(r)  # header
            for row in r:
                n_in += 1
                if len(row) != 49:
                    print(f'[WARN] 列数異常 {fname}: {row[:6]}', file=sys.stderr)
                    continue
                d = row[1].strip()
                date_iso = f'20{d[:2]}-{d[2:4]}-{d[4:6]}'
                kaisai = row[2].strip()
                kai = int(kaisai[0])
                place_c = kaisai[1]
                day_c = kaisai[2]
                day = DAY_MAP.get(day_c, int(day_c) if day_c.isdigit() else None)
                finish, status = parse_finish(row[19])
                n_field = int(row[11])
                horse_no = int(row[12])
                win_payout, win_odds = parse_win(row[42], finish)
                race_name = row[4].strip()
                is_jump = 0  # 後段でレース単位に確定する
                rows_out.append((
                    date_iso, phase, kai, PLACE_JA.get(place_c, place_c),
                    PLACE_MAP.get(place_c, ''), day, int(row[3]),
                    race_name, is_jump,
                    row[5].strip(), row[7].strip(),
                    int(row[8]) if row[8].strip().isdigit() else None,
                    row[9].strip(), parse_weight_carried(row[10]),
                    n_field, horse_no, derive_frame(n_field, horse_no),
                    int(row[18]) if row[18].strip().isdigit() else None,
                    finish, status,
                    row[20].strip(), int(row[21]), row[22].strip(), row[23].strip(),
                    row[26].strip().strip('()'), row[27].strip(),
                    parse_time(row[28]),
                    parse_float_or_none(row[29]),
                    parse_pos(row[30]), parse_pos(row[31]), parse_pos(row[32]),
                    derive_style(row[30], row[31], row[32], n_field),
                    parse_float_or_none(row[33]),
                    parse_float_or_none(row[34]), parse_float_or_none(row[36]),
                    parse_float_or_none(row[37]),
                    int(row[39]) if row[39].strip().isdigit() else None,
                    win_payout, win_odds, parse_payout_int(row[43]),
                    parse_payout_int(row[44]), parse_payout_int(row[45]),
                    parse_payout_int(row[46]), parse_payout_int(row[47]),
                    parse_payout_int(row[48]),
                ))

    # ── 障害レース判定（レース単位） ──────────────────
    # 障害戦は「レース名に障害/JG」か「上り3Fが1F値(25秒未満)」で判別できる
    # （平地の上り3Fは常に30秒超・障害はPCIも空）。同一レース全行に反映する。
    IDX = {'date': 0, 'place': 3, 'race_no': 6, 'race_name': 7, 'is_jump': 8}
    LAST3F = 32  # rows_out内のlast3f位置
    jump_races = set()
    for t in rows_out:
        name = t[IDX['race_name']]
        l3f = t[LAST3F]
        if '障害' in name or 'JG' in name or (l3f is not None and l3f < 25):
            jump_races.add((t[IDX['date']], t[IDX['place']], t[IDX['race_no']]))
    rows_out = [
        t[:IDX['is_jump']] + (
            1 if (t[IDX['date']], t[IDX['place']], t[IDX['race_no']]) in jump_races else 0,
        ) + t[IDX['is_jump'] + 1:]
        for t in rows_out
    ]

    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
    con = sqlite3.connect(DB_PATH)
    con.execute('''
        CREATE TABLE results (
            date TEXT, phase TEXT, kai INTEGER, place TEXT, track_id TEXT,
            day INTEGER, race_no INTEGER, race_name TEXT, is_jump INTEGER,
            horse TEXT, sex TEXT, age INTEGER, jockey TEXT, weight_carried REAL,
            n_field INTEGER, horse_no INTEGER, frame INTEGER,
            popularity INTEGER, finish INTEGER, status TEXT,
            surface TEXT, distance INTEGER, course_kubun TEXT, going TEXT,
            stable TEXT, trainer TEXT,
            time_sec REAL, margin REAL,
            corner2 INTEGER, corner3 INTEGER, corner4 INTEGER, style TEXT,
            last3f REAL, pci REAL, pci3 REAL, rpci REAL,
            horse_weight INTEGER,
            win_payout INTEGER, win_odds REAL, place_payout INTEGER,
            wakuren INTEGER, umaren INTEGER, umatan INTEGER,
            sanrenpuku INTEGER, sanrentan INTEGER
        )
    ''')
    con.executemany(
        f'INSERT INTO results VALUES ({",".join(["?"] * 45)})', rows_out)
    con.execute('CREATE INDEX idx_course ON results(track_id, surface, distance, phase)')
    con.execute('CREATE INDEX idx_date ON results(date)')
    con.commit()

    # ── 検証 ──────────────────────────────────────────
    q = lambda sql: con.execute(sql).fetchone()
    n_db = q('SELECT COUNT(*) FROM results')[0]
    print(f'入力 {n_in} 行 → DB {n_db} 行 （一致: {n_in == n_db}）')
    print('期間:', q('SELECT MIN(date), MAX(date) FROM results'))
    print('phase別:', con.execute(
        'SELECT phase, COUNT(DISTINCT date||place||race_no), COUNT(*) '
        'FROM results GROUP BY phase').fetchall())
    print('障害レース行数:', q('SELECT COUNT(*) FROM results WHERE is_jump=1')[0])
    # 全馬単勝ベタ買いの回収率 ≈ 80%（JRA控除率20%）ならパースは正しい
    bets, ret = q("SELECT COUNT(*), SUM(win_payout) FROM results WHERE status='ran'")
    print(f'★単勝全買い回収率: {ret / bets:.1f}%（理論値≈80%）  対象{bets}頭')
    bets2, ret2 = q("SELECT COUNT(*), SUM(place_payout) FROM results WHERE status='ran'")
    print(f'★複勝全買い回収率: {ret2 / bets2:.1f}%（理論値≈80%）')
    # 8頭以下は枠=馬番のはず
    bad = q('SELECT COUNT(*) FROM results WHERE n_field<=8 AND frame!=horse_no')[0]
    print(f'枠番検証（8頭以下で枠=馬番）: 違反{bad}件')
    print('脚質分布:', con.execute(
        "SELECT style, COUNT(*) FROM results WHERE is_jump=0 GROUP BY style").fetchall())
    con.close()
    print(f'\n完了: {DB_PATH}')


if __name__ == '__main__':
    main()
