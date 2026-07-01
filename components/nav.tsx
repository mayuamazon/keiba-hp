import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

const navLinks = [
  { href: '/report', label: '週次レポート' },
  { href: '/courses', label: 'コース傾向' },
  { href: '/jockeys', label: '騎手データ' },
  { href: '/training', label: '調教チェック' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-700 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gold-400">馬券ファクト</span>
          <Badge variant="outline" className="border-gold-400 text-gold-400 text-xs">
            データ分析
          </Badge>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-300 transition-colors hover:text-gold-400"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://note.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-gold-500 px-3 py-1.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
        >
          買い目を見る →
        </Link>
      </div>
    </header>
  )
}
