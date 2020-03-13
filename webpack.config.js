const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        './dist/app': path.resolve(__dirname, 'client/src/index.jsx'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    module: {
        rules: [         
                {
                    exclude: /node_modules/, 
                    test: [/\.js$/, /\.jsx?$/],
                    use: { 
                        loader: 'babel-loader', 
                        options: { 
                            presets: ['@babel/preset-env', '@babel/preset-react'] } }
                },
        ]
    },
    resolve: {
        enforceExtension: false,
        modules: [
            'node_modules'
        ],
    },
    devtool: "source-map"
}