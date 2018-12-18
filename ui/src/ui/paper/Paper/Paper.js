import styled from 'styled-components'
import PropTypes from 'prop-types'

const Paper = styled('div')(({ theme: { palette, spacing }, padding, colorInvert }) => ({
  color: !colorInvert ? palette.text.primary : palette.text.primaryInvert,
  background: !colorInvert ? palette.background.paper : palette.background.paperInvert,
  padding: padding && spacing.unit * 2
}))

Paper.propTypes = {
  colorInvert: PropTypes.bool,
  padding: PropTypes.bool
}

PropTypes.defaultPropty = {
  colorInvert: false,
  padding: false
}

Paper.displayName = 'Paper'

export default Paper
