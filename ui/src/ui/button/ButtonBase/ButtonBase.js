import styled from 'styled-components'

const ButtonBase = styled('button')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  outline: 'none',
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  '-moz-appearance': 'none',
  '-webkit-appearance': 'none',
  textDecoration: 'none',
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none'
  },
  '&[disabled]': {
    pointerEvents: 'none',
    cursor: 'default'
  }
})

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
