import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

const Routes = ({ routes }) => <Switch>{routes.map(route => <Route key={`${route.key}`} {...route} />)}</Switch>

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    component: PropTypes.func,
    path: PropTypes.string,
    exact: PropTypes.bool
  })).isRequired
}

Routes.displayName = 'Routes'

export default Routes
