import { gradedRaces } from '@/lib/data/graded-races'
import type { GradedRace } from '@/lib/data/graded-races'

describe('graded-races データ構造検証', () => {
  it('配列が空でない', () => {
    expect(gradedRaces.length).toBeGreaterThan(0)
  })

  it('各エントリに必須キーが存在する', () => {
    for (const race of gradedRaces) {
      expect(typeof race.raceName).toBe('string')
      expect(['G1', 'G2', 'G3']).toContain(race.grade)
      expect(typeof race.place).toBe('string')
      expect(typeof race.trackId).toBe('string')
      expect(['turf', 'dirt']).toContain(race.surface)
      expect(typeof race.distance).toBe('number')
      expect(race.editions.length).toBeGreaterThan(0)
    }
  })

  it('editions は年ごとの1着馬情報のみ（全着順ではない）', () => {
    for (const race of gradedRaces) {
      for (const ed of race.editions) {
        expect(typeof ed.year).toBe('number')
        expect(typeof ed.date).toBe('string')
        expect(typeof ed.winner).toBe('string')
        // 年は5年分データの範囲内
        expect(ed.year).toBeGreaterThanOrEqual(2021)
        expect(ed.year).toBeLessThanOrEqual(2026)
      }
    }
  })

  it('popularityStats に4帯すべてのキーがある', () => {
    for (const race of gradedRaces) {
      const ps = race.popularityStats
      expect(ps).toHaveProperty('pop1')
      expect(ps).toHaveProperty('pop23')
      expect(ps).toHaveProperty('pop46')
      expect(ps).toHaveProperty('pop7plus')
      // placeRate は 0〜100 の範囲
      for (const key of ['pop1', 'pop23', 'pop46', 'pop7plus'] as const) {
        expect(ps[key].placeRate).toBeGreaterThanOrEqual(0)
        expect(ps[key].placeRate).toBeLessThanOrEqual(100)
      }
    }
  })

  it('frameBandStats に内・中・外のキーがある', () => {
    for (const race of gradedRaces) {
      const fb = race.frameBandStats
      expect(fb).toHaveProperty('inner')
      expect(fb).toHaveProperty('middle')
      expect(fb).toHaveProperty('outer')
    }
  })

  it('styleWins に4脚質すべてのキーがある', () => {
    for (const race of gradedRaces) {
      const sw = race.styleWins
      expect(sw).toHaveProperty('逃げ')
      expect(sw).toHaveProperty('先行')
      expect(sw).toHaveProperty('差し')
      expect(sw).toHaveProperty('追込')
    }
  })

  it('グレード別にG1/G2/G3が存在する', () => {
    const grades = new Set(gradedRaces.map((r) => r.grade))
    expect(grades.has('G1')).toBe(true)
    expect(grades.has('G2')).toBe(true)
    expect(grades.has('G3')).toBe(true)
  })

  it('天皇賞春G1が含まれ実データが正しい', () => {
    const tenno = gradedRaces.find((r) => r.raceName.includes('天皇賞春'))
    expect(tenno).toBeDefined()
    expect(tenno!.grade).toBe('G1')
    expect(tenno!.surface).toBe('turf')
    expect(tenno!.distance).toBe(3200)
    expect(tenno!.editions.length).toBeGreaterThan(0)
  })
})
