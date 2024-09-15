export default {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSpacing: true,
    overrides: [
        {
            files: '*json',
            options: {
                tabWidth: 2,
            },
        },
    ],
}
