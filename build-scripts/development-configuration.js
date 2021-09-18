const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const { merge } = require('webpack-merge');

module.exports = merge(require(path.resolve(__dirname, 'common-configuration.js')), {
    devServer: {
        hot: true,
        historyApiFallback: true,
    },

    devtool: 'inline-source-map',
    mode: 'development',

    output: {
        filename: 'index.js',
        path: path.resolve('build', 'development'),
    },

    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css',
        }),
    ],
});
