import Link from 'next/link'
import { tracks } from '@/lib/data/courses'

export const metadata = {
  title: 'コース傾向データベース | 馬券ファクト',
  description: '競馬場別に枠番成績・脚質傾向・重要ファクターをまとめています。',
}

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gold-400">コース傾向データベース</h1>
      <p className="mt-2 text-sm text-gray-400">
        競馬場別に枠番成績・脚質傾向・重要ファクターをまとめています。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {tracks.map((track) => (
          <Link key={track.id} href={`/courses/${track.id}`}>
            <div className="group rounded-lg border border-navy-700 bg-navy-800 p-4 hover:border-gold-500 transition-colors">
              <p className="font-semibold text-gray-100 group-hover:text-gold-400 transition-colors">
                {track.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">{track.region}</p>
              <p className="text-xs text-gray-500 mt-1">
                コース数: {track.courses.length}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
