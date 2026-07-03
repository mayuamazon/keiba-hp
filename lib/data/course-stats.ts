import type { FrameStat, RunningStyleStat } from '@/lib/types'

export interface CourseStats {
  frameStats: FrameStat[]
  runningStyleStats: RunningStyleStat[]
  source?: string
  period?: string
}

/** キー: `${trackId}-${surface}-${distance}` 例 'tokyo-turf-2400' */
export const courseStats: Record<string, CourseStats> = {
  'tokyo-turf-2400': {
    frameStats: [
      { frame: 1, winRate: 8.2,  placeRate: 24.1 },
      { frame: 2, winRate: 9.1,  placeRate: 26.3 },
      { frame: 3, winRate: 10.5, placeRate: 27.8 },
      { frame: 4, winRate: 11.2, placeRate: 28.4 },
      { frame: 5, winRate: 12.1, placeRate: 29.0 },
      { frame: 6, winRate: 13.4, placeRate: 30.1 },
      { frame: 7, winRate: 12.8, placeRate: 29.5 },
      { frame: 8, winRate: 11.0, placeRate: 27.2 },
    ],
    runningStyleStats: [
      { style: '逃げ', winRate: 8.4,  placeRate: 25.2 },
      { style: '先行', winRate: 14.1, placeRate: 36.8 },
      { style: '差し', winRate: 18.3, placeRate: 42.1 },
      { style: '追込', winRate: 9.2,  placeRate: 28.4 },
    ],
    source: '参考値（実データ差し替え予定）',
  },
  'tokyo-turf-1600': {
    frameStats: [
      { frame: 1, winRate: 7.8,  placeRate: 22.4 },
      { frame: 2, winRate: 8.9,  placeRate: 24.8 },
      { frame: 3, winRate: 10.2, placeRate: 26.5 },
      { frame: 4, winRate: 11.5, placeRate: 28.9 },
      { frame: 5, winRate: 12.8, placeRate: 30.2 },
      { frame: 6, winRate: 13.1, placeRate: 31.4 },
      { frame: 7, winRate: 14.2, placeRate: 32.8 },
      { frame: 8, winRate: 11.9, placeRate: 29.1 },
    ],
    runningStyleStats: [
      { style: '逃げ', winRate: 9.1,  placeRate: 26.3 },
      { style: '先行', winRate: 15.4, placeRate: 38.2 },
      { style: '差し', winRate: 17.8, placeRate: 41.5 },
      { style: '追込', winRate: 8.4,  placeRate: 26.8 },
    ],
    source: '参考値（実データ差し替え予定）',
  },
  'nakayama-turf-2500': {
    frameStats: [
      { frame: 1, winRate: 14.8, placeRate: 36.2 },
      { frame: 2, winRate: 13.2, placeRate: 34.1 },
      { frame: 3, winRate: 12.4, placeRate: 31.8 },
      { frame: 4, winRate: 11.8, placeRate: 30.2 },
      { frame: 5, winRate: 10.9, placeRate: 28.4 },
      { frame: 6, winRate: 10.2, placeRate: 27.1 },
      { frame: 7, winRate: 9.8,  placeRate: 26.3 },
      { frame: 8, winRate: 8.4,  placeRate: 24.8 },
    ],
    runningStyleStats: [
      { style: '逃げ', winRate: 16.2, placeRate: 38.4 },
      { style: '先行', winRate: 18.8, placeRate: 42.1 },
      { style: '差し', winRate: 11.4, placeRate: 32.8 },
      { style: '追込', winRate: 5.2,  placeRate: 19.4 },
    ],
    source: '参考値（実データ差し替え予定）',
  },
  'hanshin-turf-2000': {
    frameStats: [
      { frame: 1, winRate: 11.2, placeRate: 28.4 },
      { frame: 2, winRate: 12.1, placeRate: 30.2 },
      { frame: 3, winRate: 12.8, placeRate: 31.5 },
      { frame: 4, winRate: 13.4, placeRate: 32.8 },
      { frame: 5, winRate: 12.9, placeRate: 31.9 },
      { frame: 6, winRate: 12.4, placeRate: 30.8 },
      { frame: 7, winRate: 11.8, placeRate: 29.4 },
      { frame: 8, winRate: 10.2, placeRate: 27.1 },
    ],
    runningStyleStats: [
      { style: '逃げ', winRate: 11.8, placeRate: 30.2 },
      { style: '先行', winRate: 16.4, placeRate: 39.8 },
      { style: '差し', winRate: 15.2, placeRate: 38.4 },
      { style: '追込', winRate: 8.8,  placeRate: 27.2 },
    ],
    source: '参考値（実データ差し替え予定）',
  },
}

export function getCourseStats(
  trackId: string,
  surface: string,
  distance: number,
): CourseStats | undefined {
  return courseStats[`${trackId}-${surface}-${distance}`]
}
