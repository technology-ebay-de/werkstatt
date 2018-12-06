import React from 'react'
import styled from 'styled-components'
import Avatar from 'src/ui/avatar'

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const Username = styled('span')(({ theme: { spacing } }) => ({
  marginLeft: spacing.unit,
  fontSize: 14,
  fontWeight: 500
}))

const Profile = ({ username, avatar }) => (
  <Root>
    <Avatar src={avatar} alt={username} />
    <Username>{username}</Username>
  </Root>
)

Profile.displayName = 'Profile'

export default Profile
