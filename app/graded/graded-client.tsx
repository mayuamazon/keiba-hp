'use client'

import { useState } from 'react'
import type { GradedRace } from '@/lib/data/graded-races'

// ─── 定数 ────────────────────────────────────────────────────────────────────

const GRADES = ['G1', 'G2', 'G3'] as const
type Grade = (typeof GRADES)[number]

const TRACK_CHIPS = [
  { id: '全場', label: '全場' },
  { id: '札幌', label: '札幌' },
  { id: '函館', label: '函館' },
  { id: '福島', label: '福島' },
  { id: '新潟', label: '新潟' },
  { id: '東京', label: '東京' },
  { id: '中山', label: '中山' },
  { id: '中京', label: '中京' },
  { id: '京都', label: '京都' },
  { id: '阪神', label: '阪神' },
  { id: '小倉', label: '小倉' },
]

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

// ─── helpers ─────────────────────────────────────────────────────────────────

/** 複勝率30%超 → 赤強調 */
function placeRateColor(rate: number): string {
  return rate > 30
    ? 'color-mix(in oklab, var(--color-silks-red) 85%, transparent)'
    : 'var(--color-gold-400)'
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="rounded px-3 py-1 text-sm transition-colors"
      style={{
        background: active ? 'var(--color-gold-500)' : 'var(--color-paddock-800)',
        color: active ? 'var(--color-paddock-950)' : 'var(--color-muted-foreground)',
        fontWeight: active ? 700 : 400,
      }}
    >
      {label}
    </button>
  )
}

// ─── 重賞カード（アコーディオン） ───────────────────────────────────────────

function GradedCard({ race }: { race: GradedRace }) {
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
          {/* グレードバッジ */}
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
          {/* 歴代勝ち馬 */}
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

          {/* 集計セクション */}
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
                    <tr
                      key={label}
                      className="border-t"
                      style={{ borderColor: 'var(--color-paddock-800)' }}
                    >
                      <td className="py-1 text-gray-400">{label}</td>
                      <td className="py-1 text-right text-gray-300">{stat.count}</td>
                      <td className="py-1 text-right text-gray-300">{stat.wins}</td>
                      <td
                        className="py-1 text-right font-bold"
                        style={{ color: placeRateColor(stat.placeRate) }}
                      >
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
                    <tr
                      key={label}
                      className="border-t"
                      style={{ borderColor: 'var(--color-paddock-800)' }}
                    >
                      <td className="py-1 text-gray-400">{label}</td>
                      <td className="py-1 text-right text-gray-300">{stat.count}</td>
                      <td
                        className="py-1 text-right font-bold"
                        style={{ color: placeRateColor(stat.placeRate) }}
                      >
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
                      <div
                        className="h-3 flex-1 overflow-hidden rounded-sm"
                        style={{ background: 'var(--color-paddock-800)' }}
                      >
                        <div
                          className="h-full rounded-sm"
                          style={{
                            width: `${pct}%`,
                            background: 'color-mix(in oklab, var(--color-gold-600) 35%, transparent)',
                          }}
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

// ─── メインクライアントコンポーネント ────────────────────────────────────────

export function GradedClient({ races }: { races: GradedRace[] }) {
  const [selectedGrade, setSelectedGrade] = useState<Grade | 'ALL'>('ALL')
  const [selectedPlace, setSelectedPlace] = useState('全場')

  const filtered = races.filter((r) => {
    const gradeOk = selectedGrade === 'ALL' || r.grade === selectedGrade
    const placeOk = selectedPlace === '全場' || r.place === selectedPlace
    return gradeOk && placeOk
  })

  // 現在選択場に存在する場を絞り込み（チップの関連を分かりやすくする）
  const existingPlaces = new Set(races
    .filter((r) => selectedGrade === 'ALL' || r.grade === r.grade)
    .map((r) => r.place))

  return (
    <>
      {/* グレードタブ */}
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="グレード選択">
        {(['ALL', ...GRADES] as const).map((g) => (
          <Chip
            key={g}
            label={g === 'ALL' ? '全グレード' : g}
            active={selectedGrade === g}
            onClick={() => setSelectedGrade(g)}
          />
        ))}
      </div>

      {/* 競馬場フィルタチップ */}
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="競馬場選択">
        {TRACK_CHIPS.filter(
          (c) => c.id === '全場' || existingPlaces.has(c.label)
        ).map((c) => (
          <Chip
            key={c.id}
            label={c.label}
            active={selectedPlace === c.id}
            onClick={() => setSelectedPlace(c.id)}
          />
        ))}
      </div>

      {/* 件数 */}
      <p className="mt-4 text-xs text-gray-500">
        {filtered.length} 重賞を表示
      </p>

      {/* カード一覧 */}
      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-sm text-gray-500">
          該当する重賞データがありません。
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {filtered.map((race) => (
            <GradedCard key={race.raceName} race={race} />
          ))}
        </div>
      )}
    </>
  )
}
