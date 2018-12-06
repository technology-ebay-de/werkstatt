import styled from 'styled-components'

export const Root = styled('div')(({ theme: { spacing } }) => ({
  display: 'block',
  paddingTop: spacing.unit * 2,
  paddingBottom: spacing.unit * 2,

  '&:first-of-type': {
    paddingTop: 0
  }
}))
