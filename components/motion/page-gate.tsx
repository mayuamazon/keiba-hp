'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * PageGate — 「ゲートが閉まる → 開く」ページ遷移演出。
 * app/template.tsx からマウントされ、左右パネルが中央から開いて消える。
 */
export function PageGate() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  const panelTransition = {
    duration: 0.55,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] flex overflow-hidden"
      aria-hidden="true"
    >
      {/* Left panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={panelTransition}
        className="h-full w-1/2 bg-paddock-950"
        style={{ borderRight: '1px solid color-mix(in oklab, var(--color-gold-500) 35%, transparent)' }}
      />
      {/* Right panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={panelTransition}
        className="h-full w-1/2 bg-paddock-950"
        style={{ borderLeft: '1px solid color-mix(in oklab, var(--color-gold-500) 35%, transparent)' }}
      />
    </div>
  )
}
