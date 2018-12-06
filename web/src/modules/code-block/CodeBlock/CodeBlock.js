import React from 'react'
import PropTypes from 'prop-types'
import Editor from 'src/modules/editor'
import Paper from 'src/ui/paper'
import Output from 'src/modules/output'
import { Root } from './styles'

const CodeBlock = ({ content: { code, output } }) => (
  <Root>
    <Editor code={code} />
    {output && (
      <Paper padding>
        <Output output={output} />
      </Paper>
    )}
  </Root>
)

CodeBlock.propTypes = {
  content: PropTypes.shape({
    code: PropTypes.string,
    output: PropTypes.any
  }).isRequired
}

CodeBlock.defaultProps = {
  content: {
    code: "foo = 'Hello world'"
  }
}

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
