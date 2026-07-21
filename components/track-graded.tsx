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
