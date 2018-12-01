import React from 'react'
import { CodeBlock } from '../'

const ScratchPad = ({ title, codeBlocks }) =>
  <main className='scratch-pad'>
    <h1>{title}</h1>
    {codeBlocks.map((block) => (<CodeBlock content={block} />))}
  </main>

export default ScratchPad
