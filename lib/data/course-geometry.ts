import type { Track } from '@/lib/types'

export interface SlopeMarker {
  x: number
  y: number
  label: string
  severity: 'mild' | 'steep'
}

export interface CornerMarker {
  x: number
  y: number
  label: string
}

/**
 * 競馬場コース図ジオメトリ
 *
 * direction:
 *   'left'  = 左回り・反時計回り（CCW） → ホームストレッチは右から左へ、GOALは左端
 *   'right' = 右回り・時計回り（CW） → ホームストレッチは左から右へ、GOALは右端
 *
 * centerline: 走路中心線のSVG path。GOAL点から始まり、走行方向に1周して戻る閉じパス（Z）。
 *   - 左回り：CCW → ホームストレッチ下辺を右→左、バックストレッチ上辺を左→右
 *   - 右回り：CW → ホームストレッチ下辺を左→右、バックストレッチ上辺を右→左
 *
 * ホームストレッチは viewBox 下辺に配置。
 */
export interface CourseGeometry {
  trackId: Track
  direction: 'left' | 'right'
  viewBox: string
  /** 走路中心線。GOAL点 M から始まり Z で閉じる。getPointAtLength で使用 */
  centerline: string
  straightLabel: string
  slopes: SlopeMarker[]
  corners: CornerMarker[]
  goal: { x: number; y: number }
  note: string
}

// ─── 東京競馬場（左回り / CCW） ───────────────────────────────
// viewBox: 1000×620
// GOAL: (200, 540) = ホームストレッチ左端
// CCW: M→左カーブ上昇→バックストレッチ右行→右カーブ下降→Z(ホームストレッチ左行でGOAL)
const tokyoGeometry: CourseGeometry = {
  trackId: 'tokyo',
  direction: 'left',
  viewBox: '0 0 1000 620',
  centerline: [
    'M 200,540',
    'C 80,540 40,500 35,415',
    'C 28,320 28,200 42,130',
    'C 56,60 145,42 300,38',
    'L 700,38',
    'C 855,42 944,60 958,130',
    'C 972,200 972,320 962,415',
    'C 948,500 880,540 800,540',
    'Z',
  ].join(' '),
  straightLabel: '直線 525m（日本屈指の長さ）',
  slopes: [
    {
      x: 550,
      y: 540,
      label: 'ホームストレッチ上り坂（残460〜300m付近、高低差約2m）',
      severity: 'mild',
    },
  ],
  corners: [
    { x: 55,  y: 300, label: '1コーナー' },
    { x: 200, y: 52,  label: '2コーナー' },
    { x: 800, y: 52,  label: '3コーナー' },
    { x: 945, y: 300, label: '4コーナー' },
  ],
  goal: { x: 200, y: 540 },
  note: '左回り・幅員広く大回り。直線残り460m〜300mに高低差2mの上り坂',
}

// ─── 中山競馬場（右回り / CW） ────────────────────────────────
// viewBox: 800×520
// GOAL: (600, 470) = ホームストレッチ右端
// CW: M→右カーブ上昇→バックストレッチ左行→左カーブ下降→Z(ホームストレッチ右行でGOAL)
const nakayamaGeometry: CourseGeometry = {
  trackId: 'nakayama',
  direction: 'right',
  viewBox: '0 0 800 520',
  centerline: [
    'M 600,470',
    'C 670,470 720,440 742,375',
    'C 760,310 762,205 740,140',
    'C 714,78 640,52 515,48',
    'L 285,48',
    'C 160,52 86,78 60,140',
    'C 38,205 40,310 58,375',
    'C 78,440 130,470 200,470',
    'Z',
  ].join(' '),
  straightLabel: '直線 310m（急坂あり）',
  slopes: [
    {
      x: 510,
      y: 470,
      label: 'ゴール前急坂（高低差2.2m、残150m地点）',
      severity: 'steep',
    },
  ],
  corners: [
    { x: 745, y: 265, label: '1コーナー' },
    { x: 600, y: 52,  label: '2コーナー' },
    { x: 200, y: 52,  label: '3コーナー' },
    { x:  55, y: 265, label: '4コーナー' },
  ],
  goal: { x: 600, y: 470 },
  note: '右回り・小回りコース。内枠・先行が圧倒有利。ゴール直前に急坂2.2m',
}

// ─── 阪神競馬場（右回り / CW）────────────────────────────────
// viewBox: 900×560
// GOAL: (700, 515) = ホームストレッチ右端
// CW: M→右カーブ上昇→バックストレッチ左行→左カーブ下降→Z(ホームストレッチ右行でGOAL)
const hanshinGeometry: CourseGeometry = {
  trackId: 'hanshin',
  direction: 'right',
  viewBox: '0 0 900 560',
  centerline: [
    'M 700,515',
    'C 780,515 830,480 852,410',
    'C 870,340 872,225 850,152',
    'C 826,80 745,52 600,48',
    'L 300,48',
    'C 155,52 74,80 50,152',
    'C 28,225 30,340 48,410',
    'C 70,480 120,515 200,515',
    'Z',
  ].join(' '),
  straightLabel: '直線 473m（外回りコース）',
  slopes: [
    {
      x: 155,
      y: 440,
      label: '3〜4コーナー間の下り坂',
      severity: 'mild',
    },
    {
      x: 608,
      y: 515,
      label: 'ゴール前急坂（高低差1.8m）',
      severity: 'steep',
    },
  ],
  corners: [
    { x: 855, y: 285, label: '1コーナー' },
    { x: 715, y: 52,  label: '2コーナー' },
    { x: 185, y: 52,  label: '3コーナー' },
    { x:  48, y: 285, label: '4コーナー' },
  ],
  goal: { x: 700, y: 515 },
  note: '右回り・外回りコース。3コーナー坂下りからゴール前急坂。先行〜差しがフラット',
}

export const courseGeometries: Partial<Record<Track, CourseGeometry>> = {
  tokyo: tokyoGeometry,
  nakayama: nakayamaGeometry,
  hanshin: hanshinGeometry,
}

export function getCourseGeometry(trackId: Track): CourseGeometry | undefined {
  return courseGeometries[trackId]
}
