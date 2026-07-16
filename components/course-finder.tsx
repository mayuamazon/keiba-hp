'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { track as trackEvent } from '@vercel/analytics'
import { tracks } from '@/lib/data/courses'
import {
  MEETING_PHASES,
  getFrameFavorability,
  getStyleFavorability,
  getBugAlerts,
} from '@/lib/data/bug-finder'
import type { Track, Surface } from '@/lib/types'
import type { MeetingPhase } from '@/lib/data/bug-finder'

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

// ─── 有利度→色マッピング ──────────────────────────────────────────

/** バーの塗り色（赤=有利 青=不利、レベル由来） */
function levelToBarColor(level: number): string {
  if (level >= 2) return 'color-mix(in oklab, var(--color-silks-red) 75%, transparent)'
  if (level === 1) return 'color-mix(in oklab, var(--color-silks-red) 45%, transparent)'
  if (level === -1) return 'color-mix(in oklab, var(--color-silks-blue) 45%, transparent)'
  if (level <= -2) return 'color-mix(in oklab, var(--color-silks-blue) 70%, transparent)'
  return 'color-mix(in oklab, var(--color-gold-600) 40%, transparent)'
}

/** 脚質カラー共通ルール（course-map と同じ） */
const STYLE_COLORS: Record<string, string> = {
  逃げ: 'var(--color-silks-red)',
  先行: 'var(--color-silks-orange)',
  差し: 'var(--color-silks-blue)',
  追込: 'var(--color-silks-purple)',
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
    level: number
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
      {rows.map(({ key, label, level, winRate, placeRate }) => (
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
                background: levelToBarColor(level),
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

function levelToStyle(level: number): React.CSSProperties {
  if (level >= 2)
    return { background: 'color-mix(in oklab, var(--color-silks-red) 30%, var(--color-paddock-800))' }
  if (level === 1)
    return { background: 'color-mix(in oklab, var(--color-silks-red) 15%, var(--color-paddock-800))' }
  if (level === -1)
    return { background: 'color-mix(in oklab, var(--color-silks-blue) 12%, var(--color-paddock-800))' }
  if (level <= -2)
    return { background: 'color-mix(in oklab, var(--color-silks-blue) 22%, var(--color-paddock-800))' }
  return { background: 'var(--color-paddock-800)' }
}

// ─── タブ型 ──────────────────────────────────────────────────────

type ResultTab = 'frame' | 'style'

// ─── コンポーネント ───────────────────────────────────────────────

export function CourseFinder() {
  const shouldReduceMotion = useReducedMotion()

  // ─ State ─
  const [track, setTrack] = useState<Track>('tokyo')
  const [surface, setSurface] = useState<Surface>('turf')
  const [distance, setDistance] = useState<number>(1600)
  const [phase, setPhase] = useState<MeetingPhase>('early')
  const [tab, setTab] = useState<ResultTab>('frame')

  // 検索条件の利用計測（初期表示はカウントせず、ユーザー操作による変更のみ送信）
  const isInitialSearch = useRef(true)
  useEffect(() => {
    if (isInitialSearch.current) {
      isInitialSearch.current = false
      return
    }
    trackEvent('finder_search', { track, surface, distance, phase })
  }, [track, surface, distance, phase])

  // 選択中トラックの距離候補（動的）
  const availableDistances = useMemo(() => {
    const trackInfo = tracks.find((t) => t.id === track)
    if (!trackInfo) return []
    return trackInfo.courses
      .filter((c) => c.surface === surface)
      .map((c) => c.distance)
      .sort((a, b) => a - b)
  }, [track, surface])

  // track / surface 変更時、distance が候補にない場合は先頭へ自動補正
  function handleTrackChange(newTrack: Track) {
    setTrack(newTrack)
    const trackInfo = tracks.find((t) => t.id === newTrack)
    if (!trackInfo) return
    const candidates = trackInfo.courses
      .filter((c) => c.surface === surface)
      .map((c) => c.distance)
    if (!candidates.includes(distance)) {
      setDistance(candidates[0] ?? distance)
    }
  }

  function handleSurfaceChange(newSurface: Surface) {
    setSurface(newSurface)
    const trackInfo = tracks.find((t) => t.id === track)
    if (!trackInfo) return
    const candidates = trackInfo.courses
      .filter((c) => c.surface === newSurface)
      .map((c) => c.distance)
    if (!candidates.includes(distance)) {
      setDistance(candidates[0] ?? distance)
    }
  }

  // 結果データ
  const frameFavorabilityResult = useMemo(
    () => getFrameFavorability(track, surface, distance, phase),
    [track, surface, distance, phase],
  )
  const frameFavorability = frameFavorabilityResult.items

  const styleFavorabilityResult = useMemo(
    () => getStyleFavorability(track, surface, distance, phase),
    [track, surface, distance, phase],
  )
  const styleFavorability = styleFavorabilityResult.items

  // 枠順・脚質いずれか一方でも実データなら実データバッジを表示
  const isRealData = frameFavorabilityResult.isRealData || styleFavorabilityResult.isRealData

  const bugAlerts = useMemo(
    () => getBugAlerts(track, surface, distance, phase),
    [track, surface, distance, phase],
  )

  const trackName = TRACK_CHIPS.find((c) => c.id === track)?.label ?? track
  const surfaceName = surface === 'turf' ? '芝' : 'ダート'
  const phaseInfo = MEETING_PHASES[phase]

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
                  onClick={() => setDistance(d)}
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

      {/* ── 3列目：開催時期トグル ── */}
      <div
        className="grid grid-cols-2 rounded overflow-hidden mb-4"
        style={{ border: '1px solid var(--color-paddock-700)' }}
        role="group"
        aria-label="開催時期選択"
      >
        {(Object.entries(MEETING_PHASES) as [MeetingPhase, { label: string; sub: string }][]).map(
          ([key, { label, sub }]) => {
            const isSelected = phase === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPhase(key)}
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
      </div>

      {/* ── 結果エリア ── */}
      {availableDistances.length > 0 && (
        <div>
          {/* 条件サマリー */}
          <p className="mb-2 text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
            <span style={{ color: 'var(--color-foreground)' }}>
              現在の条件：{trackName} {surfaceName}{distance}m（{phaseInfo.label}）
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
            <span>{phaseInfo.sub}</span>
          </p>

          {/* タブ切替 */}
          <div
            className="flex gap-1 mb-3"
            role="tablist"
            aria-label="結果タブ"
          >
            {(['frame', 'style'] as ResultTab[]).map((t) => {
              const label = t === 'frame' ? '枠順' : '脚質'
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

          {/* タブコンテンツ（AnimatePresenceでフェード切替） */}
          <AnimatePresence mode="wait">
            {tab === 'frame' ? (
              <motion.div key={`frame-${track}-${surface}-${distance}-${phase}`} {...motionProps}>
                {/* 枠順タブ */}
                {frameFavorabilityResult.isRealData ? (
                  <StatBarRows
                    ariaLabel="枠順有利度"
                    rows={frameFavorability.map(({ frame, level, winRate, placeRate }) => ({
                      key: String(frame),
                      label: `${frame}枠`,
                      level,
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
                    ? 'バーの長さ=複勝率　赤=有利　青=不利'
                    : '赤=有利　青=不利'}
                </p>
              </motion.div>
            ) : (
              <motion.div key={`style-${track}-${surface}-${distance}-${phase}`} {...motionProps}>
                {/* 脚質タブ */}
                {styleFavorabilityResult.isRealData ? (
                  <StatBarRows
                    ariaLabel="脚質有利度"
                    rows={styleFavorability.map(({ style, level, winRate, placeRate }) => ({
                      key: style,
                      label: <span style={{ color: STYLE_COLORS[style] }}>{style}</span>,
                      level,
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
                    ? 'バーの長さ=複勝率　赤=有利　青=不利'
                    : '赤=有利　青=不利'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* コース詳細ページへの導線 */}
          <Link
            href={`/courses/${track}`}
            className="mt-2 inline-block text-[11px] underline underline-offset-2"
            style={{ color: 'var(--color-gold-400)' }}
          >
            {trackName}競馬場のコース図・全距離データを見る →
          </Link>

          {/* ★ バグ穴馬アラート（常時表示・タブ外） */}
          <div className="mt-3 flex flex-col gap-2">
            {bugAlerts.length === 0 && (
              <p
                className="rounded-lg p-3 text-[11px] leading-relaxed"
                style={{
                  border: '1px solid var(--color-gold-600)',
                  background: 'var(--color-paddock-800)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                この条件では採用基準（対象30頭以上・回収率120%以上）を満たすバグパターンは検出されませんでした。過去5年の実測でオッズの歪みが小さいコースです。
              </p>
            )}
            {bugAlerts.map((alert, i) => (
              <div
                key={i}
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
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
