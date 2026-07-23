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
