'use client'

import { useRef, useEffect, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  value: number
  decimals?: number
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({
  value,
  decimals = 0,
  suffix = '',
  duration = 1.2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    // Immediately show final value when reduced motion is preferred
    if (shouldReduceMotion) {
      setDisplay(value)
      return
    }
    if (!isInView) return

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate(latest: number) {
        setDisplay(latest)
      },
    })

    return () => controls.stop()
  }, [isInView, value, duration, shouldReduceMotion])

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
