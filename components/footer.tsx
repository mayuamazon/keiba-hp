import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-navy-700 bg-navy-900 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-bold text-gold-400">馬券ファクト</p>
            <p className="mt-1 text-xs text-gray-500">調べ尽くして、論理で買う。</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/report" className="hover:text-gold-400">週次レポート</Link>
            <Link href="/courses" className="hover:text-gold-400">コース傾向</Link>
            <Link href="/jockeys" className="hover:text-gold-400">騎手データ</Link>
            <Link
              href="https://note.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300"
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
