import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { ArticleMeta } from '@/lib/article-types'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

/** 一覧・カードで使う、slug 付きのメタ */
export type ArticleListItem = ArticleMeta & { slug: string }

function toMeta(slug: string, data: Record<string, unknown>): ArticleListItem {
  return {
    slug,
    articleType: (data.articleType as ArticleMeta['articleType']) ?? 'analysis',
    raceGrade: (data.raceGrade as ArticleMeta['raceGrade']) ?? 'G3',
    raceName: (data.raceName as string) ?? '',
    raceDate: (data.raceDate as string) ?? '',
    trackId: (data.trackId as ArticleMeta['trackId']) ?? 'tokyo',
    distance: (data.distance as string) ?? '',
    published: data.published === true,
    relatedSlugs: data.relatedSlugs as ArticleMeta['relatedSlugs'],
    date: (data.date as string) ?? slug,
    title: (data.title as string) ?? slug,
    excerpt: (data.excerpt as string) ?? '',
    results: data.results as ArticleMeta['results'],
  }
}

/** 公開記事のみ・日付降順。ディレクトリ未作成なら空配列 */
export async function getAllArticleMeta(): Promise<ArticleListItem[]> {
  if (!fs.existsSync(ARTICLES_DIR)) return []

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf8')
      const { data } = matter(raw)
      return toMeta(slug, data)
    })
    .filter((a) => a.published)
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** 単一記事（published 問わず本文取得。ページ側で存在判定に使う） */
export async function getArticleBySlug(
  slug: string
): Promise<{ meta: ArticleListItem; content: string } | null> {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: toMeta(slug, data), content }
}
