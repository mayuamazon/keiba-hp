import { jockeys } from '@/lib/data/jockeys'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: '騎手・調教師データ | 馬券ファクト',
  description: '主要騎手のコース別勝率・近況フォームを掲載。',
}

export default function JockeysPage() {
  const activeJockeys = jockeys.filter((j) => j.isActive !== false)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gold-400">騎手データ</h1>
      <p className="mt-2 text-sm text-gray-400">
        主要騎手の成績・得意コース・近況フォームをまとめています。
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-navy-700 text-xs text-gray-500">
              <th className="pb-3 text-left">騎手名</th>
              <th className="pb-3 text-right">勝率</th>
              <th className="pb-3 text-right">複勝率</th>
              <th className="pb-3 text-center">直近5走</th>
              <th className="pb-3 text-left">得意コース</th>
              <th className="pb-3 text-left">メモ</th>
            </tr>
          </thead>
          <tbody>
            {activeJockeys.map((j) => (
              <tr key={j.name} className="border-b border-navy-800">
                <td className="py-3 font-semibold text-gray-100">{j.name}</td>
                <td className="py-3 text-right text-gold-400">{j.winRate}%</td>
                <td className="py-3 text-right text-gray-300">{j.placeRate}%</td>
                <td className="py-3 text-center font-mono text-gray-300">
                  {j.recentForm}
                </td>
                <td className="py-3">
                  <div className="flex flex-wrap gap-1">
                    {j.strongTracks.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="border-navy-600 text-xs text-gray-400"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="py-3 text-xs text-gray-500 max-w-xs">{j.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
