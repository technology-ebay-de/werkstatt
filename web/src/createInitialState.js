export default () => ({
  scratchPad: {
    title: 'Hello world',
    codeBlocks: [
      {
        code: "foo = 'Hello world"
      },
      {
        code: 'print(foo)'
      }
    ]
  }
})

// Note: you can also use this module to hydrate from an existing state (e.g. from server side rendering) like this:
// export default () => JSON.parse(document.getElementById('root').getAttribute('data-initialState'));
