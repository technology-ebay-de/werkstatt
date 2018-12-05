import React from 'react'
import styled from 'styled-components'
import Editor from '../../editor'
import Paper from '../../../ui/paper'

const Root = styled('div')(({ theme: { spacing } }) => ({
  marginTop: spacing.unit * 2,
  marginBottom: spacing.unit * 2
}))

const CodeBlock = ({ content: { code } }) => (
  <Root>
    <Editor code={code} />
    <Paper padding>
      <span>Some very fancy stuff will follow</span>
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
