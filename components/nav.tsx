'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/report', label: '週次レポート' },
  { href: '/courses', label: 'コース傾向' },
  { href: '/jockeys', label: '騎手データ' },
  { href: '/training', label: '調教チェック' },
]

const EASE_GATE = [0.16, 1, 0.3, 1] as const

export function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-paddock-900/95 backdrop-blur">
      {/* Gold gradient bottom border */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, color-mix(in oklab, var(--color-gold-500) 40%, transparent) 40%, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-gold-shimmer animate-shimmer">
            馬券ファクト
          </span>
          <Badge
            variant="outline"
            className="border-gold-400/60 text-gold-400 text-xs hidden sm:inline-flex"
          >
            データ分析
          </Badge>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="メインナビゲーション">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="relative py-1 text-sm transition-colors hover:text-gold-400"
                style={{ color: isActive ? 'var(--color-gold-400)' : undefined }}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full"
                    style={{ background: 'var(--color-gold-500)' }}
                    transition={{ duration: 0.25, ease: EASE_GATE }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="https://note.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded bg-gold-500 px-3 py-1.5 text-sm font-semibold text-paddock-950 transition-colors hover:bg-gold-400 md:block"
          >
            買い目を見る →
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex items-center justify-center rounded p-1.5 text-gray-300 transition-colors hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500 md:hidden"
            aria-label={mobileOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={20} aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={20} aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu — ゲート風に上からスライドイン */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EASE_GATE }}
            className="md:hidden overflow-hidden border-t bg-paddock-900 px-4 pb-5 pt-3"
            style={{ borderTopColor: 'var(--color-paddock-700)' }}
          >
            <nav className="flex flex-col gap-1" aria-label="モバイルナビゲーション">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.28, ease: EASE_GATE }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded px-2 py-2.5 text-sm transition-colors hover:text-gold-400"
                    style={{
                      color:
                        pathname === href
                          ? 'var(--color-gold-400)'
                          : 'var(--color-muted-foreground)',
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: navLinks.length * 0.06,
                  duration: 0.28,
                  ease: EASE_GATE,
                }}
                className="mt-3"
              >
                <Link
                  href="https://note.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded bg-gold-500 px-4 py-2.5 text-center text-sm font-semibold text-paddock-950 transition-colors hover:bg-gold-400"
                >
                  買い目を見る →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
