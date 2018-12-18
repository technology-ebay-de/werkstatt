import React from 'react'
import Helmet from 'react-helmet'
import { Link as RouterLink } from 'react-router-dom'
import { Page, PageHeader } from 'ui/page-layout'
import Typography from 'ui/typography'
import Link from 'ui/link'
import SketchpadList from 'modules/sketchpad-list'

const SketchpadListPage = () => (
  <Page>
    <Helmet title='All Sketchpads' />
    <PageHeader>
      <Link as={RouterLink} to='/'>« Back</Link>
      <Typography type='headline' as='h1'>All Sketchpads</Typography>
    </PageHeader>
    <SketchpadList />
  </Page>
)

SketchpadListPage.displayName = 'SketchpadListPage'

export default SketchpadListPage
