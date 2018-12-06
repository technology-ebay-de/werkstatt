import styled from 'styled-components'

const Page = styled('div')(({ theme: { spacing, layout } }) => ({
  padding: spacing.unit * 2,
  margin: '0 auto',
  maxWidth: layout.contentMaxWidth
}))

Page.displayName = 'Page'

export default Page
