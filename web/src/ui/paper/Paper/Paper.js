import styled from 'styled-components'
import PropTypes from 'prop-types'

const Paper = styled('div')(({ theme: { palette, spacing }, padding }) => ({
  background: palette.background.paper,
  padding: padding && spacing.unit * 2
}))

Paper.propTypes = {
  padding: PropTypes.bool
}

Paper.displayName = 'Paper'

export default Paper
