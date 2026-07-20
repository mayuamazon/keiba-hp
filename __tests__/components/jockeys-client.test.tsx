import { render, screen, fireEvent } from '@testing-library/react'
import { JockeysClient } from '@/app/jockeys/jockeys-client'
import type { JockeyRankRow } from '@/lib/data/jockey-rankings'

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

const mockRow1: JockeyRankRow = {
  name: 'テスト騎手A',
  rides: 500,
  wins: 100,
  winRate: 20.0,
  placeRate: 45.0,
  winRoi: 85.5,
}

const mockRow2: JockeyRankRow = {
  name: 'テスト騎手B',
  rides: 300,
  wins: 60,
  winRate: 20.0,
  placeRate: 32.5,
  winRoi: 110.2,
}

const mockRankings: Record<string, JockeyRankRow[]> = {
  'all-all-all': [mockRow1, mockRow2],
  'tokyo-turf-all': [mockRow1],
}

describe('JockeysClient', () => {
  it('初期状態でランキングテーブルが表示される', () => {
    render(<JockeysClient rankings={mockRankings} />)
    expect(screen.getByText('テスト騎手A')).toBeInTheDocument()
    expect(screen.getByText('テスト騎手B')).toBeInTheDocument()
  })

  it('フィルタチップが3行すべて表示される', () => {
    render(<JockeysClient rankings={mockRankings} />)
    expect(screen.getByRole('group', { name: '競馬場選択' })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: '馬場選択' })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: '距離帯選択' })).toBeInTheDocument()
  })

  it('競馬場「東京」・馬場「芝」に切り替えると対応行が表示される', () => {
    render(<JockeysClient rankings={mockRankings} />)
    fireEvent.click(screen.getByRole('button', { name: '東京' }))
    fireEvent.click(screen.getByRole('button', { name: '芝' }))
    expect(screen.getByText('テスト騎手A')).toBeInTheDocument()
    // テスト騎手B は tokyo-turf-all には含まれていない
    expect(screen.queryByText('テスト騎手B')).not.toBeInTheDocument()
  })

  it('該当データなしの場合は空メッセージが表示される', () => {
    render(<JockeysClient rankings={mockRankings} />)
    // ダートを選択（mock にはない）
    fireEvent.click(screen.getByRole('button', { name: 'ダート' }))
    expect(screen.getByText(/該当条件のデータがありません/)).toBeInTheDocument()
  })

  it('出典注記が表示される', () => {
    render(<JockeysClient rankings={mockRankings} />)
    expect(screen.getByText(/JRA-VAN 2021-2026 自社集計/)).toBeInTheDocument()
  })

  it('テーブルヘッダーが表示される', () => {
    render(<JockeysClient rankings={mockRankings} />)
    expect(screen.getByText('騎手名')).toBeInTheDocument()
    expect(screen.getByText('勝率')).toBeInTheDocument()
    expect(screen.getByText('複勝率')).toBeInTheDocument()
    expect(screen.getByText('単勝回収率')).toBeInTheDocument()
  })
})
