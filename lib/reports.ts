import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { WeeklyReportMeta } from '@/lib/types'

const REPORTS_DIR = path.join(process.cwd(), 'content/reports')

export async function getAllReportMeta(): Promise<WeeklyReportMeta[]> {
  if (!fs.existsSync(REPORTS_DIR)) return []

  const files = fs.readdirSync(REPORTS_DIR).filter((f) => f.endsWith('.mdx'))

  const reports = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const fullPath = path.join(REPORTS_DIR, filename)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(raw)

    return {
      slug,
      date: data.date ?? slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? '',
      targetRaces: data.targetRaces ?? [],
      results: data.results,
    } satisfies WeeklyReportMeta
  })

  return reports.sort((a, b) => b.date.localeCompare(a.date))
}

export async function getReportBySlug(
  slug: string
): Promise<{ meta: WeeklyReportMeta; content: string } | null> {
  const fullPath = path.join(REPORTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  return {
    meta: {
      slug,
      date: data.date ?? slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? '',
      targetRaces: data.targetRaces ?? [],
      results: data.results,
    },
    content,
  }
}
