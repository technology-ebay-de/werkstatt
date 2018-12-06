const { join } = require('path');

const MODULES = join(__dirname, 'node_modules');
const APP_ROOT = process.cwd();

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
    '@neutrinojs/jest',
    /**
     * Override the neutro.config.resolve
     * To enable absoulte imports like `src/modules/...`
     * We need this hole block so `node_modules` will be still resolve
     * @see https://bit.ly/2G5nRfZ
     */
    (neutrino) =>
        neutrino.config.resolve
          .modules
          .add('node_modules')
          // .add(neutrino.options.node_modules)
          .add(MODULES)
          .add(APP_ROOT)
          .when(__dirname.includes('neutrino-dev'), modules => {
            // Add monorepo node_modules to webpack module resolution
            modules.add(join(__dirname, '../../node_modules'));
          })
          .end()
  ]
}
