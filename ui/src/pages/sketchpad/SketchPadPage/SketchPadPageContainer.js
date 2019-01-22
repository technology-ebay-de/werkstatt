import { compose, setDisplayName, lifecycle, withHandlers, branch } from 'recompose'
import { connect } from 'react-redux'
import { loadSketchPadDataAction } from '../actions'
import SketchpadSpinner from '../SketchPadSpinner'
import SketchpadPage from './SketchPadPage'

const enhance = compose(
  setDisplayName('SketchpadPageContainer'),
  connect(({ sketchpad: { title, codeBlocks, isLoading } }) => ({ title, codeBlocks, isLoading })),
  branch(({ isLoading }) => isLoading, () => SketchpadSpinner),
  withHandlers({
    loadSketchPadData: ({ dispatch }) => (id) => dispatch(loadSketchPadDataAction.request(id))
  }),
  lifecycle({
    componentDidMount () {
      const { match, loadSketchPadData } = this.props
      loadSketchPadData(match.params.id)
    }
  })
)

export default enhance(SketchpadPage)
