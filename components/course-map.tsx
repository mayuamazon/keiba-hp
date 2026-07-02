'use client'

import { useRef, useEffect, useState, useCallback, useMemo } from 'react'
import { useReducedMotion, useMotionValue, animate } from 'framer-motion'
import type { CourseGeometry } from '@/lib/data/course-geometry'
import type { RunningStyle, RunningStyleStat } from '@/lib/types'
import { CountUp } from '@/components/motion/count-up'

// ─── 脚質別アニメーション設定 ────────────────────────────────────
// ease は cubic-bezier [x1, y1, x2, y2]
//   逃げ：ease-out（序盤速い・終盤伸びない）
//   先行：穏やかな ease-out
//   差し：ease-in（終盤20%で加速）
//   追込：強い ease-in（最後一気）
// ※CSS offset-path は SVG viewBox 座標系と合わないため
//   SVGPathElement.getPointAtLength を使い SVG 内部に circle/text を配置
// reducedOffset：reduced-motion 時の静止位置（進行率 0–1）

type BezierEase = [number, number, number, number]
type PlaybackControls = {
  stop: () => void
  pause: () => void
  play: () => void
}

interface RunnerConfig {
  style: RunningStyle
  color: string
  ease: BezierEase
  reducedOffset: number
  // ラベルのオフセット（団子時の重なり回避・馬ごと交互配置）
  //   逃げ・差し＝マーカー上（-20）／先行・追込＝マーカー下（+28）
  labelDy: number
}

const RUNNERS: RunnerConfig[] = [
  { style: '逃げ', color: 'var(--color-silks-red)',    ease: [0,    0,    0.18, 1],  reducedOffset: 0.97, labelDy: -20 },
  { style: '先行', color: 'var(--color-silks-orange)', ease: [0.08, 0,    0.4,  1],  reducedOffset: 0.94, labelDy:  28 },
  { style: '差し', color: 'var(--color-silks-blue)',   ease: [0.52, 0,    0.82, 1],  reducedOffset: 0.91, labelDy: -20 },
  { style: '追込', color: 'var(--color-silks-purple)', ease: [0.78, 0,    0.98, 1],  reducedOffset: 0.88, labelDy:  28 },
]

// ─── RunnerDot（1馬）────────────────────────────────────────────
interface RunnerDotProps {
  pathEl: SVGPathElement | null
  color: string
  style: RunningStyle
  ease: BezierEase
  isPlaying: boolean
  shouldReduceMotion: boolean
  reducedOffset: number
  labelDy: number
}

function RunnerDot({
  pathEl,
  color,
  style,
  ease,
  isPlaying,
  shouldReduceMotion,
  reducedOffset,
  labelDy,
}: RunnerDotProps) {
  const circleRef = useRef<SVGCircleElement>(null)
  const textRef   = useRef<SVGTextElement>(null)
  const progress  = useMotionValue(0)
  const ctrlRef   = useRef<PlaybackControls | null>(null)

  const moveTo = useCallback((p: number, totalLength: number, pathElement: SVGPathElement) => {
    const pt = pathElement.getPointAtLength(p * totalLength)
    circleRef.current?.setAttribute('cx', String(pt.x))
    circleRef.current?.setAttribute('cy', String(pt.y))
    textRef.current?.setAttribute('x',  String(pt.x))
    textRef.current?.setAttribute('y',  String(pt.y + labelDy))
  }, [labelDy])

  // アニメーション起動（pathEl が確定してから）
  useEffect(() => {
    if (!pathEl || typeof pathEl.getTotalLength !== 'function') return
    const totalLength = pathEl.getTotalLength()
    if (totalLength <= 0) return  // jsdom / 未レンダリング

    if (shouldReduceMotion) {
      moveTo(reducedOffset, totalLength, pathEl)
      return
    }

    const unsubscribe = progress.on('change', (p) => {
      moveTo(p, totalLength, pathEl)
    })
    // 初期位置をゴールに置く
    moveTo(0, totalLength, pathEl)

    const controls = animate(progress, 1, {
      duration: 8,
      ease,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 1,
    })
    ctrlRef.current = controls

    return () => {
      unsubscribe()
      controls.stop()
      progress.set(0)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathEl, shouldReduceMotion, reducedOffset])

  // 再生 / 一時停止
  useEffect(() => {
    if (shouldReduceMotion || !ctrlRef.current) return
    if (isPlaying) {
      ctrlRef.current.play()
    } else {
      ctrlRef.current.pause()
    }
  }, [isPlaying, shouldReduceMotion])

  return (
    <g role="presentation">
      <circle
        ref={circleRef}
        r={15}
        fill={color}
        stroke="white"
        strokeWidth={2}
        opacity={0.95}
      />
      <text
        ref={textRef}
        textAnchor="middle"
        fontSize={14}
        fontWeight="bold"
        fill="white"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {style}
      </text>
    </g>
  )
}

// ─── CourseMap（メイン） ─────────────────────────────────────────
interface CourseMapProps {
  geometry: CourseGeometry
  styleStats: RunningStyleStat[]
}

export function CourseMap({ geometry, styleStats }: CourseMapProps) {
  const shouldReduceMotion = useReducedMotion() ?? false
  const [isPlaying, setIsPlaying]   = useState(true)
  const [activeSlope, setActiveSlope] = useState<number | null>(null)
  const [pathEl, setPathEl] = useState<SVGPathElement | null>(null)

  // 参照パス（ランナー位置計算用・不可視）
  const pathCallbackRef = useCallback((el: SVGPathElement | null) => {
    setPathEl(el)
  }, [])

  // viewBox サイズ
  const [vbWidth, vbHeight] = useMemo(() => {
    const parts = geometry.viewBox.split(' ').map(Number)
    return [parts[2] ?? 1000, parts[3] ?? 620]
  }, [geometry.viewBox])

  // 勝率1位の脚質
  const topStyle = useMemo(
    () => [...styleStats].sort((a, b) => b.winRate - a.winRate)[0],
    [styleStats],
  )

  const directionLabel = geometry.direction === 'left' ? '左回り' : '右回り'

  return (
    <div className="rounded-xl border border-paddock-700 bg-paddock-900">
      {/* SVGコース図 */}
      <div className="relative w-full overflow-hidden rounded-t-xl bg-paddock-950 p-2">
        <svg
          viewBox={geometry.viewBox}
          className="w-full"
          role="img"
          aria-label={`${geometry.trackId}競馬場コース図`}
          style={{ display: 'block' }}
        >
          {/* 不可視の参照パス（getPointAtLength 用） */}
          <path
            ref={pathCallbackRef}
            d={geometry.centerline}
            fill="none"
            stroke="none"
            aria-hidden="true"
          />

          {/* ─── トラック描画（下から順にレイヤリング） ─── */}

          {/* 1. 地盤（最外周） */}
          <path
            d={geometry.centerline}
            fill="none"
            stroke="var(--color-paddock-800)"
            strokeWidth={72}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. 金の柵（チャンピオンゴールドのドット fence）*/}
          <path
            d={geometry.centerline}
            fill="none"
            stroke="var(--color-gold-500)"
            strokeWidth={68}
            strokeOpacity={0.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 18"
          />

          {/* 3. 芝メイン */}
          <path
            d={geometry.centerline}
            fill="none"
            stroke="var(--color-turf-600)"
            strokeWidth={62}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 4. 内側ハイライト（外側より明るく）*/}
          <path
            d={geometry.centerline}
            fill="none"
            stroke="var(--color-turf-500)"
            strokeWidth={40}
            strokeOpacity={0.55}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 5. 中心ライン（最内の明るい細線）*/}
          <path
            d={geometry.centerline}
            fill="none"
            stroke="var(--color-turf-400)"
            strokeWidth={18}
            strokeOpacity={0.22}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ─── ゴール線 ─── */}
          <line
            x1={geometry.goal.x}
            y1={geometry.goal.y - 36}
            x2={geometry.goal.x}
            y2={geometry.goal.y + 6}
            stroke="var(--color-zekken)"
            strokeWidth={4}
            strokeLinecap="round"
          />
          {/* GOAL ラベル（背景付き・ひと回り拡大） */}
          <rect
            x={geometry.goal.x - 30}
            y={geometry.goal.y - 62}
            width={60}
            height={26}
            rx={4}
            fill="var(--color-paddock-800)"
            fillOpacity={0.85}
          />
          <text
            x={geometry.goal.x}
            y={geometry.goal.y - 44}
            textAnchor="middle"
            fontSize={16}
            fontWeight="bold"
            fill="var(--color-gold-400)"
          >
            GOAL
          </text>

          {/* ─── コーナーラベル ─── */}
          {geometry.corners.map((corner, i) => (
            <text
              key={i}
              x={corner.x}
              y={corner.y}
              textAnchor="middle"
              fontSize={20}
              fontWeight="600"
              fill="color-mix(in oklab, var(--color-zekken) 70%, transparent)"
            >
              {corner.label}
            </text>
          ))}

          {/* ─── 坂マーカー ─── */}
          {geometry.slopes.map((slope, i) => (
            <g
              key={i}
              onClick={() => setActiveSlope(activeSlope === i ? null : i)}
              onMouseEnter={() => setActiveSlope(i)}
              onMouseLeave={() => setActiveSlope(null)}
              style={{ cursor: 'pointer' }}
              role="button"
              aria-label={slope.label}
            >
              <circle
                cx={slope.x}
                cy={slope.y - 28}
                r={14}
                fill="var(--color-paddock-800)"
                stroke={
                  slope.severity === 'steep'
                    ? 'var(--color-silks-red)'
                    : 'var(--color-gold-500)'
                }
                strokeWidth={1.5}
                opacity={0.9}
              />
              <text
                x={slope.x}
                y={slope.y - 22}
                textAnchor="middle"
                fontSize={14}
                fill={
                  slope.severity === 'steep'
                    ? 'var(--color-silks-red)'
                    : 'var(--color-gold-400)'
                }
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                ▲
              </text>

              {activeSlope === i && (
                <g>
                  {/* ツールチップ背景 */}
                  <rect
                    x={Math.min(
                      Math.max(slope.x - 115, 4),
                      vbWidth - 234
                    )}
                    y={slope.y - 82}
                    width={230}
                    height={30}
                    rx={4}
                    fill="var(--color-paddock-800)"
                    stroke="var(--color-paddock-700)"
                    strokeWidth={1}
                    opacity={0.95}
                  />
                  <text
                    x={Math.min(
                      Math.max(slope.x, 119),
                      vbWidth - 119
                    )}
                    y={slope.y - 62}
                    textAnchor="middle"
                    fontSize={10}
                    fill="var(--color-zekken)"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {slope.label}
                  </text>
                </g>
              )}
            </g>
          ))}

          {/* ─── 直線長ラベル ─── */}
          <text
            x={vbWidth / 2}
            y={vbHeight - 14}
            textAnchor="middle"
            fontSize={22}
            fontWeight="600"
            fill="var(--color-gold-300)"
          >
            {geometry.straightLabel}
          </text>

          {/* ─── ランナー ─── */}
          {RUNNERS.map((runner) => (
            <RunnerDot
              key={runner.style}
              pathEl={pathEl}
              color={runner.color}
              style={runner.style}
              ease={runner.ease}
              isPlaying={isPlaying && !shouldReduceMotion}
              shouldReduceMotion={shouldReduceMotion}
              reducedOffset={runner.reducedOffset}
              labelDy={runner.labelDy}
            />
          ))}
        </svg>
      </div>

      {/* ─── コントロール & メタ ─── */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <div className="flex items-center gap-3">
          {!shouldReduceMotion && (
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-paddock-700 bg-paddock-800 px-3.5 py-1.5 text-sm text-gold-400 hover:border-gold-500 transition-colors"
              aria-label={isPlaying ? 'アニメーションを一時停止' : 'アニメーションを再生'}
            >
              {isPlaying ? '⏸' : '▶'}{' '}
              <span className="whitespace-nowrap text-xs">{isPlaying ? '一時停止' : '再生'}</span>
            </button>
          )}
          <span className="rounded-md border border-paddock-700 bg-paddock-800 px-2 py-0.5 text-xs text-muted-foreground">
            {directionLabel}
          </span>
        </div>
        <p className="max-w-xs text-right text-xs text-muted-foreground">
          {geometry.note}
        </p>
      </div>

      {/* ─── 脚質凡例 ─── */}
      <div className="grid grid-cols-2 gap-2 p-4 pt-2 sm:grid-cols-4">
        {RUNNERS.map((runner) => {
          const stat    = styleStats.find((s) => s.style === runner.style)
          const isTop   = stat?.style === topStyle?.style
          return (
            <div
              key={runner.style}
              data-testid={`legend-${runner.style}`}
              data-top={isTop ? 'true' : 'false'}
              className={[
                'rounded-lg border p-3 transition-colors',
                isTop
                  ? 'border-gold-500 bg-paddock-800'
                  : 'border-paddock-700 bg-paddock-900',
              ].join(' ')}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: runner.color }}
                />
                <span
                  className={[
                    'text-xs font-semibold',
                    isTop ? 'text-gold-400' : 'text-muted-foreground',
                  ].join(' ')}
                >
                  {runner.style}
                </span>
                {isTop && (
                  <span className="ml-auto text-xs text-gold-500" aria-label="勝率1位">
                    ★
                  </span>
                )}
              </div>
              {stat ? (
                <>
                  <p className="mt-1 text-lg font-bold num-data">
                    <CountUp
                      value={stat.winRate}
                      decimals={1}
                      suffix="%"
                    />
                  </p>
                  <p className="text-xs text-muted-foreground">勝率</p>
                </>
              ) : (
                <p className="mt-1 text-sm text-muted-foreground">—</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
