import React from 'react'
import Avatar from 'ui/avatar'
import { Root, Username } from './styles'

const Profile = ({ username, avatar }) => (
  <Root>
    <Avatar src={avatar} alt={username} />
    <Username>{username}</Username>
  </Root>
)

Profile.displayName = 'Profile'

export default Profile
