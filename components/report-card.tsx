import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import type { WeeklyReportMeta } from '@/lib/types'

interface ReportCardProps {
  report: WeeklyReportMeta
}

export function ReportCard({ report }: ReportCardProps) {
  const { slug, date, title, excerpt, targetRaces, results } = report

  return (
    <Link href={`/report/${slug}`}>
      <div className="group rounded-lg border border-paddock-700 bg-paddock-800 p-5 transition-colors hover:border-gold-500">
        <div className="flex items-start justify-between gap-2">
          <time className="text-xs text-gray-500">{date}</time>
          {results && results.totalRaces > 0 && (
            <span className="text-xs text-gold-400">
              {results.hits}/{results.totalRaces}的中 · 回収率{results.roi}%
            </span>
          )}
        </div>
        <h3 className="mt-2 font-semibold text-gray-100 group-hover:text-gold-400 transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">{excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {targetRaces.map((race) => (
            <Badge
              key={race}
              variant="outline"
              className="border-paddock-600 text-xs text-muted-foreground"
            >
              {race}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}
