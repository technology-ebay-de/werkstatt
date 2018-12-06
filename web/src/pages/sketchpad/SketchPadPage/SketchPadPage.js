import React from 'react'
import CodeBlock from 'src/modules/code-block'
import { Root } from './styles'

const SketchPadPage = ({ title, codeBlocks }) => (
  <Root>
    <span>Current Sketch Pad</span>
    <h1>{title}</h1>
    {codeBlocks.map(block => <CodeBlock key={block.id} content={block} />)}
  </Root>
)

SketchPadPage.displayName = 'SketchPadPage'

export default SketchPadPage
