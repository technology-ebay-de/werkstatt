import styled from 'styled-components'

export const Root = styled('div')({
  '.CodeMirror': {
    fontFamily: '"Source Code Pro", monospace',
    fontSize: 14,
    height: 'auto',
    '@media (min-width: 1024px)': {
      height: '100%'
    }
  }
})
