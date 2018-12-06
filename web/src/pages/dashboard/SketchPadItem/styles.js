import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Paper from 'src/ui/paper'

export const Root = styled(Paper)(({ theme: { spacing } }) => ({
  marginTop: spacing.unit * 2,
  marginBottom: spacing.unit * 2
}))

export const StyledLink = styled(Link)(({ theme: { palette } }) => ({
  fontWeight: 500,
  color: palette.primary.base,
  textTransform: 'uppercase'
}))
