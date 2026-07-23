import { render, screen } from '@testing-library/react'
import { TrackHub } from '@/components/track-hub'

jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn().mockReturnValue(true),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
      <div {...rest}>{children}</div>
    ),
  },
}))

jest.mock('@/components/course-map', () => ({
  CourseMap: () => <div data-testid="course-map" />,
}))

describe('TrackHub', () => {
  it('CourseFinder（4タブ）とキーファクターが出る', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.getByRole('tablist', { name: '結果タブ' })).toBeInTheDocument()
    expect(screen.getByText(/キーファクター/)).toBeInTheDocument()
  })

  it('騎手・重賞は独立セクション見出しとしては出ない（タブ内に移動）', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.queryByText('得意な騎手 TOP5')).toBeNull()
    expect(screen.queryByText('重賞レースの特徴')).toBeNull()
  })

  it('コース図は折りたたみ（summary）で存在する', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.getByText('コース図')).toBeInTheDocument()
    expect(screen.getByTestId('course-map')).toBeInTheDocument()
  })
})
