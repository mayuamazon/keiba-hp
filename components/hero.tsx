'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { HorseSilhouette } from '@/components/horse-silhouette'

const EASE_GATE = [0.16, 1, 0.3, 1] as const
const EASE_HOOF = [0.37, 0, 0.63, 1] as const

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// スピードライン（馬の後方に流れる金の線）
const SPEED_LINES = [
  { width: 80, top: 38, opacity: 0.50, skew: -2 },
  { width: 60, top: 52, opacity: 0.38, skew: -1 },
  { width: 95, top: 66, opacity: 0.28, skew: -2 },
  { width: 50, top: 80, opacity: 0.18, skew: -1 },
]

// 砂塵パーティクル（蹄付近に舞う）
const DUST_SPECS = [
  { left: 30, size: 4, delay: 0.00, dy: -12 },
  { left: 58, size: 3, delay: 0.08, dy: -16 },
  { left: 88, size: 5, delay: 0.05, dy: -10 },
  { left: 115, size: 3, delay: 0.12, dy: -18 },
  { left: 155, size: 4, delay: 0.03, dy: -14 },
  { left: 190, size: 3, delay: 0.09, dy: -11 },
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const horseControls = useAnimation()
  const [isRunning, setIsRunning] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  // パララックス用スクロール追跡
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const turfY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  // 馬の疾走ループ（mount 後 0.9s→ 1回め、その後 10s 間隔で再走）
  useEffect(() => {
    if (shouldReduceMotion) return

    let alive = true

    async function runLoop() {
      // 初回遅延
      await sleep(900)
      while (alive) {
        horseControls.set({ x: '-15vw' })
        setIsRunning(true)
        await horseControls.start({
          x: '115vw',
          transition: {
            duration: 1.6,
            ease: EASE_HOOF,
          },
        })
        setIsRunning(false)
        // 次の走行まで待機
        await sleep(10000)
      }
    }

    runLoop()
    return () => {
      alive = false
    }
  }, [horseControls, shouldReduceMotion])

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '70vh' }}
    >
      {/* ── 背景グラデーション（パララックス） ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-paddock-950) 0%, var(--color-paddock-900) 100%)',
          }}
        />
      </motion.div>

      {/* ── ターフの地平線（芝色の透過グラデーション帯） ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '8rem', y: turfY }}
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              'linear-gradient(to top, oklch(0.55 0.13 150 / 0.32) 0%, oklch(0.55 0.13 150 / 0.08) 60%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* ── 金の柵ライン ── */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: '5rem',
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, var(--color-gold-600) 20%, var(--color-gold-400) 50%, var(--color-gold-600) 80%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── 馬の疾走レイヤー ── */}
      {!shouldReduceMotion && (
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{ bottom: '3.5rem', height: '140px' }}
          aria-hidden="true"
        >
          <motion.div
            animate={horseControls}
            initial={{ x: '-15vw' }}
            className="absolute bottom-0"
            style={{ width: 240 }}
          >
            {/* スピードライン（馬の後方＝左側） */}
            {SPEED_LINES.map((line, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  right: '100%',
                  top: line.top,
                  width: line.width,
                  height: 2,
                  background:
                    'linear-gradient(to left, var(--color-gold-500), transparent)',
                  opacity: isRunning ? line.opacity : 0,
                  transform: `skewY(${line.skew}deg)`,
                  transition: 'opacity 0.15s',
                  filter: 'blur(0.4px)',
                }}
              />
            ))}

            {/* 砂塵パーティクル */}
            {DUST_SPECS.map((spec, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full"
                style={{
                  left: spec.left,
                  bottom: 4,
                  width: spec.size,
                  height: spec.size,
                  background: 'var(--color-gold-600)',
                }}
                animate={
                  isRunning
                    ? {
                        opacity: [0, 0.65, 0],
                        y: [0, spec.dy],
                        scale: [0.6, 1.5],
                      }
                    : { opacity: 0, y: 0, scale: 0.6 }
                }
                transition={{
                  duration: 0.9,
                  delay: spec.delay,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* 馬シルエット */}
            <HorseSilhouette
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 240,
                height: 140,
                color: 'var(--color-gold-400)',
                filter:
                  'drop-shadow(0 0 10px oklch(0.62 0.11 85 / 0.55))',
              }}
            />
          </motion.div>
        </div>
      )}

      {/* ── メインコンテンツ ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: '70vh', paddingBottom: '9rem' }}
      >
        {/* タイトル：左右のゲートが開くように「馬券」「ファクト」が飛び込む */}
        <h1 className="flex flex-wrap items-end justify-center gap-x-2 font-heading text-5xl sm:text-6xl md:text-7xl">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE_GATE, delay: 0.3 }}
            className="text-gold-shimmer animate-shimmer inline-block"
          >
            馬券
          </motion.span>
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE_GATE, delay: 0.3 }}
            className="text-gold-shimmer animate-shimmer inline-block"
          >
            ファクト
          </motion.span>
        </h1>

        {/* タグライン */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_GATE, delay: 0.55 }}
          className="mt-4 text-xl font-semibold"
          style={{ color: 'var(--color-gold-300)' }}
        >
          調べ尽くして、論理で買う。
        </motion.p>

        {/* 説明文 */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_GATE, delay: 0.7 }}
          className="mt-4 max-w-xl text-sm"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          調教タイム・騎手コメント・コース傾向・ペース想定を全部拾って、
          データで根拠を示す競馬予想サイト。毎週月〜火曜更新。
        </motion.p>

        {/* CTA ボタン */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_GATE, delay: 0.85 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href="https://note.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded px-6 py-3 text-sm font-bold transition-colors"
            style={{
              background: 'var(--color-gold-500)',
              color: 'var(--color-paddock-950)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-gold-400)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-gold-500)'
            }}
          >
            買い目を見る（Note）
          </a>
          <a
            href="/report"
            className="rounded px-6 py-3 text-sm font-semibold transition-colors"
            style={{
              border: '1px solid var(--color-turf-500)',
              color: 'var(--color-turf-400)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'oklch(0.55 0.13 150 / 0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            週次レポート →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
