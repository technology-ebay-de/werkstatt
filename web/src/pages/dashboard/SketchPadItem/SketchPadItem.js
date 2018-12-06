import React from 'react'
import PropTypes from 'prop-types'
import { Root, StyledLink } from './styles'

const SketchPadItem = ({ id, title, codeBlockCount }) => (
  <Root padding>
    <h4>{title}</h4>
    <div>
      <span>Code Block: {codeBlockCount}</span>
    </div>
    <StyledLink to={`/sketchpad/${id}`}>View Sketch Pad »</StyledLink>
  </Root>
)

SketchPadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  codeBlockCount: PropTypes.number
}

SketchPadItem.displayName = 'SketchPadItem'

export default SketchPadItem
