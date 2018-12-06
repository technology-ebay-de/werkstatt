import styled from 'styled-components'
import PropTypes from 'prop-types'

const Typography = styled('span')(({ theme: { typography }, type }) => ({
  margin: 0,
  ...typography[type]
}))

Typography.propTypes = {
  type: PropTypes.oneOf(['headline', 'subheader', 'title', 'subtitle', 'body'])
}

Typography.defaultProps = {
  type: 'body'
}

Typography.displayName = 'Typography'

export default Typography
