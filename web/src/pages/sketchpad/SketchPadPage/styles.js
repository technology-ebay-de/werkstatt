import styled from 'styled-components'

export const Root = styled('main')(({ theme: { spacing } }) => ({
  padding: spacing.unit * 2,
  maxWidth: 960,
  minHeight: 'calc(100vh - 96px)',
  margin: '0 auto'
}))
