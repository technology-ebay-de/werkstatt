import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Page, PageHeader } from 'src/ui/page-layout'
import Typography from 'src/ui/typography'
import SketchPadItem from '../SketchPadItem'
import { Section } from './styles'

const DashboardPage = ({ sketchPadList }) => (
  <Page as='main'>
    <Helmet title='Dashboard' />
    <PageHeader>
      <Typography type='headline' as='h1'>Dashboard</Typography>
    </PageHeader>
    {sketchPadList && (
      <Section>
        <Typography type='subheader' as='h2'>My Sketch Pads</Typography>
        {sketchPadList.map(item => <SketchPadItem key={item.id} {...item} />)}
      </Section>
    )}
  </Page>
)

DashboardPage.propTypes = {
  sketchPadList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    codeBlockCount: PropTypes.number
  }))
}

DashboardPage.displayName = 'DashboardPage'

export default DashboardPage
