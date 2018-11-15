import { compose, setDisplayName } from "recompose"
import { connect } from "react-redux"
import ScratchPad from "./ScratchPad"

const enhance = compose(
  setDisplayName("ScratchPadContainer"),
  connect()
)

export default enhance(ScratchPad)
