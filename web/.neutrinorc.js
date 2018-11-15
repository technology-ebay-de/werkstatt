module.exports = {
  options: {
    root: __dirname
  },
  use: [
    [
      "@neutrinojs/eslint",
      {
        baseConfig: {
            rules: {
              quotes: [
                "error",
                "double",
                {
                  avoidEscape: true
                }
              ],
              semi: ["error", "never"],
              indent: ["error", 2, { SwitchCase: 1 }]
            }
          }
        }
    ],
    [
      "@neutrinojs/react",
      {
        html: {
          title: "werkstatt"
        }
      }
    ],
    "@neutrinojs/jest"
  ]
}
