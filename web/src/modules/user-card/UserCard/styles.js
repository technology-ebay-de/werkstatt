import styled from 'styled-components'

export const Root = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

export const Content = styled('div')(({ theme: { spacing } }) => ({
  marginLeft: spacing.unit * 2
}))

export const UsernameInfo = styled('div')(({ theme: { spacing } }) => ({
  marginBottom: spacing.unit * 2
}))
