import { getAllReportMeta } from '@/lib/reports'
import { ReportCard } from '@/components/report-card'

export default async function HomePage() {
  const reports = await getAllReportMeta()
  const latest = reports[0]
  const recent = reports.slice(0, 6)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* ヒーローセクション */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gold-400">馬券ファクト</h1>
        <p className="mt-3 text-xl text-gray-300">調べ尽くして、論理で買う。</p>
        <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
          調教タイム・騎手コメント・コース傾向・ペース想定を全部拾って、
          データで根拠を示す競馬予想サイト。毎週月〜火曜更新。
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="https://note.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-gold-500 px-5 py-2.5 font-semibold text-navy-900 hover:bg-gold-400 transition-colors"
          >
            買い目を見る（Note）
          </a>
          <a
            href="/report"
            className="rounded border border-gold-500 px-5 py-2.5 font-semibold text-gold-400 hover:bg-navy-800 transition-colors"
          >
            週次レポート →
          </a>
        </div>
      </section>

      {/* 最新レポート */}
      {latest && (
        <section className="mt-16">
          <h2 className="text-lg font-semibold text-gray-200 mb-4">
            📋 最新レポート
          </h2>
          <ReportCard report={latest} />
        </section>
      )}

      {/* 過去レポート */}
      {recent.length > 1 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-gray-200 mb-4">
            過去のレポート
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {recent.slice(1).map((report) => (
              <ReportCard key={report.slug} report={report} />
            ))}
          </div>
        </section>
      )}

      {/* サイト特徴 */}
      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: '🔬',
            title: '調教・コメント分析',
            desc: '調教タイム・調教師コメント・騎手コメントを毎週収集して評価',
          },
          {
            icon: '📊',
            title: 'コース傾向データ',
            desc: '競馬場・コース別の枠番成績・脚質傾向を常時掲載',
          },
          {
            icon: '📝',
            title: '外れた理由も公開',
            desc: '的中・不的中問わず毎週振り返りを公開。言いっぱなしにしない',
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="rounded-lg border border-navy-700 bg-navy-800 p-5"
          >
            <span className="text-2xl">{icon}</span>
            <h3 className="mt-2 font-semibold text-gray-100">{title}</h3>
            <p className="mt-1 text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
