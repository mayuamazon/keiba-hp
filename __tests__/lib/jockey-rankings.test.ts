import { jockeyRankings } from '@/lib/data/jockey-rankings'
import type { JockeyRankRow } from '@/lib/data/jockey-rankings'

describe('jockey-rankings データ構造検証', () => {
  it('Recordが空でない', () => {
    expect(Object.keys(jockeyRankings).length).toBeGreaterThan(0)
  })

  it('全国×全×全（all-all-all）キーが存在する', () => {
    expect(jockeyRankings['all-all-all']).toBeDefined()
    expect(jockeyRankings['all-all-all'].length).toBeGreaterThan(0)
  })

  it('各 JockeyRankRow に必須フィールドがある', () => {
    const allRows: JockeyRankRow[] = Object.values(jockeyRankings).flat()
    for (const row of allRows) {
      expect(typeof row.name).toBe('string')
      expect(typeof row.rides).toBe('number')
      expect(typeof row.wins).toBe('number')
      expect(typeof row.winRate).toBe('number')
      expect(typeof row.placeRate).toBe('number')
      expect(typeof row.winRoi).toBe('number')
    }
  })

  it('勝率は 0〜100 の範囲', () => {
    const allRows = Object.values(jockeyRankings).flat()
    for (const row of allRows) {
      expect(row.winRate).toBeGreaterThanOrEqual(0)
      expect(row.winRate).toBeLessThanOrEqual(100)
      expect(row.placeRate).toBeGreaterThanOrEqual(0)
      expect(row.placeRate).toBeLessThanOrEqual(100)
    }
  })

  it('全国ランキングは勝利数降順', () => {
    const rows = jockeyRankings['all-all-all']
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i - 1].wins).toBeGreaterThanOrEqual(rows[i].wins)
    }
  })

  it('キーは {trackId|all}-{surface|all}-{distBand|all} の形式', () => {
    const validTracks = new Set([
      'all', 'sapporo', 'hakodate', 'fukushima', 'niigata',
      'tokyo', 'nakayama', 'chukyo', 'kyoto', 'hanshin', 'kokura',
    ])
    const validSurfaces = new Set(['all', 'turf', 'dirt'])
    const validDists = new Set(['all', 'sprint', 'mile', 'middle', 'long'])

    for (const key of Object.keys(jockeyRankings)) {
      const [track, surface, dist] = key.split('-')
      expect(validTracks.has(track)).toBe(true)
      expect(validSurfaces.has(surface)).toBe(true)
      expect(validDists.has(dist)).toBe(true)
    }
  })

  it('全国×全×全 のトップ騎手は rides >= 200', () => {
    const rows = jockeyRankings['all-all-all']
    for (const row of rows) {
      expect(row.rides).toBeGreaterThanOrEqual(200)
    }
  })

  it('上位20人以下のランキングサイズ', () => {
    for (const rows of Object.values(jockeyRankings)) {
      expect(rows.length).toBeLessThanOrEqual(20)
    }
  })
})
