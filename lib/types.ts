export type Track =
  | 'tokyo' | 'nakayama' | 'hanshin' | 'kyoto'
  | 'chukyo' | 'kokura' | 'fukushima' | 'niigata'
  | 'hakodate' | 'sapporo'

export type Surface = 'turf' | 'dirt'
export type RunningStyle = '逃げ' | '先行' | '差し' | '追込'
export type TrainingGrade = 'A' | 'B' | 'C'

export interface FrameStat {
  frame: number
  winRate: number
  placeRate: number
}

export interface RunningStyleStat {
  style: RunningStyle
  winRate: number
  placeRate: number
}

export interface CourseData {
  trackId: Track
  trackName: string
  distance: number
  surface: Surface
  frameStats?: FrameStat[]
  runningStyleStats?: RunningStyleStat[]
  races?: number
  keyFactor: string
  note: string
}

export interface TrackInfo {
  id: Track
  name: string
  region: string
  courses: CourseData[]
}

export interface JockeyStat {
  name: string
  wins: number
  rides: number
  winRate: number
  placeRate: number
  recentForm: string
  strongTracks: Track[]
  note: string
  isActive?: boolean
}

export interface TrainingCheck {
  horseName: string
  raceName: string
  raceDate: string
  trackId: Track
  trainingTime: string
  trainerComment?: string
  jockeyComment?: string
  evaluation: TrainingGrade
  evaluationNote?: string
}

export interface WeeklyReportMeta {
  slug: string
  date: string
  title: string
  excerpt: string
  targetRaces: string[]
  results?: {
    totalRaces: number
    hits: number
    roi: number
  }
}
