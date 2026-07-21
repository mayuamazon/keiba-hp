# 競馬場ハブ一本化 設計書

- 日付: 2026-07-21
- 対象: keiba-hp（馬券ファクト）
- 目的: 「競馬場を選ぶ → その競馬場の特性・重賞・得意騎手TOP5が1画面で一括で見られる」を実現し、現状の「つぎはぎ感」（コース傾向・重賞・騎手が別ページに分散）を解消する。

## 背景・課題

現状、トップページの `CourseFinder` で競馬場・芝ダ・距離を選ぶとコース特性（枠順/脚質/バグ穴馬）は見られるが、重賞データ（`/graded`）と騎手データ（`/jockeys`）は別ページに遷移しないと見られない。ユーザー（まゆ）は「一括で競馬場の特性・重賞レースの特徴・得意な騎手トップ5を見たい」。

データ的には3つとも同じ競馬場IDで紐づいており、統合を阻む障害は「画面のつなぎ方」だけである。

- コース特性: `lib/data/course-stats.ts`（`{track}-{surface}-{distance}` キー）
- 重賞: `lib/data/graded-races.ts`（各 `GradedRace` が `trackId` を持つ配列）
- 騎手: `lib/data/jockey-rankings.ts`（`{track|"all"}-{turf|dirt|"all"}-{sprint|mile|middle|long|"all"}` キー）

## 決定事項（ブレスト結果）

1. **集約先 = 競馬場ハブページ `/courses/[trackId]`**。トップから競馬場を選ぶと、この1ページに①コース特性②重賞③騎手TOP5が縦に並ぶ。
2. **ハブにセレクタ集約・全連動**。ハブ上部の「芝ダ＋距離＋開催時期」セレクタ1つが①②③を連動させる。現トップの `CourseFinder` の分析機能をハブへ移し、トップは軽い競馬場ピッカー＋最新レポートに変える。
3. **①コース特性はフル機能移植**。開催時期（前半/中盤/後半）・前後半比較・月別・バグ穴馬アラートもそのまま移す。分析力を落とさない。
4. **`/graded`・`/jockeys` は横断データベースとして存続**。ハブは「その競馬場の切り取り」、既存2ページは「全体を横断で見る大図鑑」として両立。navはそのまま、ハブ②③から「全体を見る →」リンクを追加。

## 全体像

```
トップページ（/）
  └ 競馬場ピッカー（10場チップ）＋ 実績バナー ＋ 最新/過去レポート ＋ サイト特徴3カード
        │ 競馬場チップ押下
        ▼
競馬場ハブ（/courses/[trackId]）
  ├ 共有セレクタ： [芝][ダ] ＋ 距離チップ ＋ 開催時期(前半/中盤/後半/前後半比較) ＋ 月別
  ├ ① コース特性   … コース図＋枠順/脚質バー＋バグ穴馬アラート（＝現CourseFinderの中身）
  ├ ② 重賞レースの特徴 … その競馬場の重賞。選択馬場・距離に合う重賞を先頭ハイライト → 「全重賞を見る →」/graded
  └ ③ 得意な騎手TOP5 … {track}-{surface}-{band(distance)} のTOP5 → 「全騎手ランキング →」/jockeys
```

トップ→ハブへ渡すのは **競馬場IDのみ**（選択中の芝ダ・距離は引き継がない。YAGNI）。

## コンポーネント設計

状態を1か所に集約し、3セクションはそれぞれ独立に自データを引く純粋な表示ユニットにする。

### 新設 `components/track-hub.tsx`（'use client'）

- **責務**: 選択state `{ surface, distance, phase, month }` を単一の source of truth として保持し、共有セレクタUIと3セクションを描画する。`track` はURL由来のpropsで固定（トラックチップは持たない）。
- **props**: `{ track: Track }`
- **state**: `surface: Surface`, `distance: number`, `phase: PhaseSel`, `month: number | null`
- **初期値**: 芝／その競馬場に存在する最小距離／`early`／`null`。
- **依存**: `tracks`（距離候補算出）, 各セクション子コンポーネント。
- セレクタ変更ハンドラは現 `CourseFinder` の `handleSurfaceChange` / `handleDistanceChange` / 月リセットロジックを踏襲（距離が候補外なら先頭へ補正、月キーが無ければ全期間へ）。

### `<CourseSection track surface distance phase month />`（`components/course-section.tsx`、`course-finder.tsx` をリネーム再編）

- 現 `CourseFinder` の「結果エリア以下」（条件サマリー・枠順/脚質タブ・前後半比較・バグ穴馬アラート・コース図）を移植したもの。
- **競馬場チップ選択UIは削除**（trackはprops）。芝ダ・距離・開催時期・月のUIは `track-hub` 側の共有セレクタに移すため、当セクションは**受け取ったstateで表示するだけ**にする。
- コース図 `<CourseMap>` は `getCourseGeometry(track)` と選択距離の `runningStyleStats` を使用。
- 内部ヘルパ（`StatBarRows` / `CompareBarRows` / `AlertCard` / `NoticeBox` など）は現 `course-finder.tsx` から移動または共有。

### `<GradedSection track surface distance />`

- **データ**: `gradedRaces.filter(r => r.trackId === track)`。
- **並び**: 選択中の `surface` かつ `distance` に一致する重賞を先頭にソートしてハイライト（枠に強調ボーダー）。残りは grade（G1→G2→G3）順など安定した順。
- **カード表示**: 既存 `app/graded/graded-client.tsx` のカード相当（レース名/グレード/歴代勝ち馬editions/人気帯popularityStats/枠帯frameBandStats/脚質styleWins）。共通化できる表示部は切り出して再利用する。
- **空**: `filter` 結果0件 → 「この競馬場の重賞データは準備中です」。
- **末尾**: 「重賞データベース全体を見る →」= `/graded`。

### `<JockeySection track surface distance />`

- **距離帯変換**: `distanceToBand(distance)` を使用。
- **キー**: `` `${track}-${surface}-${band}` `` で `jockeyRankings` を引き、先頭5件（TOP5）。
- **フォールバック**（キー欠損時）: `` `${track}-${surface}-all` `` → `` `${track}-all-all` `` → `"all-all-all"` の順に最初に存在するものを採用。フォールバックした場合は「この距離帯は騎乗数が少ないため〈馬場〉全体の集計を表示」等の注記を出す。
- **表示**: 順位・騎手名・騎乗数・勝率・複勝率・単勝回収率（既存 `jockeys-client.tsx` の行表示を流用）。
- **末尾**: 「騎手ランキング全体を見る →」= `/jockeys`。

### 新設 `lib/distance-band.ts`（純関数）

```ts
export type DistanceBand = 'sprint' | 'mile' | 'middle' | 'long'
export function distanceToBand(distance: number): DistanceBand {
  if (distance <= 1400) return 'sprint'
  if (distance <= 1600) return 'mile'
  if (distance <= 2200) return 'middle'
  return 'long'
}
```

（境界は `jockeys-client.tsx` のラベル定義に一致: 短距離≤1400 / マイル1401-1600 / 中距離1601-2200 / 長距離≥2201）

### `app/courses/[trackId]/page.tsx`（server, 既存を改修）

- `getTrack(trackId)` で検証、無ければ `notFound()`。`generateStaticParams` / `generateMetadata` は据え置き。
- 本文を `<TrackHub track={track.id} />` に置き換え（現状の直書きコース図＋テーブル羅列は `CourseSection` 側へ移動）。

### 新設 `components/track-picker.tsx`（'use client' もしくは静的Link集合）

- トップページ用。10場チップを並べ、押すと `/courses/[trackId]` へ `Link` 遷移。
- `TRACK_CHIPS` 定義は現 `course-finder.tsx` から流用（共有定数に切り出してもよい）。

### `app/page.tsx`（既存を改修）

- `<CourseFinder />` を `<TrackPicker />`（「競馬場を選ぶ」見出し付き）に差し替え。
- 実績バナー・最新/過去レポート・サイト特徴3カードは維持。

### `components/nav.tsx`（既存を改修）

- CTA「コース検索」の `href="/#finder"` は `CourseFinder` 撤去でアンカーが消えるため、`/courses`（コース傾向一覧）に張り替える。モバイルメニューの同アンカーも同様。
- `navLinks` はそのまま（重賞・騎手は横断DBとして残すため）。

## データフロー

```
共有セレクタ操作
  → track-hub の state 更新（surface / distance / phase / month）
  → CourseSection: getFrameFavorability / getStyleFavorability / getBugAlerts を state で再計算（useMemo）
  → GradedSection: gradedRaces.filter(track) を surface,distance で並べ替え（useMemo）
  → JockeySection: distanceToBand(distance) → jockeyRankings のキー解決＋フォールバック（useMemo）
```

`track` は不変（URL固定）なので、再計算は surface/distance/phase/month の変化のみに依存。

## 分割・境界（設計原則の確認）

- `distanceToBand` は副作用なしの純関数 → 単体テスト容易。
- 3セクションは props `(track, surface, distance, [phase, month])` を受け取り内部で自データを引く独立ユニット。単体でレンダリング確認できる（何をするか・どう使うか・何に依存するかが明確）。
- `track-hub` は状態と配線のみを持ち、表示ロジックは各セクションに委譲 → ファイル肥大を防ぐ。
- 現 `course-finder.tsx`（約1000行）は「トラック選択state＋表示」が混在している。移植時に「共有セレクタ（track-hub）」「表示部（CourseSection）」へ分離することで、それぞれが小さく追いやすくなる。これは今回の目的に直接資する整理であり、無関係なリファクタは行わない。

## フォールバック / エラーハンドリング

| ケース | 挙動 |
|---|---|
| 不正な trackId | `notFound()`（404） |
| 騎手キー欠損（例 `tokyo-dirt-long`） | `-{surface}-all` → `-all-all` → `all-all-all` の順にフォールバックし注記表示 |
| 重賞0件の競馬場 | 「この競馬場の重賞データは準備中です」 |
| ダート未整備の場 | 距離チップに「ダートは準備中」（現 `CourseFinder` の挙動を踏襲） |
| コース統計が実データでない組合せ | 現 `CourseFinder` 同様、簡易表示＋「実データ」バッジ非表示で対応 |

## テスト

- `distanceToBand`: 境界値 1400/1401/1600/1601/2200/2201 と代表値（1200→sprint, 2400→long）。
- 騎手キーのフォールバック解決関数: 完全一致あり／`surface`一致のみ／全欠損の3系統で期待キーを返すこと。
- `GradedSection`: あるtrackで該当重賞が先頭に来ること、0件で注記が出ること。
- `TrackHub` レンダリング: 距離変更で JockeySection のキーが切り替わること（band境界をまたぐ距離で検証）。
- 既存 `CourseFinder` 系テスト（`__tests__/components`）が `CourseSection` 移植後も通ること（必要に応じてテスト対象を差し替え）。
- `app/courses/[trackId]`: 不正trackで404。

## スコープ外（YAGNI）

- トップ→ハブへ「選択中の芝ダ・距離」を引き継ぐ deep link（クエリパラメータ）。まずは競馬場IDのみ渡す。要望が出たら次段で追加。
- ハブ内の重賞カードから個別重賞詳細ページへのリンク新設（現状 `/graded` 内で完結しているため）。
- `/graded`・`/jockeys` の内部リデザイン（横断DBとして現状維持）。

## 影響ファイル一覧

新設:
- `components/track-hub.tsx`
- `components/track-picker.tsx`
- `lib/distance-band.ts`
- （必要なら）`components/graded-race-card.tsx` / `components/jockey-rank-list.tsx`（既存クライアントから表示部を切り出す場合）

改修:
- `app/courses/[trackId]/page.tsx`
- `app/page.tsx`
- `components/nav.tsx`
- `components/course-finder.tsx` → **`components/course-section.tsx` にリネームして中身を `CourseSection` に再編**（トラックチップと共有セレクタ相当を除去し、props駆動の表示部にする）。ファイル削除はせずリネームで移すことで dead code を残さない。旧 `CourseFinder` の import は撤去済みになる。

存続（変更なし想定）:
- `app/graded/*`, `app/jockeys/*`, `lib/data/*`
