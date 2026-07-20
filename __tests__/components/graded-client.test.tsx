import { render, screen, fireEvent } from '@testing-library/react'
import { GradedClient } from '@/app/graded/graded-client'
import type { GradedRace } from '@/lib/data/graded-races'

// framer-motion モック（既存テストの流儀に準拠）
jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn().mockReturnValue(true),
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

const mockRaces: GradedRace[] = [
  {
    raceName: '天皇賞春G1',
    displayName: '天皇賞（春）',
    grade: 'G1',
    place: '京都',
    trackId: 'kyoto',
    surface: 'turf',
    distance: 3200,
    editions: [
      {
        year: 2023,
        date: '2023-04-30',
        winner: 'ジャスティンパレス',
        winnerPopularity: 3,
        winnerFrame: 5,
        winnerStyle: '差し',
        winPayout: 640,
        fieldSize: 11,
      },
    ],
    popularityStats: {
      pop1: { count: 5, wins: 2, placeRate: 60.0 },
      pop23: { count: 10, wins: 2, placeRate: 40.0 },
      pop46: { count: 15, wins: 1, placeRate: 20.0 },
      pop7plus: { count: 20, wins: 0, placeRate: 10.0 },
    },
    frameBandStats: {
      inner: { count: 12, placeRate: 35.0 },
      middle: { count: 18, placeRate: 22.0 },
      outer: { count: 20, placeRate: 18.0 },
    },
    styleWins: { '逃げ': 0, '先行': 0, '差し': 1, '追込': 0 },
  },
  {
    raceName: '毎日杯G3',
    displayName: '毎日杯',
    grade: 'G3',
    place: '阪神',
    trackId: 'hanshin',
    surface: 'turf',
    distance: 1800,
    editions: [
      {
        year: 2022,
        date: '2022-03-26',
        winner: 'テストホース',
        winnerPopularity: 1,
        winnerFrame: 2,
        winnerStyle: '先行',
        winPayout: 220,
        fieldSize: 12,
      },
    ],
    popularityStats: {
      pop1: { count: 3, wins: 2, placeRate: 66.7 },
      pop23: { count: 6, wins: 1, placeRate: 33.3 },
      pop46: { count: 9, wins: 0, placeRate: 11.1 },
      pop7plus: { count: 12, wins: 0, placeRate: 8.3 },
    },
    frameBandStats: {
      inner: { count: 9, placeRate: 33.3 },
      middle: { count: 13, placeRate: 23.1 },
      outer: { count: 8, placeRate: 12.5 },
    },
    styleWins: { '逃げ': 0, '先行': 2, '差し': 1, '追込': 0 },
  },
]

describe('GradedClient', () => {
  it('重賞カードが表示される', () => {
    render(<GradedClient races={mockRaces} />)
    expect(screen.getByText('天皇賞（春）')).toBeInTheDocument()
    expect(screen.getByText('毎日杯')).toBeInTheDocument()
  })

  it('グレードチップが表示される', () => {
    render(<GradedClient races={mockRaces} />)
    expect(screen.getByRole('button', { name: '全グレード' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'G1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'G3' })).toBeInTheDocument()
  })

  it('G1チップで絞り込むとG3レースが非表示になる', () => {
    render(<GradedClient races={mockRaces} />)
    fireEvent.click(screen.getByRole('button', { name: 'G1' }))
    expect(screen.getByText('天皇賞（春）')).toBeInTheDocument()
    expect(screen.queryByText('毎日杯')).not.toBeInTheDocument()
  })

  it('競馬場フィルタチップが表示される', () => {
    render(<GradedClient races={mockRaces} />)
    expect(screen.getByRole('button', { name: '全場' })).toBeInTheDocument()
  })

  it('カードをクリックすると歴代勝ち馬が展開される', () => {
    render(<GradedClient races={mockRaces} />)
    // 展開前は winner 名が非表示
    expect(screen.queryByText('ジャスティンパレス')).not.toBeInTheDocument()
    // 天皇賞（春）のカードをクリック
    fireEvent.click(screen.getByRole('button', { name: /天皇賞（春）/ }))
    expect(screen.getByText('ジャスティンパレス')).toBeInTheDocument()
  })

  it('展開後に人気帯別・枠帯別・脚質別集計が表示される', () => {
    render(<GradedClient races={mockRaces} />)
    fireEvent.click(screen.getByRole('button', { name: /天皇賞（春）/ }))
    expect(screen.getByText('人気帯別成績')).toBeInTheDocument()
    expect(screen.getByText('枠帯別複勝率')).toBeInTheDocument()
    expect(screen.getByText(/脚質別勝利数/)).toBeInTheDocument()
  })

  it('出典表記が展開後に表示される', () => {
    render(<GradedClient races={mockRaces} />)
    fireEvent.click(screen.getByRole('button', { name: /天皇賞（春）/ }))
    expect(screen.getByText(/JRA-VAN 2021-2026 自社集計/)).toBeInTheDocument()
  })

  it('該当レースなしの場合に空メッセージが表示される', () => {
    render(<GradedClient races={mockRaces} />)
    // G2 は存在しないので絞り込み結果0件
    fireEvent.click(screen.getByRole('button', { name: 'G2' }))
    expect(screen.getByText(/該当する重賞データがありません/)).toBeInTheDocument()
  })
})
