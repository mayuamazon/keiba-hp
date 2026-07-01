import { render, screen } from '@testing-library/react'
import { CourseTable } from '@/components/course-table'
import type { CourseData } from '@/lib/types'

const mockCourse: CourseData = {
  trackId: 'tokyo',
  trackName: '東京',
  distance: 2400,
  surface: 'turf',
  frameStats: [
    { frame: 1, winRate: 8.2, placeRate: 24.1 },
    { frame: 8, winRate: 11.0, placeRate: 27.2 },
  ],
  runningStyleStats: [
    { style: '逃げ', winRate: 8.4, placeRate: 25.2 },
    { style: '差し', winRate: 18.3, placeRate: 42.1 },
  ],
  keyFactor: 'テストファクター',
  note: 'テストノート',
}

describe('CourseTable', () => {
  it('コース情報を表示する', () => {
    render(<CourseTable course={mockCourse} />)
    expect(screen.getByText(/2400/)).toBeInTheDocument()
    expect(screen.getByText(/芝/)).toBeInTheDocument()
  })

  it('枠番成績テーブルを表示する', () => {
    render(<CourseTable course={mockCourse} />)
    expect(screen.getByText(/枠番/)).toBeInTheDocument()
    expect(screen.getByText('8.2%')).toBeInTheDocument()
  })
})
