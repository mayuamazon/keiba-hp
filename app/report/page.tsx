import { getAllReportMeta } from '@/lib/reports'
import { ReportCard } from '@/components/report-card'
import { GateReveal } from '@/components/motion/gate-reveal'
import { HoverLift } from '@/components/motion/hover-lift'

const DIRECTIONS = ['left', 'up', 'right'] as const

export default async function ReportListPage() {
  const reports = await getAllReportMeta()

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        週次レポート
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        毎週月〜火曜更新。先週の振り返り＋今週のプレビューをセットで公開。
      </p>

      {reports.length === 0 ? (
        <p className="mt-8 text-gray-500">レポートはまだありません。</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {reports.map((report, index) => (
            <GateReveal
              key={report.slug}
              direction={DIRECTIONS[index % 3]}
              delay={index * 0.06}
            >
              <HoverLift>
                <ReportCard report={report} />
              </HoverLift>
            </GateReveal>
          ))}
        </div>
      )}
    </div>
  )
}
