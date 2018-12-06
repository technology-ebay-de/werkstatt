import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link as RouterLink } from 'react-router-dom'
import CodeBlock from 'src/modules/code-block'
import { Page, PageHeader } from 'src/ui/page-layout'
import Typography from 'src/ui/typography'
import Link from 'src/ui/link'

const SketchPadPage = ({ title, codeBlocks }) => (
  <Page as='main'>
    <Helmet title={`${title} Sketch Pad`} />
    <PageHeader>
      <Link as={RouterLink} to='/'>« Back</Link>
      <Typography type='headline' as='h1'>{title}</Typography>
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
