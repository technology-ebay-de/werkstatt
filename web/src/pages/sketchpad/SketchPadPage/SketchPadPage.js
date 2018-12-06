import React from 'react'
import CodeBlock from 'src/modules/code-block'
import { Page, PageHeader } from 'src/ui/page-layout'

const SketchPadPage = ({ title, codeBlocks }) => (
  <Page as='main'>
    <PageHeader>
      <span>Current Sketch Pad</span>
      <h1>{title}</h1>
    </PageHeader>
    {codeBlocks.map(block => <CodeBlock key={block.id} content={block} />)}
  </Page>
)

SketchPadPage.displayName = 'SketchPadPage'

export default SketchPadPage
