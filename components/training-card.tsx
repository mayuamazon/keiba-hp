import { Badge } from '@/components/ui/badge'
import type { TrainingCheck, TrainingGrade } from '@/lib/types'

const gradeConfig: Record<TrainingGrade, { label: string; color: string }> = {
  A: { label: '◎ 好調', color: 'text-gold-400' },
  B: { label: '○ 普通', color: 'text-gray-300' },
  C: { label: '△ 注意', color: 'text-red-400' },
}

interface TrainingCardProps {
  training: TrainingCheck
}

export function TrainingCard({ training }: TrainingCardProps) {
  const grade = gradeConfig[training.evaluation]

  return (
    <div className="rounded-lg border border-navy-700 bg-navy-800 p-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="font-semibold text-gray-100">{training.horseName}</span>
          <span className="ml-2 text-sm text-gray-500">{training.raceName}</span>
        </div>
        <span className={`text-sm font-bold ${grade.color}`}>{grade.label}</span>
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
        <div className="mt-3 rounded bg-navy-900 px-3 py-2 text-xs text-gray-400">
          {training.evaluationNote}
        </div>
      )}
    </div>
  )
}
