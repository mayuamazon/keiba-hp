import { gradedRaces } from '@/lib/data/graded-races'
import { GradedClient } from './graded-client'

export const metadata = {
  title: '重賞データ | 馬券ファクト',
  description: '平地重賞（G1/G2/G3）の歴代勝ち馬・人気帯別・枠帯別・脚質別集計。JRA-VAN 2021-2026 自社集計。',
}

export default function GradedPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        重賞データ
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        平地重賞（G1/G2/G3）の歴代勝ち馬・傾向データ。JRA-VAN 2021-2026 自社集計。
      </p>
      <GradedClient races={gradedRaces} />
    </div>
  )
}
