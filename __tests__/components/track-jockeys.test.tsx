import { render, screen } from '@testing-library/react'
import { JockeySection } from '@/components/track-jockeys'
import type { JockeyRankRow } from '@/lib/data/jockey-rankings'

const row = (name: string): JockeyRankRow => ({
  name, rides: 100, wins: 20, winRate: 20, placeRate: 40, winRoi: 80,
})

const rankings: Record<string, JockeyRankRow[]> = {
  'tokyo-turf-mile': [row('マイル騎手1'), row('マイル騎手2')],
  'tokyo-dirt-all': [row('ダート全体騎手')],
  'all-all-all': [row('全国騎手')],
}

describe('JockeySection', () => {
  it('完全一致キーの騎手を表示する（東京・芝・1600=mile）', () => {
    render(<JockeySection track="tokyo" surface="turf" distance={1600} rankings={rankings} />)
    expect(screen.getByText('マイル騎手1')).toBeInTheDocument()
    expect(screen.queryByText(/集計を表示/)).toBeNull()
  })

  it('距離帯キー欠損時は馬場全体にフォールバックし注記を出す（東京・ダ・long欠損）', () => {
    render(<JockeySection track="tokyo" surface="dirt" distance={2400} rankings={rankings} />)
    expect(screen.getByText('ダート全体騎手')).toBeInTheDocument()
    expect(screen.getByText(/集計を表示/)).toBeInTheDocument()
  })
})
