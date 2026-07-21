import { notFound } from 'next/navigation'
import { tracks, getTrack } from '@/lib/data/courses'
import { TrackHub } from '@/components/track-hub'
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
    title: `${track.name} コース傾向・重賞・騎手 | 馬券ファクト`,
    description: `${track.name}のコース傾向・重賞レースの特徴・得意な騎手TOP5を1ページで。枠番成績・脚質傾向・バグ穴馬も掲載。`,
  }
}

export default async function TrackPage({ params }: Props) {
  const { trackId } = await params
  const track = getTrack(trackId)
  if (!track) notFound()

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-12">
        <p className="text-sm text-muted-foreground">コース傾向 / {track.name}</p>
        <h1 className="mt-1 font-heading text-2xl text-gold-400">{track.name}</h1>
      </div>
      <TrackHub track={track.id} />
    </>
  )
}
