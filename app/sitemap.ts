import type { MetadataRoute } from 'next'
import { getAllArticleMeta } from '@/lib/articles'

const SITE_URL = 'https://keiba-hp.vercel.app'

const STATIC_ROUTES = [
  '',
  '/courses',
  '/graded',
  '/jockeys',
  '/training',
  '/report',
  '/articles',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticleMeta()

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))

  const articleEntries = articles.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.date),
  }))

  return [...staticEntries, ...articleEntries]
}
