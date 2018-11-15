module.exports = {
  options: {
    root: __dirname
  },
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'werkstatt'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
}
