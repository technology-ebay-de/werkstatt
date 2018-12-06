import styled from 'styled-components'

export const Section = styled('section')(({ theme: { spacing } }) => ({
  paddingTop: spacing.unit * 2,
  paddingBottom: spacing.unit * 2
}))
