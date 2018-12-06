import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'
import Header from './Header'

const enhance = compose(
  setDisplayName('HeaderContainer'),
  connect(({ auth: { currentUser } }) => ({ currentUser }))
)

export default enhance(Header)
