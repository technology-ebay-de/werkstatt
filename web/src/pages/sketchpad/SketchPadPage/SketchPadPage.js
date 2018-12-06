import React from 'react'
import styled from 'styled-components'
import CodeBlock from 'src/modules/code-block'

const Root = styled('main')(({ theme: { spacing } }) => ({
  padding: spacing.unit * 2,
  maxWidth: 960,
  minHeight: 'calc(100vh - 96px)',
  margin: '0 auto'
}))

const SketchPadPage = ({ title, codeBlocks }) => (
  <Root>
    <span>Current Sketch Pad</span>
    <h1>{title}</h1>
    {codeBlocks.map(block => <CodeBlock key={block.id} content={block} />)}
  </Root>
)

SketchPadPage.displayName = 'SketchPadPage'

export default SketchPadPage
