import Link from 'next/link'
import type { ArticleListItem } from '@/lib/articles'

export function ArticleCard({ article }: { article: ArticleListItem }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded border border-paddock-700 bg-paddock-900 p-4 transition-colors hover:border-gold-400/60"
    >
      <div className="flex items-center gap-2 text-xs">
        <span className="rounded border border-gold-400/60 px-1.5 py-0.5 text-gold-400">
          {article.raceGrade}
        </span>
        <span className="text-gray-400">{article.raceName}</span>
        <time className="ml-auto text-gray-500">{article.date}</time>
      </div>
      <h2 className="mt-2 font-heading text-lg font-bold text-gray-100">
        {article.title}
      </h2>
      <p className="mt-1 line-clamp-2 text-sm text-gray-400">{article.excerpt}</p>
    </Link>
  )
}
