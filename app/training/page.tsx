import { GateReveal } from '@/components/motion/gate-reveal'
import { HoverLift } from '@/components/motion/hover-lift'
import { TrainingCard } from '@/components/training-card'
import { NoteCta } from '@/components/note-cta'
import type { TrainingCheck } from '@/lib/types'

const thisWeekTraining: TrainingCheck[] = [
  {
    horseName: '（今週の注目馬名）',
    raceName: '七夕賞（G3）',
    raceDate: '2026-07-05',
    trackId: 'nakayama',
    trainingTime: '80.1-64.8-51.2-36.4',
    trainerComment: 'データ収集後に記入',
    jockeyComment: 'データ収集後に記入',
    evaluation: 'A',
    evaluationNote: 'CWでの動きが抜群。前走比で明確に上積みあり。',
  },
]

export const metadata = {
  title: '調教チェック | 馬券ファクト',
  description: '今週の重賞注目馬の調教タイム・騎手コメント・調教師コメントをまとめています。',
}

const DIRECTIONS = ['left', 'up', 'right'] as const

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        調教チェック
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        毎週木〜金曜に今週の重賞・注目馬の調教評価を更新します。
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {thisWeekTraining.map((t, i) => (
          <GateReveal
            key={`${t.horseName}-${i}`}
            direction={DIRECTIONS[i % 3]}
            delay={i * 0.06}
          >
            <HoverLift>
              <TrainingCard training={t} />
            </HoverLift>
          </GateReveal>
        ))}
      </div>

      <div className="mt-8">
        <NoteCta
          raceTitle="今週の重賞"
          noteUrl="https://note.com"
        />
      </div>
    </div>
  )
}
