import React from 'react'
import PropTypes from 'prop-types'
import Editor from 'src/modules/editor'
import Paper from 'src/ui/paper'
import Output from 'src/modules/output'
import { Root, Column } from './styles'

const CodeBlock = ({ content: { code, output } }) => {
  const displayOutput = output && output.type !== 'none'
  console.log({ displayOutput: !displayOutput })
  return (
    <Root>
      <Column split={displayOutput}>
        <Editor code={code} />
      </Column>
      {displayOutput && (
        <Column split>
          <Paper colorInvert padding>
            <Output output={output} />
          </Paper>
        </Column>
      )}
    </Root>
  )
}

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
