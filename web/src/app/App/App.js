import React from 'react'
import Header from 'src/modules/header'
import Footer from 'src/modules/footer'
import SketchPad from 'src/pages/sketchpad'

const App = () => (
  <React.Fragment>
    <Header />
    <SketchPad />
    <Footer />
  </React.Fragment>
)

App.displayName = 'App'
export default App
