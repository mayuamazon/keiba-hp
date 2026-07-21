# 競馬場ハブ一本化 実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 競馬場を選ぶと1ページ（`/courses/[trackId]`）でコース特性・重賞・得意騎手TOP5がすべて見られるようにし、「つぎはぎ感」を解消する。

**Architecture:** 既存 `CourseFinder`（芝ダ・距離・枠質・バグ穴馬）を分解せず、任意props `fixedTrack` / `onSelectionChange` を足してハブ内で再利用。ハブ薄コンテナ `TrackHub` が芝ダ・距離を受け取り、その下に重賞セクション・騎手TOP5セクションを連動表示。重賞カードと騎手テーブルは既存クライアントから共通コンポーネントに切り出してDRYに共有。トップページは軽い競馬場ピッカーに置き換える。

**Tech Stack:** Next.js 16.2.9 (App Router) / React / TypeScript / Tailwind / framer-motion / Jest + Testing Library。

---

## ⚠️ 実装前の必読（プロジェクト固有ルール）

- ルート `AGENTS.md`：**「This is NOT the Next.js you know」**。Next API（`Link` / `notFound` / `generateStaticParams` / async `params` 等）を書く前に `node_modules/next/dist/docs/01-app/` の該当ガイドを確認すること。本プランは既存ファイルの慣例（`params: Promise<{...}>` を `await` する等）に合わせている。
- CLAUDE.md／AGENTS.md（keiba-hp）：**ファイル削除禁止**・絶対パス使用禁止・単純化優先。本プランは新規追加＋後方互換なpropsのみで、既存ファイルの削除はしない。
- テストの流儀：`@testing-library/react` の `render/screen/fireEvent/within`、`@/` パスエイリアス、`framer-motion` は各テスト先頭で下記のようにモックする。

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

- テスト実行: `npm test`（jest）。単一ファイル: `npm test -- <path>`。ビルド: `npm run build`。Lint: `npm run lint`。

---

## Task 1: 距離→距離帯の純関数 `distanceToBand`

**Files:**
- Create: `lib/distance-band.ts`
- Test: `__tests__/lib/distance-band.test.ts`

- [ ] **Step 1: 失敗するテストを書く**

`__tests__/lib/distance-band.test.ts`:

```ts
import { distanceToBand } from '@/lib/distance-band'

describe('distanceToBand', () => {
  it('≤1400 は sprint', () => {
    expect(distanceToBand(1200)).toBe('sprint')
    expect(distanceToBand(1400)).toBe('sprint')
  })
  it('1401-1600 は mile', () => {
    expect(distanceToBand(1401)).toBe('mile')
    expect(distanceToBand(1600)).toBe('mile')
  })
  it('1601-2200 は middle', () => {
    expect(distanceToBand(1601)).toBe('middle')
    expect(distanceToBand(2200)).toBe('middle')
  })
  it('≥2201 は long', () => {
    expect(distanceToBand(2201)).toBe('long')
    expect(distanceToBand(2400)).toBe('long')
    expect(distanceToBand(3200)).toBe('long')
  })
})
```

- [ ] **Step 2: テストを実行して失敗を確認**

Run: `npm test -- __tests__/lib/distance-band.test.ts`
Expected: FAIL（`Cannot find module '@/lib/distance-band'`）

- [ ] **Step 3: 実装する**

`lib/distance-band.ts`:

```ts
export type DistanceBand = 'sprint' | 'mile' | 'middle' | 'long'

/** 距離(m)を騎手ランキングの距離帯キーに変換する。
 *  境界は jockeys-client.tsx のラベルに一致（短≤1400 / マイル1401-1600 / 中1601-2200 / 長≥2201）。 */
export function distanceToBand(distance: number): DistanceBand {
  if (distance <= 1400) return 'sprint'
  if (distance <= 1600) return 'mile'
  if (distance <= 2200) return 'middle'
  return 'long'
}
```

- [ ] **Step 4: テストを実行して成功を確認**

Run: `npm test -- __tests__/lib/distance-band.test.ts`
Expected: PASS（4 tests）

- [ ] **Step 5: コミット**

```bash
git add lib/distance-band.ts __tests__/lib/distance-band.test.ts
git commit -m "feat: distanceToBand 純関数（距離→騎手ランキング距離帯）"
```

---

## Task 2: 重賞カードを共通コンポーネントに切り出し

`app/graded/graded-client.tsx` 内の `GradedCard`（＋専用ヘルパ `STYLE_LABELS` / `SURFACE_LABEL` / `placeRateColor`）を新ファイルへ移し、`graded-client` は import して使う。挙動は不変（リファクタ）。

**Files:**
- Create: `components/graded-race-card.tsx`
- Modify: `app/graded/graded-client.tsx`
- 既存テスト: `__tests__/components/graded-client.test.tsx`（変更せず緑を維持）

- [ ] **Step 1: 新ファイルを作成**

`components/graded-race-card.tsx`（`graded-client.tsx` の `GradedCard` 関数と専用ヘルパをそのまま移植し `export`）:

```tsx
'use client'

import { useState } from 'react'
import type { GradedRace } from '@/lib/data/graded-races'

const STYLE_LABELS: Record<string, string> = {
  '逃げ': '逃',
  '先行': '先',
  '差し': '差',
  '追込': '追',
}

const SURFACE_LABEL: Record<string, string> = {
  turf: '芝',
  dirt: 'ダ',
}

/** 複勝率30%超 → 赤強調 */
function placeRateColor(rate: number): string {
  return rate > 30
    ? 'color-mix(in oklab, var(--color-silks-red) 85%, transparent)'
    : 'var(--color-gold-400)'
}

export function GradedCard({ race }: { race: GradedRace }) {
  const [open, setOpen] = useState(false)
  const n = race.editions.length

  const styleEntries = Object.entries(race.styleWins) as [string, number][]
  const totalStyleWins = styleEntries.reduce((s, [, v]) => s + v, 0)

  return (
    <div
      className="rounded-lg border"
      style={{ borderColor: 'var(--color-paddock-700)', background: 'var(--color-paddock-900)' }}
    >
      {/* ── ヘッダー（常時表示） ── */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-paddock-800/50"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="rounded px-1.5 py-0.5 text-xs font-bold"
            style={{
              background:
                race.grade === 'G1'
                  ? 'color-mix(in oklab, var(--color-gold-500) 20%, transparent)'
                  : 'var(--color-paddock-800)',
              color:
                race.grade === 'G1' ? 'var(--color-gold-400)' : 'var(--color-muted-foreground)',
              border: `1px solid ${race.grade === 'G1' ? 'var(--color-gold-500)' : 'var(--color-paddock-600)'}`,
            }}
          >
            {race.grade}
          </span>
          <span className="font-heading font-semibold text-gray-100">{race.displayName}</span>
          <span className="text-xs text-gray-500">
            {race.place}・{SURFACE_LABEL[race.surface] ?? race.surface}{race.distance}m
          </span>
        </div>
        <span className="shrink-0 text-xs text-gray-500 mt-0.5">
          過去{n}回 {open ? '▲' : '▼'}
        </span>
      </button>

      {/* ── 展開コンテンツ ── */}
      {open && (
        <div className="border-t px-4 pb-5 pt-4" style={{ borderColor: 'var(--color-paddock-700)' }}>
          <h4 className="mb-2 text-xs font-bold" style={{ color: 'var(--color-gold-400)' }}>
            歴代勝ち馬
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-500">
                  <th className="pb-1 pr-3 text-left font-normal">年</th>
                  <th className="pb-1 pr-3 text-left font-normal">馬名</th>
                  <th className="pb-1 pr-3 text-right font-normal">人気</th>
                  <th className="pb-1 pr-3 text-right font-normal">枠</th>
                  <th className="pb-1 pr-3 text-left font-normal">脚質</th>
                  <th className="pb-1 text-right font-normal">単勝払戻</th>
                </tr>
              </thead>
              <tbody>
                {[...race.editions].reverse().map((ed) => (
                  <tr key={ed.date} className="border-t" style={{ borderColor: 'var(--color-paddock-800)' }}>
                    <td className="py-1 pr-3 text-gray-400">{ed.year}</td>
                    <td className="py-1 pr-3 text-gray-100">{ed.winner}</td>
                    <td className="py-1 pr-3 text-right text-gray-300">
                      {ed.winnerPopularity != null ? `${ed.winnerPopularity}番人気` : '—'}
                    </td>
                    <td className="py-1 pr-3 text-right text-gray-300">
                      {ed.winnerFrame != null ? `${ed.winnerFrame}枠` : '—'}
                    </td>
                    <td className="py-1 pr-3 text-gray-300">{ed.winnerStyle ?? '—'}</td>
                    <td className="py-1 text-right" style={{ color: 'var(--color-gold-400)' }}>
                      {ed.winPayout != null ? `¥${ed.winPayout.toLocaleString()}` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {/* 人気帯別 */}
            <div>
              <h4 className="mb-2 text-xs font-bold" style={{ color: 'var(--color-gold-400)' }}>
                人気帯別成績
              </h4>
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500">
                    <th className="pb-1 text-left font-normal">人気帯</th>
                    <th className="pb-1 text-right font-normal">頭数</th>
                    <th className="pb-1 text-right font-normal">勝利</th>
                    <th className="pb-1 text-right font-normal">複勝率</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    [
                      ['1番人気', race.popularityStats.pop1],
                      ['2-3番人気', race.popularityStats.pop23],
                      ['4-6番人気', race.popularityStats.pop46],
                      ['7番人気以下', race.popularityStats.pop7plus],
                    ] as const
                  ).map(([label, stat]) => (
                    <tr key={label} className="border-t" style={{ borderColor: 'var(--color-paddock-800)' }}>
                      <td className="py-1 text-gray-400">{label}</td>
                      <td className="py-1 text-right text-gray-300">{stat.count}</td>
                      <td className="py-1 text-right text-gray-300">{stat.wins}</td>
                      <td className="py-1 text-right font-bold" style={{ color: placeRateColor(stat.placeRate) }}>
                        {stat.placeRate.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 枠帯別 */}
            <div>
              <h4 className="mb-2 text-xs font-bold" style={{ color: 'var(--color-gold-400)' }}>
                枠帯別複勝率
              </h4>
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500">
                    <th className="pb-1 text-left font-normal">枠帯</th>
                    <th className="pb-1 text-right font-normal">頭数</th>
                    <th className="pb-1 text-right font-normal">複勝率</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    [
                      ['1-3枠（内）', race.frameBandStats.inner],
                      ['4-6枠（中）', race.frameBandStats.middle],
                      ['7-8枠（外）', race.frameBandStats.outer],
                    ] as const
                  ).map(([label, stat]) => (
                    <tr key={label} className="border-t" style={{ borderColor: 'var(--color-paddock-800)' }}>
                      <td className="py-1 text-gray-400">{label}</td>
                      <td className="py-1 text-right text-gray-300">{stat.count}</td>
                      <td className="py-1 text-right font-bold" style={{ color: placeRateColor(stat.placeRate) }}>
                        {stat.placeRate.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 脚質別 */}
            <div>
              <h4 className="mb-2 text-xs font-bold" style={{ color: 'var(--color-gold-400)' }}>
                脚質別勝利数（{n}回中）
              </h4>
              <div className="flex flex-col gap-1">
                {styleEntries.map(([sty, wins]) => {
                  const pct = totalStyleWins > 0 ? (wins / totalStyleWins) * 100 : 0
                  return (
                    <div key={sty} className="flex items-center gap-2">
                      <span className="w-4 shrink-0 text-xs font-bold" style={{ color: 'var(--color-gold-400)' }}>
                        {STYLE_LABELS[sty] ?? sty}
                      </span>
                      <div className="h-3 flex-1 overflow-hidden rounded-sm" style={{ background: 'var(--color-paddock-800)' }}>
                        <div
                          className="h-full rounded-sm"
                          style={{ width: `${pct}%`, background: 'color-mix(in oklab, var(--color-gold-600) 35%, transparent)' }}
                        />
                      </div>
                      <span className="w-6 shrink-0 text-right text-xs text-gray-300">{wins}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <p className="mt-4 text-right text-xs text-gray-600">
            出典: JRA-VAN 2021-2026 自社集計
          </p>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: `graded-client.tsx` を修正して import に置換**

`app/graded/graded-client.tsx` の先頭に import を追加:

```tsx
import { GradedCard } from '@/components/graded-race-card'
```

同ファイルから次を**削除**する（新ファイルへ移動済みのため）:
- `const STYLE_LABELS = { ... }`
- `const SURFACE_LABEL = { ... }`
- `function placeRateColor(...) { ... }`
- `function GradedCard({ race }: { race: GradedRace }) { ... }`（関数全体）

`Chip` / `GRADES` / `TRACK_CHIPS` / `GradedClient` 本体はそのまま残す。`GradedClient` 内の `<GradedCard key=... race={race} />` はそのまま（import 版を使う）。

- [ ] **Step 3: 既存テストとlintで回帰チェック**

Run: `npm test -- __tests__/components/graded-client.test.tsx`
Expected: PASS（従来どおり）

Run: `npm run lint`
Expected: 新規エラーなし（未使用importが残っていないこと。`GradedRace` 型が graded-client でまだ使われているか確認し、未使用なら import から外す）

- [ ] **Step 4: コミット**

```bash
git add components/graded-race-card.tsx app/graded/graded-client.tsx
git commit -m "refactor: GradedCard を共通コンポーネント化（ハブと /graded で共有）"
```

---

## Task 3: 騎手テーブルを共通コンポーネントに切り出し

`app/jockeys/jockeys-client.tsx` のテーブル描画部を `JockeyRankTable` として切り出す。渡された `rows` を順位付きで表示するだけの純表示コンポーネント。

**Files:**
- Create: `components/jockey-rank-table.tsx`
- Modify: `app/jockeys/jockeys-client.tsx`
- 既存テスト: `__tests__/components/jockeys-client.test.tsx`（変更せず緑を維持）

- [ ] **Step 1: 新ファイルを作成**

`components/jockey-rank-table.tsx`:

```tsx
'use client'

import type { JockeyRankRow } from '@/lib/data/jockey-rankings'

/** 複勝率30%超 or 単勝回収率100%超 → 赤強調 */
function highlightColor(condition: boolean): React.CSSProperties {
  return condition
    ? { color: 'color-mix(in oklab, var(--color-silks-red) 85%, transparent)', fontWeight: 700 }
    : { color: 'var(--color-gold-400)' }
}

/** 騎手ランキング表。rows をそのまま 1 位から表示する（件数の絞り込みは呼び出し側で slice）。 */
export function JockeyRankTable({ rows }: { rows: JockeyRankRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-xs text-gray-500" style={{ borderColor: 'var(--color-paddock-700)' }}>
            <th className="pb-2 pr-4 text-center font-normal">順位</th>
            <th className="pb-2 pr-4 text-left font-normal">騎手名</th>
            <th className="pb-2 pr-4 text-right font-normal">騎乗数</th>
            <th className="pb-2 pr-4 text-right font-normal">勝利</th>
            <th className="pb-2 pr-4 text-right font-normal">勝率</th>
            <th className="pb-2 pr-4 text-right font-normal">複勝率</th>
            <th className="pb-2 text-right font-normal">単勝回収率</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className="border-b transition-colors hover:bg-paddock-800/40"
              style={{ borderColor: 'var(--color-paddock-800)' }}
            >
              <td className="py-2.5 pr-4 text-center text-gray-500">{i + 1}</td>
              <td className="py-2.5 pr-4 font-semibold text-gray-100">{row.name}</td>
              <td className="py-2.5 pr-4 text-right text-gray-400">{row.rides.toLocaleString()}</td>
              <td className="py-2.5 pr-4 text-right text-gray-300">{row.wins.toLocaleString()}</td>
              <td className="py-2.5 pr-4 text-right" style={{ color: 'var(--color-gold-400)' }}>
                {row.winRate.toFixed(1)}%
              </td>
              <td className="py-2.5 pr-4 text-right" style={highlightColor(row.placeRate > 30)}>
                {row.placeRate.toFixed(1)}%
              </td>
              <td className="py-2.5 text-right" style={highlightColor(row.winRoi > 100)}>
                {row.winRoi.toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

- [ ] **Step 2: `jockeys-client.tsx` を修正**

`app/jockeys/jockeys-client.tsx`:
- 先頭に `import { JockeyRankTable } from '@/components/jockey-rank-table'` を追加。
- ローカルの `function highlightColor(...) { ... }` を**削除**（新ファイルへ移動済み）。
- 「テーブル or 空メッセージ」ブロックの `<div className="overflow-x-auto"><table>...</table></div>`（空でない側）を `<JockeyRankTable rows={rows} />` に置換。空メッセージ側（`rows.length === 0` の `<p>`）はそのまま。

置換後の該当部：

```tsx
      {/* テーブル or 空メッセージ */}
      <div className="mt-6">
        {rows.length === 0 ? (
          <p className="text-center text-sm text-gray-500 py-8">
            該当条件のデータがありません（騎乗数が閾値未満の組合せは非表示）。
          </p>
        ) : (
          <JockeyRankTable rows={rows} />
        )}
      </div>
```

- [ ] **Step 3: 既存テストとlintで回帰チェック**

Run: `npm test -- __tests__/components/jockeys-client.test.tsx`
Expected: PASS

Run: `npm run lint`
Expected: 新規エラーなし（`highlightColor` の未使用残りがないこと）

- [ ] **Step 4: コミット**

```bash
git add components/jockey-rank-table.tsx app/jockeys/jockeys-client.tsx
git commit -m "refactor: JockeyRankTable を共通コンポーネント化（ハブと /jockeys で共有）"
```

---

## Task 4: `CourseFinder` に `fixedTrack` / `onSelectionChange` props を追加（後方互換）

**Files:**
- Modify: `components/course-finder.tsx`
- Test: `__tests__/components/course-finder.test.tsx`（新規itを追記）

- [ ] **Step 1: 失敗するテストを追記**

`__tests__/components/course-finder.test.tsx` の `describe('CourseFinder', ...)` 内に追記:

```tsx
  it('fixedTrack を渡すと競馬場チップ行が表示されない', () => {
    render(<CourseFinder fixedTrack="nakayama" />)
    // 競馬場選択 group（aria-label="競馬場選択"）が無いこと
    expect(screen.queryByRole('group', { name: '競馬場選択' })).toBeNull()
    // 中山の条件サマリーが出ること
    expect(screen.getAllByText(/中山/).length).toBeGreaterThan(0)
  })

  it('onSelectionChange が芝ダ変更時に呼ばれる', () => {
    const onSel = jest.fn()
    render(<CourseFinder onSelectionChange={onSel} />)
    // 初期マウントで一度は呼ばれる（現条件を通知）
    onSel.mockClear()
    // 馬場トグルの「ダ」を押す（aria-label="馬場選択" group 内）
    const surfaceGroup = screen.getByRole('group', { name: '馬場選択' })
    fireEvent.click(within(surfaceGroup).getByRole('button', { name: 'ダ' }))
    expect(onSel).toHaveBeenCalled()
    const arg = onSel.mock.calls[onSel.mock.calls.length - 1][0]
    expect(arg.surface).toBe('dirt')
    expect(typeof arg.distance).toBe('number')
  })
```

- [ ] **Step 2: テストを実行して失敗を確認**

Run: `npm test -- __tests__/components/course-finder.test.tsx`
Expected: FAIL（fixedTrack 未対応でチップが残る／onSelectionChange 未定義）

- [ ] **Step 3: `course-finder.tsx` を実装**

3-1. 型と関数シグネチャを変更。`import type { Track, Surface } from '@/lib/types'` は既存。関数定義を次に変更：

```tsx
interface CourseFinderProps {
  /** 指定時：この競馬場に固定し、競馬場チップ行を非表示にする（ハブページ用） */
  fixedTrack?: Track
  /** 芝ダ・距離が変わるたびに親へ通知（ハブページ用） */
  onSelectionChange?: (sel: { surface: Surface; distance: number }) => void
}

export function CourseFinder({ fixedTrack, onSelectionChange }: CourseFinderProps = {}) {
```

3-2. track の初期値を fixedTrack 優先にする。既存の `const [track, setTrack] = useState<Track>('tokyo')` を：

```tsx
  const [track, setTrack] = useState<Track>(fixedTrack ?? 'tokyo')
```

3-3. 親通知用の effect を追加する。既存の `finder_search` を送る `useEffect`（`isInitialSearch` を使うブロック）の**直後**に、次を追加：

```tsx
  // 親へ現在の芝ダ・距離を通知（ハブ連動用）。初回マウント含め常に最新を渡す。
  useEffect(() => {
    onSelectionChange?.({ surface, distance })
  }, [surface, distance, onSelectionChange])
```

3-4. 競馬場チップ行を fixedTrack 指定時に非表示にする。`{/* ── 1列目：競馬場チップ（5列×2行） ── */}` の `<div ... role="group" aria-label="競馬場選択"> ... </div>` 全体を、次のように条件描画で包む：

```tsx
      {/* ── 1列目：競馬場チップ（5列×2行）※fixedTrack 指定時は非表示 ── */}
      {!fixedTrack && (
        <div
          className="grid gap-1 mb-3"
          style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
          role="group"
          aria-label="競馬場選択"
        >
          {TRACK_CHIPS.map(({ id, label }) => {
            const isSelected = track === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleTrackChange(id)}
                aria-pressed={isSelected}
                className="rounded py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2"
                style={
                  isSelected
                    ? { background: 'var(--color-gold-500)', color: 'var(--color-paddock-950)', outlineColor: 'var(--color-gold-500)' }
                    : { background: 'transparent', color: 'var(--color-foreground)', border: '1px solid var(--color-paddock-700)', outlineColor: 'var(--color-gold-500)' }
                }
              >
                {label}
              </button>
            )
          })}
        </div>
      )}
```

（※既存の中身はそのまま。`{!fixedTrack && ( ... )}` で包むだけ。）

- [ ] **Step 4: テストを実行して成功を確認**

Run: `npm test -- __tests__/components/course-finder.test.tsx`
Expected: PASS（既存it＋新規2it すべて緑）

- [ ] **Step 5: コミット**

```bash
git add components/course-finder.tsx __tests__/components/course-finder.test.tsx
git commit -m "feat: CourseFinder に fixedTrack / onSelectionChange props（後方互換）"
```

---

## Task 5: 重賞セクション `GradedSection`

その競馬場の重賞を、選択中の芝ダ・距離に一致するものを先頭にして並べる。

**Files:**
- Create: `components/track-graded.tsx`
- Test: `__tests__/components/track-graded.test.tsx`

- [ ] **Step 1: 失敗するテストを書く**

`__tests__/components/track-graded.test.tsx`:

```tsx
import { render, screen, within } from '@testing-library/react'
import { GradedSection } from '@/components/track-graded'
import type { GradedRace } from '@/lib/data/graded-races'

function makeRace(partial: Partial<GradedRace>): GradedRace {
  return {
    raceName: 'テストレース',
    displayName: 'テストレース',
    grade: 'G3',
    place: '東京',
    trackId: 'tokyo',
    surface: 'turf',
    distance: 1600,
    editions: [],
    popularityStats: {
      pop1: { count: 0, wins: 0, placeRate: 0 },
      pop23: { count: 0, wins: 0, placeRate: 0 },
      pop46: { count: 0, wins: 0, placeRate: 0 },
      pop7plus: { count: 0, wins: 0, placeRate: 0 },
    },
    frameBandStats: {
      inner: { count: 0, placeRate: 0 },
      middle: { count: 0, placeRate: 0 },
      outer: { count: 0, placeRate: 0 },
    },
    styleWins: { '逃げ': 0, '先行': 0, '差し': 0, '追込': 0 },
    ...partial,
  }
}

const races: GradedRace[] = [
  makeRace({ trackId: 'tokyo', displayName: '東京ダート1400', surface: 'dirt', distance: 1400, grade: 'G2' }),
  makeRace({ trackId: 'tokyo', displayName: '東京芝1600マッチ', surface: 'turf', distance: 1600, grade: 'G1' }),
  makeRace({ trackId: 'nakayama', displayName: '中山レース', surface: 'turf', distance: 2500 }),
]

describe('GradedSection', () => {
  it('その競馬場の重賞だけを表示し、選択条件一致を先頭にする', () => {
    render(<GradedSection track="tokyo" surface="turf" distance={1600} allRaces={races} />)
    // 中山のレースは出ない
    expect(screen.queryByText('中山レース')).toBeNull()
    // 一致（東京芝1600）が先頭カード
    const cards = screen.getAllByTestId('graded-card-wrapper')
    expect(within(cards[0]).getByText('東京芝1600マッチ')).toBeInTheDocument()
  })

  it('重賞0件なら準備中メッセージ', () => {
    render(<GradedSection track="hakodate" surface="turf" distance={1200} allRaces={races} />)
    expect(screen.getByText(/重賞データは準備中/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: テストを実行して失敗を確認**

Run: `npm test -- __tests__/components/track-graded.test.tsx`
Expected: FAIL（`Cannot find module '@/components/track-graded'`）

- [ ] **Step 3: 実装する**

`components/track-graded.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import type { Track, Surface } from '@/lib/types'
import type { GradedRace } from '@/lib/data/graded-races'
import { gradedRaces } from '@/lib/data/graded-races'
import { GradedCard } from '@/components/graded-race-card'

const GRADE_ORDER: Record<string, number> = { G1: 0, G2: 1, G3: 2 }

export function GradedSection({
  track,
  surface,
  distance,
  allRaces = gradedRaces,
}: {
  track: Track
  surface: Surface
  distance: number
  /** テスト差し込み用。省略時は本番データ。 */
  allRaces?: GradedRace[]
}) {
  const races = useMemo(() => {
    const forTrack = allRaces.filter((r) => r.trackId === track)
    // 選択条件一致を先頭、その後グレード順→距離順で安定ソート
    return [...forTrack].sort((a, b) => {
      const aMatch = a.surface === surface && a.distance === distance ? 0 : 1
      const bMatch = b.surface === surface && b.distance === distance ? 0 : 1
      if (aMatch !== bMatch) return aMatch - bMatch
      const g = (GRADE_ORDER[a.grade] ?? 9) - (GRADE_ORDER[b.grade] ?? 9)
      if (g !== 0) return g
      return a.distance - b.distance
    })
  }, [allRaces, track, surface, distance])

  return (
    <section aria-label="重賞レースの特徴" className="mt-10">
      <div className="mb-3">
        <p className="text-xs tracking-widest" style={{ color: 'var(--color-gold-600)' }}>
          GRADED RACES
        </p>
        <h2 className="font-heading text-sm font-semibold sm:text-base" style={{ color: 'var(--color-gold-400)' }}>
          重賞レースの特徴
        </h2>
      </div>

      {races.length === 0 ? (
        <p
          className="rounded-lg p-3 text-[11px] leading-relaxed"
          style={{
            border: '1px solid var(--color-gold-600)',
            background: 'var(--color-paddock-800)',
            color: 'var(--color-muted-foreground)',
          }}
        >
          この競馬場の重賞データは準備中です。
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {races.map((race, i) => {
            const isMatch = race.surface === surface && race.distance === distance
            return (
              <div
                key={race.raceName}
                data-testid="graded-card-wrapper"
                style={
                  isMatch && i === 0
                    ? { borderRadius: '0.5rem', boxShadow: '0 0 0 2px var(--color-gold-500)' }
                    : undefined
                }
              >
                <GradedCard race={race} />
              </div>
            )
          })}
        </div>
      )}

      <Link
        href="/graded"
        className="mt-3 inline-block text-[11px] underline underline-offset-2"
        style={{ color: 'var(--color-gold-400)' }}
      >
        重賞データベース全体を見る →
      </Link>
    </section>
  )
}
```

- [ ] **Step 4: テストを実行して成功を確認**

Run: `npm test -- __tests__/components/track-graded.test.tsx`
Expected: PASS（2 tests）

- [ ] **Step 5: コミット**

```bash
git add components/track-graded.tsx __tests__/components/track-graded.test.tsx
git commit -m "feat: GradedSection（競馬場別の重賞・選択条件を先頭ハイライト）"
```

---

## Task 6: 騎手TOP5セクション `JockeySection`（フォールバック付き）

**Files:**
- Create: `components/track-jockeys.tsx`
- Test: `__tests__/components/track-jockeys.test.tsx`

- [ ] **Step 1: 失敗するテストを書く**

`__tests__/components/track-jockeys.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { JockeySection } from '@/components/track-jockeys'
import type { JockeyRankRow } from '@/lib/data/jockey-rankings'

const row = (name: string): JockeyRankRow => ({
  name, rides: 100, wins: 20, winRate: 20, placeRate: 40, winRoi: 80,
})

const rankings: Record<string, JockeyRankRow[]> = {
  'tokyo-turf-mile': [row('マイル騎手1'), row('マイル騎手2')],
  'tokyo-dirt-all': [row('ダート全体騎手')],
  'all-all-all': [row('全国騎手')],
}

describe('JockeySection', () => {
  it('完全一致キーの騎手を表示する（東京・芝・1600=mile）', () => {
    render(<JockeySection track="tokyo" surface="turf" distance={1600} rankings={rankings} />)
    expect(screen.getByText('マイル騎手1')).toBeInTheDocument()
    expect(screen.queryByText(/集計を表示/)).toBeNull()
  })

  it('距離帯キー欠損時は馬場全体にフォールバックし注記を出す（東京・ダ・long欠損）', () => {
    render(<JockeySection track="tokyo" surface="dirt" distance={2400} rankings={rankings} />)
    expect(screen.getByText('ダート全体騎手')).toBeInTheDocument()
    expect(screen.getByText(/集計を表示/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: テストを実行して失敗を確認**

Run: `npm test -- __tests__/components/track-jockeys.test.tsx`
Expected: FAIL（モジュール未作成）

- [ ] **Step 3: 実装する**

`components/track-jockeys.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import type { Track, Surface } from '@/lib/types'
import type { JockeyRankRow } from '@/lib/data/jockey-rankings'
import { jockeyRankings } from '@/lib/data/jockey-rankings'
import { distanceToBand } from '@/lib/distance-band'
import { JockeyRankTable } from '@/components/jockey-rank-table'

const SURFACE_LABEL: Record<Surface, string> = { turf: '芝', dirt: 'ダート' }

/** キー解決。完全一致→馬場全体→競馬場全体→全国 の順にフォールバック。
 *  fallback=true は「距離帯を落として広い集計を出した」ことを示す。 */
export function resolveJockeyKey(
  rankings: Record<string, JockeyRankRow[]>,
  track: Track,
  surface: Surface,
  distance: number,
): { rows: JockeyRankRow[]; fallback: boolean } {
  const band = distanceToBand(distance)
  const exact = `${track}-${surface}-${band}`
  if (rankings[exact]?.length) return { rows: rankings[exact], fallback: false }

  const bySurface = `${track}-${surface}-all`
  if (rankings[bySurface]?.length) return { rows: rankings[bySurface], fallback: true }

  const byTrack = `${track}-all-all`
  if (rankings[byTrack]?.length) return { rows: rankings[byTrack], fallback: true }

  return { rows: rankings['all-all-all'] ?? [], fallback: true }
}

export function JockeySection({
  track,
  surface,
  distance,
  rankings = jockeyRankings,
}: {
  track: Track
  surface: Surface
  distance: number
  /** テスト差し込み用。省略時は本番データ。 */
  rankings?: Record<string, JockeyRankRow[]>
}) {
  const { rows, fallback } = useMemo(
    () => resolveJockeyKey(rankings, track, surface, distance),
    [rankings, track, surface, distance],
  )
  const top5 = rows.slice(0, 5)

  return (
    <section aria-label="得意な騎手TOP5" className="mt-10">
      <div className="mb-3">
        <p className="text-xs tracking-widest" style={{ color: 'var(--color-gold-600)' }}>
          TOP JOCKEYS
        </p>
        <h2 className="font-heading text-sm font-semibold sm:text-base" style={{ color: 'var(--color-gold-400)' }}>
          得意な騎手 TOP5
        </h2>
      </div>

      {fallback && (
        <p className="mb-2 text-[11px]" style={{ color: 'var(--color-muted-foreground)' }}>
          この距離帯は騎乗数が少ないため、{SURFACE_LABEL[surface]}全体の集計を表示しています。
        </p>
      )}

      {top5.length === 0 ? (
        <p
          className="rounded-lg p-3 text-[11px] leading-relaxed"
          style={{
            border: '1px solid var(--color-gold-600)',
            background: 'var(--color-paddock-800)',
            color: 'var(--color-muted-foreground)',
          }}
        >
          この条件の騎手データは準備中です。
        </p>
      ) : (
        <JockeyRankTable rows={top5} />
      )}

      <Link
        href="/jockeys"
        className="mt-3 inline-block text-[11px] underline underline-offset-2"
        style={{ color: 'var(--color-gold-400)' }}
      >
        騎手ランキング全体を見る →
      </Link>
    </section>
  )
}
```

- [ ] **Step 4: テストを実行して成功を確認**

Run: `npm test -- __tests__/components/track-jockeys.test.tsx`
Expected: PASS（2 tests）

- [ ] **Step 5: コミット**

```bash
git add components/track-jockeys.tsx __tests__/components/track-jockeys.test.tsx
git commit -m "feat: JockeySection（競馬場×芝ダ×距離帯のTOP5・欠損フォールバック）"
```

---

## Task 7: ハブ薄コンテナ `TrackHub`（コース図＋検索＋キーファクター＋重賞＋騎手）

`CourseFinder`(fixedTrack) の選択を受けて、コース図の脚質統計・キーファクター文・`GradedSection`・`JockeySection` を連動させる。現ハブページの `CourseMap`（コース図）と `keyFactor`/`note`（文章の特性）は落とさず取り込む。

**Files:**
- Create: `components/track-hub.tsx`
- Test: `__tests__/components/track-hub.test.tsx`

- [ ] **Step 1: 失敗するテストを書く**

`__tests__/components/track-hub.test.tsx`（`CourseMap` は getPointAtLength 依存で jsdom 非対応のため、合成の単体テストではモックする）:

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

// コース図は内部で SVGPathElement.getPointAtLength を使うため、合成テストではダミー化
jest.mock('@/components/course-map', () => ({
  CourseMap: () => <div data-testid="course-map" />,
}))

describe('TrackHub', () => {
  it('コース図＋3セクション（コース検索・重賞・騎手TOP5）が揃う', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.getByTestId('course-map')).toBeInTheDocument()
    expect(screen.getByText('コース傾向＆バグ穴馬検索')).toBeInTheDocument()
    expect(screen.getByText('重賞レースの特徴')).toBeInTheDocument()
    expect(screen.getByText('得意な騎手 TOP5')).toBeInTheDocument()
  })

  it('選択中コースのキーファクターが表示される', () => {
    render(<TrackHub track="tokyo" />)
    // 東京・芝1600 の keyFactor（courses.ts 参照）に含まれる語
    expect(screen.getByText(/キーファクター/)).toBeInTheDocument()
  })

  it('競馬場チップは出ない（trackは固定）', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.queryByRole('group', { name: '競馬場選択' })).toBeNull()
  })
})
```

- [ ] **Step 2: テストを実行して失敗を確認**

Run: `npm test -- __tests__/components/track-hub.test.tsx`
Expected: FAIL（モジュール未作成）

- [ ] **Step 3: 実装する**

`components/track-hub.tsx`:

```tsx
'use client'

import { useMemo, useState } from 'react'
import type { Track, Surface } from '@/lib/types'
import { getTrack } from '@/lib/data/courses'
import { getCourseGeometry } from '@/lib/data/course-geometry'
import { CourseMap } from '@/components/course-map'
import { CourseFinder } from '@/components/course-finder'
import { GradedSection } from '@/components/track-graded'
import { JockeySection } from '@/components/track-jockeys'

export function TrackHub({ track }: { track: Track }) {
  // CourseFinder の初期選択（芝1600）に合わせる。
  // 初回マウント時に CourseFinder の onSelectionChange が実値で上書きする。
  const [sel, setSel] = useState<{ surface: Surface; distance: number }>({
    surface: 'turf',
    distance: 1600,
  })

  const trackInfo = getTrack(track)
  const geometry = getCourseGeometry(track)

  // 選択中コース（存在すれば keyFactor / note と、コース図に渡す脚質統計を得る）
  const selectedCourse = useMemo(
    () => trackInfo?.courses.find((c) => c.surface === sel.surface && c.distance === sel.distance),
    [trackInfo, sel.surface, sel.distance],
  )
  // コース図の脚質統計は選択コース優先、無ければ先頭コース
  const styleStats = selectedCourse?.runningStyleStats ?? trackInfo?.courses[0]?.runningStyleStats

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* ① コース特性 */}
      {geometry && (
        <div className="mb-6">
          <CourseMap geometry={geometry} styleStats={styleStats} />
        </div>
      )}

      <CourseFinder fixedTrack={track} onSelectionChange={setSel} />

      {/* 選択コースの文章の特性（keyFactor / note）。統計は CourseFinder と重複させない */}
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

      {/* ② 重賞 */}
      <GradedSection track={track} surface={sel.surface} distance={sel.distance} />

      {/* ③ 騎手TOP5 */}
      <JockeySection track={track} surface={sel.surface} distance={sel.distance} />
    </div>
  )
}
```

補足：`styleStats` を選択コース優先にしたのは、コース図の脚質アニメを距離選択に追随させるため（現ページは常に先頭コース固定だったので機能向上・後退なし）。

- [ ] **Step 4: テストを実行して成功を確認**

Run: `npm test -- __tests__/components/track-hub.test.tsx`
Expected: PASS（3 tests）

- [ ] **Step 5: コミット**

```bash
git add components/track-hub.tsx __tests__/components/track-hub.test.tsx
git commit -m "feat: TrackHub（コース図＋検索＋キーファクター＋重賞＋騎手TOP5を1ページ連動）"
```

---

## Task 8: トップページ用 競馬場ピッカー `TrackPicker`

**Files:**
- Create: `components/track-picker.tsx`
- Test: `__tests__/components/track-picker.test.tsx`

- [ ] **Step 1: 失敗するテストを書く**

`__tests__/components/track-picker.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { TrackPicker } from '@/components/track-picker'

describe('TrackPicker', () => {
  it('10場のリンクが /courses/[id] を指す', () => {
    render(<TrackPicker />)
    const tokyo = screen.getByRole('link', { name: '東京' })
    expect(tokyo).toHaveAttribute('href', '/courses/tokyo')
    const nakayama = screen.getByRole('link', { name: '中山' })
    expect(nakayama).toHaveAttribute('href', '/courses/nakayama')
    // 10場ぶんのリンク
    const links = ['札幌', '函館', '福島', '新潟', '東京', '中山', '中京', '京都', '阪神', '小倉']
    links.forEach((n) => expect(screen.getByRole('link', { name: n })).toBeInTheDocument())
  })
})
```

- [ ] **Step 2: テストを実行して失敗を確認**

Run: `npm test -- __tests__/components/track-picker.test.tsx`
Expected: FAIL（モジュール未作成）

- [ ] **Step 3: 実装する**

`components/track-picker.tsx`:

```tsx
'use client'

import Link from 'next/link'
import type { Track } from '@/lib/types'

const TRACK_CHIPS: { id: Track; label: string }[] = [
  { id: 'sapporo', label: '札幌' },
  { id: 'hakodate', label: '函館' },
  { id: 'fukushima', label: '福島' },
  { id: 'niigata', label: '新潟' },
  { id: 'tokyo', label: '東京' },
  { id: 'nakayama', label: '中山' },
  { id: 'chukyo', label: '中京' },
  { id: 'kyoto', label: '京都' },
  { id: 'hanshin', label: '阪神' },
  { id: 'kokura', label: '小倉' },
]

export function TrackPicker() {
  return (
    <section
      id="finder"
      aria-label="競馬場を選ぶ"
      className="rounded-xl border bg-paddock-900 px-3 py-4 sm:px-4 sm:py-5"
      style={{ borderColor: 'var(--color-paddock-700)' }}
    >
      <div className="mb-3">
        <p className="text-xs tracking-widest" style={{ color: 'var(--color-gold-600)' }}>
          SELECT COURSE
        </p>
        <h2 className="font-heading text-sm font-semibold sm:text-base" style={{ color: 'var(--color-gold-400)' }}>
          競馬場を選ぶ
        </h2>
        <p className="mt-1 text-[11px]" style={{ color: 'var(--color-muted-foreground)' }}>
          コース傾向・重賞・得意騎手TOP5をまとめて表示します。
        </p>
      </div>

      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }} role="group" aria-label="競馬場選択">
        {TRACK_CHIPS.map(({ id, label }) => (
          <Link
            key={id}
            href={`/courses/${id}`}
            className="rounded py-2 text-center text-xs font-medium transition-colors hover:border-gold-500"
            style={{ background: 'var(--color-paddock-800)', color: 'var(--color-foreground)', border: '1px solid var(--color-paddock-700)' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  )
}
```

補足：`id="finder"` を残すことで、nav の `/#finder` を触らずに済ませることも可能。ただし本プランは Task 10 で nav を `/courses` に張り替える方針（アンカーより明快なため）。`id="finder"` はトップ内リンク保険として残す。

- [ ] **Step 4: テストを実行して成功を確認**

Run: `npm test -- __tests__/components/track-picker.test.tsx`
Expected: PASS

- [ ] **Step 5: コミット**

```bash
git add components/track-picker.tsx __tests__/components/track-picker.test.tsx
git commit -m "feat: TrackPicker（トップの競馬場ピッカー）"
```

---

## Task 9: ハブページに `TrackHub` を配線

**Files:**
- Modify: `app/courses/[trackId]/page.tsx`

- [ ] **Step 1: `page.tsx` を書き換え**

`app/courses/[trackId]/page.tsx` を次に置き換える（`generateStaticParams` / `generateMetadata` は現状維持、本文のみ差し替え。コース図・`CourseTable` の直書き描画は撤去し、コース傾向は TrackHub 内の CourseFinder が担う）:

```tsx
import { notFound } from 'next/navigation'
import { tracks, getTrack } from '@/lib/data/courses'
import { TrackHub } from '@/components/track-hub'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ trackId: string }>
}

export function generateStaticParams() {
  return tracks.map((t) => ({ trackId: t.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { trackId } = await params
  const track = getTrack(trackId)
  if (!track) return { title: '404 | 馬券ファクト' }
  return {
    title: `${track.name} コース傾向・重賞・騎手 | 馬券ファクト`,
    description: `${track.name}のコース傾向・重賞レースの特徴・得意な騎手TOP5を1ページで。枠番成績・脚質傾向・バグ穴馬も掲載。`,
  }
}

export default async function TrackPage({ params }: Props) {
  const { trackId } = await params
  const track = getTrack(trackId)
  if (!track) notFound()

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-12">
        <p className="text-sm text-muted-foreground">コース傾向 / {track.name}</p>
        <h1 className="mt-1 font-heading text-2xl text-gold-400">{track.name}</h1>
      </div>
      <TrackHub track={track.id} />
    </>
  )
}
```

補足：`CourseMap` は TrackHub（Task 7）が再利用するので orphan にならない。`CourseTable` はこのページから参照されなくなるが、**削除しない**（`components/` に残す。CLAUDE.md「ファイル削除禁止」）。旧 page.tsx が import していた `CourseTable` / `CourseMap` / `getCourseGeometry` の import は上記の新 page.tsx で消えるため、未使用 import 警告は出ない（新 page.tsx は必要な import だけを持つ）。

- [ ] **Step 2: ビルドで検証**

Run: `npm run build`
Expected: `/courses/[trackId]` が静的生成され、型エラー無しで成功。

- [ ] **Step 3: 手動確認メモ（実行者向け）**

`npm run dev` で `/courses/tokyo` を開き、①コース検索②重賞③騎手TOP5が縦に並ぶこと、芝ダ/距離を変えると②③が変わることを目視。（自動確認は Task 11 のビルド＋テストで担保）

- [ ] **Step 4: コミット**

```bash
git add app/courses/[trackId]/page.tsx
git commit -m "feat: 競馬場ハブページに TrackHub を配線（コース/重賞/騎手を一括表示）"
```

---

## Task 10: トップページ差し替え＋nav CTA 張り替え

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/nav.tsx`
- 既存テスト: `__tests__/components/nav.test.tsx`（必要なら期待値更新）

- [ ] **Step 1: `app/page.tsx` の CourseFinder を TrackPicker に差し替え**

`app/page.tsx` の import：

```tsx
import { CourseFinder } from '@/components/course-finder'
```

を

```tsx
import { TrackPicker } from '@/components/track-picker'
```

に変更。本文の

```tsx
        {/* ② CourseFinder（ファーストビュー内・即表示） */}
        <CourseFinder />
```

を

```tsx
        {/* ② 競馬場ピッカー（選ぶとハブページへ） */}
        <TrackPicker />
```

に変更。他（Hero・実績バナー・レポート・特徴3カード）は変更しない。

- [ ] **Step 2: `components/nav.tsx` の CTA を張り替え**

`nav.tsx` 内、デスクトップCTAとモバイルCTAの2箇所にある `href="/#finder"` を `href="/courses"` に変更（`navLinks` 配列は変更しない）。ラベル「コース検索」はそのままでよい。

- [ ] **Step 3: nav テストの確認・更新**

Run: `npm test -- __tests__/components/nav.test.tsx`
Expected: PASS。もし `/#finder` を検証している箇所があれば `/courses` に期待値を更新して緑にする。

- [ ] **Step 4: トップページ手動確認メモ**

`npm run dev` で `/` を開き、競馬場チップを押すと `/courses/[id]` に遷移することを目視。

- [ ] **Step 5: コミット**

```bash
git add app/page.tsx components/nav.tsx __tests__/components/nav.test.tsx
git commit -m "feat: トップを競馬場ピッカーに刷新＋nav CTAをハブ入口へ"
```

---

## Task 11: 全体検証（テスト・ビルド・lint）

**Files:** なし（検証のみ）

- [ ] **Step 1: 全テスト**

Run: `npm test`
Expected: 全 suite PASS（新規 distance-band / track-graded / track-jockeys / track-hub / track-picker / course-finder 追記分を含む）。

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: エラー0。未使用 import（`CourseMap` / `CourseTable` / `Badge` など旧 page.tsx 由来）が残っていれば除去。

- [ ] **Step 3: 本番ビルド**

Run: `npm run build`
Expected: 成功。`/`・`/courses`・`/courses/[trackId]`（全10場）・`/graded`・`/jockeys` が生成される。

- [ ] **Step 4: 手動スモーク（実行者が目視）**

`npm run dev`：
1. `/` → 競馬場チップ「東京」クリック → `/courses/tokyo`。
2. ハブで芝→ダ、距離変更 → ①枠質②重賞ハイライト③騎手TOP5がすべて追随。
3. ダート未整備の場（例 函館の芝のみ）→「ダートは準備中」。距離帯欠損 → 騎手にフォールバック注記。
4. 重賞0件の場 → 「重賞データは準備中」。
5. ②③末尾の「全体を見る →」で `/graded`・`/jockeys` に遷移。

- [ ] **Step 5: 作業ログ追記**

`~/instagram_content/history_log.md` に1行追記（日付＋「keiba-hp 競馬場ハブ一本化：コース/重賞/騎手TOP5を1ページ集約」）。

- [ ] **Step 6: 最終コミット（未コミット分があれば）**

```bash
git add -A
git commit -m "chore: 競馬場ハブ一本化の仕上げ（lint/未使用import整理）"
```

---

## 自己レビュー結果（プラン作成者チェック済み）

- **spec カバレッジ**：①コース特性（コース図＋枠質＋バグ＋キーファクター文）=Task4+7、②重賞=Task2+5、③騎手TOP5=Task3+6、集約ハブ=Task7+9、トップ刷新=Task8+10、nav=Task10、`distanceToBand`=Task1、フォールバック=Task6、CourseMap/keyFactorの機能非後退=Task7、既存DB存続=変更なし。すべてタスクあり。
- **プレースホルダ**：各コードステップに実コードを記載。TBD/TODO なし。
- **型整合**：`distanceToBand` の戻り値 `DistanceBand`、`onSelectionChange` の引数 `{surface: Surface; distance: number}`、`resolveJockeyKey` の戻り `{rows, fallback}`、`GradedSection`/`JockeySection` の props 名（`track/surface/distance/allRaces|rankings`）はタスク間で一致。`JockeyRankTable` は `rows` のみ受け取り（slice は呼び出し側）で一貫。
