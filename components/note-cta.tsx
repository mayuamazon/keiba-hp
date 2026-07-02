interface NoteCtaProps {
  raceTitle?: string
  noteUrl?: string
}

export function NoteCta({
  raceTitle = '今週の重賞',
  noteUrl = 'https://note.com',
}: NoteCtaProps) {
  return (
    <div
      className="my-8 rounded-lg p-px"
      style={{
        background:
          'linear-gradient(135deg, var(--color-gold-600), var(--color-gold-400), var(--color-gold-600))',
      }}
    >
      <div className="rounded-lg bg-paddock-900 p-6">
        <div className="flex items-start gap-4">
          <span className="text-3xl" aria-hidden="true">
            🔒
          </span>
          <div className="flex-1">
            <p className="font-heading font-semibold text-gold-shimmer animate-shimmer">
              {raceTitle} の詳細分析・買い目を公開中
            </p>
            <p className="mt-1 text-sm text-gray-400">
              全頭評価・消し理由・推奨馬券種・点数まで。このページの無料分析の続きです。
            </p>
            <a
              href={noteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded bg-gold-500 px-4 py-2 text-sm font-bold text-paddock-950 transition-colors hover:bg-gold-400"
            >
              Noteで買い目を見る →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
