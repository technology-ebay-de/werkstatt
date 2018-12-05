export default () => ({
  sketchPad: {
    title: 'Hello world',
    codeBlocks: [
      {
        code: 'from werkstatt import line_chart',
        output: {
          type: 'none'
        }
      },
      {
        code: "data = [\n    {'name': 'foo', 'value': 12 },\n    {'name': 'bar', 'value': 6 }\n]\n\nline_chart(data)",
        output: {
          type: 'linechart',
          data: [
            {
              name: 'foo',
              value: 12
            },
            {
              name: 'bar',
              value: 6
            }
          ]
        }
      },
      {
        code: "data = [\n    {'name': 'foo', 'value': 12 },\n    {'name': 'bar', 'value': 6 }\n]\n\nbar_chart(data)",
        output: {
          type: 'barchart',
          data: [
            {
              name: 'foo',
              value: 12
            },
            {
              name: 'bar',
              value: 6
            }
          ]
        }
      }
    ]
  }
})

// Note: you can also use this module to hydrate from an existing state (e.g. from server side rendering) like this:
// export default () => JSON.parse(document.getElementById('root').getAttribute('data-initialState'));
