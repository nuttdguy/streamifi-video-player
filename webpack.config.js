const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
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
        extensions: ['.js', '.jsx'],
        modules: ['node_modules'],
    },
    devtool: "source-map"
}