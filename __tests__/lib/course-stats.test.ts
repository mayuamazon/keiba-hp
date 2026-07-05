import { courseStats, getCourseStats } from '@/lib/data/course-stats'
import type { CourseStats } from '@/lib/data/course-stats'

// テスト用 phase 付きエントリのキー（afterEach でクリーンアップ）
const TEST_EARLY_KEY = 'tokyo-turf-2400-early'
const TEST_LATE_KEY = 'tokyo-turf-2400-late'

const MOCK_EARLY_ENTRY: CourseStats = {
  frameStats: [
    { frame: 1, winRate: 15.0, placeRate: 38.0 },
    { frame: 2, winRate: 10.0, placeRate: 30.0 },
  ],
  runningStyleStats: [
    { style: '逃げ', winRate: 20.0, placeRate: 45.0 },
    { style: '先行', winRate: 12.0, placeRate: 35.0 },
  ],
  source: 'テスト用',
}

const MOCK_LATE_ENTRY: CourseStats = {
  frameStats: [
    { frame: 1, winRate: 7.0, placeRate: 20.0 },
    { frame: 2, winRate: 9.0, placeRate: 24.0 },
  ],
  runningStyleStats: [
    { style: '逃げ', winRate: 5.0, placeRate: 18.0 },
    { style: '先行', winRate: 10.0, placeRate: 30.0 },
  ],
  source: 'テスト用',
}

afterEach(() => {
  // テストで追加したキーを削除してクリーンアップ
  delete courseStats[TEST_EARLY_KEY]
  delete courseStats[TEST_LATE_KEY]
})

describe('getCourseStats - phase なし（従来動作）', () => {
  it('phase 無しで既存の all キーを返す', () => {
    const result = getCourseStats('tokyo', 'turf', 2400)
    expect(result).toBeDefined()
    expect(result?.frameStats).toHaveLength(8)
  })

  it('存在しないコースは undefined を返す', () => {
    const result = getCourseStats('tokyo', 'turf', 9999)
    expect(result).toBeUndefined()
  })
})

describe('getCourseStats - phase 指定・フォールバック動作', () => {
  it('early キーが存在しない場合、all キー（フォールバック）を返す', () => {
    // TEST_EARLY_KEY は afterEach で削除済みなので存在しない
    const result = getCourseStats('tokyo', 'turf', 2400, 'early')
    expect(result).toBeDefined()
    // all キーの内容（8枠ぶん）が返る
    expect(result?.frameStats).toHaveLength(8)
  })

  it('late キーが存在しない場合、all キー（フォールバック）を返す', () => {
    const result = getCourseStats('tokyo', 'turf', 2400, 'late')
    expect(result).toBeDefined()
    expect(result?.frameStats).toHaveLength(8)
  })

  it('early キーが存在する場合は early エントリを返す', () => {
    courseStats[TEST_EARLY_KEY] = MOCK_EARLY_ENTRY
    const result = getCourseStats('tokyo', 'turf', 2400, 'early')
    expect(result).toBe(MOCK_EARLY_ENTRY)
    expect(result?.source).toBe('テスト用')
    expect(result?.frameStats).toHaveLength(2)
  })

  it('late キーが存在する場合は late エントリを返す', () => {
    courseStats[TEST_LATE_KEY] = MOCK_LATE_ENTRY
    const result = getCourseStats('tokyo', 'turf', 2400, 'late')
    expect(result).toBe(MOCK_LATE_ENTRY)
    expect(result?.source).toBe('テスト用')
  })

  it('early キーと late キーが共存する場合、early 指定では early を返す', () => {
    courseStats[TEST_EARLY_KEY] = MOCK_EARLY_ENTRY
    courseStats[TEST_LATE_KEY] = MOCK_LATE_ENTRY
    const earlyResult = getCourseStats('tokyo', 'turf', 2400, 'early')
    const lateResult = getCourseStats('tokyo', 'turf', 2400, 'late')
    expect(earlyResult).toBe(MOCK_EARLY_ENTRY)
    expect(lateResult).toBe(MOCK_LATE_ENTRY)
  })

  it('phase 指定でコース自体が存在しない場合は undefined を返す（フォールバック先もない）', () => {
    const result = getCourseStats('tokyo', 'turf', 9999, 'early')
    expect(result).toBeUndefined()
  })
})
