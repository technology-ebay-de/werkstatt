import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link as RouterLink } from 'react-router-dom'
import { Page, PageHeader } from 'ui/page-layout'
import Typography from 'ui/typography'
import Link from 'ui/link'
import SketchpadList from 'modules/sketchpad-list'
import UserCard from 'modules/user-card'
import { Section } from './styles'

const DashboardPage = ({ currentUser }) => (
  <Page as='main'>
    <Helmet title='Dashboard' />
    <PageHeader>
      <Typography type='headline' as='h1'>Dashboard</Typography>
    </PageHeader>
    <Section>
      <UserCard {...currentUser} />
    </Section>
    <Section>
      <Typography type='subtitle' as='h2'>Last Edit Sketchpads</Typography>
      <SketchpadList limit={3} />
      <Link as={RouterLink} to='/sketchpad'>View all Sketchpads »</Link>
    </Section>
  </Page>
)

DashboardPage.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string
  })
}

DashboardPage.displayName = 'DashboardPage'

export default DashboardPage
