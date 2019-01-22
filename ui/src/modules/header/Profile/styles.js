import styled from 'styled-components'

export const Root = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

export const Username = styled('span')(({ theme: { spacing } }) => ({
  marginLeft: spacing.unit,
  fontSize: 14,
  fontWeight: 500
}))
