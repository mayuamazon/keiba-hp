'use client'

import { motion } from 'framer-motion'
import { PageGate } from '@/components/motion/page-gate'

/**
 * app/template.tsx — ナビゲーションごとに再マウントされる性質を利用したページ遷移。
 * PageGate がゲートを開き、コンテンツが opacity でフォローイン。
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageGate />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  )
}
