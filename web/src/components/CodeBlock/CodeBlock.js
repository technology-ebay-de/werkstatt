import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import './code-block.css'
import CodeMirror from 'codemirror'
import 'codemirror/mode/python/python'
import React from 'react'
import Output from '../Output'

export default class CodeBlock extends React.Component {
  constructor (props) {
    super(props)
    this.codeInput = React.createRef()
  }

  componentDidMount () {
    const options = {
      theme: 'idea'
    }
    this.codeMirror = CodeMirror.fromTextArea(this.codeInput.current, options)
  }

  componentWillUnmount () {
    if (this.codeMirror) {
      this.codeMirror.toTextArea()
    }
  }

  render () {
    const { content: { code, output } } = this.props
    return (<div>
      <div className='code-block'>
        <textarea defaultValue={code}
          ref={this.codeInput} />
      </div>
      <Output output={output} />
    </div>)
  }
}
