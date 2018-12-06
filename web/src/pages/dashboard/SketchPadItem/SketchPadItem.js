import React from 'react'
import { Root, StyledLink } from './styles'

const Item = ({ id, title, codeBlockCount }) => (
  <Root padding>
    <h4>{title}</h4>
    <div>
      <span>Code Block: {codeBlockCount}</span>
    </div>
    <StyledLink to={`/sketchpad/${id}`}>View Sketch Pad »</StyledLink>
  </Root>
)

Item.displayName = 'Item'

export default Item
