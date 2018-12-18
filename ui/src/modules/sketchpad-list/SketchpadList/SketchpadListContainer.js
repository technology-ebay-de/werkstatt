import { compose, setDisplayName, lifecycle, withHandlers, branch } from 'recompose'
import { connect } from 'react-redux'
import { loadSketchpadListDataAction } from '../actions'
import SketchpadListSpinner from '../SketchpadListSpinner'
import SketchpadList from './SketchpadList'

const enhance = compose(
  setDisplayName('SketchpadListContainer'),
  connect(({ sketchpadList: { data: sketchpadList, isLoading } }) => ({ sketchpadList, isLoading })),
  branch(({ isLoading }) => isLoading, () => SketchpadListSpinner),
  withHandlers({
    loadSketchpadListData: ({ dispatch }) => (limit) => dispatch(loadSketchpadListDataAction.request(limit))
  }),
  lifecycle({
    componentDidMount () {
      const { loadSketchpadListData, limit = null } = this.props
      loadSketchpadListData(limit)
    }
  })
)

export default enhance(SketchpadList)
