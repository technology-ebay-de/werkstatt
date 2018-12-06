import React from 'react'
import Header from 'src/modules/header'
import Routes from 'src/modules/routes'
import Footer from 'src/modules/footer'

const App = ({ appRoutes }) => (
  <React.Fragment>
    <Header />
    <Routes routes={appRoutes} />
    <Footer />
  </React.Fragment>
)

App.displayName = 'App'
export default App
