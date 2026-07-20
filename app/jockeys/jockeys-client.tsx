'use client'

import { useState } from 'react'
import type { JockeyRankRow } from '@/lib/data/jockey-rankings'

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

/** 複勝率30%超 or 単勝回収率100%超 → 赤強調 */
function highlightColor(condition: boolean): React.CSSProperties {
  return condition
    ? {
        color: 'color-mix(in oklab, var(--color-silks-red) 85%, transparent)',
        fontWeight: 700,
      }
    : { color: 'var(--color-gold-400)' }
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
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr
                  className="border-b text-xs text-gray-500"
                  style={{ borderColor: 'var(--color-paddock-700)' }}
                >
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
                    <td className="py-2.5 pr-4 text-right text-gray-400">
                      {row.rides.toLocaleString()}
                    </td>
                    <td className="py-2.5 pr-4 text-right text-gray-300">
                      {row.wins.toLocaleString()}
                    </td>
                    <td
                      className="py-2.5 pr-4 text-right"
                      style={{ color: 'var(--color-gold-400)' }}
                    >
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
        )}
      </div>

      <p className="mt-4 text-right text-xs text-gray-600">
        JRA-VAN 2021-2026 自社集計・直近6ヶ月騎乗のある騎手のみ（全国200騎乗以上 / 場別50騎乗以上）
      </p>
    </>
  )
}
