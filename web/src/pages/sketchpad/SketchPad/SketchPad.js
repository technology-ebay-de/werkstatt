import React from 'react'
import styled from 'styled-components'
import CodeBlock from '../../../modules/code-block'

const Root = styled('main')(({ theme: { spacing } }) => ({
  padding: spacing.unit * 2,
  maxWidth: 960,
  minHeight: 'calc(100vh - 96px)',
  margin: '0 auto'
}))

const SketchPad = ({ title, codeBlocks }) => (
  <Root>
    <span>Current Sketch Pad</span>
    <h1>{title}</h1>
    {codeBlocks.map(block => <CodeBlock key={block.code} content={block} />)}
  </Root>
)

SketchPad.displayName = 'SketchPad'

export default SketchPad
