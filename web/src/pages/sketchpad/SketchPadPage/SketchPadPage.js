import React from 'react'
import PropTypes from 'prop-types'
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

SketchPadPage.propTypes = {
  title: PropTypes.string,
  codeBlocks: PropTypes.arrayOf(PropTypes.any)
}

SketchPadPage.displayName = 'SketchPadPage'

export default SketchPadPage
