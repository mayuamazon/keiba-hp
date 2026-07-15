#!/usr/bin/env python3
"""条件別バックテスト：条件に合う馬の単勝・複勝を100円ずつ買い続けた場合の回収率

前提: data/jra_master_5y.sqlite（build_master.py で生成）

使い方の例:
  # 福島・芝・開催後半の追込馬
  python3 scripts/jravan/backtest.py --place 福島 --surface 芝 --phase late --style 追込

  # 東京芝2400の枠番別成績（前半/後半の比較は --by phase,frame）
  python3 scripts/jravan/backtest.py --place 東京 --surface 芝 --dist 2400 --by frame
  python3 scripts/jravan/backtest.py --place 東京 --surface 芝 --dist 2400 --by phase,frame

  # 全場・芝・1番人気を人気別に
  python3 scripts/jravan/backtest.py --surface 芝 --by popularity --pop-max 5

グループ化に使える列: phase place surface distance going frame style
                       popularity sex jockey trainer day
※ 取消・除外は賭け対象から除外（返還扱い）。競走中止は外れ馬券として計上。
※ 障害レースはデフォルト除外（--include-jump で含める）。
"""
import argparse
import os
import sqlite3

DB = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'jra_master_5y.sqlite')

GROUP_COLS = {'phase', 'place', 'surface', 'distance', 'going', 'frame',
              'style', 'popularity', 'sex', 'jockey', 'trainer', 'day'}


def build_where(a):
    where = ["status IN ('ran','中止')"]
    params = []
    if not a.include_jump:
        where.append('is_jump=0')

    def eq(col, val):
        if val is not None:
            where.append(f'{col}=?')
            params.append(val)

    def rng(col, lo, hi):
        if lo is not None:
            where.append(f'{col}>=?')
            params.append(lo)
        if hi is not None:
            where.append(f'{col}<=?')
            params.append(hi)

    eq('place', a.place)
    eq('surface', a.surface)
    eq('phase', a.phase)
    eq('style', a.style)
    eq('going', a.going)
    eq('jockey', a.jockey)
    eq('sex', a.sex)
    eq('distance', a.dist)
    eq('frame', a.frame)
    rng('distance', a.dist_min, a.dist_max)
    rng('popularity', a.pop_min, a.pop_max)
    rng('win_odds', a.odds_min, a.odds_max)
    rng('date', a.date_min, a.date_max)
    return ' AND '.join(where), params


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('--place', help='競馬場（東京/中山/京都/阪神/中京/新潟/福島/札幌/函館/小倉）')
    p.add_argument('--surface', help='芝 or ダ')
    p.add_argument('--phase', choices=['early', 'late'], help='early=開催1-4日目 late=5日目以降')
    p.add_argument('--style', help='逃げ/先行/差し/追込')
    p.add_argument('--going', help='馬場状態（良/稍/重/不）')
    p.add_argument('--jockey')
    p.add_argument('--sex')
    p.add_argument('--dist', type=int)
    p.add_argument('--dist-min', type=int)
    p.add_argument('--dist-max', type=int)
    p.add_argument('--frame', type=int)
    p.add_argument('--pop-min', type=int)
    p.add_argument('--pop-max', type=int)
    p.add_argument('--odds-min', type=float)
    p.add_argument('--odds-max', type=float)
    p.add_argument('--date-min', help='YYYY-MM-DD')
    p.add_argument('--date-max')
    p.add_argument('--by', help='グループ化列（カンマ区切り）例: phase,frame')
    p.add_argument('--min-bets', type=int, default=1, help='表示する最小賭け数')
    p.add_argument('--include-jump', action='store_true')
    a = p.parse_args()

    where, params = build_where(a)
    group_cols = []
    if a.by:
        group_cols = [c.strip() for c in a.by.split(',')]
        bad = [c for c in group_cols if c not in GROUP_COLS]
        if bad:
            p.error(f'--by に使えない列: {bad}（有効: {sorted(GROUP_COLS)}）')

    sel_group = (', '.join(group_cols) + ',') if group_cols else ''
    sql = f'''
      SELECT {sel_group}
        COUNT(*) bets,
        SUM(CASE WHEN finish=1 THEN 1 ELSE 0 END) wins,
        ROUND(100.0*SUM(CASE WHEN finish=1 THEN 1 ELSE 0 END)/COUNT(*),1) win_pct,
        ROUND(100.0*SUM(CASE WHEN finish<=2 THEN 1 ELSE 0 END)/COUNT(*),1) exacta_pct,
        ROUND(100.0*SUM(CASE WHEN finish<=3 THEN 1 ELSE 0 END)/COUNT(*),1) place_pct,
        ROUND(1.0*SUM(win_payout)/COUNT(*),1) win_roi,
        ROUND(1.0*SUM(place_payout)/COUNT(*),1) place_roi
      FROM results WHERE {where}
      {('GROUP BY ' + ', '.join(group_cols)) if group_cols else ''}
      {('HAVING COUNT(*) >= ' + str(a.min_bets)) if group_cols else ''}
      {('ORDER BY ' + ', '.join(group_cols)) if group_cols else ''}
    '''
    con = sqlite3.connect(DB)
    rows = con.execute(sql, params).fetchall()
    con.close()

    header = group_cols + ['賭け数', '勝数', '勝率%', '連対率%', '複勝率%', '単勝回収率%', '複勝回収率%']
    widths = [max(10, len(h) + 2) for h in header]
    print('  '.join(h.ljust(w) for h, w in zip(header, widths)))
    print('-' * (sum(widths) + 2 * len(widths)))
    for r in rows:
        print('  '.join(str(v if v is not None else '-').ljust(w)
                        for v, w in zip(r, widths)))
    if not rows or (not group_cols and rows[0][0] == 0):
        print('（該当データなし）')


if __name__ == '__main__':
    main()
