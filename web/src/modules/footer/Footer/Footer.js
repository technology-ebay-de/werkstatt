import React from 'react'
import styled from 'styled-components'

const Root = styled('footer')(({ theme: { spacing, palette } }) => ({
  padding: spacing.unit * 2,
  background: palette.background.paper
}))

const Footer = () => (
  <Root>
    <span>&copy; 2018 - werk.statt</span>
  </Root>
)

Footer.displayName = 'Footer'

export default Footer
