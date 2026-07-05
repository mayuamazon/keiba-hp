// @vercel/analytics はESM配布のためJestで変換できず、テストでは計測を無効化する
export const track = jest.fn()
export const Analytics = () => null
