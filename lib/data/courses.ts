import type { CourseData, TrackInfo } from '@/lib/types'
import { getCourseStats } from '@/lib/data/course-stats'
import { generatedCourses } from '@/lib/data/courses-generated'

/** 統計なしの生コースデータ（keyFactor / note のみの公知事実） */
type BaseCourse = Omit<CourseData, 'frameStats' | 'runningStyleStats'>

function withStats(base: BaseCourse): CourseData {
  const stats = getCourseStats(base.trackId, base.surface, base.distance)
  return stats
    ? {
        ...base,
        frameStats: stats.frameStats,
        runningStyleStats: stats.runningStyleStats,
        races: stats.races,
      }
    : base
}

// ─── 東京競馬場 ─────────────────────────────────────────────────
const tokyoBase: TrackInfo = {
  id: 'tokyo',
  name: '東京競馬場',
  region: '関東',
  courses: ([
    {
      trackId: 'tokyo',
      trackName: '東京',
      distance: 2400,
      surface: 'turf',
      keyFactor: '直線525mの長さで差し・末脚型が有利。4コーナー外を回る馬は割引。',
      note: '日本ダービーの舞台。スローペースになりやすく、末脚の切れが最重要。',
    },
    {
      trackId: 'tokyo',
      trackName: '東京',
      distance: 1600,
      surface: 'turf',
      keyFactor: '1〜2枠の内枠は序盤のポジション争いで不利になりやすい。外枠先行馬に注目。',
      note: '安田記念・NHKマイルCの舞台。先行〜差しが中心。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 中山競馬場 ─────────────────────────────────────────────────
const nakayamaBase: TrackInfo = {
  id: 'nakayama',
  name: '中山競馬場',
  region: '関東',
  courses: ([
    {
      trackId: 'nakayama',
      trackName: '中山',
      distance: 2500,
      surface: 'turf',
      keyFactor: '内枠・先行脚質が圧倒的有利。直線310mの短さで追込みは不発に終わりやすい。',
      note: '有馬記念の舞台。小回りコースで先行力が最重要ファクター。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 阪神競馬場 ─────────────────────────────────────────────────
const hanshinBase: TrackInfo = {
  id: 'hanshin',
  name: '阪神競馬場',
  region: '関西',
  courses: ([
    {
      trackId: 'hanshin',
      trackName: '阪神',
      distance: 2000,
      surface: 'turf',
      keyFactor: '改修後は外回りコースが主体。直線473mでバランス良い。先行〜差しがフラット。',
      note: '宝塚記念・大阪杯の舞台。馬場が悪化すると先行有利が顕著に。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 札幌競馬場 ─────────────────────────────────────────────────
const sapporoBase: TrackInfo = {
  id: 'sapporo',
  name: '札幌競馬場',
  region: '北海道',
  courses: ([
    {
      trackId: 'sapporo',
      trackName: '札幌',
      distance: 1200,
      surface: 'turf',
      keyFactor: '洋芝・短距離。コーナーが緩く大回り形状のため枠の有利不利が生じにくい。',
      note: '右回り・洋芝。直線266.1m・高低差0.7mとほぼ平坦。コーナーが緩く円に近い形状。',
    },
    {
      trackId: 'sapporo',
      trackName: '札幌',
      distance: 1500,
      surface: 'turf',
      keyFactor: '洋芝・JRA独自の1500m距離設定。大回りコースでペース配分が重要になりやすい。',
      note: '右回り・洋芝。直線266.1m・ほぼ平坦。大回りで先行馬が息を入れやすい形状。',
    },
    {
      trackId: 'sapporo',
      trackName: '札幌',
      distance: 1800,
      surface: 'turf',
      keyFactor: '洋芝・中距離。緩いコーナーを4度回り、スタミナと末脚のバランスが問われる。',
      note: '右回り・洋芝。直線266.1m・高低差0.7m。大回りコーナーでポジション争いが落ち着きやすい。',
    },
    {
      trackId: 'sapporo',
      trackName: '札幌',
      distance: 2000,
      surface: 'turf',
      keyFactor: 'スタート直後に1コーナーを迎えるコース形態。枠順の影響が出やすい形状。',
      note: '右回り・洋芝。直線266.1m・ほぼ平坦。コーナー半径が大きく外回り感覚で走れる。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 函館競馬場 ─────────────────────────────────────────────────
const hakodateBase: TrackInfo = {
  id: 'hakodate',
  name: '函館競馬場',
  region: '北海道',
  courses: ([
    {
      trackId: 'hakodate',
      trackName: '函館',
      distance: 1200,
      surface: 'turf',
      keyFactor: 'JRA最短級の直線262.1mと小回りの組み合わせで先行馬が粘りやすい地形。',
      note: '右回り・洋芝。直線262.1m（JRA最短級）・高低差3.5m。3コーナー過ぎから下り坂。',
    },
    {
      trackId: 'hakodate',
      trackName: '函館',
      distance: 1800,
      surface: 'turf',
      keyFactor: '小回りコースで3コーナー過ぎの下りを活かした先行馬が有利になりやすい形状。',
      note: '右回り・洋芝。直線262.1m・高低差3.5m。小回りで3コーナー過ぎから下り。',
    },
    {
      trackId: 'hakodate',
      trackName: '函館',
      distance: 2000,
      surface: 'turf',
      keyFactor: 'スタート位置の関係で各馬が揃ってコーナーを迎えやすく、先行争いが激化しやすい。',
      note: '右回り・洋芝。直線262.1m・高低差3.5m。小回りコースでスタミナと先行力が問われる。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 福島競馬場 ─────────────────────────────────────────────────
const fukushimaBase: TrackInfo = {
  id: 'fukushima',
  name: '福島競馬場',
  region: '東北',
  courses: ([
    {
      trackId: 'fukushima',
      trackName: '福島',
      distance: 1200,
      surface: 'turf',
      keyFactor: 'スパイラルカーブ採用の小回りコース。直線292mで差し馬が伸びるスペースは限られやすい。',
      note: '右回り。直線292.0m・高低差1.9m。スパイラルカーブにより小回りながらコーナーで外膨らみを抑制。',
    },
    {
      trackId: 'fukushima',
      trackName: '福島',
      distance: 1800,
      surface: 'turf',
      keyFactor: '小回り中距離でペースが上がりやすく、先行馬のスタミナと立ち回りが問われる形状。',
      note: '右回り。直線292.0m・高低差1.9m。スパイラルカーブ採用の小回りコース。',
    },
    {
      trackId: 'fukushima',
      trackName: '福島',
      distance: 2000,
      surface: 'turf',
      keyFactor: '中距離でもコース形態は小回り。立ち回りのうまさと先行力が重要な地形。',
      note: '右回り。直線292.0m・高低差1.9m。スパイラルカーブ採用で小回りでも流れがスムーズ。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 新潟競馬場 ─────────────────────────────────────────────────
const niigataBase: TrackInfo = {
  id: 'niigata',
  name: '新潟競馬場',
  region: '甲信越',
  courses: ([
    {
      trackId: 'niigata',
      trackName: '新潟',
      distance: 1000,
      surface: 'turf',
      keyFactor: 'JRA唯一の直線1000mコース（千直）。外ラチ沿いが有利との定説があり、枠順の影響が大きい。',
      note: '直線コース（千直）。外ラチ沿い有利が定説。ほぼ平坦でスピード能力がそのまま結果に出やすい。',
    },
    {
      trackId: 'niigata',
      trackName: '新潟',
      distance: 1600,
      surface: 'turf',
      keyFactor: '外回り直線658.7mは日本最長。広いコースで差し・追込みが届きやすい地形。',
      note: '左回り・外回り。直線658.7m（日本最長）・ほぼ平坦。長い直線で末脚が明確に問われる。',
    },
    {
      trackId: 'niigata',
      trackName: '新潟',
      distance: 1800,
      surface: 'turf',
      keyFactor: '外回りコースで日本最長の直線を使う。差し馬でも十分に届く地形設計。',
      note: '左回り・外回り。直線658.7m・ほぼ平坦。長い直線でペースが問われるスタミナ戦になりやすい。',
    },
    {
      trackId: 'niigata',
      trackName: '新潟',
      distance: 2000,
      surface: 'turf',
      keyFactor: '内回りコース（直線358.7m）。外回りとは別コース設定で先行馬の粘りも見られやすい。',
      note: '左回り・内回り。直線358.7m・ほぼ平坦。スタート後すぐにコーナーを迎える形状。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 中京競馬場 ─────────────────────────────────────────────────
const chukyoBase: TrackInfo = {
  id: 'chukyo',
  name: '中京競馬場',
  region: '東海',
  courses: ([
    {
      trackId: 'chukyo',
      trackName: '中京',
      distance: 1200,
      surface: 'turf',
      keyFactor: '左回りの短距離。ゴール前の急坂（高低差約2m）があり、最後の踏ん張りが問われる。',
      note: '左回り。直線412.5m・ゴール前高低差約2m急坂。3〜4コーナーにスパイラルカーブ採用。',
    },
    {
      trackId: 'chukyo',
      trackName: '中京',
      distance: 1600,
      surface: 'turf',
      keyFactor: '直線412.5mのゴール前急坂でスタミナが問われる。スパイラルカーブでコーナーを素直に回れる。',
      note: '左回り。直線412.5m・ゴール前高低差約2m急坂。3〜4コーナーはスパイラルカーブ採用。',
    },
    {
      trackId: 'chukyo',
      trackName: '中京',
      distance: 2000,
      surface: 'turf',
      keyFactor: '中距離でもゴール前急坂が存在し、上がりの速さよりもスタミナと底力が重視される。',
      note: '左回り。直線412.5m・ゴール前高低差約2m急坂。3〜4コーナーのスパイラルカーブが特徴。',
    },
    {
      trackId: 'chukyo',
      trackName: '中京',
      distance: 2200,
      surface: 'turf',
      keyFactor: 'JRA施行数の少ない2200m。スタート位置から3〜4コーナーのスパイラルカーブまでの距離設定。',
      note: '左回り。直線412.5m・ゴール前高低差約2m急坂。長距離でもスタミナ色が強い地形。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 京都競馬場 ─────────────────────────────────────────────────
const kyotoBase: TrackInfo = {
  id: 'kyoto',
  name: '京都競馬場',
  region: '関西',
  courses: ([
    {
      trackId: 'kyoto',
      trackName: '京都',
      distance: 1200,
      surface: 'turf',
      keyFactor: '内回り短距離。ゴール前は平坦でスピード型が生きやすく、先行馬が粘りやすい地形。',
      note: '右回り・内回り。直線328.4m・ゴール前平坦。「淀の坂」（3コーナー高低差4.3m）は通らない。',
    },
    {
      trackId: 'kyoto',
      trackName: '京都',
      distance: 1600,
      surface: 'turf',
      keyFactor: '外回りコースで3コーナーの「淀の坂」（高低差4.3m）を上り下りする特殊地形。ゴール前は平坦。',
      note: '右回り・外回り。直線403.7m・ゴール前平坦。淀の坂（3コーナー高低差4.3m・上って下る）あり。',
    },
    {
      trackId: 'kyoto',
      trackName: '京都',
      distance: 2000,
      surface: 'turf',
      keyFactor: '内回り中距離でゴール前は平坦。立ち回りのうまさと直線でのスピードが求められる。',
      note: '右回り・内回り。直線328.4m・ゴール前平坦。小倉・福島同様の小回り中距離コース。',
    },
    {
      trackId: 'kyoto',
      trackName: '京都',
      distance: 2400,
      surface: 'turf',
      keyFactor: '外回り長距離。「淀の坂」を3コーナーで経由し、スタミナと坂での加減速対応が問われる。',
      note: '右回り・外回り。直線403.7m・ゴール前平坦。淀の坂（高低差4.3m）をコース中盤に通過。',
    },
    {
      trackId: 'kyoto',
      trackName: '京都',
      distance: 3000,
      surface: 'turf',
      keyFactor: '菊花賞の舞台。2周コースで「淀の坂」を2度通過するスタミナレース。先行馬の消耗が激しくなりやすい。',
      note: '右回り・外回り・2周。直線403.7m・ゴール前平坦。淀の坂を2回通過するJRA有数の長距離コース。',
    },
  ] as BaseCourse[]).map(withStats),
}

// ─── 小倉競馬場 ─────────────────────────────────────────────────
const kokuraBase: TrackInfo = {
  id: 'kokura',
  name: '小倉競馬場',
  region: '九州',
  courses: ([
    {
      trackId: 'kokura',
      trackName: '小倉',
      distance: 1200,
      surface: 'turf',
      keyFactor: '1〜2コーナーが高く3コーナーへ下る地形。小回り直線293mで差し馬の追込みは厳しくなりやすい。',
      note: '右回り。直線293.0m・高低差3.0m。1〜2コーナー付近が高く3コーナーへ向けて下る地形。',
    },
    {
      trackId: 'kokura',
      trackName: '小倉',
      distance: 1800,
      surface: 'turf',
      keyFactor: '小回り中距離。1〜2コーナー高地から3コーナーへの下りで先行馬が流れに乗りやすい地形。',
      note: '右回り。直線293.0m・高低差3.0m。小回りコースで先行馬が有利になりやすい地形設計。',
    },
    {
      trackId: 'kokura',
      trackName: '小倉',
      distance: 2000,
      surface: 'turf',
      keyFactor: '小回り中長距離。先行馬がコーナーで内を回れる優位性が大きくなりやすい地形。',
      note: '右回り。直線293.0m・高低差3.0m。1〜2コーナーの高地を経由する小回りコース。',
    },
  ] as BaseCourse[]).map(withStats),
}

/** 手書きコースを優先し、courses-generated.ts の自動生成コースを補完する */
function withGenerated(track: TrackInfo): TrackInfo {
  const extra = generatedCourses
    .filter(
      (c) =>
        c.trackId === track.id &&
        !track.courses.some((e) => e.surface === c.surface && e.distance === c.distance),
    )
    .map(withStats)
  return { ...track, courses: [...track.courses, ...extra] }
}

export const tracks: TrackInfo[] = [
  tokyoBase,
  nakayamaBase,
  hanshinBase,
  sapporoBase,
  hakodateBase,
  fukushimaBase,
  niigataBase,
  chukyoBase,
  kyotoBase,
  kokuraBase,
].map(withGenerated)

export function getTrack(id: string): TrackInfo | undefined {
  return tracks.find((t) => t.id === id)
}
