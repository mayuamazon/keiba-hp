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

// コース図は内部で SVGPathElement.getPointAtLength を使うため、合成テストではダミー化
jest.mock('@/components/course-map', () => ({
  CourseMap: () => <div data-testid="course-map" />,
}))

describe('TrackHub', () => {
  it('コース図＋3セクション（コース検索・重賞・騎手TOP5）が揃う', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.getByTestId('course-map')).toBeInTheDocument()
    expect(screen.getByText('コース傾向＆バグ穴馬検索')).toBeInTheDocument()
    expect(screen.getByText('重賞レースの特徴')).toBeInTheDocument()
    expect(screen.getByText('得意な騎手 TOP5')).toBeInTheDocument()
  })

  it('選択中コースのキーファクターが表示される', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.getByText(/キーファクター/)).toBeInTheDocument()
  })

  it('競馬場チップは出ない（trackは固定）', () => {
    render(<TrackHub track="tokyo" />)
    expect(screen.queryByRole('group', { name: '競馬場選択' })).toBeNull()
  })
})
