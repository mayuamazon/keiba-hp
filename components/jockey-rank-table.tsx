'use client'

import type { JockeyRankRow } from '@/lib/data/jockey-rankings'

/** 複勝率30%超 or 単勝回収率100%超 → 赤強調 */
function highlightColor(condition: boolean): React.CSSProperties {
  return condition
    ? {
        color: 'color-mix(in oklab, var(--color-silks-red) 85%, transparent)',
        fontWeight: 700,
      }
    : { color: 'var(--color-gold-400)' }
}

/** 騎手ランキング表。rows をそのまま 1 位から表示する（件数の絞り込みは呼び出し側で slice）。 */
export function JockeyRankTable({ rows }: { rows: JockeyRankRow[] }) {
  return (
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
  )
}
