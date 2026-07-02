import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative mt-20 bg-paddock-900 py-8">
      {/* Gold gradient top border */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, color-mix(in oklab, var(--color-gold-500) 40%, transparent) 40%, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div>
            <p className="font-heading text-lg font-bold text-gold-shimmer">馬券ファクト</p>
            <p className="mt-1 text-xs text-gray-500">調べ尽くして、論理で買う。</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link
              href="/report"
              className="transition-colors hover:text-gold-400"
            >
              週次レポート
            </Link>
            <Link
              href="/courses"
              className="transition-colors hover:text-gold-400"
            >
              コース傾向
            </Link>
            <Link
              href="/jockeys"
              className="transition-colors hover:text-gold-400"
            >
              騎手データ
            </Link>
            <Link
              href="https://note.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 transition-colors hover:text-gold-300"
            >
              Note（買い目）
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-600">
          ※ 本サイトの情報は予想の参考用です。馬券購入は自己責任でお願いします。
        </p>
      </div>
    </footer>
  )
}
