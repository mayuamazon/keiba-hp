import { notFound } from 'next/navigation'
import { tracks, getTrack } from '@/lib/data/courses'
import { getCourseGeometry } from '@/lib/data/course-geometry'
import { CourseTable } from '@/components/course-table'
import { CourseMap } from '@/components/course-map'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ trackId: string }>
}

export function generateStaticParams() {
  return tracks.map((t) => ({ trackId: t.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { trackId } = await params
  const track = getTrack(trackId)
  if (!track) return { title: '404 | 馬券ファクト' }
  return {
    title: `${track.name} コース傾向 | 馬券ファクト`,
    description: `${track.name}の全コース傾向データ。枠番成績・脚質傾向・重要ファクターを掲載。`,
  }
}

export default async function TrackPage({ params }: Props) {
  const { trackId } = await params
  const track = getTrack(trackId)
  if (!track) notFound()

  const geometry = getCourseGeometry(track.id)
  // courses[0] の runningStyleStats をコース図に渡す（代表コース）
  const primaryStyleStats = track.courses[0]?.runningStyleStats ?? []

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm text-muted-foreground">コース傾向 / {track.name}</p>
      <h1 className="mt-1 font-heading text-2xl text-gold-400">{track.name}</h1>

      {/* インタラクティブコース図（ジオメトリが定義された競馬場のみ表示） */}
      {geometry && primaryStyleStats.length > 0 && (
        <div className="mt-6">
          <CourseMap geometry={geometry} styleStats={primaryStyleStats} />
        </div>
      )}

      <div className="mt-8 flex flex-col gap-6">
        {track.courses.map((course) => (
          <CourseTable
            key={`${course.trackId}-${course.surface}-${course.distance}`}
            course={course}
          />
        ))}
      </div>
    </div>
  )
}
