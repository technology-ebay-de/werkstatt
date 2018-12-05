import styled from 'styled-components'

const Paper = styled('div')(({ theme: { palette, spacing }, padding }) => ({
  background: palette.background.paper,
  padding: padding && spacing.unit * 2
}))

Paper.displayName = 'Paper'

export default Paper
