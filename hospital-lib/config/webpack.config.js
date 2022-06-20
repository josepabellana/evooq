module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        library: {
            type: 'module',
        }
    },
    experiments: {
        outputModule: true,
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/, loader: 'ts-loader'
            }
        ]
    }
};