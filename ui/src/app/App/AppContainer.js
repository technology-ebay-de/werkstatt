import { compose, setDisplayName, withHandlers, withProps, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withThemeProvider } from 'src/ui/theme'
import { actions } from 'src/modules/auth'
import routesConfig from 'src/routesConfig'
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
