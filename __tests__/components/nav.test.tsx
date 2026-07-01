import { render, screen } from '@testing-library/react'
import { Nav } from '@/components/nav'

describe('Nav', () => {
  it('サイト名を表示する', () => {
    render(<Nav />)
    expect(screen.getByText(/馬券ファクト/)).toBeInTheDocument()
  })

  it('主要ナビリンクが存在する', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /週次レポート/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /コース傾向/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /調教チェック/ })).toBeInTheDocument()
  })
})
