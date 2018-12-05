import React from 'react'
import Header from '../../modules/header'
import Footer from '../../modules/footer'
import SketchPad from '../../pages/sketchpad'

const App = () => (
  <React.Fragment>
    <Header />
    <SketchPad />
    <Footer />
  </React.Fragment>
)

App.displayName = 'App'
export default App
