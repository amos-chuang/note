const webpack = require('webpack')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    devtool: 'eval',
    entry: {
        index: 'index.tsx',
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: 'dist',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        host: "127.0.0.1",
        port: 3001,
        historyApiFallback: true,
        inline: true,
        stats: {
            modules: false,
            chunks: false,
            children: false,
            chunkModules: false,
            hash: false,
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loaders: ['babel-loader', 'ts-loader'],
            include: path.resolve(__dirname, 'src'),
        }]
    },
    plugins: [
        new WebpackNotifierPlugin(),
    ],
    watchOptions: {
        // poll: 1000,
    }
}