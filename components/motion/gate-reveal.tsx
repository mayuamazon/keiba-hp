'use client'

import { motion } from 'framer-motion'

interface GateRevealProps {
  direction?: 'left' | 'right' | 'up'
  delay?: number
  className?: string
  children: React.ReactNode
}

function getInitial(direction: 'left' | 'right' | 'up') {
  if (direction === 'left') return { opacity: 0, x: -48, y: 0 }
  if (direction === 'right') return { opacity: 0, x: 48, y: 0 }
  return { opacity: 0, x: 0, y: 32 }
}

export function GateReveal({
  direction = 'up',
  delay = 0,
  className,
  children,
}: GateRevealProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
