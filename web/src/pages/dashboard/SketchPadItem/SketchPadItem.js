import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'src/ui/typography'
import { Root, StyledLink } from './styles'

const SketchPadItem = ({ id, title, codeBlockCount }) => (
  <Root padding>
    <Typography as='h4' type='title'>{title}</Typography>
    <div>
      <span>Code Blocks: {codeBlockCount}</span>
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
