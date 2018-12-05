import styled from 'styled-components'

const Avatar = styled('img')(({ size }) => ({
  width: size,
  height: size,
  borderRadius: '2px',
  objectFit: 'cover'
}))

Avatar.displayName = 'Avatar'

Avatar.defaultProps = {
  size: 32
}

export default Avatar
