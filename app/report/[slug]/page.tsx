import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllReportMeta, getReportBySlug } from '@/lib/reports'
import { NoteCta } from '@/components/note-cta'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const reports = await getAllReportMeta()
  return reports.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const report = await getReportBySlug(slug)
  if (!report) return {}
  return {
    title: `${report.meta.title} | 馬券ファクト`,
    description: report.meta.excerpt,
  }
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params
  const report = await getReportBySlug(slug)
  if (!report) notFound()

  const { meta, content } = report

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <time className="text-sm text-gray-500">{meta.date}</time>
      <h1 className="mt-2 text-2xl font-bold text-gold-400">{meta.title}</h1>

      {meta.results && meta.results.totalRaces > 0 && (
        <div className="mt-4 flex gap-4 rounded border border-navy-700 bg-navy-800 p-3 text-sm">
          <span className="text-gray-400">結果：</span>
          <span className="text-gold-400">
            {meta.results.hits}/{meta.results.totalRaces}的中
          </span>
          <span className="text-gray-400">
            回収率 {meta.results.roi}%
          </span>
        </div>
      )}

      <article className="prose prose-invert mt-8 max-w-none">
        <MDXRemote
          source={content}
          components={{
            NoteCta,
          }}
        />
      </article>

      <div className="mt-12">
        <NoteCta
          raceTitle={meta.targetRaces[0] ?? '今週の重賞'}
          noteUrl="https://note.com"
        />
      </div>
    </div>
  )
}
