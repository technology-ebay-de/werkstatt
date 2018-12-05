import React from 'react'
import styled from 'styled-components'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/icecoder.css'
import 'codemirror/mode/python/python'

const Root = styled('div')({
  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
})

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.codeInput = React.createRef()
  }

  componentDidMount () {
    const options = {
      theme: 'icecoder',
      indentUnit: 2,
      smartIndent: true,
      lineNumbers: true
    }
    this.codeMirror = CodeMirror.fromTextArea(this.codeInput.current, options)
  }

  componentWillUnmount () {
    if (this.codeMirror) {
      this.codeMirror.toTextArea()
    }
  }

  render () {
    const { code } = this.props
    return (
      <Root>
        <textarea defaultValue={code}
          ref={this.codeInput} />
      </Root>
    )
  }
}

Editor.displayName = 'Editor'

Editor.defaultProps = {
  code: "foo = 'Hello world'"
}

export default Editor
