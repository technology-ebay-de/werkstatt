// https://loading.io/css/

import React from 'react'
import styled, { keyframes } from 'styled-components'

const Root = styled('div')`
  display: inline-block;
  position: relative;
  width: ${p => (p.theme.spacing.unit * 8)}px;
  height: ${p => (p.theme.spacing.unit * 8)}px;
  transform: rotate(45deg);
  transform-origin: ${p => `${p.theme.spacing.unit * 4}px ${p.theme.spacing.unit * 4}px`};
`
const ldsHeart = keyframes`
0% {
  transform: scale(0.95);
}
5% {
  transform: scale(1.1);
}
39% {
  transform: scale(0.85);
}
45% {
  transform: scale(1);
}
60% {
  transform: scale(0.95);
}
100% {
  transform: scale(0.9);
}`

const Inner = styled('div')`
  top: 23px;
  left: 23px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: ${p => p.theme.palette.primary.base};
  animation: ${ldsHeart} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    background: ${p => p.theme.palette.primary.base};
  }

  &:before {
    left: -17px;
    border-radius: 50% 0 0 50%;
  }

  &:after {
    top: -17px;
    border-radius: 50% 50% 0 0;
  }
`

const Spinner = () => (
  <Root>
    <Inner />
  </Root>
)

Spinner.displayName = 'Spinner'

export default Spinner
