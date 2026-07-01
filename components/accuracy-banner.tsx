interface AccuracyBannerProps {
  period: string
  totalRaces: number
  hits: number
  avgRoi: number
}

export function AccuracyBanner({ period, totalRaces, hits, avgRoi }: AccuracyBannerProps) {
  const winRate = totalRaces > 0 ? Math.round((hits / totalRaces) * 100) : 0

  return (
    <div className="rounded-lg border border-navy-700 bg-navy-800 p-5">
      <p className="text-xs text-gray-500">{period}の実績</p>
      <div className="mt-3 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-gold-400">{winRate}%</p>
          <p className="text-xs text-gray-500">的中率</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gold-400">{hits}/{totalRaces}</p>
          <p className="text-xs text-gray-500">的中/対象</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gold-400">{avgRoi}%</p>
          <p className="text-xs text-gray-500">平均回収率</p>
        </div>
      </div>
    </div>
  )
}
