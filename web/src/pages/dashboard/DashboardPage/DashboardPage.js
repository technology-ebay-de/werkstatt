import React from 'react'
import { Link } from 'react-router-dom'
import { Page, PageHeader } from 'src/ui/page-layout'

const DashboardPage = ({ sketchPadList }) => (
  <Page as='main'>
    <PageHeader>
      <h1>Dashboard</h1>
    </PageHeader>
    {sketchPadList && sketchPadList.map(item => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <span>Code Block: {item.codeBlockCount}</span>
        <Link to={`/sketchpad/${item.id}`}>More</Link>
      </div>
    ))}
  </Page>
)

// DashboardPage.displayName = 'DashboardPage'

export default DashboardPage
