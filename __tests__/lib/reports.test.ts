import { getAllReportMeta, getReportBySlug } from '@/lib/reports'

describe('reports loader', () => {
  it('getAllReportMeta returns array', async () => {
    const reports = await getAllReportMeta()
    expect(Array.isArray(reports)).toBe(true)
  })

  it('report meta has required fields', async () => {
    const reports = await getAllReportMeta()
    if (reports.length === 0) return
    const r = reports[0]
    expect(r).toHaveProperty('slug')
    expect(r).toHaveProperty('date')
    expect(r).toHaveProperty('title')
    expect(r).toHaveProperty('excerpt')
  })

  it('getReportBySlug returns null for unknown slug', async () => {
    const result = await getReportBySlug('nonexistent-slug-xyz')
    expect(result).toBeNull()
  })
})
