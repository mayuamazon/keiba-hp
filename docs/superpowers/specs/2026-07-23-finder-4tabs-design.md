# CourseFinder 4タブ化（枠順/脚質/騎手/レース）設計書

- 日付: 2026-07-23
- 対象: keiba-hp（馬券ファクト）/ 競馬場ハブ `/courses/[trackId]`
- 目的: 競馬場ハブで「騎手」「重賞レース」データが下の方にあり、iPhoneでスクロールしないと存在に気づけない問題を解消する。枠順/脚質タブの並びに「騎手」「レース」タブを足し、タブ列を1画面（iPhone・ファーストビュー）で見える位置へ上げる。

## 背景・課題

2026-07-21のハブ一本化で `/courses/[trackId]` に①コース特性②重賞③騎手TOP5を集約したが、iPhone実機での縦積みが「コース図(大) → 芝ダ/距離 → 開催月 → 開催時期トグル(大) → 条件サマリー → [枠順][脚質]タブ → …ずっと下に🔑キーファクター → 重賞セクション → 騎手TOP5」で、**重賞・騎手はかなり下**にあり、タブ列自体も画面下方。まゆの要望：「枠順・脚質タブの横に騎手・レース毎データが欲しい。iPhoneでスクロールしなくても気づく設計に」。

## 決定事項（ブレスト結果）

1. **「レース毎データ」タブの中身＝重賞レースの成績**（既存 `GradedSection` 相当：歴代勝ち馬・人気帯・枠帯・脚質）。個別レース結果の新規データ抽出はしない（YAGNI）。
2. **レイアウトA：結果を[枠順][脚質][騎手][レース]の4タブに一体化し、タブ列を「芝ダ・距離」のすぐ下へ**。コース図は下・折りたたみ、開催時期/開催月は枠順/脚質タブ内に格納、ハブ下部の独立セクション（重賞・騎手TOP5）は撤去して全部タブ内へ。

## アプローチ選定

- **採用：CourseFinder が4タブを所有**。既存の frame/style タブに `jockey` `race` を追加し、中身は前回作成の `JockeySection` / `GradedSection` を**そのまま埋め込み**（ロジック再利用・重複ゼロ）。CourseFinder は既に `surface`/`distance`/`track` を保持しているので、子セクションへそのまま渡せる。
- 不採用①：タブ機構をハブ側へ抽出 → CourseFinder の密結合state（phase/month/compare/距離自動補正）を分解する必要があり高リスク（2026-07-21で明示的に避けた方針）。
- 不採用②：CourseFinder は2タブのまま、別の4タブパネルを下に追加 → 結局スクロールが発生し要望を満たさない・重複増。

## レイアウト（CourseFinder 内の新しい縦順）

```
見出し（COURSE BUG FINDER）
芝ダ トグル ｜ 距離チップ                       ← 常時表示
┌ [枠順] [脚質] [騎手] [レース] ┐                ← ★タブ列（ここまでで気づく）
│  タブ中身                     │
└──────────────────────────────┘
```

タブ別の中身：

| タブ | 直上に出す操作 | 本体 | バグ穴馬 |
|---|---|---|---|
| 枠順 | 開催月チップ＋開催時期トグル | 条件サマリー＋枠順バー（前後半比較含む） | 表示 |
| 脚質 | 開催月チップ＋開催時期トグル | 条件サマリー＋脚質バー（前後半比較含む） | 表示 |
| 騎手 | なし | `<JockeySection embedded>`（TOP5＋距離帯フォールバック注記＋「全騎手ランキング→」） | 非表示 |
| レース | なし | `<GradedSection embedded>`（重賞カード・選択条件を先頭ハイライト＋「全重賞→」） | 非表示 |

- **開催月チップ・開催時期トグルは枠順/脚質タブでのみ描画**（騎手/レースには無関係）。実装上は「タブが frame か style のときだけ描画」する条件に、現在ブロック3（開催月）・ブロック4（開催時期）を移す。
- **バグ穴馬アラートも frame/style タブのときのみ描画**。
- タブ状態 `ResultTab` を `'frame' | 'style' | 'jockey' | 'race'` に拡張。デフォルトは `'frame'`（従来通り）。

## コンポーネント設計

### `components/course-finder.tsx`（改修）

- `type ResultTab = 'frame' | 'style' | 'jockey' | 'race'`。
- タブバーの `map` 対象を4つに拡張。ラベル：frame=枠順 / style=脚質 / jockey=騎手 / race=レース。
- **ブロックの並び替え**：現在「開催月チップ(3)」「開催時期トグル(4)」→「結果エリア(条件サマリー→タブバー→タブ内容→バグ穴馬)」の順を、次へ変更：
  1. 見出し
  2. 競馬場チップ（`!fixedTrack` のときのみ・現状維持）
  3. 馬場トグル＋距離チップ（現状維持）
  4. **タブバー（4タブ）**
  5. `tab === 'frame' || tab === 'style'` のとき: 開催月チップ＋開催時期トグル＋条件サマリー＋（枠順 or 脚質）バー＋バグ穴馬アラート
  6. `tab === 'jockey'` のとき: `<JockeySection track surface distance embedded />`
  7. `tab === 'race'` のとき: `<GradedSection track surface distance embedded />`
- `AnimatePresence` によるタブ切替フェードは維持（key に tab を含める）。
- **撤去**：ハブ内で自ページを指す「{trackName}競馬場のコース図・全距離データを見る →」リンク（`fixedTrack` のとき冗長）。`!fixedTrack` の従来トップ用途は今は無い（トップは TrackPicker）が、後方互換のため「`!fixedTrack` のときだけ表示」に留めるか、単純化のため撤去。→ **撤去**（現在 CourseFinder はハブ専用のため。dead link を残さない）。
- `track`/`surface`/`distance` は既存state。`JockeySection`/`GradedSection` に渡す。
- 既存の `onSelectionChange` / `fixedTrack` props は変更なし。

### `components/track-jockeys.tsx`（`JockeySection`）（改修）

- 任意prop `embedded?: boolean` を追加。`embedded` のとき、セクション大見出し（TOP JOCKEYS / 得意な騎手 TOP5 のヘッダブロック）と `mt-10` の上マージンを省略する（タブ名で自明・iPhoneの縦節約）。フォールバック注記・テーブル・「全騎手ランキング→」リンクは残す。
- 既定（`embedded` 省略）は従来表示のまま（後方互換）。

### `components/track-graded.tsx`（`GradedSection`）（改修）

- 同様に任意prop `embedded?: boolean`。`embedded` のとき大見出し（GRADED RACES / 重賞レースの特徴）と `mt-10` を省略。カード・ハイライト・空メッセージ・「全重賞→」リンクは残す。
- 既定は従来表示のまま。

### `components/track-hub.tsx`（改修）

- 縦順を **CourseFinder → 🔑キーファクターカード → コース図（折りたたみ）** に変更。
- **独立の `<GradedSection>` / `<JockeySection>` 呼び出しを削除**（CourseFinder のタブ内へ移ったため）。
- `CourseMap` を**折りたたみ**にする：既定で閉じた `<details>`（`<summary>` に「▼ コース図」）。開いたときだけ図を描画（`open` state と連動、もしくは素の `<details>` に `<CourseMap>` を内包）。styleStats は従来通り選択コース優先。
- keyFactor カードは従来通り（CourseFinder の下）。

## データフロー

変更なし。CourseFinder が `surface`/`distance`/`phase`/`month`/`tab` を保持。`onSelectionChange({surface, distance})` で TrackHub にキーファクター用の選択を渡す。騎手/レースタブは CourseFinder 内の `track`/`surface`/`distance` を子セクションへ props で渡すのみ（子は自前で `jockeyRankings`/`gradedRaces` を引く。既存挙動）。

## エラー/フォールバック（既存を踏襲）

- 騎手キー欠損 → `JockeySection` の段階フォールバック＋注記（既存）。
- 重賞0件 → `GradedSection` の「準備中」（既存）。
- ダート未整備の場・実データ無しの枠質 → 既存の CourseFinder 挙動のまま。

## テスト

- `course-finder.test.tsx`（追記）:
  - 4タブ（枠順・脚質・騎手・レース）のボタンが表示される。
  - `騎手` タブを押すと騎手データ（例：騎手名 or 「得意な騎手」導線「騎手ランキング全体を見る」）が出て、開催時期トグル（`aria-label="開催時期選択"` group）が**消える**こと。
  - `レース` タブを押すと重賞（「重賞データベース全体を見る」導線など）が出ること。
  - デフォルト（枠順）で従来の条件サマリー・開催時期トグルが出る既存テストが緑のまま。
- `track-jockeys.test.tsx` / `track-graded.test.tsx`（追記）: `embedded` で大見出しが出ないこと・本体（テーブル/カード/リンク）は出ること。既定で見出しが出ること。
- `track-hub.test.tsx`（改修）: 独立セクション見出し「得意な騎手 TOP5」「重賞レースの特徴」が**トップレベルには無い**（タブ内に移動）こと、コース図が折りたたみ（`summary`「コース図」）で存在すること。CourseMap はモック継続。

## 影響ファイル一覧

改修:
- `components/course-finder.tsx`（4タブ化・ブロック並び替え・子セクション埋め込み・自ページ導線撤去）
- `components/track-jockeys.tsx`（`embedded` prop）
- `components/track-graded.tsx`（`embedded` prop）
- `components/track-hub.tsx`（縦順変更・独立セクション撤去・コース図折りたたみ）
- 各対応テスト

存続（変更なし）:
- `lib/data/*`, `lib/distance-band.ts`, `components/{graded-race-card,jockey-rank-table,course-map}.tsx`, `app/graded/*`, `app/jockeys/*`, `app/page.tsx`, `components/nav.tsx`

## スコープ外（YAGNI）

- 個別レース（重賞以外）の結果データ抽出・掲載。
- タブのURL同期（?tab=jockey 等のディープリンク）。まず内部stateのみ。
- コース図の自動再生/スクロール連動などの追加演出。折りたたみのみ。
