import React from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/icecoder.css'
import 'codemirror/mode/python/python'
import { Root } from './styles'

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.codeInput = React.createRef()
  }

  componentDidMount () {
    const options = {
      theme: 'icecoder',
      indentUnit: 4,
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
