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

// ─── 札幌競馬場（右回り / CW）────────────────────────────────
// viewBox: 900×560
// GOAL: (640, 510) = ホームストレッチ右端
// 特徴：コーナー半径が大きくほぼ円形に近い横長楕円・ほぼ平坦（高低差0.7m）
// 直線266.1m → home straight: 640-260=380px
// 洋芝・コーナーが緩い（control points をトラック端近くに置き大回りカーブを表現）
const sapporoGeometry: CourseGeometry = {
  trackId: 'sapporo',
  direction: 'right',
  viewBox: '0 0 900 560',
  centerline: [
    'M 640,510',
    'C 745,505 805,455 820,375',
    'C 832,300 832,260 820,185',
    'C 805,105 745,55 640,50',
    'L 260,50',
    'C 155,55 95,105 80,185',
    'C 68,260 68,300 80,375',
    'C 95,455 155,505 260,510',
    'Z',
  ].join(' '),
  straightLabel: '直線 266.1m（洋芝・ほぼ平坦）',
  slopes: [],
  corners: [
    { x: 800, y: 310, label: '1コーナー' },
    { x: 640, y: 66,  label: '2コーナー' },
    { x: 260, y: 66,  label: '3コーナー' },
    { x: 100, y: 310, label: '4コーナー' },
  ],
  goal: { x: 640, y: 510 },
  note: '右回り・洋芝。直線266.1m・高低差0.7mでほぼ平坦。コーナー半径が大きく円形に近い形状',
}

// ─── 函館競馬場（右回り / CW）────────────────────────────────
// viewBox: 780×500
// GOAL: (560, 450) = ホームストレッチ右端
// 特徴：小回り・JRA最短級直線262.1m・高低差3.5m・3コーナー過ぎから下り
// 直線262.1m → home: 560-220=340px（Nakayama 310m=400px より短め）
// コーナーはタイト（control points をやや内側に）
const hakodateGeometry: CourseGeometry = {
  trackId: 'hakodate',
  direction: 'right',
  viewBox: '0 0 780 500',
  centerline: [
    'M 560,450',
    'C 632,450 680,420 702,356',
    'C 720,292 720,196 702,132',
    'C 676,68 608,42 500,38',
    'L 280,38',
    'C 172,42 104,68 78,132',
    'C 60,196 60,292 78,356',
    'C 100,420 148,450 220,450',
    'Z',
  ].join(' '),
  straightLabel: '直線 262.1m（JRA最短級）',
  slopes: [
    {
      x: 142,
      y: 265,
      label: '3コーナー過ぎから下り（高低差3.5m）',
      severity: 'mild',
    },
  ],
  corners: [
    { x: 702, y: 275, label: '1コーナー' },
    { x: 560, y: 48,  label: '2コーナー' },
    { x: 220, y: 48,  label: '3コーナー' },
    { x:  78, y: 275, label: '4コーナー' },
  ],
  goal: { x: 560, y: 450 },
  note: '右回り・洋芝。直線262.1m（JRA最短級）・高低差3.5m。3コーナー過ぎから下り坂',
}

// ─── 福島競馬場（右回り / CW）────────────────────────────────
// viewBox: 820×520
// GOAL: (595, 470) = ホームストレッチ右端
// 特徴：小回り・スパイラルカーブ採用・直線292m・高低差1.9m
// 直線292m → home: 595-215=380px（函館の340より若干長め）
const fukushimaGeometry: CourseGeometry = {
  trackId: 'fukushima',
  direction: 'right',
  viewBox: '0 0 820 520',
  centerline: [
    'M 595,470',
    'C 665,470 716,440 738,374',
    'C 756,308 756,206 738,140',
    'C 712,76 644,48 528,44',
    'L 292,44',
    'C 176,48 108,76 82,140',
    'C 64,206 64,308 82,374',
    'C 104,440 145,470 215,470',
    'Z',
  ].join(' '),
  straightLabel: '直線 292.0m（スパイラルカーブ）',
  slopes: [
    {
      x: 430,
      y: 470,
      label: '高低差1.9mの小起伏',
      severity: 'mild',
    },
  ],
  corners: [
    { x: 738, y: 290, label: '1コーナー' },
    { x: 595, y: 56,  label: '2コーナー' },
    { x: 215, y: 56,  label: '3コーナー' },
    { x:  82, y: 290, label: '4コーナー' },
  ],
  goal: { x: 595, y: 470 },
  note: '右回り。直線292.0m・高低差1.9m。スパイラルカーブ採用の小回りコース',
}

// ─── 新潟競馬場（左回り / CCW）───────────────────────────────
// viewBox: 1150×540
// GOAL: (155, 490) = ホームストレッチ左端
// 特徴：外回り直線658.7m（日本最長）・ほぼ平坦・JRA唯一の千直あり
// 直線658.7m → home: 965-155=810px（Tokyo 525m=600px比で1.35倍、極端に横長）
// コーナーはタイト（直線に多くのスペースを割くため）
const niigataGeometry: CourseGeometry = {
  trackId: 'niigata',
  direction: 'left',
  viewBox: '0 0 1150 540',
  centerline: [
    'M 155,490',
    'C 68,490 28,450 22,378',
    'C 16,306 20,208 40,146',
    'C 64,84 136,56 240,52',
    'L 748,52',
    'C 852,56 924,84 948,146',
    'C 968,208 972,306 966,378',
    'C 962,440 950,480 900,490',
    'Z',
  ].join(' '),
  straightLabel: '直線 658.7m（日本最長）',
  slopes: [],
  corners: [
    { x:  90, y: 290, label: '1コーナー' },
    { x: 155, y: 62,  label: '2コーナー' },
    { x: 965, y: 62,  label: '3コーナー' },
    { x: 900, y: 290, label: '4コーナー' },
  ],
  goal: { x: 155, y: 490 },
  note: '左回り。外回り直線658.7m（日本最長）・ほぼ平坦。内回り直線358.7m・千直コースあり',
}

// ─── 中京競馬場（左回り / CCW）───────────────────────────────
// viewBox: 960×600
// GOAL: (215, 550) = ホームストレッチ左端
// 特徴：直線412.5m・ゴール前急坂高低差約2m・3〜4コーナースパイラルカーブ
// 直線412.5m → home: 685-215=470px（Tokyo 525m=600px の約0.78倍）
const chukyoGeometry: CourseGeometry = {
  trackId: 'chukyo',
  direction: 'left',
  viewBox: '0 0 1000 600',
  centerline: [
    'M 215,550',
    'C 108,550 50,508 40,428',
    'C 30,348 34,240 60,172',
    'C 88,104 168,68 298,62',
    'L 712,62',
    'C 842,68 922,104 950,172',
    'C 976,240 980,348 970,428',
    'C 952,508 890,550 685,550',
    'Z',
  ].join(' '),
  straightLabel: '直線 412.5m（ゴール前急坂）',
  slopes: [
    {
      x: 350,
      y: 550,
      label: 'ゴール前急坂（高低差約2m）',
      severity: 'steep',
    },
  ],
  corners: [
    { x:  44, y: 350, label: '1コーナー' },
    { x: 215, y: 72,  label: '2コーナー' },
    { x: 685, y: 72,  label: '3コーナー' },
    { x: 970, y: 350, label: '4コーナー' },
  ],
  goal: { x: 215, y: 550 },
  note: '左回り。直線412.5m・ゴール前高低差約2m急坂。3〜4コーナーはスパイラルカーブ採用',
}

// ─── 京都競馬場（右回り / CW）────────────────────────────────
// viewBox: 960×590
// GOAL: (710, 540) = ホームストレッチ右端
// 特徴：外回り直線403.7m・3コーナー「淀の坂」高低差4.3m（上って下る）・ゴール前平坦
// 直線403.7m → home: 710-250=460px（Tokyo 525m=600px の約0.77倍）
const kyotoGeometry: CourseGeometry = {
  trackId: 'kyoto',
  direction: 'right',
  viewBox: '0 0 960 590',
  centerline: [
    'M 710,540',
    'C 798,540 858,506 882,432',
    'C 904,358 904,248 882,174',
    'C 856,100 778,66 654,60',
    'L 306,60',
    'C 182,66 104,100 78,174',
    'C 56,248 56,358 78,432',
    'C 102,506 162,540 250,540',
    'Z',
  ].join(' '),
  straightLabel: '直線 403.7m（外回り）',
  slopes: [
    {
      x: 190,
      y: 160,
      label: '淀の坂（3コーナー・高低差4.3m・上って下る）',
      severity: 'steep',
    },
  ],
  corners: [
    { x: 882, y: 350, label: '1コーナー' },
    { x: 710, y: 70,  label: '2コーナー' },
    { x: 250, y: 70,  label: '3コーナー' },
    { x:  78, y: 350, label: '4コーナー' },
  ],
  goal: { x: 710, y: 540 },
  note: '右回り。外回り直線403.7m・ゴール前平坦。3コーナーに淀の坂（高低差4.3m）',
}

// ─── 小倉競馬場（右回り / CW）────────────────────────────────
// viewBox: 800×520
// GOAL: (580, 470) = ホームストレッチ右端
// 特徴：小回り・直線293m・高低差3.0m・1〜2コーナーが高く3コーナーへ下る
// 直線293m → home: 580-200=380px（Nakayama 310m=400pxより若干短め）
const kokuraGeometry: CourseGeometry = {
  trackId: 'kokura',
  direction: 'right',
  viewBox: '0 0 800 520',
  centerline: [
    'M 580,470',
    'C 658,470 712,438 734,372',
    'C 752,306 752,202 734,136',
    'C 708,72 638,44 522,40',
    'L 278,40',
    'C 162,44 92,72 66,136',
    'C 48,202 48,306 66,372',
    'C 88,438 142,470 200,470',
    'Z',
  ].join(' '),
  straightLabel: '直線 293.0m（3コーナーへ下り）',
  slopes: [
    {
      x: 400,
      y: 100,
      label: '1〜2コーナー高地から3コーナーへ下り（高低差3.0m）',
      severity: 'mild',
    },
  ],
  corners: [
    { x: 734, y: 285, label: '1コーナー' },
    { x: 580, y: 50,  label: '2コーナー' },
    { x: 200, y: 50,  label: '3コーナー' },
    { x:  66, y: 285, label: '4コーナー' },
  ],
  goal: { x: 580, y: 470 },
  note: '右回り。直線293.0m・高低差3.0m。1〜2コーナー付近が高く3コーナーへ下る地形',
}

export const courseGeometries: Partial<Record<Track, CourseGeometry>> = {
  tokyo:     tokyoGeometry,
  nakayama:  nakayamaGeometry,
  hanshin:   hanshinGeometry,
  sapporo:   sapporoGeometry,
  hakodate:  hakodateGeometry,
  fukushima: fukushimaGeometry,
  niigata:   niigataGeometry,
  chukyo:    chukyoGeometry,
  kyoto:     kyotoGeometry,
  kokura:    kokuraGeometry,
}

export function getCourseGeometry(trackId: Track): CourseGeometry | undefined {
  return courseGeometries[trackId]
}
