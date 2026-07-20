import { JockeysClient } from './jockeys-client'
import { jockeyRankings } from '@/lib/data/jockey-rankings'

export const metadata = {
  title: '騎手ランキング | 馬券ファクト',
  description: 'JRA-VAN 2021-2026 実データによる騎手成績ランキング。場・馬場・距離帯別に絞り込み可能。',
}

export default function JockeysPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        騎手ランキング
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        JRA-VAN 2021-2026 実データ集計・直近6ヶ月騎乗のある騎手のみ掲載。
      </p>
      <JockeysClient rankings={jockeyRankings} />
    </div>
  )
}
