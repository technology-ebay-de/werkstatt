import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Profile from '../Profile'
import { Root, Logo } from './styles'

const Header = ({ currentUser }) => (
  <Root>
    <Link to='/'><Logo>werk.statt</Logo></Link>
    {currentUser && <Profile {...currentUser} />}
  </Root>
)

Header.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string
  })
}

Header.displayName = 'Header'

export default Header
