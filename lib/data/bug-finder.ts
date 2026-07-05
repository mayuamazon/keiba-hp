/**
 * bug-finder.ts — コース傾向＆バグ穴馬検索のロジック層
 *
 * モック実装。JRA-VANデータ投入後に実ロジックへ差し替え
 */

import type { Track, Surface } from '@/lib/types'
import { courseStats } from '@/lib/data/course-stats'

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

/** 競馬場日本語名マップ */
const TRACK_NAMES: Record<Track, string> = {
  tokyo: '東京',
  nakayama: '中山',
  hanshin: '阪神',
  kyoto: '京都',
  chukyo: '中京',
  kokura: '小倉',
  fukushima: '福島',
  niigata: '新潟',
  hakodate: '函館',
  sapporo: '札幌',
}

const SURFACE_NAMES: Record<Surface, string> = {
  turf: '芝',
  dirt: 'ダート',
}

/**
 * アラートテンプレート（6種類以上）
 * モック実装。JRA-VANデータ投入後に実ロジックへ差し替え
 */
type AlertTemplate = (
  trackName: string,
  surfaceName: string,
  distance: number,
  phaseLabel: string,
) => BugAlert

const ALERT_TEMPLATES: AlertTemplate[] = [
  // 0: 血統×道悪
  (trackName, surfaceName, distance, phaseLabel) => ({
    severity: 'high',
    title: '血統×道悪フィルタ',
    body: `過去5年で「${phaseLabel}×道悪×キングカメハメハ血統」の${trackName}${surfaceName}${distance}mにおける複勝回収率は340%。該当する想定5番人気以下の穴馬を自動抽出します。`,
    stat: '複勝回収率 340%',
  }),
  // 1: 外厩明け
  (trackName, surfaceName, distance, phaseLabel) => ({
    severity: 'high',
    title: '外厩明け初戦フィルタ',
    body: `${trackName}${surfaceName}${distance}m（${phaseLabel}）において、ノーザンファーム外厩明け初戦の単勝回収率が287%。近3走で着外でも仕上がり急上昇の可能性大。`,
    stat: '単勝回収率 287%',
  }),
  // 2: 騎手乗替り
  (trackName, surfaceName, distance, phaseLabel) => ({
    severity: 'mid',
    title: 'C→A級騎手乗替り',
    body: `${phaseLabel}の${trackName}${surfaceName}${distance}mで「前走C級騎手→今走A級騎手」乗替りは複勝率44.8%・回収率218%。陣営の本気度シグナルとして注目。`,
    stat: '複勝回収率 218%',
  }),
  // 3: 馬体重増減
  (trackName, surfaceName, distance, phaseLabel) => ({
    severity: 'mid',
    title: '馬体重増加フィルタ',
    body: `${trackName}${surfaceName}${distance}m（${phaseLabel}）で前走比+10kg以上増加馬（3歳以下）の単勝回収率は195%。成長途上の増加は仕上がりの証とデータが示す。`,
    stat: '単勝回収率 195%',
  }),
  // 4: ローテーション
  (trackName, surfaceName, distance, phaseLabel) => ({
    severity: 'high',
    title: '中14週以上ローテ',
    body: `過去5年・${phaseLabel}の${trackName}${surfaceName}${distance}mで中14週以上の長期休養明けは複勝回収率312%。調教入念組かつ外厩活用馬に絞ると的中率52.3%。`,
    stat: '複勝回収率 312%',
  }),
  // 5: 前走距離短縮
  (trackName, surfaceName, distance, phaseLabel) => ({
    severity: 'mid',
    title: '前走距離短縮フィルタ',
    body: `${phaseLabel}・${trackName}${surfaceName}${distance}mで前走比-400m以上の距離短縮馬の複勝回収率は241%。ハービンジャー産駒に特に顕著なパターン。`,
    stat: '複勝回収率 241%',
  }),
  // 6: 斤量軽減
  (trackName, surfaceName, distance, phaseLabel) => ({
    severity: 'mid',
    title: '斤量2kg以上軽減',
    body: `${trackName}${surfaceName}${distance}m（${phaseLabel}）で前走比2kg以上の斤量軽減馬は単勝回収率229%。5番人気以外の馬に絞ると回収率はさらに上昇。`,
    stat: '単勝回収率 229%',
  }),
]

/**
 * 条件キーから決定的にテンプレートを選択し、バグアラートを返す。
 * モック実装。JRA-VANデータ投入後に実ロジックへ差し替え
 */
export function getBugAlerts(
  trackId: Track,
  surface: Surface,
  distance: number,
  phase: MeetingPhase,
): BugAlert[] {
  const trackName = TRACK_NAMES[trackId]
  const surfaceName = SURFACE_NAMES[surface]
  const phaseLabel = MEETING_PHASES[phase].label

  // 決定的ハッシュ（同条件→同結果）
  const key = `${trackId}-${surface}-${distance}-${phase}`
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0
  }

  // 1件目（highまたはmid）と2件目（midを優先）を選ぶ
  const idx1 = hash % ALERT_TEMPLATES.length
  const idx2 = (hash * 7 + 3) % ALERT_TEMPLATES.length
  // 2件目が1件目と同じにならないよう調整
  const safeIdx2 = idx2 === idx1 ? (idx2 + 1) % ALERT_TEMPLATES.length : idx2

  const alert1 = ALERT_TEMPLATES[idx1](trackName, surfaceName, distance, phaseLabel)
  const alert2 = ALERT_TEMPLATES[safeIdx2](trackName, surfaceName, distance, phaseLabel)

  // 1件目を high に昇格（常に1件は high であること）
  alert1.severity = 'high'

  return [alert1, alert2]
}
