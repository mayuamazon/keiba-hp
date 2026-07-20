#!/usr/bin/env python3
"""マスターDB → lib/data/graded-races.ts 生成

対象: is_jump=0 かつ race_name が G1/G2/G3 を含む平地重賞
- race_name 単位でグループ化
- editions: 年ごとの1着馬情報のみ（全着順は掲載しない・JRA-VAN規約準拠）
- 集計: 人気帯別・枠帯別・脚質別
- ソート: グレード → place（五十音） → race_name

使い方:
  python3 scripts/jravan/export_graded.py
  → lib/data/graded-races.ts
"""
import os
import re
import sqlite3
import json

BASE = os.path.join(os.path.dirname(__file__), '..', '..')
DB = os.path.join(BASE, 'data', 'jra_master_5y.sqlite')
OUT = os.path.join(BASE, 'lib', 'data', 'graded-races.ts')

GRADE_PAT = re.compile(r'(G[123])\s*$')

PLACE_ORDER = ['札幌', '函館', '福島', '新潟', '東京', '中山', '中京', '京都', '阪神', '小倉']
PLACE_ORDER_MAP = {p: i for i, p in enumerate(PLACE_ORDER)}

TRACK_ID_MAP = {
    '札幌': 'sapporo', '函館': 'hakodate', '福島': 'fukushima', '新潟': 'niigata',
    '東京': 'tokyo', '中山': 'nakayama', '中京': 'chukyo', '京都': 'kyoto',
    '阪神': 'hanshin', '小倉': 'kokura',
}
SURFACE_EN = {'芝': 'turf', 'ダ': 'dirt'}


def extract_grade(race_name: str):
    m = GRADE_PAT.search(race_name)
    return m.group(1) if m else None


def div(a, b):
    """ゼロ除算ガード"""
    return round(a / b, 1) if b else 0.0


# JRA-VAN略記 → 正式名称（表示用）。未収載は略記のまま表示される。
# 同名で施行条件違いの行（例: 東海ＳG2/G3）は別エントリのまま表示名だけ揃う。
DISPLAY_NAMES = {
    'きさらぎG3': 'きさらぎ賞', 'しらさぎG3': 'しらさぎステークス', 'みやこＳG3': 'みやこステークス',
    'アイビスG3': 'アイビスサマーダッシュ', 'アイルラG2': 'アイルランドトロフィー',
    'アメリカG2': 'アメリカジョッキークラブカップ', 'アルゼンＨG2': 'アルゼンチン共和国杯',
    'アルテミG3': 'アルテミスステークス', 'アンタレG3': 'アンタレスステークス',
    'アーリンG3': 'アーリントンカップ', 'エプソムG3': 'エプソムカップ', 'エリザベG1': 'エリザベス女王杯',
    'エルムＳG3': 'エルムステークス', 'オーシャG3': 'オーシャンステークス',
    'オータムＨG3': '京成杯オータムハンデキャップ', 'オールカG2': 'オールカマー',
    'カペラＳG3': 'カペラステークス', 'キーンラG3': 'キーンランドカップ', 'クイーンG3': 'クイーンステークス',
    'サウジアG3': 'サウジアラビアロイヤルカップ', 'シリウスＨG3': 'シリウスステークス',
    'シルクロＨG3': 'シルクロードステークス', 'シンザンG3': 'シンザン記念',
    'ステイヤG2': 'ステイヤーズステークス', 'スプリンG1': 'スプリンターズステークス',
    'スプリンG2': 'スプリングステークス', 'スワンＳG2': 'スワンステークス',
    'セントウG2': 'セントウルステークス', 'セントラG2': 'セントライト記念',
    'ターコイＨG3': 'ターコイズステークス', 'ダイヤモＨG3': 'ダイヤモンドステークス',
    'ダービーＨG3': 'ダービー卿チャレンジトロフィー', 'チャレンG3': 'チャレンジカップ',
    'チャレンＨG3': 'チャレンジカップ', 'チャンピG1': 'チャンピオンズカップ',
    'チューリG2': 'チューリップ賞', 'デイリーG2': 'デイリー杯2歳ステークス',
    'ニュージG2': 'ニュージーランドトロフィー', 'ファルコG3': 'ファルコンステークス',
    'ファンタG3': 'ファンタジーステークス', 'フィリーG2': 'フィリーズレビュー',
    'フェアリG3': 'フェアリーステークス', 'フェブラG1': 'フェブラリーステークス',
    'フューチG1': '朝日杯フューチュリティステークス', 'フラワーG3': 'フラワーカップ',
    'フローラG2': 'フローラステークス', 'プロキオG2': 'プロキオンステークス',
    'プロキオG3': 'プロキオンステークス', 'ホープフG1': 'ホープフルステークス',
    'マイラーG2': 'マイラーズカップ', 'マイルチG1': 'マイルチャンピオンシップ',
    'マーチＳＨG3': 'マーチステークス', 'マーメイＨG3': 'マーメイドステークス',
    'ユニコーG3': 'ユニコーンステークス', 'ラジオNIＨG3': 'ラジオNIKKEI賞',
    'レパードG3': 'レパードステークス', 'ローズＳG2': 'ローズステークス',
    'ヴィクトG1': 'ヴィクトリアマイル', '七夕賞ＨG3': '七夕賞', '中京記念G3': '中京記念',
    '中京記念ＨG3': '中京記念', '中京２歳G3': '中京2歳ステークス', '中山牝馬ＨG3': '中山牝馬ステークス',
    '中山記念G2': '中山記念', '中山金杯ＨG3': '中山金杯', '中日新聞ＨG3': '中日新聞杯',
    '京成杯G3': '京成杯', '京王杯スG2': '京王杯スプリングカップ', '京王杯２G2': '京王杯2歳ステークス',
    '京都大賞G2': '京都大賞典', '京都新聞G2': '京都新聞杯', '京都牝馬G3': '京都牝馬ステークス',
    '京都記念G2': '京都記念', '京都金杯ＨG3': '京都金杯', '京都２歳G3': '京都2歳ステークス',
    '京阪杯G3': '京阪杯', '優駿牝馬G1': '優駿牝馬（オークス）', '共同通信G3': '共同通信杯',
    '函館スプG3': '函館スプリントステークス', '函館記念ＨG3': '函館記念', '函館２歳G3': '函館2歳ステークス',
    '北九州記ＨG3': '北九州記念', '大阪杯G1': '大阪杯', '天皇賞春G1': '天皇賞（春）',
    '天皇賞秋G1': '天皇賞（秋）', '安田記念G1': '安田記念', '宝塚記念G1': '宝塚記念',
    '富士ＳG2': '富士ステークス', '小倉大賞ＨG3': '小倉大賞典', '小倉牝馬ＨG3': '小倉牝馬ステークス',
    '小倉記念ＨG3': '小倉記念', '小倉２歳G3': '小倉2歳ステークス', '平安ＳG3': '平安ステークス',
    '府中牝馬ＨG3': '府中牝馬ステークス', '弥生賞G2': '弥生賞ディープインパクト記念',
    '愛知杯G3': '愛知杯', '愛知杯ＨG3': '愛知杯', '新潟大賞ＨG3': '新潟大賞典',
    '新潟記念G3': '新潟記念', '新潟記念ＨG3': '新潟記念', '新潟２歳G3': '新潟2歳ステークス',
    '日経新春ＨG2': '日経新春杯', '日経賞G2': '日経賞', '有馬記念G1': '有馬記念',
    '札幌記念G2': '札幌記念', '札幌２歳G3': '札幌2歳ステークス',
    '東京スポG2': '東京スポーツ杯2歳ステークス', '東京優駿G1': '東京優駿（日本ダービー）',
    '東京新聞G3': '東京新聞杯', '東海ＳG2': '東海ステークス', '東海ＳG3': '東海ステークス',
    '根岸ＳG3': '根岸ステークス', '桜花賞G1': '桜花賞', '武蔵野ＳG3': '武蔵野ステークス',
    '毎日杯G3': '毎日杯', '毎日王冠G2': '毎日王冠', '皐月賞G1': '皐月賞', '目黒記念ＨG2': '目黒記念',
    '神戸新聞G2': '神戸新聞杯', '福島牝馬G3': '福島牝馬ステークス', '福島記念ＨG3': '福島記念',
    '秋華賞G1': '秋華賞', '紫苑ＳG2': '紫苑ステークス', '紫苑ＳG3': '紫苑ステークス',
    '菊花賞G1': '菊花賞', '葵ＳG3': '葵ステークス', '金鯱賞G2': '金鯱賞', '関屋記念G3': '関屋記念',
    '関屋記念ＨG3': '関屋記念', '阪急杯G3': '阪急杯', '阪神カッG2': '阪神カップ',
    '阪神ジュG1': '阪神ジュベナイルフィリーズ', '阪神大賞G2': '阪神大賞典',
    '阪神牝馬G2': '阪神牝馬ステークス', '青葉賞G2': '青葉賞', '高松宮記G1': '高松宮記念',
    '鳴尾記念G3': '鳴尾記念', 'ＣＢＣ賞ＨG3': 'CBC賞', 'ＪＣG1': 'ジャパンカップ',
    'ＮＨＫマG1': 'NHKマイルカップ',
}


def main():
    con = sqlite3.connect(DB)

    # ── 全重賞レースのrace_nameリスト取得 ──────────────────────────
    all_names = con.execute(
        "SELECT DISTINCT race_name FROM results WHERE is_jump=0 ORDER BY race_name"
    ).fetchall()

    graded_names = []
    for (name,) in all_names:
        if extract_grade(name):
            graded_names.append(name)

    entries = []

    for race_name in graded_names:
        grade = extract_grade(race_name)

        # ── 最新開催のコース情報 ───────────────────────────────────
        meta_row = con.execute(
            """
            SELECT date, place, track_id, surface, distance
            FROM results
            WHERE race_name=? AND is_jump=0 AND finish=1
            ORDER BY date DESC
            LIMIT 1
            """,
            (race_name,),
        ).fetchone()
        if not meta_row:
            continue

        _, place, track_id, surface_ja, distance = meta_row
        surface = SURFACE_EN.get(surface_ja, 'turf')

        # ── editions: 年ごとの1着馬情報 ───────────────────────────
        winner_rows = con.execute(
            """
            SELECT
              SUBSTR(date,1,4) as year,
              date,
              horse,
              popularity,
              frame,
              style,
              win_payout,
              n_field
            FROM results
            WHERE race_name=? AND is_jump=0 AND finish=1
            ORDER BY date ASC
            """,
            (race_name,),
        ).fetchall()

        editions = []
        for row in winner_rows:
            yr, dt, horse, pop, frm, style, win_pay, n_field = row
            editions.append({
                'year': int(yr),
                'date': dt,
                'winner': horse,
                'winnerPopularity': int(pop) if pop else None,
                'winnerFrame': int(frm) if frm else None,
                'winnerStyle': style,
                'winPayout': int(win_pay) if win_pay else None,
                'fieldSize': int(n_field) if n_field else None,
            })

        if not editions:
            continue

        # ── 人気帯別成績 ────────────────────────────────────────────
        pop_sql = """
            SELECT
              CASE
                WHEN popularity=1 THEN 'pop1'
                WHEN popularity<=3 THEN 'pop23'
                WHEN popularity<=6 THEN 'pop46'
                ELSE 'pop7plus'
              END as band,
              COUNT(*) as n,
              SUM(CASE WHEN finish=1 THEN 1 ELSE 0 END) as wins,
              SUM(CASE WHEN finish<=3 THEN 1 ELSE 0 END) as places
            FROM results
            WHERE race_name=? AND is_jump=0 AND status IN ('ran','中止')
              AND popularity IS NOT NULL
            GROUP BY band
        """
        pop_stats = {}
        for band, n, wins, places in con.execute(pop_sql, (race_name,)):
            pop_stats[band] = {
                'count': n,
                'wins': wins,
                'placeRate': div(places * 100, n),
            }

        popularity_stats = {
            'pop1':     pop_stats.get('pop1',     {'count': 0, 'wins': 0, 'placeRate': 0.0}),
            'pop23':    pop_stats.get('pop23',    {'count': 0, 'wins': 0, 'placeRate': 0.0}),
            'pop46':    pop_stats.get('pop46',    {'count': 0, 'wins': 0, 'placeRate': 0.0}),
            'pop7plus': pop_stats.get('pop7plus', {'count': 0, 'wins': 0, 'placeRate': 0.0}),
        }

        # ── 枠帯別複勝率 ────────────────────────────────────────────
        frame_sql = """
            SELECT
              CASE
                WHEN frame<=3 THEN 'inner'
                WHEN frame<=6 THEN 'middle'
                ELSE 'outer'
              END as band,
              COUNT(*) as n,
              SUM(CASE WHEN finish<=3 THEN 1 ELSE 0 END) as places
            FROM results
            WHERE race_name=? AND is_jump=0 AND status IN ('ran','中止')
              AND frame IS NOT NULL
            GROUP BY band
        """
        frame_stats = {}
        for band, n, places in con.execute(frame_sql, (race_name,)):
            frame_stats[band] = {'count': n, 'placeRate': div(places * 100, n)}

        frame_band_stats = {
            'inner':  frame_stats.get('inner',  {'count': 0, 'placeRate': 0.0}),
            'middle': frame_stats.get('middle', {'count': 0, 'placeRate': 0.0}),
            'outer':  frame_stats.get('outer',  {'count': 0, 'placeRate': 0.0}),
        }

        # ── 脚質別勝利数 ────────────────────────────────────────────
        style_sql = """
            SELECT style, COUNT(*) as wins
            FROM results
            WHERE race_name=? AND is_jump=0 AND finish=1
              AND style IN ('逃げ','先行','差し','追込')
            GROUP BY style
        """
        style_wins: dict = {'逃げ': 0, '先行': 0, '差し': 0, '追込': 0}
        for sty, wins in con.execute(style_sql, (race_name,)):
            style_wins[sty] = wins

        entries.append({
            'raceName': race_name,
            'displayName': DISPLAY_NAMES.get(race_name, race_name),
            'grade': grade,
            'place': place,
            'trackId': track_id,
            'surface': surface,
            'distance': distance,
            'editions': editions,
            'popularityStats': popularity_stats,
            'frameBandStats': frame_band_stats,
            'styleWins': style_wins,
        })

    con.close()

    # ── ソート: グレード → place順 → raceName ──────────────────────
    def sort_key(e):
        g_order = {'G1': 0, 'G2': 1, 'G3': 2}
        p_order = PLACE_ORDER_MAP.get(e['place'], 99)
        return (g_order.get(e['grade'], 9), p_order, e['raceName'])

    entries.sort(key=sort_key)

    # ── TypeScript ファイル出力 ──────────────────────────────────────
    lines = [
        '// このファイルは scripts/jravan/export_graded.py により生成されます（手動編集は上書きされます）',
        '// 出典: JRA-VAN 2021-2026 全着順データ 自社集計。editions は各年1着馬情報のみ掲載（全着順の掲載は JRA-VAN 規約上不可）',
        '',
        'export interface GradedEdition {',
        '  year: number',
        '  date: string',
        '  winner: string',
        '  winnerPopularity: number | null',
        '  winnerFrame: number | null',
        '  winnerStyle: string | null',
        '  winPayout: number | null',
        '  fieldSize: number | null',
        '}',
        '',
        'export interface PopBandStat {',
        '  count: number',
        '  wins: number',
        '  placeRate: number',
        '}',
        '',
        'export interface FrameBandStat {',
        '  count: number',
        '  placeRate: number',
        '}',
        '',
        'export interface GradedRace {',
        "  raceName: string",
        '  /** 正式名称（略記の展開。未収載レースは raceName と同じ） */',
        '  displayName: string',
        "  grade: 'G1' | 'G2' | 'G3'",
        "  place: string",
        "  trackId: string",
        "  surface: 'turf' | 'dirt'",
        '  distance: number',
        '  editions: GradedEdition[]',
        '  popularityStats: {',
        '    pop1: PopBandStat',
        '    pop23: PopBandStat',
        '    pop46: PopBandStat',
        '    pop7plus: PopBandStat',
        '  }',
        '  frameBandStats: {',
        '    inner: FrameBandStat',
        '    middle: FrameBandStat',
        '    outer: FrameBandStat',
        '  }',
        '  styleWins: {',
        "    '逃げ': number",
        "    '先行': number",
        "    '差し': number",
        "    '追込': number",
        '  }',
        '}',
        '',
        'export const gradedRaces: GradedRace[] = ' + json.dumps(entries, ensure_ascii=False, indent=2),
        '',
    ]

    with open(OUT, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    print(f'重賞数: {len(entries)} → {OUT}')


if __name__ == '__main__':
    main()
