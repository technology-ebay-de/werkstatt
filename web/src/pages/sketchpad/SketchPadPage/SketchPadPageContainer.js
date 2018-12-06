import { compose, setDisplayName, lifecycle, withHandlers, branch } from 'recompose'
import { connect } from 'react-redux'
import { loadSketchPadDataAction } from '../actions'
import SketchPadSpinner from '../SketchPadSpinner'
import SketchPadPage from './SketchPadPage'

const enhance = compose(
  setDisplayName('SketchPadPageContainer'),
  connect(({ sketchPad: { title, codeBlocks, isLoading } }) => ({ title, codeBlocks, isLoading })),
  branch(({ isLoading }) => isLoading, () => SketchPadSpinner),
  withHandlers({
    loadSketchPadData: ({ dispatch }) => (id) => dispatch(loadSketchPadDataAction.request(id))
  }),
  lifecycle({
    componentDidMount () {
      this.props.loadSketchPadData('0CD4E44B-466D-4604-B6D0-8BBC73C11830')
    }
  })
)

export default enhance(SketchPadPage)
