# CourseFinder 4タブ化 実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 競馬場ハブの CourseFinder のタブを [枠順][脚質][騎手][レース] の4つにし、タブ列を「芝ダ・距離」直下へ上げて、iPhoneでスクロールせずに騎手・重賞データの存在に気づけるようにする。

**Architecture:** CourseFinder が4タブを所有。騎手/レースの中身は既存 `JockeySection`/`GradedSection` を `embedded` で埋め込む（重複ゼロ）。開催月/開催時期/バグ穴馬は枠順・脚質タブ内だけに表示。TrackHub は縦順を CourseFinder → キーファクター → 折りたたみコース図に変え、独立していた重賞/騎手セクションを撤去。

**Tech Stack:** Next.js 16.2.9 App Router / React / TypeScript / Tailwind / framer-motion / Jest + Testing Library。

---

## ⚠️ 実装前の必読（プロジェクト固有ルール）

- ルート `AGENTS.md`：**「This is NOT the Next.js you know」**（Next 16.2.9）。今回はクライアントコンポーネントのJSX再構成が中心。既存の慣例に合わせる。
- CLAUDE.md／AGENTS.md（keiba-hp）：**ファイル削除禁止**・絶対パス使用禁止（`@/` を使う）・単純化優先。
- **エージェント運用**：Task 3（CourseFinder の並び替え＝難所）は**Opusメインが直接実装**。Task 1/2/4（`embedded` prop・TrackHub の機械的変更）は Sonnet 実装可。
- テストの流儀：`@testing-library/react` の `render/screen/fireEvent/within`、`@/` エイリアス、`framer-motion` は各テスト先頭でモック：

```tsx
jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn().mockReturnValue(true),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
      <div {...rest}>{children}</div>
    ),
  },
}))
```
- テスト: `npm test -- <path>` / 全体 `npm test`。Lint: `npm run lint`。Build: `npm run build`。

---

## Task 1: `JockeySection` に `embedded` prop（見出し省略）

**Files:**
- Modify: `components/track-jockeys.tsx`
- Test: `__tests__/components/track-jockeys.test.tsx`

`embedded` のとき、セクション大見出しブロック（`TOP JOCKEYS` / `得意な騎手 TOP5`）と `section` の `mt-10` を省略する。フォールバック注記・テーブル・「騎手ランキング全体を見る →」リンクは残す。既定は従来通り。

- [ ] **Step 1: 失敗するテストを追記**

`__tests__/components/track-jockeys.test.tsx` の `describe('JockeySection', ...)` 内に追記：

```tsx
  it('embedded では大見出しを省略し、本体は出す', () => {
    render(<JockeySection track="tokyo" surface="turf" distance={1600} rankings={rankings} embedded />)
    expect(screen.queryByText('得意な騎手 TOP5')).toBeNull()
    expect(screen.getByText('マイル騎手1')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /騎手ランキング全体を見る/ })).toBeInTheDocument()
  })

  it('embedded なしでは大見出しを出す（後方互換）', () => {
    render(<JockeySection track="tokyo" surface="turf" distance={1600} rankings={rankings} />)
    expect(screen.getByText('得意な騎手 TOP5')).toBeInTheDocument()
  })
```

（このテストファイル冒頭には既存の `rankings` フィクスチャがある前提。無ければ既存テストの `rankings` 定義を流用する。）

- [ ] **Step 2: 実行して失敗を確認**

Run: `npm test -- __tests__/components/track-jockeys.test.tsx`
Expected: FAIL（embedded 未対応で大見出しが残る）

- [ ] **Step 3: `components/track-jockeys.tsx` を実装**

`JockeySection` のシグネチャに `embedded` を追加：

```tsx
export function JockeySection({
  track,
  surface,
  distance,
  rankings = jockeyRankings,
  embedded = false,
}: {
  track: Track
  surface: Surface
  distance: number
  /** テスト差し込み用。省略時は本番データ。 */
  rankings?: Record<string, JockeyRankRow[]>
  /** タブ内埋め込み時は大見出しを省略する */
  embedded?: boolean
}) {
```

`<section>` の className を条件化し、見出しブロックを条件描画にする：

```tsx
    <section aria-label="得意な騎手TOP5" className={embedded ? '' : 'mt-10'}>
      {!embedded && (
        <div className="mb-3">
          <p className="text-xs tracking-widest" style={{ color: 'var(--color-gold-600)' }}>
            TOP JOCKEYS
          </p>
          <h2 className="font-heading text-sm font-semibold sm:text-base" style={{ color: 'var(--color-gold-400)' }}>
            得意な騎手 TOP5
          </h2>
        </div>
      )}
```

（フォールバック注記・`<JockeyRankTable>`・「騎手ランキング全体を見る →」`<Link>` はそのまま。）

- [ ] **Step 4: 実行して成功を確認**

Run: `npm test -- __tests__/components/track-jockeys.test.tsx`
Expected: PASS（既存＋新規）

- [ ] **Step 5: コミット**

```bash
git add components/track-jockeys.tsx __tests__/components/track-jockeys.test.tsx
git commit -m "feat: JockeySection に embedded prop（タブ埋め込み時は見出し省略）"
```

---

## Task 2: `GradedSection` に `embedded` prop（見出し省略）

**Files:**
- Modify: `components/track-graded.tsx`
- Test: `__tests__/components/track-graded.test.tsx`

- [ ] **Step 1: 失敗するテストを追記**

`__tests__/components/track-graded.test.tsx` の `describe('GradedSection', ...)` 内に追記（既存の `races` フィクスチャを流用）：

```tsx
  it('embedded では大見出しを省略し、本体は出す', () => {
    render(<GradedSection track="tokyo" surface="turf" distance={1600} allRaces={races} embedded />)
    expect(screen.queryByText('重賞レースの特徴')).toBeNull()
    expect(screen.getByRole('link', { name: /重賞データベース全体を見る/ })).toBeInTheDocument()
  })

  it('embedded なしでは大見出しを出す（後方互換）', () => {
    render(<GradedSection track="tokyo" surface="turf" distance={1600} allRaces={races} />)
    expect(screen.getByText('重賞レースの特徴')).toBeInTheDocument()
  })
```

- [ ] **Step 2: 実行して失敗を確認**

Run: `npm test -- __tests__/components/track-graded.test.tsx`
Expected: FAIL

- [ ] **Step 3: `components/track-graded.tsx` を実装**

シグネチャに `embedded` を追加：

```tsx
export function GradedSection({
  track,
  surface,
  distance,
  allRaces = gradedRaces,
  embedded = false,
}: {
  track: Track
  surface: Surface
  distance: number
  /** テスト差し込み用。省略時は本番データ。 */
  allRaces?: GradedRace[]
  /** タブ内埋め込み時は大見出しを省略する */
  embedded?: boolean
}) {
```

`<section>` と見出しブロックを条件化：

```tsx
    <section aria-label="重賞レースの特徴" className={embedded ? '' : 'mt-10'}>
      {!embedded && (
        <div className="mb-3">
          <p className="text-xs tracking-widest" style={{ color: 'var(--color-gold-600)' }}>
            GRADED RACES
          </p>
          <h2 className="font-heading text-sm font-semibold sm:text-base" style={{ color: 'var(--color-gold-400)' }}>
            重賞レースの特徴
          </h2>
        </div>
      )}
```

（重賞カード一覧／空メッセージ／「重賞データベース全体を見る →」`<Link>` はそのまま。）

- [ ] **Step 4: 実行して成功を確認**

Run: `npm test -- __tests__/components/track-graded.test.tsx`
Expected: PASS

- [ ] **Step 5: コミット**

```bash
git add components/track-graded.tsx __tests__/components/track-graded.test.tsx
git commit -m "feat: GradedSection に embedded prop（タブ埋め込み時は見出し省略）"
```

---

## Task 3: CourseFinder を4タブ化＋ブロック並び替え（★Opus直接実装）

**Files:**
- Modify: `components/course-finder.tsx`
- Test: `__tests__/components/course-finder.test.tsx`

**この変更の要点（構造の変換）**：
現状の縦順は「見出し → 競馬場チップ(!fixedTrack) → 馬場/距離 → 開催月 → 開催時期トグル → 結果エリア(条件サマリー → タブバー[枠順/脚質] → タブ内容 → コース詳細導線 → バグ穴馬)」。
これを次へ変える：

```
見出し
競馬場チップ（!fixedTrack のときのみ・現状維持）
馬場トグル＋距離チップ（現状維持）
★タブバー（4タブ：枠順/脚質/騎手/レース）  ← ここへ移動＆拡張
（tab が frame/style のとき）
   開催月チップ（現状の block3 をそのまま）
   開催時期トグル（現状の block4 をそのまま）
   結果エリア（条件サマリー＋枠順/脚質バー＋バグ穴馬）  ※コース詳細導線リンクは撤去
（tab === 'jockey' のとき）
   <JockeySection ... embedded />
（tab === 'race' のとき）
   <GradedSection ... embedded />
```

- [ ] **Step 1: 失敗するテストを追記**

`__tests__/components/course-finder.test.tsx` の `describe('CourseFinder', ...)` 内に追記：

```tsx
  it('4タブ（枠順・脚質・騎手・レース）が表示される', () => {
    render(<CourseFinder fixedTrack="tokyo" />)
    const tablist = screen.getByRole('tablist', { name: '結果タブ' })
    ;['枠順', '脚質', '騎手', 'レース'].forEach((label) => {
      expect(within(tablist).getByRole('tab', { name: label })).toBeInTheDocument()
    })
  })

  it('騎手タブでは開催時期トグルが消え、騎手データが出る', () => {
    render(<CourseFinder fixedTrack="tokyo" />)
    // 初期（枠順）は開催時期トグルがある
    expect(screen.getByRole('group', { name: '開催時期選択' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('tab', { name: '騎手' }))
    expect(screen.queryByRole('group', { name: '開催時期選択' })).toBeNull()
    expect(screen.getByRole('link', { name: /騎手ランキング全体を見る/ })).toBeInTheDocument()
  })

  it('レースタブでは重賞データが出る', () => {
    render(<CourseFinder fixedTrack="tokyo" />)
    fireEvent.click(screen.getByRole('tab', { name: 'レース' }))
    expect(screen.getByRole('link', { name: /重賞データベース全体を見る/ })).toBeInTheDocument()
  })
```

- [ ] **Step 2: 実行して失敗を確認**

Run: `npm test -- __tests__/components/course-finder.test.tsx`
Expected: 新規3件 FAIL（タブは2つ・騎手/レース未実装）。既存テストは PASS のまま。

- [ ] **Step 3: 実装（course-finder.tsx）**

3-1. 先頭付近の import に追加：

```tsx
import { JockeySection } from '@/components/track-jockeys'
import { GradedSection } from '@/components/track-graded'
```

3-2. タブ型を拡張（現在 `type ResultTab = 'frame' | 'style'`）：

```tsx
type ResultTab = 'frame' | 'style' | 'jockey' | 'race'
```

3-3. **タブバーを新設し、馬場/距離ブロックの直後（`{/* ── 3列目：開催月チップ ... */}` の直前）に置く**。ラベルは4種：

```tsx
      {/* ── 結果タブ（4種）：芝ダ・距離の直下に置き iPhone で気づける位置に ── */}
      <div className="flex gap-1 mb-3" role="tablist" aria-label="結果タブ">
        {(['frame', 'style', 'jockey', 'race'] as ResultTab[]).map((t) => {
          const label =
            t === 'frame' ? '枠順' : t === 'style' ? '脚質' : t === 'jockey' ? '騎手' : 'レース'
          const isSelected = tab === t
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setTab(t)}
              className="rounded px-3 py-1 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2"
              style={
                isSelected
                  ? {
                      background: 'var(--color-gold-500)',
                      color: 'var(--color-paddock-950)',
                      outlineColor: 'var(--color-gold-500)',
                    }
                  : {
                      background: 'var(--color-paddock-800)',
                      color: 'var(--color-muted-foreground)',
                      outlineColor: 'var(--color-gold-500)',
                    }
              }
            >
              {label}
            </button>
          )
        })}
      </div>
```

3-4. **開催月チップ（block3）と開催時期トグル（block4）を `{(tab === 'frame' || tab === 'style') && ( ... )}` で包む**。中身のJSXは現状のまま（移動のみ）。

3-5. **旧タブバー（結果エリア内の `{/* タブ切替 */}` の `<div role="tablist" aria-label="結果タブ">…</div>`）を削除**（3-3で上へ移設済み）。

3-6. **結果エリアの枠順/脚質表示も frame/style のときだけに限定**。現状 `{availableDistances.length > 0 && ( <div> 条件サマリー … AnimatePresence(frame/style) … コース詳細導線 … バグ穴馬 </div> )}` のブロックを、`{(tab === 'frame' || tab === 'style') && availableDistances.length > 0 && ( … )}` に変更。中の `AnimatePresence` は現状の frame/style 分岐のまま（`tab === 'frame' ? …frame… : …style…` はそのまま機能する）。

3-7. **自ページを指す導線リンクを撤去**：結果エリア内の
```tsx
<Link href={`/courses/${track}`} …>{trackName}競馬場のコース図・全距離データを見る →</Link>
```
を削除（ハブ専用のため冗長・dead link を残さない）。この削除で `Link` / `trackName` が他で使われているか確認し、未使用になった import/変数があれば除去（`trackName` は条件サマリーで使用中なので残る。`Link` は他に使っていなければ import 削除）。

3-8. **騎手/レースのタブ内容を追加**（上記 frame/style ブロックの直後、`availableDistances` に依存させない）：

```tsx
      {/* 騎手タブ */}
      {tab === 'jockey' && (
        <JockeySection track={track} surface={surface} distance={distance} embedded />
      )}

      {/* レースタブ */}
      {tab === 'race' && (
        <GradedSection track={track} surface={surface} distance={distance} embedded />
      )}
```

- [ ] **Step 4: 実行して成功を確認**

Run: `npm test -- __tests__/components/course-finder.test.tsx`
Expected: PASS（既存＋新規3件）。
全体も確認：`npm test` → 全 suite（track-hub は Task 4 で更新するまで一部落ちる可能性 → 落ちたら Task 4 完了まで許容。ただし course-finder / track-jockeys / track-graded は緑）。
Run: `npm run lint` → 新規エラー0（未使用 import なし）。

- [ ] **Step 5: コミット**

```bash
git add components/course-finder.tsx __tests__/components/course-finder.test.tsx
git commit -m "feat: CourseFinder を4タブ化（枠順/脚質/騎手/レース）＋タブ列を上部へ"
```

---

## Task 4: TrackHub の縦順変更（コース図を折りたたみ・独立セクション撤去）

**Files:**
- Modify: `components/track-hub.tsx`
- Test: `__tests__/components/track-hub.test.tsx`

縦順を **CourseFinder → 🔑キーファクター → ▼コース図（折りたたみ・既定閉）** にし、独立していた `<GradedSection>` / `<JockeySection>` を撤去（CourseFinder のタブへ移動済み）。

- [ ] **Step 1: テストを更新（失敗させる）**

`__tests__/components/track-hub.test.tsx` を次の内容に更新（コース図はモック継続。独立セクション見出しがトップレベルに無いこと＝タブ内に移ったこと、コース図が折りたたみ `summary` で存在することを検証）：

```tsx
import { render, screen } from '@testing-library/react'
import { TrackHub } from '@/components/track-hub'

jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn().mockReturnValue(true),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
      <div {...rest}>{children}</div>
    ),
  },
}))

jest.mock('@/components/course-map', () => ({
  CourseMap: () => <div data-testid="course-map" />,
}))

describe('TrackHub', () => {
  it('CourseFinder（4タブ）とキーファクターが出る', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.getByRole('tablist', { name: '結果タブ' })).toBeInTheDocument()
    expect(screen.getByText(/キーファクター/)).toBeInTheDocument()
  })

  it('騎手・重賞は独立セクション見出しとしては出ない（タブ内に移動）', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.queryByText('得意な騎手 TOP5')).toBeNull()
    expect(screen.queryByText('重賞レースの特徴')).toBeNull()
  })

  it('コース図は折りたたみ（summary）で存在する', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.getByText('コース図')).toBeInTheDocument()
    expect(screen.getByTestId('course-map')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: 実行して失敗を確認**

Run: `npm test -- __tests__/components/track-hub.test.tsx`
Expected: FAIL（現状は独立セクション見出しが出る・コース図に summary が無い）

- [ ] **Step 3: `components/track-hub.tsx` を実装**

ファイル全体を次に置き換える（`GradedSection`/`JockeySection` の import と描画を削除、コース図を `<details>` 折りたたみに、縦順を CourseFinder → keyFactor → コース図 に）：

```tsx
'use client'

import { useMemo, useState } from 'react'
import type { Track, Surface } from '@/lib/types'
import { getTrack } from '@/lib/data/courses'
import { getCourseGeometry } from '@/lib/data/course-geometry'
import { CourseMap } from '@/components/course-map'
import { CourseFinder } from '@/components/course-finder'

export function TrackHub({ track }: { track: Track }) {
  // CourseFinder の初期選択（芝1600）に合わせる。
  // 初回マウント時に CourseFinder の onSelectionChange が実値で上書きする。
  const [sel, setSel] = useState<{ surface: Surface; distance: number }>({
    surface: 'turf',
    distance: 1600,
  })

  const trackInfo = getTrack(track)
  const geometry = getCourseGeometry(track)

  const selectedCourse = useMemo(
    () => trackInfo?.courses.find((c) => c.surface === sel.surface && c.distance === sel.distance),
    [trackInfo, sel.surface, sel.distance],
  )
  const styleStats = selectedCourse?.runningStyleStats ?? trackInfo?.courses[0]?.runningStyleStats

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* ① コース検索＋4タブ（枠順/脚質/騎手/レース） */}
      <CourseFinder fixedTrack={track} onSelectionChange={setSel} />

      {/* 選択コースの文章の特性（keyFactor / note） */}
      {selectedCourse && (
        <div className="mt-4 rounded-lg border border-paddock-700 bg-paddock-900 p-4">
          <div className="rounded border-l-2 border-gold-500 bg-paddock-800 px-3 py-2.5">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold-500">
              キーファクター
            </p>
            <p className="mt-1 text-sm text-gold-400">🔑 {selectedCourse.keyFactor}</p>
          </div>
          <p className="mt-3 text-xs text-gray-500">{selectedCourse.note}</p>
        </div>
      )}

      {/* コース図：折りたたみ（既定は閉じてファーストビューを軽くする） */}
      {geometry && (
        <details className="mt-4 rounded-lg border border-paddock-700 bg-paddock-900">
          <summary className="cursor-pointer px-4 py-3 text-sm font-heading font-semibold text-gold-400">
            コース図
          </summary>
          <div className="px-4 pb-4">
            <CourseMap geometry={geometry} styleStats={styleStats} />
          </div>
        </details>
      )}
    </div>
  )
}
```

- [ ] **Step 4: 実行して成功を確認**

Run: `npm test -- __tests__/components/track-hub.test.tsx`
Expected: PASS（3 tests）

- [ ] **Step 5: コミット**

```bash
git add components/track-hub.tsx __tests__/components/track-hub.test.tsx
git commit -m "feat: TrackHub 縦順変更（4タブ→キーファクター→折りたたみコース図・独立セクション撤去）"
```

---

## Task 5: 全体検証（テスト・lint・ビルド・実機スモーク）

**Files:** なし（検証のみ）

- [ ] **Step 1: 全テスト**

Run: `npm test`
Expected: 全 suite PASS（course-finder / track-jockeys / track-graded / track-hub の更新分含む）。

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: 新規エラー0（既存の count-up.tsx / graded-races.test.ts の従来分のみ）。course-finder の未使用 import（`Link` 等）が残っていれば除去。

- [ ] **Step 3: 本番ビルド**

Run: `npm run build`
Expected: 成功（`/courses/[trackId]` 全10場生成）。

- [ ] **Step 4: 手動スモーク（実行者が目視）**

`npm run start`（PORT指定）→ サーバHTMLを curl で確認：
- `/courses/tokyo` の SSR HTML に `role="tablist"` と4タブラベル（枠順/脚質/騎手/レース）が出る。
- 初期（枠順）で開催時期トグル（`aria-label="開催時期選択"`）が出る。
- キーファクターが出る。「コース図」`summary` が出る。
- 可能なら `npm run dev` を iPhone 幅で開き、芝ダ・距離のすぐ下にタブ列が来て、騎手/レースタブで中身が切り替わるのを目視（動的挙動）。

- [ ] **Step 5: 作業ログ追記**

`~/instagram_content/history_log.md` に1行追記（日付＋「keiba-hp CourseFinder 4タブ化：枠順/脚質/騎手/レースをタブ集約・タブ列を上部へ・コース図折りたたみ」）。

---

## 自己レビュー（プラン作成者チェック済み）

- **spec カバレッジ**：4タブ化＝Task3、レース=重賞成績＝Task2+3、騎手＝Task1+3、タブを上へ/開催時期を枠質タブ内＝Task3、独立セクション撤去＋コース図折りたたみ＝Task4、embedded見出し省略＝Task1/2。全項目タスクあり。
- **プレースホルダ**：各コードステップに実コードあり。TBD/TODO なし。移動対象（block3/4・旧タブバー・自ページ導線）はコメント/aria-labelで特定可能。
- **型整合**：`ResultTab` に 'jockey'|'race' 追加（Task3）。`embedded?: boolean` の prop 名は Task1/2/3 で一致。`JockeySection`/`GradedSection` の props（track/surface/distance/embedded）は一致。テストのアンカー文言（「騎手ランキング全体を見る」「重賞データベース全体を見る」「開催時期選択」「結果タブ」「コース図」）は実装コードと一致。
