import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'
import DashboardPage from './DashboardPage'

const enhance = compose(
  setDisplayName('DashboardContainer'),
  connect(({ auth: { currentUser } }) => ({ currentUser }))
)

export default enhance(DashboardPage)
