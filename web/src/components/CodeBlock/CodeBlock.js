import React from 'react'

const CodeBlock = ({ content: { code } }) =>
  <div className='code-block'>
    <textarea>{code}</textarea>
  </div>

export default CodeBlock
