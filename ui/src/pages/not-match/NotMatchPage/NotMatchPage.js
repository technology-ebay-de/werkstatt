import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Page, PageHeader } from 'ui/page-layout'
import Typography from 'ui/typography'
import Link from 'ui/link'
import { Section, Image } from './styles'

const NotMatchPage = () => (
  <Page as='main'>
    <PageHeader>
      <Typography type='headline' as='h1'>Uuups!</Typography>
      <Typography type='subheader' as='h2'>Four-Ohweia-Four!</Typography>
    </PageHeader>
    <Section>
      <Image src='/public/img/404.jpg' alt='404' />
      <span>Nothing to see here. <Link as={RouterLink} to='/'>« Go Back</Link></span>
    </Section>
  </Page>
)

NotMatchPage.displayName = 'NotMatchPage'

export default NotMatchPage
