module.exports = {
  options: {
    root: __dirname
  },
  use: [
    [
      '@neutrinojs/eslint',
      {
        eslint: {
          useEslintrc: true
        }
      }
    ],
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
