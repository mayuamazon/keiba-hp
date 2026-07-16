import { Microscope, BarChart3, NotebookPen } from 'lucide-react'
import { getAllReportMeta } from '@/lib/reports'
import { ReportCard } from '@/components/report-card'
import { Hero } from '@/components/hero'
import { AccuracyBanner } from '@/components/accuracy-banner'
import { CourseFinder } from '@/components/course-finder'
import { GateReveal } from '@/components/motion/gate-reveal'
import { HoverLift } from '@/components/motion/hover-lift'

const FEATURES = [
  {
    icon: Microscope,
    title: '調教・コメント分析',
    desc: '調教タイム・調教師コメント・騎手コメントを毎週収集して評価',
    direction: 'left' as const,
  },
  {
    icon: BarChart3,
    title: 'コース傾向データ',
    desc: '競馬場・コース別の枠番成績・脚質傾向を常時掲載',
    direction: 'up' as const,
  },
  {
    icon: NotebookPen,
    title: '外れた理由も公開',
    desc: '的中・不的中問わず毎週振り返りを公開。言いっぱなしにしない',
    direction: 'right' as const,
  },
]

export default async function HomePage() {
  const reports = await getAllReportMeta()
  const latest = reports[0]
  const recent = reports.slice(0, 6)

  return (
    <>
      {/* ① 圧縮ヒーロー */}
      <Hero />

      <div className="mx-auto max-w-6xl px-4 py-4">
        {/* ② CourseFinder（ファーストビュー内・即表示） */}
        <CourseFinder />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* ③ 実績バナー：CountUp アニメーション付き */}
        <GateReveal direction="up" delay={0.1}>
          {/* 実績値は的中結果の実測のみ入力する（0のままなら準備中表示） */}
          <AccuracyBanner
            period="2026年上半期"
            totalRaces={0}
            hits={0}
            avgRoi={0}
          />
        </GateReveal>

        {/* ④ 最新レポート */}
        {latest && (
          <section className="mt-16">
            <GateReveal direction="up" delay={0}>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                最新レポート
              </h2>
            </GateReveal>
            <GateReveal direction="up" delay={0.1}>
              <HoverLift>
                <ReportCard report={latest} />
              </HoverLift>
            </GateReveal>
          </section>
        )}

        {/* ⑤ 過去のレポート */}
        {recent.length > 1 && (
          <section className="mt-12">
            <GateReveal direction="up" delay={0}>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                過去のレポート
              </h2>
            </GateReveal>
            <div className="grid gap-4 md:grid-cols-2">
              {recent.slice(1).map((report, i) => (
                <GateReveal
                  key={report.slug}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  delay={i * 0.08}
                >
                  <HoverLift>
                    <ReportCard report={report} />
                  </HoverLift>
                </GateReveal>
              ))}
            </div>
          </section>
        )}

        {/* ⑥ サイト特徴 3 カード */}
        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc, direction }, i) => (
            <GateReveal key={title} direction={direction} delay={i * 0.1}>
              <HoverLift>
                <div className="h-full rounded-lg border border-paddock-700 bg-paddock-800 p-5">
                  {/* lucide アイコン：turf 透過の円形背景 ＋ gold */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: 'oklch(0.65 0.16 147 / 0.15)' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: 'var(--color-gold-400)' }} />
                  </div>
                  <h3 className="mt-3 font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </HoverLift>
            </GateReveal>
          ))}
        </section>
      </div>
    </>
  )
}
