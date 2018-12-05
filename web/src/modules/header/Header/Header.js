import React from 'react'
import { Root, Logo } from './styles'
import Profile from '../Profile'

const Header = ({ currentUser }) => (
  <Root>
    <Logo>werk.statt</Logo>
    <Profile {...currentUser} />
  </Root>
)

Header.displayName = 'Header'

export default Header
