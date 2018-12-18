import styled from 'styled-components'

const Link = styled('a')(({ theme: { palette } }) => ({
  display: 'inline-block',
  fontSize: 'inherit',
  color: palette.primary.base,

  '&:hover': {
    color: palette.primary.dark
  }
}))

Link.displayName = 'Link'

export default Link
