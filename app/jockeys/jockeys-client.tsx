'use client'

import { useState } from 'react'
import type { JockeyRankRow } from '@/lib/data/jockey-rankings'
import { JockeyRankTable } from '@/components/jockey-rank-table'

// ─── 定数 ────────────────────────────────────────────────────────────────────

const TRACK_CHIPS = [
  { id: 'all', label: '全国' },
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

const SURFACE_CHIPS = [
  { id: 'all', label: '全馬場' },
  { id: 'turf', label: '芝' },
  { id: 'dirt', label: 'ダート' },
]

const DIST_CHIPS = [
  { id: 'all', label: '全距離' },
  { id: 'sprint', label: '短距離 ≤1400' },
  { id: 'mile', label: 'マイル 1401-1600' },
  { id: 'middle', label: '中距離 1601-2200' },
  { id: 'long', label: '長距離 ≥2201' },
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

export function JockeysClient({
  rankings,
}: {
  rankings: Record<string, JockeyRankRow[]>
}) {
  const [track, setTrack] = useState('all')
  const [surface, setSurface] = useState('all')
  const [distBand, setDistBand] = useState('all')

  const key = `${track}-${surface}-${distBand}`
  const rows: JockeyRankRow[] = rankings[key] ?? []

  return (
    <>
      {/* フィルタ: 場 */}
      <div
        className="mt-6 flex flex-wrap gap-2"
        role="group"
        aria-label="競馬場選択"
      >
        {TRACK_CHIPS.map((c) => (
          <Chip
            key={c.id}
            label={c.label}
            active={track === c.id}
            onClick={() => setTrack(c.id)}
          />
        ))}
      </div>

      {/* フィルタ: 馬場 */}
      <div
        className="mt-3 flex flex-wrap gap-2"
        role="group"
        aria-label="馬場選択"
      >
        {SURFACE_CHIPS.map((c) => (
          <Chip
            key={c.id}
            label={c.label}
            active={surface === c.id}
            onClick={() => setSurface(c.id)}
          />
        ))}
      </div>

      {/* フィルタ: 距離帯 */}
      <div
        className="mt-3 flex flex-wrap gap-2"
        role="group"
        aria-label="距離帯選択"
      >
        {DIST_CHIPS.map((c) => (
          <Chip
            key={c.id}
            label={c.label}
            active={distBand === c.id}
            onClick={() => setDistBand(c.id)}
          />
        ))}
      </div>

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

      <p className="mt-4 text-right text-xs text-gray-600">
        JRA-VAN 2021-2026 自社集計・直近6ヶ月騎乗のある騎手のみ（全国200騎乗以上 / 場別50騎乗以上）
      </p>
    </>
  )
}
