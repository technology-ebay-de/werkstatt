import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './theme'
import reboot from './reboot'

const GlobalStyle = createGlobalStyle`${reboot}`

export default InnerComponent => props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <InnerComponent {...props} />
    </React.Fragment>
  </ThemeProvider>
)
