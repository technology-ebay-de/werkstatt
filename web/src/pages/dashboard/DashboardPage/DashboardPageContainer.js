import { compose, setDisplayName, lifecycle, withHandlers, branch } from 'recompose'
import { connect } from 'react-redux'
import { loadDashboardDataAction } from '../actions'
import DashboardSpinner from '../DashboardSpinner'
import DashboardPage from './DashboardPage'

const enhance = compose(
  setDisplayName('DashboardContainer'),
  connect(({ dashboard: { sketchPadList, isLoading } }) => ({ sketchPadList, isLoading })),
  branch(({ isLoading }) => isLoading, () => DashboardSpinner),
  withHandlers({
    loadDashboardData: ({ dispatch }) => (id) => dispatch(loadDashboardDataAction.request(id))
  }),
  lifecycle({
    componentDidMount () {
      this.props.loadDashboardData()
    }
  })
)

export default enhance(DashboardPage)
