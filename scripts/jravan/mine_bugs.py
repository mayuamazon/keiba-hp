#!/usr/bin/env python3
"""マスターDB → lib/data/bug-alerts-generated.ts 生成（バグ穴馬アラートの実データ化）

固定の条件ライブラリ（全コース共通・コース別のしきい値調整はしない＝過剰適合の抑制）を
全（競馬場×芝ダ×距離×前後半）でバックテストし、
  賭け数30以上 かつ 回収率120%以上
のものだけをアラートとして出力する。文中の数字はすべて実測値。

キーは2段階：
  L1: {track}-{surface}-{distance}-{phase}（コース単位）
  L2: {track}-{surface}-{phase}（場×馬場単位。L1が無いときのフォールバック）

使い方: python3 scripts/jravan/mine_bugs.py
"""
import os
import sqlite3

BASE = os.path.join(os.path.dirname(__file__), '..', '..')
DB = os.path.join(BASE, 'data', 'jra_master_5y.sqlite')
OUT = os.path.join(BASE, 'lib', 'data', 'bug-alerts-generated.ts')

MIN_BETS = 30
MIN_ROI = 120.0
HIGH_ROI = 150.0
HIGH_BETS = 50
MIN_WINS = 3    # 単勝ベースのアラートに必要な最低勝利数（大穴1発の偶然を排除）
MIN_PLACES = 5  # 複勝ベースのアラートに必要な最低複勝回数

SURFACE_EN = {'芝': 'turf', 'ダ': 'dirt'}
SURFACE_JA = {'turf': '芝', 'dirt': 'ダート'}
PHASE_LABEL = {'early': '開幕前半', 'late': '開催後半'}
TRACK_JA = {'tokyo': '東京', 'nakayama': '中山', 'kyoto': '京都', 'hanshin': '阪神',
            'chukyo': '中京', 'niigata': '新潟', 'fukushima': '福島',
            'sapporo': '札幌', 'hakodate': '函館', 'kokura': '小倉'}

# 条件ライブラリ（SQL述語は全コース共通の固定しきい値）
CONDITIONS = [
    ('距離短縮400m以上',
     'prev_distance - distance >= 400',
     '前走から400m以上の距離短縮馬'),
    ('距離延長400m以上',
     'distance - prev_distance >= 400',
     '前走から400m以上の距離延長馬'),
    ('休み明け（中10週以上）',
     'julianday(date) - julianday(prev_date) >= 70',
     '中10週以上の休養明け馬'),
    ('連闘（中1週以内）',
     'julianday(date) - julianday(prev_date) <= 8',
     '前走から中1週以内の連闘馬'),
    ('斤量2kg以上軽減',
     'prev_wc - weight_carried >= 2',
     '前走比2kg以上の斤量軽減馬'),
    ('馬体重+10kg以上（3歳以下）',
     'weight_diff >= 10 AND age <= 3',
     '前走比+10kg以上増えた3歳以下馬'),
    ('馬体重-10kg以上',
     'weight_diff <= -10',
     '前走比10kg以上絞れた馬'),
    ('ブリンカー初装着',
     'blinker = 1 AND prev_blinker = 0',
     'ブリンカーを今走から初装着した馬'),
    ('前走上位人気で凡走',
     'prev_pop <= 2 AND prev_finish >= 4',
     '前走1-2番人気で4着以下に敗れた馬'),
]


def mine(con):
    con.execute('''
        CREATE TEMP VIEW r2 AS
        SELECT *,
          LAG(distance)       OVER w AS prev_distance,
          LAG(weight_carried) OVER w AS prev_wc,
          LAG(date)           OVER w AS prev_date,
          LAG(popularity)     OVER w AS prev_pop,
          LAG(finish)         OVER w AS prev_finish,
          LAG(blinker)        OVER w AS prev_blinker
        FROM results
        WHERE is_jump = 0
        WINDOW w AS (PARTITION BY horse ORDER BY date)
    ''')

    alerts = {}  # key -> list of (best_roi, alert_dict)
    for title, pred, desc in CONDITIONS:
        for group_cols, key_fmt in [
            ('track_id, surface, distance, phase', 'L1'),
            ('track_id, surface, phase', 'L2'),
        ]:
            rows = con.execute(f'''
                SELECT {group_cols},
                  COUNT(*) bets,
                  SUM(finish=1) wins,
                  SUM(finish<=3) places,
                  ROUND(100.0*SUM(finish=1)/COUNT(*),1) win_pct,
                  ROUND(100.0*SUM(finish<=3)/COUNT(*),1) place_pct,
                  ROUND(1.0*SUM(win_payout)/COUNT(*),1) win_roi,
                  ROUND(1.0*SUM(place_payout)/COUNT(*),1) place_roi
                FROM r2
                WHERE status IN ('ran','中止') AND prev_date IS NOT NULL AND ({pred})
                GROUP BY {group_cols}
                HAVING COUNT(*) >= {MIN_BETS}
            ''').fetchall()
            for row in rows:
                if key_fmt == 'L1':
                    tid, sf, dist, phase, bets, wins, places, win_pct, place_pct, win_roi, place_roi = row
                    key = f'{tid}-{SURFACE_EN[sf]}-{dist}-{phase}'
                    course = f'{TRACK_JA[tid]}{SURFACE_JA[SURFACE_EN[sf]]}{dist}m'
                else:
                    tid, sf, phase, bets, wins, places, win_pct, place_pct, win_roi, place_roi = row
                    key = f'{tid}-{SURFACE_EN[sf]}-{phase}'
                    course = f'{TRACK_JA[tid]}{SURFACE_JA[SURFACE_EN[sf]]}・全距離'
                cond_label = f'{PHASE_LABEL[phase]}の{course}'
                # 的中数の下限を満たす券種だけを採用候補にする（大穴1発の偶然を排除）
                win_ok = win_roi >= MIN_ROI and wins >= MIN_WINS
                place_ok = place_roi >= MIN_ROI and places >= MIN_PLACES
                if not win_ok and not place_ok:
                    continue
                if win_ok and (not place_ok or win_roi >= place_roi):
                    bet_kind, best_roi = '単勝', win_roi
                else:
                    bet_kind, best_roi = '複勝', place_roi
                severity = 'high' if best_roi >= HIGH_ROI and bets >= HIGH_BETS else 'mid'
                body = (f'{cond_label}で{desc}は過去5年で{bets}頭。'
                        f'勝率{win_pct}%・複勝率{place_pct}%、'
                        f'単勝回収率{win_roi:.0f}%・複勝回収率{place_roi:.0f}%。')
                alert = {'severity': severity, 'title': title, 'body': body,
                         'stat': f'{bet_kind}回収率 {best_roi:.0f}%'}
                alerts.setdefault(key, []).append((best_roi, bets, alert))

    # キーごとに回収率順で上位2件
    result = {}
    for key, lst in alerts.items():
        lst.sort(key=lambda x: (-x[0], -x[1]))
        result[key] = [a for _, _, a in lst[:2]]
    return result


def main():
    con = sqlite3.connect(DB)
    result = mine(con)
    con.close()

    n_l1 = sum(1 for k in result if k.count('-') == 3)
    n_l2 = len(result) - n_l1

    def esc(s):
        return s.replace("\\", "\\\\").replace("'", "\\'")

    entries = []
    for key in sorted(result):
        items = ',\n'.join(
            '    {\n'
            f"      severity: '{a['severity']}',\n"
            f"      title: '{esc(a['title'])}',\n"
            f"      body: '{esc(a['body'])}',\n"
            f"      stat: '{esc(a['stat'])}',\n"
            '    }' for a in result[key])
        entries.append(f"  '{key}': [\n{items},\n  ]")
    body = ',\n'.join(entries)

    ts = f"""// このファイルは scripts/jravan/mine_bugs.py により生成されます（手動編集は上書きされます）
// JRA-VAN 2021-2026 全着順データのバックテスト実測値。
// 採用基準: 賭け数{MIN_BETS}以上 かつ 単勝/複勝回収率{MIN_ROI:.0f}%以上（条件は全コース共通の固定しきい値）
import type {{ BugAlert }} from '@/lib/data/bug-finder'

/**
 * キー体系:
 *   コース単位   : `${{trackId}}-${{surface}}-${{distance}}-${{phase}}`
 *   場×馬場単位 : `${{trackId}}-${{surface}}-${{phase}}`（コース単位が無いときのフォールバック）
 */
export const minedBugAlerts: Record<string, BugAlert[]> = {{
{body},
}}
"""
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(ts)
    print(f'アラートキー: コース単位{n_l1}件・場×馬場単位{n_l2}件 → {OUT}')


if __name__ == '__main__':
    main()
