import type { TrackInfo } from '@/lib/types'

export const tracks: TrackInfo[] = [
  {
    id: 'tokyo',
    name: '東京競馬場',
    region: '関東',
    courses: [
      {
        trackId: 'tokyo',
        trackName: '東京',
        distance: 2400,
        surface: 'turf',
        frameStats: [
          { frame: 1, winRate: 8.2, placeRate: 24.1 },
          { frame: 2, winRate: 9.1, placeRate: 26.3 },
          { frame: 3, winRate: 10.5, placeRate: 27.8 },
          { frame: 4, winRate: 11.2, placeRate: 28.4 },
          { frame: 5, winRate: 12.1, placeRate: 29.0 },
          { frame: 6, winRate: 13.4, placeRate: 30.1 },
          { frame: 7, winRate: 12.8, placeRate: 29.5 },
          { frame: 8, winRate: 11.0, placeRate: 27.2 },
        ],
        runningStyleStats: [
          { style: '逃げ', winRate: 8.4, placeRate: 25.2 },
          { style: '先行', winRate: 14.1, placeRate: 36.8 },
          { style: '差し', winRate: 18.3, placeRate: 42.1 },
          { style: '追込', winRate: 9.2, placeRate: 28.4 },
        ],
        keyFactor: '直線525mの長さで差し・末脚型が有利。4コーナー外を回る馬は割引。',
        note: '日本ダービーの舞台。スローペースになりやすく、末脚の切れが最重要。',
      },
      {
        trackId: 'tokyo',
        trackName: '東京',
        distance: 1600,
        surface: 'turf',
        frameStats: [
          { frame: 1, winRate: 7.8, placeRate: 22.4 },
          { frame: 2, winRate: 8.9, placeRate: 24.8 },
          { frame: 3, winRate: 10.2, placeRate: 26.5 },
          { frame: 4, winRate: 11.5, placeRate: 28.9 },
          { frame: 5, winRate: 12.8, placeRate: 30.2 },
          { frame: 6, winRate: 13.1, placeRate: 31.4 },
          { frame: 7, winRate: 14.2, placeRate: 32.8 },
          { frame: 8, winRate: 11.9, placeRate: 29.1 },
        ],
        runningStyleStats: [
          { style: '逃げ', winRate: 9.1, placeRate: 26.3 },
          { style: '先行', winRate: 15.4, placeRate: 38.2 },
          { style: '差し', winRate: 17.8, placeRate: 41.5 },
          { style: '追込', winRate: 8.4, placeRate: 26.8 },
        ],
        keyFactor: '1〜2枠の内枠は序盤のポジション争いで不利になりやすい。外枠先行馬に注目。',
        note: '安田記念・NHKマイルCの舞台。先行〜差しが中心。',
      },
    ],
  },
  {
    id: 'nakayama',
    name: '中山競馬場',
    region: '関東',
    courses: [
      {
        trackId: 'nakayama',
        trackName: '中山',
        distance: 2500,
        surface: 'turf',
        frameStats: [
          { frame: 1, winRate: 14.8, placeRate: 36.2 },
          { frame: 2, winRate: 13.2, placeRate: 34.1 },
          { frame: 3, winRate: 12.4, placeRate: 31.8 },
          { frame: 4, winRate: 11.8, placeRate: 30.2 },
          { frame: 5, winRate: 10.9, placeRate: 28.4 },
          { frame: 6, winRate: 10.2, placeRate: 27.1 },
          { frame: 7, winRate: 9.8, placeRate: 26.3 },
          { frame: 8, winRate: 8.4, placeRate: 24.8 },
        ],
        runningStyleStats: [
          { style: '逃げ', winRate: 16.2, placeRate: 38.4 },
          { style: '先行', winRate: 18.8, placeRate: 42.1 },
          { style: '差し', winRate: 11.4, placeRate: 32.8 },
          { style: '追込', winRate: 5.2, placeRate: 19.4 },
        ],
        keyFactor: '内枠・先行脚質が圧倒的有利。直線310mの短さで追込みは不発に終わりやすい。',
        note: '有馬記念の舞台。小回りコースで先行力が最重要ファクター。',
      },
    ],
  },
  {
    id: 'hanshin',
    name: '阪神競馬場',
    region: '関西',
    courses: [
      {
        trackId: 'hanshin',
        trackName: '阪神',
        distance: 2000,
        surface: 'turf',
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
          { style: '追込', winRate: 8.8, placeRate: 27.2 },
        ],
        keyFactor: '改修後は外回りコースが主体。直線473mでバランス良い。先行〜差しがフラット。',
        note: '宝塚記念・大阪杯の舞台。馬場が悪化すると先行有利が顕著に。',
      },
    ],
  },
]

export function getTrack(id: string): TrackInfo | undefined {
  return tracks.find((t) => t.id === id)
}
