import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { getAllArticleMeta, getArticleBySlug } from '@/lib/articles'

const SITE_URL = 'https://keiba-hp.vercel.app'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getAllArticleMeta()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article || !article.meta.published) return { title: '404 | 馬券ファクト' }
  const { meta } = article
  const url = `${SITE_URL}/articles/${slug}`
  return {
    title: `${meta.title} | 馬券ファクト`,
    description: meta.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      url,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  // 下書き（published:false）は公開ページとして表示しない
  if (!article || !article.meta.published) notFound()

  const { meta, content } = article

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    about: meta.raceName,
    author: { '@type': 'Organization', name: '馬券ファクト' },
    publisher: { '@type': 'Organization', name: '馬券ファクト' },
    mainEntityOfPage: `${SITE_URL}/articles/${slug}`,
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex items-center gap-2 text-xs">
        <span className="rounded border border-gold-400/60 px-1.5 py-0.5 text-gold-400">
          {meta.raceGrade}
        </span>
        <span className="text-gray-400">{meta.raceName}</span>
        <time className="ml-auto text-gray-500">{meta.date}</time>
      </div>

      <h1 className="mt-2 font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        {meta.title}
      </h1>

      <article className="prose prose-invert mt-8 max-w-none">
        <MDXRemote source={content} />
      </article>

      {/* 内部リンク（SEO土台）：このレースのコース傾向・重賞データへ */}
      <nav className="mt-12 flex flex-wrap gap-3 border-t border-paddock-700 pt-6 text-sm">
        <Link href={`/courses/${meta.trackId}`} className="text-gold-400 hover:underline">
          → {meta.raceName}のコース傾向を見る
        </Link>
        <Link href="/graded" className="text-gold-400 hover:underline">
          → 重賞データ一覧
        </Link>
      </nav>
    </div>
  )
}
