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
  const { rows, fallback } = useMemo(
    () => resolveJockeyKey(rankings, track, surface, distance),
    [rankings, track, surface, distance],
  )
  const top5 = rows.slice(0, 5)

  return (
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
