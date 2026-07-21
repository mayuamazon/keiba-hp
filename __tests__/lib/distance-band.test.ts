import { distanceToBand } from '@/lib/distance-band'

describe('distanceToBand', () => {
  it('≤1400 は sprint', () => {
    expect(distanceToBand(1200)).toBe('sprint')
    expect(distanceToBand(1400)).toBe('sprint')
  })
  it('1401-1600 は mile', () => {
    expect(distanceToBand(1401)).toBe('mile')
    expect(distanceToBand(1600)).toBe('mile')
  })
  it('1601-2200 は middle', () => {
    expect(distanceToBand(1601)).toBe('middle')
    expect(distanceToBand(2200)).toBe('middle')
  })
  it('≥2201 は long', () => {
    expect(distanceToBand(2201)).toBe('long')
    expect(distanceToBand(2400)).toBe('long')
    expect(distanceToBand(3200)).toBe('long')
  })
})
