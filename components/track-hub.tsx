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
