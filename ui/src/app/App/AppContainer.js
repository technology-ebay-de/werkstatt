import { compose, setDisplayName, withHandlers, withProps, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withThemeProvider } from 'ui/theme'
import { actions } from 'modules/auth'
import routesConfig from 'routesConfig'
import App from './App'

const enhance = compose(
  setDisplayName('AppContainer'),
  withRouter,
  connect(),
  withHandlers({
    loadCurrentUser: ({ dispatch }) => () => dispatch(actions.loadCurrentUserDataAction.request())
  }),
  withProps(() => ({
    appRoutes: routesConfig
  })),
  lifecycle({
    componentDidMount () {
      this.props.loadCurrentUser()
    }
  }),
  withThemeProvider
)

export default enhance(App)
