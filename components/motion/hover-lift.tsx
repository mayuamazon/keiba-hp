'use client'

import { motion } from 'framer-motion'

interface HoverLiftProps {
  className?: string
  children: React.ReactNode
}

export function HoverLift({ className, children }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: '0 12px 40px oklch(0.72 0.12 88 / 0.28)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
