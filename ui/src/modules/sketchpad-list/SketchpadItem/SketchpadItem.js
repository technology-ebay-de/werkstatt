import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'ui/typography'
import { Root, StyledLink } from './styles'

const SketchpadItem = ({ id, title, codeBlockCount }) => (
  <Root padding>
    <Typography as='h4' type='title'>{title}</Typography>
    <Typography type='meta' marginBottom>Code Blocks: {codeBlockCount}</Typography>
    <StyledLink to={`/sketchpad/${id}`}>View Sketch Pad »</StyledLink>
  </Root>
)

SketchpadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  codeBlockCount: PropTypes.number
}

SketchpadItem.displayName = 'SketchpadItem'

export default SketchpadItem
