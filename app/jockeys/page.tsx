import { jockeys } from '@/lib/data/jockeys'
import { Badge } from '@/components/ui/badge'
import { GateReveal } from '@/components/motion/gate-reveal'
import { HoverLift } from '@/components/motion/hover-lift'
import { CountUp } from '@/components/motion/count-up'
import type { Track } from '@/lib/types'

const trackNames: Record<Track, string> = {
  tokyo: '東京', nakayama: '中山', hanshin: '阪神', kyoto: '京都',
  chukyo: '中京', kokura: '小倉', fukushima: '福島', niigata: '新潟',
  hakodate: '函館', sapporo: '札幌',
}

export const metadata = {
  title: '騎手・調教師データ | 馬券ファクト',
  description: '主要騎手のコース別勝率・近況フォームを掲載。',
}

const DIRECTIONS = ['left', 'up', 'right'] as const

export default function JockeysPage() {
  const activeJockeys = jockeys.filter((j) => j.isActive !== false)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        騎手データ
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        主要騎手の成績・得意コース・近況フォームをまとめています。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {activeJockeys.map((j, index) => (
          <GateReveal
            key={j.name}
            direction={DIRECTIONS[index % 3]}
            delay={index * 0.06}
          >
            <HoverLift>
              <div className="rounded-lg border border-paddock-700 bg-paddock-900 p-5">
                {/* ヘッダー：騎手名 + 勝率 */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-semibold text-gray-100">{j.name}</h3>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">勝率</p>
                    <CountUp
                      value={j.winRate}
                      decimals={1}
                      suffix="%"
                      className="num-data text-lg font-bold text-gold-400"
                    />
                  </div>
                </div>

                {/* 数値行：複勝率・勝利数 */}
                <div className="mt-3 flex gap-6 text-sm">
                  <div>
                    <p className="text-xs text-gray-500">複勝率</p>
                    <CountUp
                      value={j.placeRate}
                      decimals={1}
                      suffix="%"
                      className="num-data text-gray-300"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">勝利数</p>
                    <CountUp
                      value={j.wins}
                      className="num-data text-gray-300"
                    />
                  </div>
                </div>

                {/* 直近フォーム */}
                <div className="mt-3 font-mono text-sm text-gray-400">
                  直近: <span className="text-gray-200">{j.recentForm}</span>
                </div>

                {/* 得意コース */}
                {j.strongTracks.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {j.strongTracks.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="border-paddock-600 text-xs text-gray-400"
                      >
                        {trackNames[t]}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* メモ */}
                {j.note && (
                  <p className="mt-3 text-xs text-gray-500">{j.note}</p>
                )}
              </div>
            </HoverLift>
          </GateReveal>
        ))}
      </div>
    </div>
  )
}
