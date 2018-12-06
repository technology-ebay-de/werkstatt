import styled from 'styled-components'

const PageHeader = styled('header')(({ theme: { spacing } }) => ({
  paddingTop: spacing.unit * 2,
  paddingBottom: spacing.unit * 2
}))

PageHeader.displayName = 'PageHeader'

export default PageHeader
