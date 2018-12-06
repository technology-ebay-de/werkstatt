import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Routes = ({ routes }) => <Switch>{routes.map(route => <Route key={`${route.key}`} {...route} />)}</Switch>

Routes.displayName = 'Routes'

export default Routes
