import styled from 'styled-components'

export const Root = styled('header')(({ theme: { palette, spacing } }) => ({
  width: '100%',
  paddingRight: spacing.unit * 2,
  paddingLeft: spacing.unit * 2,
  height: spacing.unit * 8,
  lineHeight: `${spacing.unit * 8}px`,
  color: palette.text.primary
}))

export const Logo = styled('span')(({ theme: { palette } }) => ({
  color: palette.primary.base,
  fontSize: 24,
  fontWeight: 500
}))
