const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const { merge } = require('webpack-merge');

module.exports = merge(require(path.resolve(__dirname, 'common-configuration.js')), {
    devtool: 'source-map',
    mode: 'production',

    output: {
        filename: '[contenthash].js',
        path: path.resolve('build', 'production'),
    },

    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[contenthash].css',
        }),
    ],
});
