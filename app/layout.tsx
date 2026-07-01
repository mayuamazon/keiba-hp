import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, Zen_Old_Mincho } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})
const zenOldMincho = Zen_Old_Mincho({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-zen-old-mincho',
})

export const metadata: Metadata = {
  title: '馬券ファクト | データで読む競馬予想',
  description: '調教・騎手コメント・コース傾向を徹底分析。論理的な買い目予想を毎週公開。',
  openGraph: {
    title: '馬券ファクト | データで読む競馬予想',
    description: '調教・騎手コメント・コース傾向を徹底分析。論理的な買い目予想を毎週公開。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${zenOldMincho.variable} bg-paddock-950 font-sans text-foreground`}
      >
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
