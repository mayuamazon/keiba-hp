import type { CourseData } from '@/lib/types'

interface CourseTableProps {
  course: CourseData
}

export function CourseTable({ course }: CourseTableProps) {
  const surfaceLabel = course.surface === 'turf' ? '芝' : 'ダート'
  const topFrame = [...course.frameStats].sort((a, b) => b.winRate - a.winRate)[0]
  const topStyle = [...course.runningStyleStats].sort((a, b) => b.winRate - a.winRate)[0]

  return (
    <div className="rounded-lg border border-navy-700 bg-navy-800 p-5">
      <div className="flex items-baseline gap-3">
        <h3 className="text-lg font-semibold text-gray-100">
          {course.trackName} {surfaceLabel}{course.distance}m
        </h3>
      </div>

      <div className="mt-2 rounded bg-navy-900 px-3 py-2 text-sm text-gold-400">
        🔑 {course.keyFactor}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {/* 枠番成績 */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
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
              {course.frameStats.map((f) => (
                <tr
                  key={f.frame}
                  className={
                    f.frame === topFrame.frame
                      ? 'text-gold-400 font-semibold'
                      : 'text-gray-300'
                  }
                >
                  <td className="py-0.5">{f.frame}枠</td>
                  <td className="py-0.5 text-right">{f.winRate.toFixed(1)}%</td>
                  <td className="py-0.5 text-right">{f.placeRate.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 脚質成績 */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
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
              {course.runningStyleStats.map((s) => (
                <tr
                  key={s.style}
                  className={
                    s.style === topStyle.style
                      ? 'text-gold-400 font-semibold'
                      : 'text-gray-300'
                  }
                >
                  <td className="py-0.5">{s.style}</td>
                  <td className="py-0.5 text-right">{s.winRate.toFixed(1)}%</td>
                  <td className="py-0.5 text-right">{s.placeRate.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">{course.note}</p>
    </div>
  )
}
