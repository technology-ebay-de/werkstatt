import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Paper from 'ui/paper'

export const Root = styled(Paper)(({ theme: { spacing } }) => ({
  marginTop: spacing.unit * 2,
  marginBottom: spacing.unit * 2,
  boxShadow: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12)'
}))

export const StyledLink = styled(Link)(({ theme: { palette } }) => ({
  fontWeight: 500,
  color: palette.primary.base,
  textTransform: 'uppercase'
}))
