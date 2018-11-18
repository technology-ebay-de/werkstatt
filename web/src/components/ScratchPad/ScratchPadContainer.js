import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'
import ScratchPad from './ScratchPad'

const enhance = compose(
  setDisplayName('ScratchPadContainer'),
  connect(({ scratchPad: { title, codeBlocks } }) => ({ title, codeBlocks }))
)

export default enhance(ScratchPad)
