import { render, screen, fireEvent, within } from '@testing-library/react'
import { CourseMap } from '@/components/course-map'
import type { CourseGeometry } from '@/lib/data/course-geometry'
import type { RunningStyleStat } from '@/lib/types'

// framer-motion モック
// useReducedMotion=false: アニメーション有効 → 再生ボタンが描画される
jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn().mockReturnValue(false),
  useMotionValue: jest.fn().mockImplementation(() => ({
    on:  jest.fn().mockReturnValue(jest.fn()),
    set: jest.fn(),
    get: jest.fn().mockReturnValue(0),
  })),
  animate: jest.fn().mockReturnValue({
    stop:  jest.fn(),
    pause: jest.fn(),
    play:  jest.fn(),
  }),
  useInView: jest.fn().mockReturnValue(false),
}))

// ─── テストフィクスチャ ──────────────────────────────────────────
const mockGeometry: CourseGeometry = {
  trackId: 'tokyo',
  direction: 'left',
  viewBox: '0 0 1000 620',
  centerline: 'M 200,540 L 800,540 Z',
  straightLabel: '直線 525m',
  slopes: [
    { x: 500, y: 540, label: 'テスト坂', severity: 'mild' },
  ],
  corners: [
    { x: 55,  y: 300, label: '1コーナー' },
    { x: 200, y: 52,  label: '2コーナー' },
    { x: 800, y: 52,  label: '3コーナー' },
    { x: 945, y: 300, label: '4コーナー' },
  ],
  goal: { x: 200, y: 540 },
  note: 'テストノート',
}

const mockStyleStats: RunningStyleStat[] = [
  { style: '逃げ', winRate: 8.4,  placeRate: 25.2 },
  { style: '先行', winRate: 14.1, placeRate: 36.8 },
  { style: '差し', winRate: 18.3, placeRate: 42.1 },  // 勝率1位
  { style: '追込', winRate: 9.2,  placeRate: 28.4 },
]

// ─── テスト ──────────────────────────────────────────────────────
describe('CourseMap', () => {
  it('コース図 SVG が描画される', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(
      screen.getByRole('img', { name: /コース図/ }),
    ).toBeInTheDocument()
  })

  it('直線ラベルを表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(screen.getByText(/直線 525m/)).toBeInTheDocument()
  })

  it('GOAL ラベルを表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(screen.getByText('GOAL')).toBeInTheDocument()
  })

  it('コーナーラベルを 4 つ表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(screen.getByText('1コーナー')).toBeInTheDocument()
    expect(screen.getByText('4コーナー')).toBeInTheDocument()
  })

  it('坂マーカー（▲）を表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(screen.getByText('▲')).toBeInTheDocument()
  })

  it('坂マーカーをクリックするとツールチップを表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    fireEvent.click(screen.getByRole('button', { name: 'テスト坂' }))
    expect(screen.getByText('テスト坂')).toBeInTheDocument()
  })

  it('再生/一時停止ボタンが存在する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(
      screen.getByRole('button', { name: /一時停止|再生/ }),
    ).toBeInTheDocument()
  })

  it('再生ボタンをクリックすると一時停止状態になる', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    const btn = screen.getByRole('button', { name: /一時停止/ })
    fireEvent.click(btn)
    expect(
      screen.getByRole('button', { name: /再生/ }),
    ).toBeInTheDocument()
  })

  it('脚質凡例を 4 つ表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    // data-testid 配下でスコープを絞る（SVGランナードットの同名テキストと重複するため）
    expect(within(screen.getByTestId('legend-逃げ')).getByText('逃げ')).toBeInTheDocument()
    expect(within(screen.getByTestId('legend-先行')).getByText('先行')).toBeInTheDocument()
    expect(within(screen.getByTestId('legend-差し')).getByText('差し')).toBeInTheDocument()
    expect(within(screen.getByTestId('legend-追込')).getByText('追込')).toBeInTheDocument()
  })

  it('勝率1位（差し）の凡例を data-top=true でマークする', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(screen.getByTestId('legend-差し')).toHaveAttribute('data-top', 'true')
    expect(screen.getByTestId('legend-逃げ')).toHaveAttribute('data-top', 'false')
  })

  it('各脚質の勝率ラベルを表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    // 脚質ごとに「勝率」ラベルが 4 つ表示される
    const labels = screen.getAllByText('勝率')
    expect(labels).toHaveLength(4)
  })

  it('方向ラベル（左回り）を表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(screen.getByText('左回り')).toBeInTheDocument()
  })

  it('ノートテキストを表示する', () => {
    render(<CourseMap geometry={mockGeometry} styleStats={mockStyleStats} />)
    expect(screen.getByText('テストノート')).toBeInTheDocument()
  })
})

// ─── styleStats なし（準備中） ───────────────────────────────────
describe('CourseMap (styleStats なし)', () => {
  it('styleStats が undefined でもコース図 SVG を表示する', () => {
    render(<CourseMap geometry={mockGeometry} />)
    expect(
      screen.getByRole('img', { name: /コース図/ }),
    ).toBeInTheDocument()
  })

  it('styleStats が undefined のとき「勝率データ準備中」を表示する', () => {
    render(<CourseMap geometry={mockGeometry} />)
    expect(screen.getByText(/勝率データ準備中/)).toBeInTheDocument()
  })

  it('styleStats が undefined のとき勝率数値ラベルを表示しない', () => {
    render(<CourseMap geometry={mockGeometry} />)
    expect(screen.queryAllByText('勝率')).toHaveLength(0)
  })

  it('styleStats が undefined でも脚質凡例 4 つを表示する', () => {
    render(<CourseMap geometry={mockGeometry} />)
    expect(screen.getByTestId('legend-逃げ')).toBeInTheDocument()
    expect(screen.getByTestId('legend-先行')).toBeInTheDocument()
    expect(screen.getByTestId('legend-差し')).toBeInTheDocument()
    expect(screen.getByTestId('legend-追込')).toBeInTheDocument()
  })

  it('styleStats が undefined のとき全凡例の data-top が false', () => {
    render(<CourseMap geometry={mockGeometry} />)
    expect(screen.getByTestId('legend-逃げ')).toHaveAttribute('data-top', 'false')
    expect(screen.getByTestId('legend-差し')).toHaveAttribute('data-top', 'false')
  })

  it('styleStats が undefined でもランナーアニメ用パスが存在する', () => {
    const { container } = render(<CourseMap geometry={mockGeometry} />)
    // 不可視の参照パスが描画されている
    expect(container.querySelector('path[aria-hidden="true"]')).toBeInTheDocument()
  })
})
