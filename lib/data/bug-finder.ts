/**
 * bug-finder.ts — コース傾向＆バグ穴馬検索のロジック層
 *
 * 枠順・脚質・バグ穴馬アラートとも JRA-VAN 2021-2026 全着順データの実測値。
 * （アラートは scripts/jravan/mine_bugs.py が生成）
 */

import type { Track, Surface } from '@/lib/types'
import { courseStats } from '@/lib/data/course-stats'
import { minedBugAlerts } from '@/lib/data/bug-alerts-generated'

// ─── 開催時期フェーズ ──────────────────────────────────────────────

export type MeetingPhase = 'early' | 'late'

export const MEETING_PHASES: Record<MeetingPhase, { label: string; sub: string }> = {
  early: { label: '開幕前半', sub: '1〜4日目・イン有利期' },
  late: { label: '開催後半', sub: '5日目以降・馬場荒れ期' },
}

// ─── 枠順有利度 ──────────────────────────────────────────────────

export type FavorabilityLevel = -2 | -1 | 0 | 1 | 2

/**
 * 勝率の配列を有利度レベルの配列に変換する（テスト可能にexport）。
 * 平均との差（パーセントポイント）で判定:
 *   diff >= +3  → 2
 *   diff >= +1  → 1
 *   diff <= -3  → -2
 *   diff <= -1  → -1
 *   それ以外   → 0
 */
export function mapRatesToLevels(stats: { winRate: number }[]): (-2 | -1 | 0 | 1 | 2)[] {
  if (stats.length === 0) return []
  const avg = stats.reduce((sum, s) => sum + s.winRate, 0) / stats.length
  return stats.map((s) => {
    const diff = s.winRate - avg
    if (diff >= 3) return 2
    if (diff >= 1) return 1
    if (diff <= -3) return -2
    if (diff <= -1) return -1
    return 0
  })
}

export interface FrameFavorability {
  frame: number
  level: FavorabilityLevel
}

export interface FrameFavorabilityResult {
  items: FrameFavorability[]
  isRealData: boolean
}

/**
 * 枠順の有利度を返す。
 * phase 別の実データ（course-stats）が存在する場合はそれを使い、
 * isRealData=true を返す。実データがない場合はモック補正ロジックを使う。
 *
 * early: 1〜3枠に+補正、7〜8枠に−補正
 * late:  逆（外枠・差し優勢）
 */
export function getFrameFavorability(
  trackId: Track,
  surface: Surface,
  distance: number,
  phase: MeetingPhase,
): FrameFavorabilityResult {
  // phase 別の実データを確認（phaseKeyが直接存在するときのみ実データ扱い。フォールバックはモックとみなす）
  const phaseKey = `${trackId}-${surface}-${distance}-${phase}`
  const hasPhaseData = phaseKey in courseStats
  const stats = hasPhaseData ? courseStats[phaseKey] : undefined

  if (hasPhaseData && stats && stats.frameStats.length > 0) {
    const levels = mapRatesToLevels(stats.frameStats)
    const items: FrameFavorability[] = stats.frameStats.map((f, i) => ({
      frame: f.frame,
      level: levels[i] ?? 0,
    }))
    return { items, isRealData: true }
  }

  // モック補正ロジック（フォールバック）
  const BASE: FavorabilityLevel[] = [0, 0, 0, 0, 0, 0, 0, 0]

  const items: FrameFavorability[] = BASE.map((base, i) => {
    const frame = i + 1 // 1〜8
    let level: number = base

    if (phase === 'early') {
      // 開幕前半：内枠（1〜3）有利・外枠（7〜8）不利
      if (frame <= 2) level += 2
      else if (frame === 3) level += 1
      else if (frame === 7) level -= 1
      else if (frame === 8) level -= 2
    } else {
      // 開催後半：外枠（6〜8）有利・内枠（1〜2）不利（馬場荒れで内ラチ沿いが荒廃）
      if (frame >= 7) level += 2
      else if (frame === 6) level += 1
      else if (frame === 2) level -= 1
      else if (frame === 1) level -= 2
    }

    return { frame, level: Math.max(-2, Math.min(2, level)) as FavorabilityLevel }
  })

  return { items, isRealData: false }
}

// ─── 脚質有利度 ──────────────────────────────────────────────────

export type RunningStyleName = '逃げ' | '先行' | '差し' | '追込'

export interface StyleFavorability {
  style: RunningStyleName
  level: FavorabilityLevel
}

export interface StyleFavorabilityResult {
  items: StyleFavorability[]
  isRealData: boolean
}

/**
 * 脚質の有利度を返す。
 * phase 別の実データ（course-stats）が存在する場合はそれを使い、
 * isRealData=true を返す。実データがない場合はモック補正ロジックを使う。
 *
 * early: 逃げ・先行+、差し・追込−
 * late:  逆（外・差し優勢）
 */
export function getStyleFavorability(
  trackId: Track,
  surface: Surface,
  distance: number,
  phase: MeetingPhase,
): StyleFavorabilityResult {
  // phase 別の実データを確認（phaseKeyが直接存在するときのみ実データ扱い。フォールバックはモックとみなす）
  const phaseKey = `${trackId}-${surface}-${distance}-${phase}`
  const hasPhaseData = phaseKey in courseStats
  const stats = hasPhaseData ? courseStats[phaseKey] : undefined

  if (hasPhaseData && stats && stats.runningStyleStats.length > 0) {
    const levels = mapRatesToLevels(stats.runningStyleStats)
    const items: StyleFavorability[] = stats.runningStyleStats.map((s, i) => ({
      style: s.style as RunningStyleName,
      level: levels[i] ?? 0,
    }))
    return { items, isRealData: true }
  }

  // モック補正ロジック（フォールバック）
  const styles: RunningStyleName[] = ['逃げ', '先行', '差し', '追込']

  const items: StyleFavorability[] = styles.map((style): StyleFavorability => {
    let level: number = 0

    if (phase === 'early') {
      if (style === '逃げ') level = 2
      else if (style === '先行') level = 1
      else if (style === '差し') level = -1
      else if (style === '追込') level = -2
    } else {
      if (style === '逃げ') level = -2
      else if (style === '先行') level = -1
      else if (style === '差し') level = 1
      else if (style === '追込') level = 2
    }

    return { style, level: level as FavorabilityLevel }
  })

  return { items, isRealData: false }
}

// ─── バグ穴馬アラート ─────────────────────────────────────────────

export interface BugAlert {
  severity: 'high' | 'mid'
  title: string
  body: string
  stat: string // 例: '複勝回収率 340%'
}

/**
 * バグ穴馬アラートを返す（JRA-VAN 2021-2026 全着順のバックテスト実測値）。
 * コース単位のアラートを優先し、無ければ場×馬場単位へフォールバック。
 * どちらも無い場合は空配列（＝採用基準を満たすパターンが検出されなかったコース）。
 */
export function getBugAlerts(
  trackId: Track,
  surface: Surface,
  distance: number,
  phase: MeetingPhase,
): BugAlert[] {
  return (
    minedBugAlerts[`${trackId}-${surface}-${distance}-${phase}`] ??
    minedBugAlerts[`${trackId}-${surface}-${phase}`] ??
    []
  )
}
