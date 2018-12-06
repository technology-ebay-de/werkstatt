import styled from 'styled-components'

const Page = styled('div')(({ theme: { spacing } }) => ({
  padding: spacing.unit * 2,
  margin: '0 auto',
  maxWidth: 1024
}))

Page.displayName = 'Page'

export default Page
