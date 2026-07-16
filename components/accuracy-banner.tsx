'use client'

import { CountUp } from '@/components/motion/count-up'

interface AccuracyBannerProps {
  period: string
  totalRaces: number
  hits: number
  avgRoi: number
}

export function AccuracyBanner({
  period,
  totalRaces,
  hits,
  avgRoi,
}: AccuracyBannerProps) {
  const winRate = totalRaces > 0 ? Math.round((hits / totalRaces) * 100) : 0

  return (
    <div className="rounded-lg border border-paddock-700 bg-paddock-900 p-5">
      <p className="text-xs text-muted-foreground">{period}の実績</p>
      {totalRaces > 0 ? (
        <div className="mt-3 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">
              <CountUp
                value={winRate}
                suffix="%"
                duration={1.4}
                className="num-data"
              />
            </p>
            <p className="text-xs text-muted-foreground">的中率</p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              <CountUp
                value={hits}
                duration={1.4}
                className="num-data"
              />
              <span className="num-data">/</span>
              <CountUp
                value={totalRaces}
                duration={1.4}
                className="num-data"
              />
            </p>
            <p className="text-xs text-muted-foreground">的中/対象</p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              <CountUp
                value={avgRoi}
                suffix="%"
                duration={1.4}
                className="num-data"
              />
            </p>
            <p className="text-xs text-muted-foreground">平均回収率</p>
          </div>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          実績集計は準備中です。予想レポートの公開開始とともに、的中率・回収率をここで毎週更新します。
        </p>
      )}
    </div>
  )
}
