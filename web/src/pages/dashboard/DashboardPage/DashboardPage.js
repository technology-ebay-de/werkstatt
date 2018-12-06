import React from 'react'
import { Page, PageHeader } from 'src/ui/page-layout'
import SketchPadItem from '../SketchPadItem'

const DashboardPage = ({ sketchPadList }) => (
  <Page as='main'>
    <PageHeader>
      <h1>Dashboard</h1>
    </PageHeader>
    {sketchPadList && (
      <section>
        <h2>My Sketch Pads</h2>
        {sketchPadList.map(item => <SketchPadItem key={item.id} {...item} />)}
      </section>
    )}
  </Page>
)

DashboardPage.displayName = 'DashboardPage'

export default DashboardPage
