import { render, screen } from '@testing-library/react'
import { AccuracyBanner } from '@/components/accuracy-banner'

// framer-motion モック（course-finder.test.tsx の流儀に準拠）
jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn().mockReturnValue(true),
  useInView: jest.fn().mockReturnValue(true),
  animate: jest.fn().mockReturnValue({ stop: jest.fn() }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
      <div {...rest}>{children}</div>
    ),
  },
}))

describe('AccuracyBanner', () => {
  it('totalRaces > 0 のとき的中率を表示する', () => {
    render(<AccuracyBanner period="2026年6月" totalRaces={10} hits={7} avgRoi={132} />)
    expect(screen.getByText(/的中率/)).toBeInTheDocument()
    expect(screen.getByText(/的中\/対象/)).toBeInTheDocument()
    expect(screen.getByText(/平均回収率/)).toBeInTheDocument()
  })

  it('totalRaces === 0 のとき準備中テキストを表示する', () => {
    render(<AccuracyBanner period="2026年6月" totalRaces={0} hits={0} avgRoi={0} />)
    expect(screen.getByText(/実績集計は準備中/)).toBeInTheDocument()
  })

  it('totalRaces === 0 のとき period 見出しは維持される', () => {
    render(<AccuracyBanner period="2026年6月" totalRaces={0} hits={0} avgRoi={0} />)
    expect(screen.getByText(/2026年6月の実績/)).toBeInTheDocument()
  })

  it('totalRaces === 0 のとき CountUp 系の数字グリッドは表示されない', () => {
    render(<AccuracyBanner period="2026年6月" totalRaces={0} hits={0} avgRoi={0} />)
    expect(screen.queryByText(/的中\/対象/)).not.toBeInTheDocument()
  })
})
