import { compose, setDisplayName, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withThemeProvider } from 'src/ui/theme'
import { actions } from 'src/modules/auth'
import App from './App'

const enhance = compose(
  setDisplayName('AppContainer'),
  connect(),
  withHandlers({
    loadCurrentUser: ({ dispatch }) => () => dispatch(actions.loadCurrentUserDataAction.request())
  }),
  lifecycle({
    componentDidMount () {
      this.props.loadCurrentUser()
    }
  }),
  withThemeProvider
)

export default enhance(App)
