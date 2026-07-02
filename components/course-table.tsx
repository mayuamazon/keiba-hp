import type { CourseData } from '@/lib/types'

interface RateCellProps {
  rate: number
  maxRate: number
  barColor: string
  isTop: boolean
}

function RateCell({ rate, maxRate, barColor, isTop }: RateCellProps) {
  const pct = maxRate > 0 ? (rate / maxRate) * 100 : 0
  return (
    <td className="relative overflow-hidden py-0.5 text-right">
      {/* Mini horizontal bar behind the number */}
      <span
        className="absolute inset-y-0 left-0 rounded-r-sm"
        style={{
          width: `${pct}%`,
          background: barColor,
          opacity: isTop ? 0.45 : 0.2,
        }}
        aria-hidden="true"
      />
      <span className={`relative z-10 num-data ${isTop ? 'text-gold-400' : ''}`}>
        {rate.toFixed(1)}%
      </span>
    </td>
  )
}

interface CourseTableProps {
  course: CourseData
}

export function CourseTable({ course }: CourseTableProps) {
  const surfaceLabel = course.surface === 'turf' ? '芝' : 'ダート'
  const topFrame = [...course.frameStats].sort((a, b) => b.winRate - a.winRate)[0]
  const topStyle = [...course.runningStyleStats].sort((a, b) => b.winRate - a.winRate)[0]

  const maxFrameWin = Math.max(...course.frameStats.map((f) => f.winRate))
  const maxFramePlace = Math.max(...course.frameStats.map((f) => f.placeRate))
  const maxStyleWin = Math.max(...course.runningStyleStats.map((s) => s.winRate))
  const maxStylePlace = Math.max(...course.runningStyleStats.map((s) => s.placeRate))

  return (
    <div className="rounded-lg border border-paddock-700 bg-paddock-900 p-5">
      <div className="flex items-baseline gap-3">
        <h3 className="font-heading text-lg font-semibold text-gray-100">
          {course.trackName} {surfaceLabel}{course.distance}m
        </h3>
      </div>

      {/* キーファクター: gold 左ボーダーカード */}
      <div className="mt-3 rounded border-l-2 border-gold-500 bg-paddock-800 px-3 py-2.5">
        <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold-500">
          キーファクター
        </p>
        <p className="mt-1 text-sm text-gold-400">🔑 {course.keyFactor}</p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {/* 枠番成績 */}
        <div>
          <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wider text-gray-500">
            枠番別勝率
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-500">
                <th className="pb-1 text-left">枠</th>
                <th className="pb-1 text-right">勝率</th>
                <th className="pb-1 text-right">複勝率</th>
              </tr>
            </thead>
            <tbody>
              {course.frameStats.map((f) => {
                const isTop = f.frame === topFrame.frame
                return (
                  <tr
                    key={f.frame}
                    className={isTop ? 'font-semibold' : 'text-gray-300'}
                  >
                    <td className={`py-0.5 ${isTop ? 'text-gold-400' : ''}`}>
                      {f.frame}枠
                    </td>
                    <RateCell
                      rate={f.winRate}
                      maxRate={maxFrameWin}
                      barColor="var(--color-gold-600)"
                      isTop={isTop}
                    />
                    <RateCell
                      rate={f.placeRate}
                      maxRate={maxFramePlace}
                      barColor="var(--color-turf-600)"
                      isTop={isTop}
                    />
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* 脚質成績 */}
        <div>
          <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wider text-gray-500">
            脚質別勝率
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-500">
                <th className="pb-1 text-left">脚質</th>
                <th className="pb-1 text-right">勝率</th>
                <th className="pb-1 text-right">複勝率</th>
              </tr>
            </thead>
            <tbody>
              {course.runningStyleStats.map((s) => {
                const isTop = s.style === topStyle.style
                return (
                  <tr
                    key={s.style}
                    className={isTop ? 'font-semibold' : 'text-gray-300'}
                  >
                    <td className={`py-0.5 ${isTop ? 'text-gold-400' : ''}`}>
                      {s.style}
                    </td>
                    <RateCell
                      rate={s.winRate}
                      maxRate={maxStyleWin}
                      barColor="var(--color-gold-600)"
                      isTop={isTop}
                    />
                    <RateCell
                      rate={s.placeRate}
                      maxRate={maxStylePlace}
                      barColor="var(--color-turf-600)"
                      isTop={isTop}
                    />
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">{course.note}</p>
    </div>
  )
}
