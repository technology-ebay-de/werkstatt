import { compose, setDisplayName, lifecycle, withHandlers, branch } from 'recompose'
import { connect } from 'react-redux'
import { loadSketchpadDataAction } from '../actions'
import SketchpadSpinner from '../SketchpadSpinner'
import SketchpadPage from './SketchpadPage'

const enhance = compose(
  setDisplayName('SketchpadPageContainer'),
  connect(({ sketchpad: { title, codeBlocks, isLoading } }) => ({ title, codeBlocks, isLoading })),
  branch(({ isLoading }) => isLoading, () => SketchpadSpinner),
  withHandlers({
    loadSketchPadData: ({ dispatch }) => (id) => dispatch(loadSketchpadDataAction.request(id))
  }),
  lifecycle({
    componentDidMount () {
      const { match, loadSketchPadData } = this.props
      loadSketchPadData(match.params.id)
    }
  })
)

export default enhance(SketchpadPage)
