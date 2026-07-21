import { render, screen, within } from '@testing-library/react'
import { GradedSection } from '@/components/track-graded'
import type { GradedRace } from '@/lib/data/graded-races'

function makeRace(partial: Partial<GradedRace>): GradedRace {
  return {
    raceName: 'テストレース',
    displayName: 'テストレース',
    grade: 'G3',
    place: '東京',
    trackId: 'tokyo',
    surface: 'turf',
    distance: 1600,
    editions: [],
    popularityStats: {
      pop1: { count: 0, wins: 0, placeRate: 0 },
      pop23: { count: 0, wins: 0, placeRate: 0 },
      pop46: { count: 0, wins: 0, placeRate: 0 },
      pop7plus: { count: 0, wins: 0, placeRate: 0 },
    },
    frameBandStats: {
      inner: { count: 0, placeRate: 0 },
      middle: { count: 0, placeRate: 0 },
      outer: { count: 0, placeRate: 0 },
    },
    styleWins: { '逃げ': 0, '先行': 0, '差し': 0, '追込': 0 },
    ...partial,
  }
}

const races: GradedRace[] = [
  makeRace({ raceName: 'r1', trackId: 'tokyo', displayName: '東京ダート1400', surface: 'dirt', distance: 1400, grade: 'G2' }),
  makeRace({ raceName: 'r2', trackId: 'tokyo', displayName: '東京芝1600マッチ', surface: 'turf', distance: 1600, grade: 'G1' }),
  makeRace({ raceName: 'r3', trackId: 'nakayama', displayName: '中山レース', surface: 'turf', distance: 2500 }),
]

describe('GradedSection', () => {
  it('その競馬場の重賞だけを表示し、選択条件一致を先頭にする', () => {
    render(<GradedSection track="tokyo" surface="turf" distance={1600} allRaces={races} />)
    expect(screen.queryByText('中山レース')).toBeNull()
    const cards = screen.getAllByTestId('graded-card-wrapper')
    expect(within(cards[0]).getByText('東京芝1600マッチ')).toBeInTheDocument()
  })

  it('重賞0件なら準備中メッセージ', () => {
    render(<GradedSection track="hakodate" surface="turf" distance={1200} allRaces={races} />)
    expect(screen.getByText(/重賞データは準備中/)).toBeInTheDocument()
  })
})
