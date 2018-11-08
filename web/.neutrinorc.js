module.exports = {
    use: [
        ['@neutrinojs/eslint',
            {
                eslint: {
                    rules: {
                        quotes: [
                            "error",
                            "single",
                            {
                                "avoidEscape": true
                            }
                        ],
                        semi: [
                            "error",
                            "never"
                        ]
                    }
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
};
