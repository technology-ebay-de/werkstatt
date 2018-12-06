import React from 'react'
import Editor from 'src/modules/editor'
import Paper from 'src/ui/paper'
import Output from 'src/modules/output'
import { Root } from './styles'

const CodeBlock = ({ content: { code, output } }) => (
  <Root>
    <Editor code={code} />
    <Paper padding>
      <Output output={output} />
    </Paper>
  </Root>
)

CodeBlock.displayName = 'CodeBlock'

CodeBlock.defaultProps = {
  content: {
    code: "foo = 'Hello world'"
  }
}

export default CodeBlock
