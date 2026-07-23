'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { JockeySection } from '@/components/track-jockeys'
import { GradedSection } from '@/components/track-graded'
import { track as trackEvent } from '@vercel/analytics'
import { tracks } from '@/lib/data/courses'
import {
  MEETING_PHASES,
  getFrameFavorability,
  getStyleFavorability,
  getBugAlerts,
} from '@/lib/data/bug-finder'
import { getCourseStats, courseStats } from '@/lib/data/course-stats'
import type { Track, Surface } from '@/lib/types'
import type { BugAlert, MeetingPhase } from '@/lib/data/bug-finder'

// ─── 競馬場チップ定義（10場）─────────────────────────────────────

type TrackChip = { id: Track; label: string }

const TRACK_CHIPS: TrackChip[] = [
  { id: 'sapporo', label: '札幌' },
  { id: 'hakodate', label: '函館' },
  { id: 'fukushima', label: '福島' },
  { id: 'niigata', label: '新潟' },
  { id: 'tokyo', label: '東京' },
  { id: 'nakayama', label: '中山' },
  { id: 'chukyo', label: '中京' },
  { id: 'kyoto', label: '京都' },
  { id: 'hanshin', label: '阪神' },
  { id: 'kokura', label: '小倉' },
]

// ─── フェーズ選択型（比較モードを含む） ─────────────────────────

type PhaseSel = MeetingPhase | 'compare'

// ─── 有利度→色マッピング ──────────────────────────────────────────

/** バーの塗り色（複勝率30%超=赤、それ以外=低彩度金） */
function placeRateToBarColor(placeRate: number | undefined): string {
  if ((placeRate ?? 0) > 30) return 'color-mix(in oklab, var(--color-silks-red) 70%, transparent)'
  return 'color-mix(in oklab, var(--color-gold-600) 30%, transparent)'
}

/** 勝率・複勝率つきの横バー行（枠順・脚質タブ共通） */
function StatBarRows({
  ariaLabel,
  rows,
}: {
  ariaLabel: string
  rows: {
    key: string
    label: React.ReactNode
    winRate?: number
    placeRate?: number
  }[]
}) {
  const maxPlace = Math.max(...rows.map((r) => r.placeRate ?? 0), 1)
  return (
    <div role="list" aria-label={ariaLabel} className="flex flex-col gap-1 mb-1.5">
      {/* 列ヘッダ */}
      <div className="flex items-center gap-2 text-[9px]" style={{ color: 'var(--color-muted-foreground)' }}>
        <span className="w-9" />
        <span className="flex-1" />
        <span className="w-11 text-right">勝率</span>
        <span className="w-11 text-right">複勝率</span>
      </div>
      {rows.map(({ key, label, winRate, placeRate }) => (
        <div key={key} role="listitem" className="flex items-center gap-2">
          <span className="w-9 shrink-0 text-xs font-bold" style={{ color: 'var(--color-zekken)' }}>
            {label}
          </span>
          <div
            className="h-3.5 flex-1 overflow-hidden rounded-sm"
            style={{ background: 'var(--color-paddock-800)' }}
          >
            <div
              className="h-full rounded-sm transition-[width] duration-500"
              style={{
                width: `${((placeRate ?? 0) / maxPlace) * 100}%`,
                background: placeRateToBarColor(placeRate),
              }}
            />
          </div>
          <span className="num-data w-11 shrink-0 text-right text-[11px]" style={{ color: 'var(--color-muted-foreground)' }}>
            {winRate !== undefined ? `${winRate.toFixed(1)}%` : '—'}
          </span>
          <span className="num-data w-11 shrink-0 text-right text-[11px] font-bold" style={{ color: 'var(--color-gold-400)' }}>
            {placeRate !== undefined ? `${placeRate.toFixed(1)}%` : '—'}
          </span>
        </div>
      ))}
    </div>
  )
}

/** 前後半比較バー行（上=前半・下=後半、バー=複勝率） */
function CompareBarRows({
  ariaLabel,
  rows,
}: {
  ariaLabel: string
  rows: {
    key: string
    label: React.ReactNode
    earlyPlaceRate?: number
    latePlaceRate?: number
  }[]
}) {
  const maxPlace = Math.max(
    ...rows.map((r) => Math.max(r.earlyPlaceRate ?? 0, r.latePlaceRate ?? 0)),
    1,
  )
  return (
    <div role="list" aria-label={ariaLabel} className="flex flex-col gap-2 mb-1.5">
      {rows.map(({ key, label, earlyPlaceRate, latePlaceRate }) => {
        const earlyPct = ((earlyPlaceRate ?? 0) / maxPlace) * 100
        const latePct = ((latePlaceRate ?? 0) / maxPlace) * 100
        const diff = (latePlaceRate ?? 0) - (earlyPlaceRate ?? 0)
        const arrowColor =
          diff >= 1
            ? 'var(--color-silks-red)'
            : 'var(--color-muted-foreground)'
        const earlyStr =
          earlyPlaceRate !== undefined ? `${earlyPlaceRate.toFixed(1)}%` : '—'
        const lateStr =
          latePlaceRate !== undefined ? `${latePlaceRate.toFixed(1)}%` : '—'
        return (
          <div key={key} role="listitem" className="flex items-center gap-2">
            <span className="w-9 shrink-0 text-xs font-bold" style={{ color: 'var(--color-zekken)' }}>
              {label}
            </span>
            <div className="flex-1 flex flex-col gap-0.5">
              {/* 上バー＝前半 */}
              <div
                className="h-2 overflow-hidden rounded-sm"
                style={{ background: 'var(--color-paddock-800)' }}
              >
                <div
                  className="h-full rounded-sm transition-[width] duration-500"
                  style={{
                    width: `${earlyPct}%`,
                    background:
                      'color-mix(in oklab, var(--color-gold-400) 55%, transparent)',
                  }}
                />
              </div>
              {/* 下バー＝後半 */}
              <div
                className="h-2 overflow-hidden rounded-sm"
                style={{ background: 'var(--color-paddock-800)' }}
              >
                <div
                  className="h-full rounded-sm transition-[width] duration-500"
                  style={{
                    width: `${latePct}%`,
                    background:
                      'color-mix(in oklab, var(--color-zekken) 30%, transparent)',
                  }}
                />
              </div>
            </div>
            <span className="num-data shrink-0 text-right text-[11px]" style={{ minWidth: '7rem' }}>
              <span style={{ color: 'var(--color-muted-foreground)' }}>{earlyStr}</span>
              <span style={{ color: 'var(--color-muted-foreground)' }}>{' → '}</span>
              <span style={{ color: arrowColor }}>{lateStr}</span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

/** 注記ボックス（検出なし・データ不足などの案内文） */
function NoticeBox({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="rounded-lg p-3 text-[11px] leading-relaxed"
      style={{
        border: '1px solid var(--color-gold-600)',
        background: 'var(--color-paddock-800)',
        color: 'var(--color-muted-foreground)',
      }}
    >
      {children}
    </p>
  )
}

/** バグ穴馬アラートのカード（phaseTag は比較モードでのみ付く） */
function AlertCard({ alert, phaseTag }: { alert: BugAlert; phaseTag?: string }) {
  return (
    <div
      className="rounded-lg p-3"
      style={
        alert.severity === 'high'
          ? {
              borderLeft: `3px solid var(--color-silks-red)`,
              background: 'var(--color-paddock-800)',
            }
          : {
              border: `1px solid var(--color-gold-600)`,
              background: 'var(--color-paddock-800)',
            }
      }
    >
      {/* バッジ */}
      <div className="mb-1 flex items-center gap-1.5">
        {phaseTag && (
          <span
            className="rounded px-1.5 py-0.5 text-[10px] font-bold"
            style={{
              background: 'color-mix(in oklab, var(--color-gold-500) 15%, transparent)',
              color: 'var(--color-gold-400)',
              border: '1px solid var(--color-gold-600)',
            }}
          >
            {phaseTag}
          </span>
        )}
        {alert.severity === 'high' && (
          <span
            className="animate-pulse rounded px-1.5 py-0.5 text-[10px] font-bold"
            style={{
              background: 'color-mix(in oklab, var(--color-silks-red) 20%, transparent)',
              color: 'var(--color-gold-400)',
              filter:
                'drop-shadow(0 0 4px color-mix(in oklab, var(--color-silks-red) 50%, transparent))',
            }}
          >
            ⚠ データ異常値検知
          </span>
        )}
      </div>

      {/* タイトル */}
      <p
        className="text-xs font-semibold leading-snug mb-1"
        style={{ color: 'var(--color-foreground)' }}
      >
        {alert.title}
      </p>

      {/* 本文 */}
      <p
        className="text-[11px] leading-relaxed mb-2"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {alert.body}
      </p>

      {/* stat 数値（大きく） */}
      <p
        className="num-data text-base font-bold"
        style={{ color: 'var(--color-gold-400)' }}
      >
        {alert.stat}
      </p>

      {/* データ出典注記 */}
      <p
        className="mt-1 text-[10px]"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        ※JRA-VAN 2021-2026全着順のバックテスト実測値。将来の成績を保証するものではありません
      </p>
    </div>
  )
}

const NO_BUG_MESSAGE =
  'この条件では採用基準（対象30頭以上・回収率120%以上）を満たすバグパターンは検出されませんでした。過去5年の実測でオッズの歪みが小さいコースです。'

const COMPARE_SHORTAGE_MESSAGE =
  'このコースは前半/後半を分けるにはレース数が不足しています。開催時期を個別に選択してください。'

function levelToStyle(level: number): React.CSSProperties {
  if (level >= 1)
    return { background: 'color-mix(in oklab, var(--color-silks-red) 20%, var(--color-paddock-800))' }
  return { background: 'var(--color-paddock-800)' }
}

// ─── タブ型 ──────────────────────────────────────────────────────

type ResultTab = 'frame' | 'style' | 'jockey' | 'race'

// ─── コンポーネント ───────────────────────────────────────────────

interface CourseFinderProps {
  /** 指定時：この競馬場に固定し、競馬場チップ行を非表示にする（ハブページ用） */
  fixedTrack?: Track
  /** 芝ダ・距離が変わるたびに親へ通知（ハブページ用） */
  onSelectionChange?: (sel: { surface: Surface; distance: number }) => void
}

export function CourseFinder({ fixedTrack, onSelectionChange }: CourseFinderProps = {}) {
  const shouldReduceMotion = useReducedMotion()

  // ─ State ─
  const [track, setTrack] = useState<Track>(fixedTrack ?? 'tokyo')
  const [surface, setSurface] = useState<Surface>('turf')
  const [distance, setDistance] = useState<number>(1600)
  const [phaseSel, setPhaseSel] = useState<PhaseSel>('early')
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [tab, setTab] = useState<ResultTab>('frame')

  // 検索条件の利用計測（初期表示はカウントせず、ユーザー操作による変更のみ送信）
  const isInitialSearch = useRef(true)
  useEffect(() => {
    if (isInitialSearch.current) {
      isInitialSearch.current = false
      return
    }
    trackEvent('finder_search', { track, surface, distance, phase: phaseSel, month: selectedMonth ?? 'all' })
  }, [track, surface, distance, phaseSel, selectedMonth])

  // 親へ現在の芝ダ・距離を通知（ハブ連動用）。初回マウント含め常に最新を渡す。
  useEffect(() => {
    onSelectionChange?.({ surface, distance })
  }, [surface, distance, onSelectionChange])

  // 選択中トラックの距離候補（動的）
  const availableDistances = useMemo(() => {
    const trackInfo = tracks.find((t) => t.id === track)
    if (!trackInfo) return []
    return trackInfo.courses
      .filter((c) => c.surface === surface)
      .map((c) => c.distance)
      .sort((a, b) => a - b)
  }, [track, surface])

  // 現在の（場×馬場×距離）で月別キーが存在する月を昇順に列挙
  const availableMonths = useMemo(() => {
    const prefix = `${track}-${surface}-${distance}-m`
    const months: number[] = []
    for (const key of Object.keys(courseStats)) {
      if (key.startsWith(prefix)) {
        const m = parseInt(key.slice(prefix.length), 10)
        if (!isNaN(m) && m >= 1 && m <= 12) months.push(m)
      }
    }
    return months.sort((a, b) => a - b)
  }, [track, surface, distance])

  // track / surface 変更時、distance が候補にない場合は先頭へ自動補正
  // 月選択も次の組み合わせで存在しなければ「全期間」へリセット
  function handleTrackChange(newTrack: Track) {
    setTrack(newTrack)
    const trackInfo = tracks.find((t) => t.id === newTrack)
    if (!trackInfo) return
    const candidates = trackInfo.courses
      .filter((c) => c.surface === surface)
      .map((c) => c.distance)
    const newDist = candidates.includes(distance) ? distance : (candidates[0] ?? distance)
    if (!candidates.includes(distance)) setDistance(newDist)
    // 月リセット確認（新しい track×surface×distance で月キーが存在するか）
    if (selectedMonth !== null) {
      const newPrefix = `${newTrack}-${surface}-${newDist}-m${selectedMonth}`
      if (!(newPrefix in courseStats)) setSelectedMonth(null)
    }
  }

  function handleSurfaceChange(newSurface: Surface) {
    setSurface(newSurface)
    const trackInfo = tracks.find((t) => t.id === track)
    if (!trackInfo) return
    const candidates = trackInfo.courses
      .filter((c) => c.surface === newSurface)
      .map((c) => c.distance)
    const newDist = candidates.includes(distance) ? distance : (candidates[0] ?? distance)
    if (!candidates.includes(distance)) setDistance(newDist)
    // 月リセット確認
    if (selectedMonth !== null) {
      const newPrefix = `${track}-${newSurface}-${newDist}-m${selectedMonth}`
      if (!(newPrefix in courseStats)) setSelectedMonth(null)
    }
  }

  function handleDistanceChange(newDist: number) {
    setDistance(newDist)
    // 月リセット確認
    if (selectedMonth !== null) {
      const newPrefix = `${track}-${surface}-${newDist}-m${selectedMonth}`
      if (!(newPrefix in courseStats)) setSelectedMonth(null)
    }
  }

  // 単独モード用（early/late どちらかが選択されているとき）
  const singlePhase: MeetingPhase = phaseSel === 'compare' ? 'early' : phaseSel

  // 結果データ（単独モード）
  // selectedMonth が指定されている場合は月別データを、そうでなければ従来の phase データを使う
  const frameFavorabilityResult = useMemo(
    () => getFrameFavorability(track, surface, distance, singlePhase, selectedMonth ?? undefined),
    [track, surface, distance, singlePhase, selectedMonth],
  )
  const frameFavorability = frameFavorabilityResult.items

  const styleFavorabilityResult = useMemo(
    () => getStyleFavorability(track, surface, distance, singlePhase, selectedMonth ?? undefined),
    [track, surface, distance, singlePhase, selectedMonth],
  )
  const styleFavorability = styleFavorabilityResult.items

  // 比較モード用（early / late 両方を取得）
  const earlyFrameResult = useMemo(
    () => getFrameFavorability(track, surface, distance, 'early'),
    [track, surface, distance],
  )
  const lateFrameResult = useMemo(
    () => getFrameFavorability(track, surface, distance, 'late'),
    [track, surface, distance],
  )
  const earlyStyleResult = useMemo(
    () => getStyleFavorability(track, surface, distance, 'early'),
    [track, surface, distance],
  )
  const lateStyleResult = useMemo(
    () => getStyleFavorability(track, surface, distance, 'late'),
    [track, surface, distance],
  )

  // 実データバッジ：比較モードは両phaseとも実データのときのみ
  const isRealData =
    phaseSel === 'compare'
      ? earlyFrameResult.isRealData &&
        lateFrameResult.isRealData &&
        earlyStyleResult.isRealData &&
        lateStyleResult.isRealData
      : frameFavorabilityResult.isRealData || styleFavorabilityResult.isRealData

  // 通常モード用バグアラート（月選択中は出さない）
  const bugAlerts = useMemo(
    () =>
      phaseSel === 'compare' || selectedMonth !== null
        ? []
        : getBugAlerts(track, surface, distance, phaseSel as MeetingPhase),
    [track, surface, distance, phaseSel, selectedMonth],
  )

  // 比較モード用アラート（各phaseのラベル付き・月選択中は出さない）
  const compareAlerts = useMemo(
    () =>
      phaseSel === 'compare' && selectedMonth === null
        ? [
            ...getBugAlerts(track, surface, distance, 'early')
              .slice(0, 1)
              .map((a) => ({ ...a, phaseLabel: '開幕前半' as const })),
            ...getBugAlerts(track, surface, distance, 'late')
              .slice(0, 1)
              .map((a) => ({ ...a, phaseLabel: '開催後半' as const })),
          ]
        : [],
    [track, surface, distance, phaseSel, selectedMonth],
  )

  const trackName = TRACK_CHIPS.find((c) => c.id === track)?.label ?? track
  const surfaceName = surface === 'turf' ? '芝' : 'ダート'
  const phaseInfo = phaseSel !== 'compare' ? MEETING_PHASES[phaseSel] : null

  // 月選択時の races（月別キーから取得）
  const monthRaces = useMemo(() => {
    if (selectedMonth === null) return undefined
    return courseStats[`${track}-${surface}-${distance}-m${selectedMonth}`]?.races
  }, [track, surface, distance, selectedMonth])

  const hasDirtCourses = useMemo(() => {
    const trackInfo = tracks.find((t) => t.id === track)
    return (trackInfo?.courses.filter((c) => c.surface === 'dirt') ?? []).length > 0
  }, [track])

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }

  return (
    <section
      id="finder"
      aria-label="コース傾向＆バグ穴馬検索"
      className="rounded-xl border bg-paddock-900 px-3 py-4 sm:px-4 sm:py-5"
      style={{ borderColor: 'var(--color-paddock-700)' }}
    >
      {/* ── 見出し ── */}
      <div className="mb-3">
        <p className="text-xs tracking-widest" style={{ color: 'var(--color-gold-600)' }}>
          COURSE BUG FINDER
        </p>
        <h2 className="font-heading text-sm font-semibold sm:text-base" style={{ color: 'var(--color-gold-400)' }}>
          コース傾向＆バグ穴馬検索
        </h2>
      </div>

      {/* ── 1列目：競馬場チップ（5列×2行） ── */}
      {!fixedTrack && (
        <div
          className="grid gap-1 mb-3"
          style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
          role="group"
          aria-label="競馬場選択"
        >
          {TRACK_CHIPS.map(({ id, label }) => {
            const isSelected = track === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleTrackChange(id)}
                aria-pressed={isSelected}
                className="rounded py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2"
                style={
                  isSelected
                    ? {
                        background: 'var(--color-gold-500)',
                        color: 'var(--color-paddock-950)',
                        outlineColor: 'var(--color-gold-500)',
                      }
                    : {
                        background: 'transparent',
                        color: 'var(--color-foreground)',
                        border: '1px solid var(--color-paddock-700)',
                        outlineColor: 'var(--color-gold-500)',
                      }
                }
              >
                {label}
              </button>
            )
          })}
        </div>
      )}

      {/* ── 2列目：馬場トグル＋距離チップ ── */}
      <div className="flex items-start gap-2 mb-3">
        {/* 芝/ダ トグル */}
        <div
          className="flex shrink-0 rounded overflow-hidden"
          style={{ border: '1px solid var(--color-paddock-700)' }}
          role="group"
          aria-label="馬場選択"
        >
          {(['turf', 'dirt'] as Surface[]).map((s) => {
            const isSelected = surface === s
            const label = s === 'turf' ? '芝' : 'ダ'
            return (
              <button
                key={s}
                type="button"
                onClick={() => handleSurfaceChange(s)}
                aria-pressed={isSelected}
                className="px-2.5 py-1.5 text-xs font-medium transition-colors"
                style={
                  isSelected
                    ? s === 'turf'
                      ? {
                          background: 'var(--color-turf-500)',
                          color: 'var(--color-paddock-950)',
                        }
                      : {
                          background: 'var(--color-gold-500)',
                          color: 'var(--color-paddock-950)',
                        }
                    : {
                        background: 'transparent',
                        color: 'var(--color-muted-foreground)',
                      }
                }
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* 距離チップ（横スクロール） */}
        <div
          className="flex gap-1.5 overflow-x-auto pb-0.5 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="group"
          aria-label="距離選択"
        >
          {surface === 'dirt' && !hasDirtCourses ? (
            <span
              className="shrink-0 rounded px-2 py-1.5 text-xs"
              style={{
                background: 'var(--color-paddock-800)',
                color: 'var(--color-muted-foreground)',
              }}
            >
              ダートは準備中
            </span>
          ) : availableDistances.length === 0 ? (
            <span
              className="shrink-0 rounded px-2 py-1.5 text-xs"
              style={{
                background: 'var(--color-paddock-800)',
                color: 'var(--color-muted-foreground)',
              }}
            >
              準備中
            </span>
          ) : (
            availableDistances.map((d) => {
              const isSelected = distance === d
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => handleDistanceChange(d)}
                  aria-pressed={isSelected}
                  className="shrink-0 snap-start rounded px-2 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2"
                  style={
                    isSelected
                      ? {
                          background: 'var(--color-gold-500)',
                          color: 'var(--color-paddock-950)',
                          outlineColor: 'var(--color-gold-500)',
                        }
                      : {
                          background: 'var(--color-paddock-800)',
                          color: 'var(--color-foreground)',
                          outlineColor: 'var(--color-gold-500)',
                        }
                  }
                >
                  {d}m
                </button>
              )
            })
          )}
        </div>
      </div>

      {/* ── 結果タブ（4種）：芝ダ・距離の直下に置き、iPhone で気づける位置に ── */}
      <div className="flex gap-1 mb-3" role="tablist" aria-label="結果タブ">
        {(['frame', 'style', 'jockey', 'race'] as ResultTab[]).map((t) => {
          const label =
            t === 'frame' ? '枠順' : t === 'style' ? '脚質' : t === 'jockey' ? '騎手' : 'レース'
          const isSelected = tab === t
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setTab(t)}
              className="rounded px-3 py-1 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2"
              style={
                isSelected
                  ? {
                      background: 'var(--color-gold-500)',
                      color: 'var(--color-paddock-950)',
                      outlineColor: 'var(--color-gold-500)',
                    }
                  : {
                      background: 'var(--color-paddock-800)',
                      color: 'var(--color-muted-foreground)',
                      outlineColor: 'var(--color-gold-500)',
                    }
              }
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* 開催月・開催時期は枠順/脚質タブのときだけ表示 */}
      {(tab === 'frame' || tab === 'style') && (
        <>
      {/* ── 3列目：開催月チップ（月別キーが1つ以上あるときのみ表示） ── */}
      {availableMonths.length > 0 && (
        <div
          className="flex gap-1.5 overflow-x-auto pb-0.5 snap-x snap-mandatory mb-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="group"
          aria-label="開催月選択"
        >
          {/* 全期間ボタン */}
          <button
            type="button"
            onClick={() => setSelectedMonth(null)}
            aria-pressed={selectedMonth === null}
            className="shrink-0 snap-start rounded px-2 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2"
            style={
              selectedMonth === null
                ? {
                    background: 'var(--color-gold-500)',
                    color: 'var(--color-paddock-950)',
                    outlineColor: 'var(--color-gold-500)',
                  }
                : {
                    background: 'var(--color-paddock-800)',
                    color: 'var(--color-foreground)',
                    outlineColor: 'var(--color-gold-500)',
                  }
            }
          >
            全期間
          </button>
          {availableMonths.map((m) => {
            const isSelected = selectedMonth === m
            return (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMonth(m)}
                aria-pressed={isSelected}
                className="shrink-0 snap-start rounded px-2 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2"
                style={
                  isSelected
                    ? {
                        background: 'var(--color-gold-500)',
                        color: 'var(--color-paddock-950)',
                        outlineColor: 'var(--color-gold-500)',
                      }
                    : {
                        background: 'var(--color-paddock-800)',
                        color: 'var(--color-foreground)',
                        outlineColor: 'var(--color-gold-500)',
                      }
                }
              >
                {m}月
              </button>
            )
          })}
        </div>
      )}

      {/* ── 4列目：開催時期トグル（3ボタン）── */}
      <div
        className="grid grid-cols-3 rounded overflow-hidden mb-4"
        style={
          selectedMonth !== null
            ? { border: '1px solid var(--color-paddock-800)', opacity: 0.4, pointerEvents: 'none' }
            : { border: '1px solid var(--color-paddock-700)' }
        }
        role="group"
        aria-label="開催時期選択"
        aria-disabled={selectedMonth !== null}
      >
        {(Object.entries(MEETING_PHASES) as [MeetingPhase, { label: string; sub: string }][]).map(
          ([key, { label, sub }]) => {
            const isSelected = phaseSel === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPhaseSel(key)}
                aria-pressed={isSelected}
                className="flex h-14 flex-col items-center justify-center gap-0.5 px-2 py-2 text-center transition-colors focus-visible:outline focus-visible:outline-2"
                style={
                  isSelected
                    ? {
                        background:
                          'linear-gradient(135deg, var(--color-gold-600), var(--color-gold-400))',
                        color: 'var(--color-paddock-950)',
                        outlineColor: 'var(--color-gold-500)',
                      }
                    : {
                        background: 'var(--color-paddock-800)',
                        color: 'var(--color-muted-foreground)',
                        outlineColor: 'var(--color-gold-500)',
                      }
                }
              >
                <span className="text-xs font-semibold leading-tight">{label}</span>
                <span className="text-[10px] leading-tight opacity-80">{sub}</span>
              </button>
            )
          },
        )}
        {/* 前後半比較ボタン */}
        <button
          type="button"
          onClick={() => setPhaseSel('compare')}
          aria-pressed={phaseSel === 'compare'}
          className="flex h-14 flex-col items-center justify-center gap-0.5 px-2 py-2 text-center transition-colors focus-visible:outline focus-visible:outline-2"
          style={
            phaseSel === 'compare'
              ? {
                  background:
                    'linear-gradient(135deg, var(--color-gold-600), var(--color-gold-400))',
                  color: 'var(--color-paddock-950)',
                  outlineColor: 'var(--color-gold-500)',
                }
              : {
                  background: 'var(--color-paddock-800)',
                  color: 'var(--color-muted-foreground)',
                  outlineColor: 'var(--color-gold-500)',
                }
          }
        >
          <span className="text-xs font-semibold leading-tight">前後半比較</span>
          <span className="text-[10px] leading-tight opacity-80">変化を確認</span>
        </button>
      </div>
        </>
      )}

      {/* ── 結果エリア（枠順/脚質タブのときのみ） ── */}
      {(tab === 'frame' || tab === 'style') && availableDistances.length > 0 && (
        <div>
          {/* 条件サマリー */}
          <p className="mb-2 text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
            <span style={{ color: 'var(--color-foreground)' }}>
              現在の条件：{trackName} {surfaceName}{distance}m
              {selectedMonth !== null
                ? `（${selectedMonth}月）`
                : phaseSel === 'compare'
                  ? '（前半 vs 後半）'
                  : `（${phaseInfo!.label}）`}
            </span>{' '}
            {isRealData && (
              <span
                className="inline-block rounded px-1 py-0.5 text-[9px] font-bold leading-none align-middle"
                style={{
                  background: 'color-mix(in oklab, var(--color-gold-500) 20%, transparent)',
                  color: 'var(--color-gold-400)',
                  border: '1px solid var(--color-gold-600)',
                }}
              >
                実データ
              </span>
            )}{' '}
            {/* races 表示 */}
            {isRealData && (() => {
              if (selectedMonth !== null) {
                if (monthRaces !== undefined) {
                  return (
                    <span style={{ color: 'var(--color-muted-foreground)' }}>
                      {`・${monthRaces}レース集計`}
                    </span>
                  )
                }
              } else if (phaseSel === 'compare') {
                const earlyRaces = getCourseStats(track, surface, distance, 'early')?.races
                const lateRaces = getCourseStats(track, surface, distance, 'late')?.races
                if (earlyRaces !== undefined && lateRaces !== undefined) {
                  return (
                    <span style={{ color: 'var(--color-muted-foreground)' }}>
                      {`・前半${earlyRaces}／後半${lateRaces}レース`}
                    </span>
                  )
                }
              } else {
                const races = getCourseStats(track, surface, distance, phaseSel as MeetingPhase)?.races
                if (races !== undefined) {
                  return (
                    <span style={{ color: 'var(--color-muted-foreground)' }}>
                      {`・${races}レース集計`}
                    </span>
                  )
                }
              }
              return null
            })()}{' '}
            {selectedMonth === null && phaseSel !== 'compare' && <span>{phaseInfo!.sub}</span>}
          </p>

          {/* タブコンテンツ（AnimatePresenceでフェード切替） */}
          <AnimatePresence mode="wait">
            {tab === 'frame' ? (
              <motion.div key={`frame-${track}-${surface}-${distance}-${phaseSel}`} {...motionProps}>
                {phaseSel === 'compare' && selectedMonth === null ? (
                  /* 比較モード：枠順 */
                  earlyFrameResult.isRealData && lateFrameResult.isRealData ? (
                    <>
                      <CompareBarRows
                        ariaLabel="枠順前後半比較"
                        rows={earlyFrameResult.items.map((ef) => ({
                          key: String(ef.frame),
                          label: `${ef.frame}枠`,
                          earlyPlaceRate: ef.placeRate,
                          latePlaceRate: lateFrameResult.items.find(
                            (l) => l.frame === ef.frame,
                          )?.placeRate,
                        }))}
                      />
                      <p className="text-[10px]" style={{ color: 'var(--color-muted-foreground)' }}>
                        上=開幕前半　下=開催後半（バー=複勝率）　赤字=後半に有利化
                      </p>
                    </>
                  ) : (
                    <NoticeBox>{COMPARE_SHORTAGE_MESSAGE}</NoticeBox>
                  )
                ) : (
                  /* 通常モード：枠順 */
                  <>
                    {frameFavorabilityResult.isRealData ? (
                      <StatBarRows
                        ariaLabel="枠順有利度"
                        rows={frameFavorability.map(({ frame, winRate, placeRate }) => ({
                          key: String(frame),
                          label: `${frame}枠`,
                          winRate,
                          placeRate,
                        }))}
                      />
                    ) : (
                      <div
                        className="grid mb-1"
                        style={{ gridTemplateColumns: 'repeat(8, 1fr)', gap: '2px' }}
                        role="list"
                        aria-label="枠順有利度"
                      >
                        {frameFavorability.map(({ frame, level }) => (
                          <div
                            key={frame}
                            role="listitem"
                            className="flex flex-col items-center rounded py-1.5"
                            style={levelToStyle(level)}
                          >
                            <span
                              className="text-xs font-bold"
                              style={{ color: 'var(--color-zekken)' }}
                            >
                              {frame}
                            </span>
                            <span
                              className="text-[9px] leading-tight mt-0.5"
                              style={{ color: 'var(--color-muted-foreground)' }}
                            >
                              枠
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-[10px]" style={{ color: 'var(--color-muted-foreground)' }}>
                      {frameFavorabilityResult.isRealData
                        ? 'バーの長さ=複勝率　赤=複勝率30%超'
                        : '赤=有利傾向'}
                    </p>
                  </>
                )}
              </motion.div>
            ) : (
              <motion.div key={`style-${track}-${surface}-${distance}-${phaseSel}`} {...motionProps}>
                {phaseSel === 'compare' && selectedMonth === null ? (
                  /* 比較モード：脚質 */
                  earlyStyleResult.isRealData && lateStyleResult.isRealData ? (
                    <>
                      <CompareBarRows
                        ariaLabel="脚質前後半比較"
                        rows={earlyStyleResult.items.map((es) => {
                          const ls = lateStyleResult.items.find((l) => l.style === es.style)
                          return {
                            key: es.style,
                            label: <span style={{ color: 'var(--color-zekken)' }}>{es.style}</span>,
                            earlyPlaceRate: es.placeRate,
                            latePlaceRate: ls?.placeRate,
                          }
                        })}
                      />
                      <p className="text-[10px]" style={{ color: 'var(--color-muted-foreground)' }}>
                        上=開幕前半　下=開催後半（バー=複勝率）　赤字=後半に有利化
                      </p>
                    </>
                  ) : (
                    <NoticeBox>{COMPARE_SHORTAGE_MESSAGE}</NoticeBox>
                  )
                ) : (
                  /* 通常モード：脚質 */
                  <>
                    {styleFavorabilityResult.isRealData ? (
                      <StatBarRows
                        ariaLabel="脚質有利度"
                        rows={styleFavorability.map(({ style, winRate, placeRate }) => ({
                          key: style,
                          label: <span style={{ color: 'var(--color-zekken)' }}>{style}</span>,
                          winRate,
                          placeRate,
                        }))}
                      />
                    ) : (
                      <div
                        className="flex gap-1.5 mb-1"
                        role="list"
                        aria-label="脚質有利度"
                      >
                        {styleFavorability.map(({ style, level }) => (
                          <div
                            key={style}
                            role="listitem"
                            className="flex flex-1 flex-col items-center rounded py-1.5"
                            style={levelToStyle(level)}
                          >
                            <span
                              className="text-xs font-bold"
                              style={{ color: 'var(--color-zekken)' }}
                            >
                              {style}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-[10px]" style={{ color: 'var(--color-muted-foreground)' }}>
                      {styleFavorabilityResult.isRealData
                        ? 'バーの長さ=複勝率　赤=複勝率30%超'
                        : '赤=有利傾向'}
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ★ バグ穴馬アラート（常時表示・タブ外） */}
          <div className="mt-3 flex flex-col gap-2">
            {selectedMonth !== null ? (
              /* 月選択中：バグアラートを出さず案内のみ */
              <NoticeBox>
                バグ穴馬アラートと開催前半/後半の分析は「全期間」表示で確認できます
              </NoticeBox>
            ) : phaseSel === 'compare' ? (
              /* 比較モード：earlyとlateのアラート各1件（フェーズタグ付き） */
              compareAlerts.length === 0 ? (
                <NoticeBox>{NO_BUG_MESSAGE}</NoticeBox>
              ) : (
                compareAlerts.map((alert, i) => (
                  <AlertCard key={i} alert={alert} phaseTag={alert.phaseLabel} />
                ))
              )
            ) : (
              /* 通常モード */
              <>
                {bugAlerts.length === 0 && <NoticeBox>{NO_BUG_MESSAGE}</NoticeBox>}
                {bugAlerts.map((alert, i) => (
                  <AlertCard key={i} alert={alert} />
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {/* 騎手タブ：得意な騎手TOP5（大見出しは省略） */}
      {tab === 'jockey' && (
        <JockeySection track={track} surface={surface} distance={distance} embedded />
      )}

      {/* レースタブ：重賞レースの成績（大見出しは省略） */}
      {tab === 'race' && (
        <GradedSection track={track} surface={surface} distance={distance} embedded />
      )}
    </section>
  )
}
