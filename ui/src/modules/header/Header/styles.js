import styled from 'styled-components'

export const Root = styled('header')(({ theme: { palette, spacing } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingRight: spacing.unit * 2,
  paddingLeft: spacing.unit * 2,
  height: spacing.unit * 8,
  lineHeight: `${spacing.unit * 8}px`,
  color: palette.text.primary,
  background: palette.background.fold
}))

export const Logo = styled('span')({
  fontSize: 24,
  fontWeight: 500
})
