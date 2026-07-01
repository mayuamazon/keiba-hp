import { render, screen } from '@testing-library/react'
import { NoteCta } from '@/components/note-cta'

describe('NoteCta', () => {
  it('Note誘導テキストを表示する', () => {
    render(<NoteCta raceTitle="七夕賞（G3）" />)
    expect(screen.getByText(/七夕賞/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /買い目/ })).toBeInTheDocument()
  })
})
