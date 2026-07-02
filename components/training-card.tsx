import type { TrainingCheck, TrainingGrade } from '@/lib/types'

interface GradeConfig {
  label: string
  badgeClass: string
}

const gradeConfig: Record<TrainingGrade, GradeConfig> = {
  A: {
    label: '◎ 好調',
    badgeClass:
      'rounded border border-gold-500 bg-gold-500/10 px-2 py-0.5 text-xs font-semibold text-gold-400',
  },
  B: {
    label: '○ 普通',
    badgeClass:
      'rounded border border-turf-500 bg-turf-500/10 px-2 py-0.5 text-xs font-semibold text-turf-400',
  },
  C: {
    label: '△ 注意',
    badgeClass:
      'rounded border border-paddock-600 bg-paddock-700/30 px-2 py-0.5 text-xs font-semibold text-muted-foreground',
  },
}

interface TrainingCardProps {
  training: TrainingCheck
}

export function TrainingCard({ training }: TrainingCardProps) {
  const grade = gradeConfig[training.evaluation]

  return (
    <div className="rounded-lg border border-paddock-700 bg-paddock-900 p-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="font-heading font-semibold text-gray-100">{training.horseName}</span>
          <span className="ml-2 text-sm text-gray-500">{training.raceName}</span>
        </div>
        <span className={grade.badgeClass}>{grade.label}</span>
      </div>

      <div className="mt-3 font-mono text-sm text-gold-400">
        ⏱ {training.trainingTime}
      </div>

      <div className="mt-3 space-y-2 text-sm text-gray-400">
        {training.trainerComment && (
          <p>
            <span className="text-gray-500">調教師：</span>
            {training.trainerComment}
          </p>
        )}
        {training.jockeyComment && (
          <p>
            <span className="text-gray-500">騎手：</span>
            {training.jockeyComment}
          </p>
        )}
      </div>

      {training.evaluationNote && (
        <div className="mt-3 rounded bg-paddock-800 px-3 py-2 text-xs text-gray-400">
          {training.evaluationNote}
        </div>
      )}
    </div>
  )
}
