import styled from 'styled-components'

export const Root = styled('div')(({
  display: 'flex',
  flexWrap: 'wrap',
  height: '100vh'
}))

export const Content = styled('div')(({
  width: '100%',
  height: '100%',
  alignItems: 'strech'
}))
