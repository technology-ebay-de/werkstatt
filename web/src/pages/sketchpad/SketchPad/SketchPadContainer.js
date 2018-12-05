import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'
import SketchPad from './SketchPad'

const enhance = compose(
  setDisplayName('SketchPadContainer'),
  connect(({ sketchPad: { title, codeBlocks } }) => ({ title, codeBlocks }))
)

export default enhance(SketchPad)
