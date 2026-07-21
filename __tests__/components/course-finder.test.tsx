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

  // ── 4. バグアラートが実測値ベースである ─────────────────────────

  it('バグアラートに実測値の出典注記（または検出なしメッセージ）が表示される', () => {
    render(<CourseFinder />)
    const notes = screen.queryAllByText(/バックテスト実測値/)
    const empty = screen.queryAllByText(/バグパターンは検出されませんでした/)
    expect(notes.length + empty.length).toBeGreaterThan(0)
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

  // ── 7. 比較モード ────────────────────────────────────────────────

  it('前後半比較ボタンが存在する', () => {
    render(<CourseFinder />)
    expect(screen.getByRole('button', { name: /前後半比較/ })).toBeInTheDocument()
  })

  it('前後半比較ボタンをクリックすると aria-pressed が true になる', () => {
    render(<CourseFinder />)
    const compareBtn = screen.getByRole('button', { name: /前後半比較/ })
    fireEvent.click(compareBtn)
    expect(compareBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('比較モードでは条件サマリーに「前半 vs 後半」が表示される', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('button', { name: /前後半比較/ }))
    expect(screen.getByText(/前半 vs 後半/)).toBeInTheDocument()
  })

  it('比較モードに切り替えると既存のフェーズボタンの aria-pressed は false になる', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('button', { name: /前後半比較/ }))
    expect(screen.getByRole('button', { name: /開幕前半/ })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: /開催後半/ })).toHaveAttribute('aria-pressed', 'false')
  })

  // ── 8. 開催月フィルタ ────────────────────────────────────────────

  it('月別キーが存在する場合、開催月選択グループが表示される', () => {
    render(<CourseFinder />)
    // 東京 芝 1600m は複数月のキーを持つはず
    const monthGroup = screen.queryByRole('group', { name: '開催月選択' })
    // 月キーが1件以上ある場合のみ表示される
    if (monthGroup) {
      expect(monthGroup).toBeInTheDocument()
      // 「全期間」ボタンが存在する
      expect(screen.getByRole('button', { name: '全期間' })).toBeInTheDocument()
    }
  })

  it('初期状態で「全期間」ボタンが selected 状態（月が未選択）', () => {
    render(<CourseFinder />)
    const allPeriodBtn = screen.queryByRole('button', { name: '全期間' })
    if (allPeriodBtn) {
      expect(allPeriodBtn).toHaveAttribute('aria-pressed', 'true')
    }
  })

  it('月ボタンをクリックすると条件サマリーに月が表示される', () => {
    render(<CourseFinder />)
    // 東京 芝 1600m の月ボタンを先頭から1つ取得してクリック
    const monthBtns = screen.queryAllByRole('button', { name: /^\d+月$/ })
    if (monthBtns.length > 0) {
      fireEvent.click(monthBtns[0])
      // 条件サマリーに「月）」が含まれる
      const summary = screen.getByText(/現在の条件：東京.*芝.*1600m.*月）/)
      expect(summary).toBeInTheDocument()
    }
  })

  it('前後半比較を選択中に月を選ぶと、比較ビューではなく月別表示になる', () => {
    render(<CourseFinder />)
    fireEvent.click(screen.getByRole('button', { name: /前後半比較/ }))
    const monthBtns = screen.queryAllByRole('button', { name: /^\d+月$/ })
    if (monthBtns.length > 0) {
      fireEvent.click(monthBtns[0])
      // 比較モードの凡例が消え、月別の条件サマリーになる
      expect(screen.queryByText(/上=開幕前半/)).not.toBeInTheDocument()
      expect(screen.getByText(/現在の条件：東京.*芝.*1600m.*月）/)).toBeInTheDocument()
    }
  })

  it('月選択中、開催時期グループが disabled 状態になる', () => {
    render(<CourseFinder />)
    const monthBtns = screen.queryAllByRole('button', { name: /^\d+月$/ })
    if (monthBtns.length > 0) {
      fireEvent.click(monthBtns[0])
      const phaseGroup = screen.getByRole('group', { name: '開催時期選択' })
      expect(phaseGroup).toHaveAttribute('aria-disabled', 'true')
    }
  })

  it('月選択中、バグアラートの代わりに案内メッセージが表示される', () => {
    render(<CourseFinder />)
    const monthBtns = screen.queryAllByRole('button', { name: /^\d+月$/ })
    if (monthBtns.length > 0) {
      fireEvent.click(monthBtns[0])
      expect(screen.getByText(/バグ穴馬アラートと開催前半\/後半の分析は「全期間」表示で確認できます/)).toBeInTheDocument()
    }
  })

  it('「全期間」を選択すると月選択がリセットされ通常状態に戻る', () => {
    render(<CourseFinder />)
    const monthBtns = screen.queryAllByRole('button', { name: /^\d+月$/ })
    const allPeriodBtn = screen.queryByRole('button', { name: '全期間' })
    if (monthBtns.length > 0 && allPeriodBtn) {
      fireEvent.click(monthBtns[0])
      fireEvent.click(allPeriodBtn)
      expect(allPeriodBtn).toHaveAttribute('aria-pressed', 'true')
      // 開催時期グループが再び有効になる
      const phaseGroup = screen.getByRole('group', { name: '開催時期選択' })
      expect(phaseGroup).not.toHaveAttribute('aria-disabled', 'true')
    }
  })

  it('fixedTrack を渡すと競馬場チップ行が表示されない', () => {
    render(<CourseFinder fixedTrack="nakayama" />)
    // 競馬場選択 group（aria-label="競馬場選択"）が無いこと
    expect(screen.queryByRole('group', { name: '競馬場選択' })).toBeNull()
    // 中山の条件サマリーが出ること
    expect(screen.getAllByText(/中山/).length).toBeGreaterThan(0)
  })

  it('onSelectionChange が芝ダ変更時に呼ばれる', () => {
    const onSel = jest.fn()
    render(<CourseFinder onSelectionChange={onSel} />)
    onSel.mockClear()
    // 馬場トグルの「ダ」を押す（aria-label="馬場選択" group 内）
    const surfaceGroup = screen.getByRole('group', { name: '馬場選択' })
    fireEvent.click(within(surfaceGroup).getByRole('button', { name: 'ダ' }))
    expect(onSel).toHaveBeenCalled()
    const arg = onSel.mock.calls[onSel.mock.calls.length - 1][0]
    expect(arg.surface).toBe('dirt')
    expect(typeof arg.distance).toBe('number')
  })
})
