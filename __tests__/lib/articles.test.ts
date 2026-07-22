import fs from 'fs'
import path from 'path'
import { getAllArticleMeta, getArticleBySlug } from '@/lib/articles'

describe('articles loader', () => {
  it('getAllArticleMeta は配列を返す', async () => {
    const articles = await getAllArticleMeta()
    expect(Array.isArray(articles)).toBe(true)
  })

  it('published:false は一覧から除外される', async () => {
    const articles = await getAllArticleMeta()
    expect(articles.every((a) => a.published === true)).toBe(true)
  })

  it('日付降順にソートされている', async () => {
    const articles = await getAllArticleMeta()
    for (let i = 1; i < articles.length; i++) {
      expect(articles[i - 1].date >= articles[i].date).toBe(true)
    }
  })

  it('各記事に slug が付与される', async () => {
    const articles = await getAllArticleMeta()
    if (articles.length === 0) return
    expect(articles[0]).toHaveProperty('slug')
  })

  it('未知の slug では null を返す', async () => {
    const result = await getArticleBySlug('nonexistent-slug-xyz')
    expect(result).toBeNull()
  })

  // 回帰: 日本語 slug は動的パラメータで percent-encoded のまま渡ることがあり、
  // 復号しないと詳細ページが 404 になる（実機で再現・2026-07-22 修正）
  describe('日本語 slug の percent-encoded 復号', () => {
    const rawSlug = '2026-07-22-にほんごすらぐてすと-analysis'
    const fixture = path.join(process.cwd(), 'content/articles', `${rawSlug}.mdx`)

    beforeAll(() => {
      fs.mkdirSync(path.dirname(fixture), { recursive: true })
      fs.writeFileSync(
        fixture,
        `---\ntitle: "日本語slugテスト"\npublished: true\ndate: "2026-07-22"\n---\n\n本文\n`
      )
    })

    afterAll(() => {
      fs.rmSync(fixture, { force: true })
    })

    it('encodeURIComponent された slug でも記事を解決できる', async () => {
      const encoded = encodeURIComponent(rawSlug)
      const result = await getArticleBySlug(encoded)
      expect(result).not.toBeNull()
      expect(result?.meta.slug).toBe(rawSlug)
    })

    it('復号済み（生の日本語）slug でも解決できる', async () => {
      const result = await getArticleBySlug(rawSlug)
      expect(result).not.toBeNull()
    })
  })
})
