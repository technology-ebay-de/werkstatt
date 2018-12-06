import React from 'react'
import PropTypes from 'prop-types'
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

App.propTypes = {
  appRoutes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    path: PropTypes.string,
    component: PropTypes.func,
    exact: PropTypes.bool
  })).isRequired
}

App.displayName = 'App'

export default App
