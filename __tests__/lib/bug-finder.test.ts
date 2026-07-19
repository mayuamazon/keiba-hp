import { mapRatesToLevels, getFrameFavorability, getStyleFavorability } from '@/lib/data/bug-finder'

describe('mapRatesToLevels', () => {
  it('空配列を渡すと空配列を返す', () => {
    expect(mapRatesToLevels([])).toEqual([])
  })

  it('全て同じ winRate の場合は全て 0 を返す', () => {
    const stats = [{ winRate: 10 }, { winRate: 10 }, { winRate: 10 }]
    expect(mapRatesToLevels(stats)).toEqual([0, 0, 0])
  })

  // 境界値テスト（avg=10 になるように設計）
  // 平均10%: [10, 10, 10, 10] → diff=0 → すべて 0
  it('diff=0 は 0 を返す', () => {
    const stats = [{ winRate: 10 }, { winRate: 10 }, { winRate: 10 }, { winRate: 10 }]
    expect(mapRatesToLevels(stats)).toEqual([0, 0, 0, 0])
  })

  // avg=10: +3以上 → 2
  it('diff >= +3 は 2 を返す（境界値 +3）', () => {
    // avg = (10 + 10 + 13) / 3 = 11.0 → 要調整
    // avg=10になるように: [7, 10, 13] → avg=10, diff=[-3, 0, +3]
    const stats = [{ winRate: 7 }, { winRate: 10 }, { winRate: 13 }]
    const result = mapRatesToLevels(stats)
    expect(result[2]).toBe(2)  // +3 → 2
    expect(result[0]).toBe(-2) // -3 → -2
    expect(result[1]).toBe(0)  // 0 → 0
  })

  // diff >= +1 → 1
  it('diff >= +1 は 1 を返す（境界値 +1）', () => {
    // [9, 10, 11] → avg=10, diff=[-1, 0, +1]
    const stats = [{ winRate: 9 }, { winRate: 10 }, { winRate: 11 }]
    const result = mapRatesToLevels(stats)
    expect(result[2]).toBe(1)  // +1 → 1
    expect(result[0]).toBe(-1) // -1 → -1
    expect(result[1]).toBe(0)  // 0 → 0
  })

  // diff <= -1 → -1
  it('diff <= -1 は -1 を返す（境界値 -1）', () => {
    // [9, 10, 11] → avg=10, diff=[-1, 0, +1]
    const stats = [{ winRate: 9 }, { winRate: 10 }, { winRate: 11 }]
    const result = mapRatesToLevels(stats)
    expect(result[0]).toBe(-1) // -1 → -1
  })

  // diff <= -3 → -2
  it('diff <= -3 は -2 を返す（境界値 -3）', () => {
    // [7, 10, 13] → avg=10, diff=[-3, 0, +3]
    const stats = [{ winRate: 7 }, { winRate: 10 }, { winRate: 13 }]
    const result = mapRatesToLevels(stats)
    expect(result[0]).toBe(-2) // -3 → -2
  })

  // diff > +3 の場合も 2
  it('diff > +3 でも 2 を返す', () => {
    // [5, 10, 15] → avg=10, diff=[-5, 0, +5]
    const stats = [{ winRate: 5 }, { winRate: 10 }, { winRate: 15 }]
    const result = mapRatesToLevels(stats)
    expect(result[2]).toBe(2)
    expect(result[0]).toBe(-2)
  })

  // diff > -1 かつ < +1 は 0
  it('diff が +1 未満かつ -1 超なら 0 を返す', () => {
    // avg=10: [9.5, 10, 10.5] → diff=[-0.5, 0, +0.5]
    const stats = [{ winRate: 9.5 }, { winRate: 10 }, { winRate: 10.5 }]
    const result = mapRatesToLevels(stats)
    expect(result[0]).toBe(0)
    expect(result[1]).toBe(0)
    expect(result[2]).toBe(0)
  })

  // diff = +2 (between +1 and +3) → 1
  it('diff = +2 は 1 を返す（+1以上+3未満）', () => {
    // [8, 10, 12] → avg=10, diff=[-2, 0, +2]
    const stats = [{ winRate: 8 }, { winRate: 10 }, { winRate: 12 }]
    const result = mapRatesToLevels(stats)
    expect(result[2]).toBe(1)  // +2 → 1
    expect(result[0]).toBe(-1) // -2 → -1
  })
})

// ─── month 引数テスト ──────────────────────────────────────────────

describe('getFrameFavorability - month 引数', () => {
  // kokura-turf-2000-m7 は実在するキー（export_stats.py で生成済み）
  it('月別キーが存在する場合は isRealData=true で実データを返す', () => {
    const result = getFrameFavorability('kokura', 'turf', 2000, 'early', 7)
    expect(result.isRealData).toBe(true)
    expect(result.items).toHaveLength(8)
    // 勝率・複勝率が数値として格納されている
    result.items.forEach((item) => {
      expect(typeof item.winRate).toBe('number')
      expect(typeof item.placeRate).toBe('number')
    })
  })

  it('月別キーが存在しない場合は isRealData=false でモックを返す（フォールバックなし）', () => {
    // month=13 は無効なキーなので存在しない
    const result = getFrameFavorability('kokura', 'turf', 2000, 'early', 13)
    expect(result.isRealData).toBe(false)
    // モック分岐では全 level=0 の 8 枠を返す
    expect(result.items).toHaveLength(8)
  })

  it('month 未指定の場合は従来どおり phase 引数を使う（後方互換）', () => {
    // month を渡さない → 従来の phase 分岐へ（既存テストと同じ挙動）
    const result = getFrameFavorability('tokyo', 'turf', 1600, 'early')
    // 実データ有無に関わらず isRealData の型が boolean であること
    expect(typeof result.isRealData).toBe('boolean')
    expect(result.items.length).toBeGreaterThan(0)
  })
})

describe('getStyleFavorability - month 引数', () => {
  it('月別キーが存在する場合は isRealData=true で実データを返す', () => {
    const result = getStyleFavorability('kokura', 'turf', 2000, 'early', 7)
    expect(result.isRealData).toBe(true)
    expect(result.items.length).toBeGreaterThan(0)
    result.items.forEach((item) => {
      expect(typeof item.winRate).toBe('number')
    })
  })

  it('月別キーが存在しない場合は isRealData=false でモックを返す', () => {
    const result = getStyleFavorability('kokura', 'turf', 2000, 'early', 13)
    expect(result.isRealData).toBe(false)
    expect(result.items).toHaveLength(4) // 逃げ先行差し追込
  })

  it('month 未指定の場合は従来どおり動作する（後方互換）', () => {
    const result = getStyleFavorability('tokyo', 'turf', 1600, 'late')
    expect(typeof result.isRealData).toBe('boolean')
    expect(result.items.length).toBeGreaterThan(0)
  })
})
