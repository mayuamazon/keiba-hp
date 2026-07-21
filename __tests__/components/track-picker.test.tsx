import { render, screen } from '@testing-library/react'
import { TrackPicker } from '@/components/track-picker'

describe('TrackPicker', () => {
  it('10場のリンクが /courses/[id] を指す', () => {
    render(<TrackPicker />)
    const tokyo = screen.getByRole('link', { name: '東京' })
    expect(tokyo).toHaveAttribute('href', '/courses/tokyo')
    const nakayama = screen.getByRole('link', { name: '中山' })
    expect(nakayama).toHaveAttribute('href', '/courses/nakayama')
    const links = ['札幌', '函館', '福島', '新潟', '東京', '中山', '中京', '京都', '阪神', '小倉']
    links.forEach((n) => expect(screen.getByRole('link', { name: n })).toBeInTheDocument())
  })
})
