'use client'

import { useState } from 'react'
import type { GradedRace } from '@/lib/data/graded-races'
import { GradedCard } from '@/components/graded-race-card'

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

// ─── helpers ─────────────────────────────────────────────────────────────────

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
