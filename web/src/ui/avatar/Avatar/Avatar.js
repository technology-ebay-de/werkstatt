import styled from 'styled-components'
import PropTypes from 'prop-types'

const Avatar = styled('img')(({ size }) => ({
  width: size,
  height: size,
  borderRadius: '2px',
  objectFit: 'cover'
}))

Avatar.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Avatar.defaultProps = {
  size: 32
}

Avatar.displayName = 'Avatar'

export default Avatar
