import type { Track } from './types'

/** 記事種別：解析（月〜火）／直前（当日朝）／振り返り（翌週月曜） */
export type ArticleType = 'analysis' | 'preview' | 'review'

/** 対象は重賞のみ（G1・G2・G3） */
export type RaceGrade = 'G1' | 'G2' | 'G3'

/**
 * レース記事のfrontmatterメタデータ
 * content/articles/*.mdx の frontmatter と1対1対応する
 */
export interface ArticleMeta {
  /** 記事種別 */
  articleType: ArticleType
  /** レースのグレード */
  raceGrade: RaceGrade
  /** レース名（例: "宝塚記念"） */
  raceName: string
  /** 実際のレース開催日（YYYY-MM-DD） */
  raceDate: string
  /** 開催場ID（lib/types.ts の Track と整合） */
  trackId: Track
  /** 距離表記（例: "芝2200m"） */
  distance: string
  /** false の場合は下書き（一覧・sitemapに出さない） */
  published: boolean
  /** 同一レースの関連記事slug（analysis↔preview↔review 相互リンク用） */
  relatedSlugs?: {
    analysis?: string
    preview?: string
    review?: string
  }
  /** 発行日（YYYY-MM-DD、ファイル名の日付と一致させる） */
  date: string
  /** 記事タイトル */
  title: string
  /** 一覧・OGP用の抜粋（100字目安） */
  excerpt: string
  /** 成績集計（review専用。WeeklyReportMeta.results と同形） */
  results?: {
    totalRaces: number
    hits: number
    roi: number
  }
}
