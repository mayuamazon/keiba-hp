import { render, screen, fireEvent, within } from '@testing-library/react'
import { CourseFinder } from '@/components/course-finder'

// framer-motion モック（既存テストの流儀に準拠）
jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn().mockReturnValue(true), // アニメーション無効化
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
      <div {...rest}>{children}</div>
    ),
  },
}))

describe('CourseFinder', () => {
  // ── 1. 初期条件表示 ──────────────────────────────────────────────

  it('初期条件（東京 芝1600m 開幕前半）が表示される', () => {
    render(<CourseFinder />)
    // 条件サマリーの span は「現在の条件：東京 芝1600m（開幕前半）」を含む
    const summaries = screen.getAllByText(/東京.*芝.*1600m.*開幕前半/)
    expect(summaries.length).toBeGreaterThan(0)
  })

  it('初期状態でセクション見出しが表示される', () => {
    render(<CourseFinder />)
    expect(screen.getByText('COURSE BUG FINDER')).toBeInTheDocument()
    expect(screen.getByText('コース傾向＆バグ穴馬検索')).toBeInTheDocument()
  })

  it('10場のチップがすべて表示される', () => {
    render(<CourseFinder />)
    const tracks = ['札幌', '函館', '福島', '新潟', '東京', '中山', '中京', '京都', '阪神', '小倉']
    tracks.forEach((name) => {
      expect(screen.getByRole('button', { name })).toBeInTheDocument()
    })
  })

  it('初期選択の東京チップが selected 状態', () => {
    render(<CourseFinder />)
    expect(screen.getByRole('button', { name: '東京' })).toHaveAttribute('aria-pressed', 'true')
  })

  // ── 2. 場チップ切替で結果が変わる ────────────────────────────────

  it('場を中山に切り替えると条件サマリーが更新される', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('button', { name: '中山' }))
    const matches = screen.getAllByText(/中山/)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('場チップ切替で選択中チップの aria-pressed が変わる', () => {
    render(<CourseFinder />)
    const nakayamaBtn = screen.getByRole('button', { name: '中山' })
    const tokyoBtn = screen.getByRole('button', { name: '東京' })

    expect(tokyoBtn).toHaveAttribute('aria-pressed', 'true')
    expect(nakayamaBtn).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(nakayamaBtn)

    expect(tokyoBtn).toHaveAttribute('aria-pressed', 'false')
    expect(nakayamaBtn).toHaveAttribute('aria-pressed', 'true')
  })

  // ── 3. phaseトグルで枠順の有利側が変わる ─────────────────────────

  it('フェーズトグルが2つ表示される', () => {
    render(<CourseFinder />)
    expect(screen.getByRole('button', { name: /開幕前半/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /開催後半/ })).toBeInTheDocument()
  })

  it('開幕前半が初期選択状態', () => {
    render(<CourseFinder />)
    expect(screen.getByRole('button', { name: /開幕前半/ })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /開催後半/ })).toHaveAttribute('aria-pressed', 'false')
  })

  it('開催後半に切り替えると aria-pressed が変わる', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('button', { name: /開催後半/ }))
    expect(screen.getByRole('button', { name: /開催後半/ })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /開幕前半/ })).toHaveAttribute('aria-pressed', 'false')
  })

  it('フェーズ切替で条件サマリーが更新される', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('button', { name: /開催後半/ }))
    const matches = screen.getAllByText(/開催後半/)
    expect(matches.length).toBeGreaterThan(0)
  })

  // ── 4. バグアラートに「サンプル」文言が含まれる ─────────────────

  it('バグアラートに「サンプル」注記が含まれる', () => {
    render(<CourseFinder />)
    const sampleTexts = screen.getAllByText(/サンプル表示/)
    expect(sampleTexts.length).toBeGreaterThan(0)
  })

  it('バグアラートに JRA-VAN 言及が含まれる', () => {
    render(<CourseFinder />)
    const jravan = screen.getAllByText(/JRA-VAN/)
    expect(jravan.length).toBeGreaterThan(0)
  })

  // ── 5. タブ切替 ─────────────────────────────────────────────────

  it('枠順タブと脚質タブが表示される', () => {
    render(<CourseFinder />)
    expect(screen.getByRole('tab', { name: '枠順' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: '脚質' })).toBeInTheDocument()
  })

  it('脚質タブに切り替えると逃げ・先行・差し・追込が表示される', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('tab', { name: '脚質' }))
    expect(screen.getByRole('list', { name: '脚質有利度' })).toBeInTheDocument()
    const list = screen.getByRole('list', { name: '脚質有利度' })
    expect(within(list).getByText('逃げ')).toBeInTheDocument()
    expect(within(list).getByText('先行')).toBeInTheDocument()
    expect(within(list).getByText('差し')).toBeInTheDocument()
    expect(within(list).getByText('追込')).toBeInTheDocument()
  })

  it('枠順タブに1〜8枠のセルが表示される', () => {
    render(<CourseFinder />)
    const frameList = screen.getByRole('list', { name: '枠順有利度' })
    const items = within(frameList).getAllByRole('listitem')
    expect(items).toHaveLength(8)
  })

  // ── 6. 距離チップが動的に生成される ─────────────────────────────

  it('東京初期状態では1600mボタンが表示される', () => {
    render(<CourseFinder />)
    expect(screen.getByRole('button', { name: '1600m' })).toBeInTheDocument()
  })

  it('距離切替で条件サマリーが更新される', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('button', { name: '2400m' }))
    const matches = screen.getAllByText(/2400m/)
    expect(matches.length).toBeGreaterThan(0)
  })
})
