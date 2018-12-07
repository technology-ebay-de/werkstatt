import styled from 'styled-components'
import PropTypes from 'prop-types'

const Typography = styled('span')(({ theme: { typography }, type, marginBottom }) => ({
  margin: 0,
  display: 'block',
  ...typography[type],
  marginBottom: marginBottom && '0.5em'
}))

Typography.propTypes = {
  type: PropTypes.oneOf(['headline', 'subheader', 'title', 'subtitle', 'body', 'meta']),
  marginBottom: PropTypes.bool
}

Typography.defaultProps = {
  type: 'body'
}

Typography.displayName = 'Typography'

export default Typography
