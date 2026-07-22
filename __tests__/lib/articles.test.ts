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
})
