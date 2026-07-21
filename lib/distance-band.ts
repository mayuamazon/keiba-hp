export type DistanceBand = 'sprint' | 'mile' | 'middle' | 'long'

/** 距離(m)を騎手ランキングの距離帯キーに変換する。
 *  境界は jockeys-client.tsx のラベルに一致（短≤1400 / マイル1401-1600 / 中1601-2200 / 長≥2201）。 */
export function distanceToBand(distance: number): DistanceBand {
  if (distance <= 1400) return 'sprint'
  if (distance <= 1600) return 'mile'
  if (distance <= 2200) return 'middle'
  return 'long'
}
