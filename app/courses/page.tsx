import Link from 'next/link'
import { tracks } from '@/lib/data/courses'
import { courseGeometries } from '@/lib/data/course-geometry'
import { GateReveal } from '@/components/motion/gate-reveal'
import { HoverLift } from '@/components/motion/hover-lift'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'コース傾向データベース | 馬券ファクト',
  description: '競馬場別に枠番成績・脚質傾向・重要ファクターをまとめています。',
}

const DIRECTIONS = ['left', 'up', 'right'] as const

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        コース傾向データベース
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        競馬場別に枠番成績・脚質傾向・重要ファクターをまとめています。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {tracks.map((track, index) => {
          const hasMap = track.id in courseGeometries
          const direction = DIRECTIONS[index % 3]
          return (
            <GateReveal key={track.id} direction={direction} delay={index * 0.06}>
              <HoverLift>
                <Link href={`/courses/${track.id}`} className="block">
                  <div className="group rounded-lg border border-paddock-700 bg-paddock-900 p-4 transition-colors hover:border-gold-500">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-heading font-semibold text-gray-100 transition-colors group-hover:text-gold-400">
                        {track.name}
                      </p>
                      {hasMap && (
                        <Badge
                          variant="outline"
                          className="shrink-0 border-turf-500 text-turf-400 text-xs"
                        >
                          コース図あり
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{track.region}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      コース数: {track.courses.length}
                    </p>
                  </div>
                </Link>
              </HoverLift>
            </GateReveal>
          )
        })}
      </div>
    </div>
  )
}
