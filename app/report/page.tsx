import { getAllReportMeta } from '@/lib/reports'
import { ReportCard } from '@/components/report-card'

export default async function ReportListPage() {
  const reports = await getAllReportMeta()

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gold-400">週次レポート</h1>
      <p className="mt-2 text-sm text-gray-400">
        毎週月〜火曜更新。先週の振り返り＋今週のプレビューをセットで公開。
      </p>

      {reports.length === 0 ? (
        <p className="mt-8 text-gray-500">レポートはまだありません。</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {reports.map((report) => (
            <ReportCard key={report.slug} report={report} />
          ))}
        </div>
      )}
    </div>
  )
}
