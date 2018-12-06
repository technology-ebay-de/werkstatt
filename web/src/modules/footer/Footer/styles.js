import styled from 'styled-components'

export const Root = styled('footer')(({ theme: { spacing, palette } }) => ({
  padding: spacing.unit * 2,
  background: palette.background.fold
}))
