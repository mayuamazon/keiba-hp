'use client'

import Link from 'next/link'
import type { Track } from '@/lib/types'

const TRACK_CHIPS: { id: Track; label: string }[] = [
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

export function TrackPicker() {
  return (
    <section
      id="finder"
      aria-label="競馬場を選ぶ"
      className="rounded-xl border bg-paddock-900 px-3 py-4 sm:px-4 sm:py-5"
      style={{ borderColor: 'var(--color-paddock-700)' }}
    >
      <div className="mb-3">
        <p className="text-xs tracking-widest" style={{ color: 'var(--color-gold-600)' }}>
          SELECT COURSE
        </p>
        <h2 className="font-heading text-sm font-semibold sm:text-base" style={{ color: 'var(--color-gold-400)' }}>
          競馬場を選ぶ
        </h2>
        <p className="mt-1 text-[11px]" style={{ color: 'var(--color-muted-foreground)' }}>
          コース傾向・重賞・得意騎手TOP5をまとめて表示します。
        </p>
      </div>

      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }} role="group" aria-label="競馬場選択">
        {TRACK_CHIPS.map(({ id, label }) => (
          <Link
            key={id}
            href={`/courses/${id}`}
            className="rounded py-2 text-center text-xs font-medium transition-colors hover:border-gold-500"
            style={{ background: 'var(--color-paddock-800)', color: 'var(--color-foreground)', border: '1px solid var(--color-paddock-700)' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  )
}
