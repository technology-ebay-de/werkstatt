import React from 'react'
import styled from 'styled-components'
import Spinner from 'src/ui/spinner'

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
})

const SketchPadSpinner = () => (
  <Root>
    <Spinner />
  </Root>
)

SketchPadSpinner.displayName = 'SketchPadSpinner'

export default SketchPadSpinner
