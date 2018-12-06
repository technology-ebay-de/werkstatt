import React from 'react'
import Header from 'src/modules/header'
import Routes from 'src/modules/routes'
import Footer from 'src/modules/footer'
import { Root, Content } from './styles'

const App = ({ appRoutes }) => (
  <Root>
    <Header />
    <Content>
      <Routes routes={appRoutes} />
    </Content>
    <Footer />
  </Root>
)

App.displayName = 'App'
export default App
