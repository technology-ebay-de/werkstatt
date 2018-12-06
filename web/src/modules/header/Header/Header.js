import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../Profile'
import { Root, Logo } from './styles'

const Header = ({ currentUser }) => (
  <Root>
    <Link to='/'><Logo>werk.statt</Logo></Link>
    <Profile {...currentUser} />
  </Root>
)

Header.displayName = 'Header'

export default Header
