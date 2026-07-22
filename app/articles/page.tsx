import type { Metadata } from 'next'
import { getAllArticleMeta } from '@/lib/articles'
import { ArticleCard } from '@/components/article-card'
import { GateReveal } from '@/components/motion/gate-reveal'
import { HoverLift } from '@/components/motion/hover-lift'

const DIRECTIONS = ['left', 'up', 'right'] as const

export const metadata: Metadata = {
  title: '読み物 | 馬券ファクト',
  description: '重賞レースを過去5年の実データで読み解く、データドリブンな読み物。',
}

export default async function ArticleListPage() {
  const articles = await getAllArticleMeta()

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        読み物
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        重賞レースを、過去5年の実データで読み解く。
      </p>

      {articles.length === 0 ? (
        <p className="mt-8 text-gray-500">記事はまだありません。</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {articles.map((article, index) => (
            <GateReveal
              key={article.slug}
              direction={DIRECTIONS[index % 3]}
              delay={index * 0.06}
            >
              <HoverLift>
                <ArticleCard article={article} />
              </HoverLift>
            </GateReveal>
          ))}
        </div>
      )}
    </div>
  )
}
