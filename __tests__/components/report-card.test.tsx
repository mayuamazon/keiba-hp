import { render, screen } from '@testing-library/react'
import { ReportCard } from '@/components/report-card'
import type { WeeklyReportMeta } from '@/lib/types'

const mockReport: WeeklyReportMeta = {
  slug: '2026-07-07',
  date: '2026-07-07',
  title: '七夕賞・プロキオンS分析',
  excerpt: 'テスト用の説明文',
  targetRaces: ['七夕賞（G3）'],
  results: { totalRaces: 3, hits: 2, roi: 142 },
}

describe('ReportCard', () => {
  it('タイトルとレース名を表示する', () => {
    render(<ReportCard report={mockReport} />)
    expect(screen.getByText(/七夕賞・プロキオンS分析/)).toBeInTheDocument()
    expect(screen.getAllByText(/七夕賞/)).toHaveLength(2)
  })

  it('的中結果がある場合は表示する', () => {
    render(<ReportCard report={mockReport} />)
    expect(screen.getByText(/回収率/)).toBeInTheDocument()
    expect(screen.getByText(/142/)).toBeInTheDocument()
  })
})
