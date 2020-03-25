const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            localsConvention: 'camelCase',
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules'],
    },
    devtool: "source-map"
}


// {
//     test: /\.css$/,
//     use: [MiniCssExtractPlugin.loader, 'css-loader']
// },

// plugins: [
//     new MiniCssExtractPlugin({
//         filename: '[name]-bundle.css',
//         chunkFilename: '[id].css',
//         ignoreOrder: false, // Enable to remove warnings about conflicting order })
//     })],

// use: [
//     'style-loader',
//     {
//         loader: 'css-loader',
//         options: {
//             sourceMap: true,
//             localsConvention: 'camelCase',
//             modules: {
//                 localIdentName: '[name]__[local]--[hash:base64:5]',
//             },
//         },
//     },
// ],