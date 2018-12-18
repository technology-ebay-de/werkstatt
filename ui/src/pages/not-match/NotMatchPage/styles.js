import styled from 'styled-components'

export const Section = styled('section')(({ theme: { spacing } }) => ({
  paddingTop: spacing.unit * 2,
  paddingBottom: spacing.unit * 2
}))

export const Image = styled('img')(({ theme: { spacing } }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  marginBottom: spacing.unit * 2
}))
