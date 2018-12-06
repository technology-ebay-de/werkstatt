import styled from 'styled-components'

export const Root = styled('div')(({ theme: { spacing } }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  marginBottom: spacing.unit * 4,
  boxShadow: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12)',

  '&:last-of-type': {
    marginBottom: 0
  }
}))

export const Column = styled('div')(({ split }) => ({
  flex: '1 1 auto',
  width: '100%',
  background: '#1d1d1b',
  '@media (min-width: 1024px)': {
    width: split ? '50%' : '100%'
  }
}))
