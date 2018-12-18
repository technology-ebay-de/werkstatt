import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'ui/avatar'
import Typography from 'ui/typography'
import { Root, Content, UsernameInfo } from './styles'

const UserCard = ({ avatar, username, name }) => (
  <Root>
    <Avatar size={96} alt={username} src={avatar} />
    <Content>
      <UsernameInfo>
        <Typography type='title'>{name}</Typography>
        <Typography type='meta'>@{username}</Typography>
      </UsernameInfo>
      <Typography type='meta'>Member since: The beginning</Typography>
    </Content>
  </Root>
)

UserCard.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string
}

UserCard.displayName = 'UserCard'

export default UserCard
