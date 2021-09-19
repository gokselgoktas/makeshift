const path = require('path');

const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HTMLMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const TerserWebpackPlugin = require('terser-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve('src', 'index.ts'),

    module: {
        rules: [
            {
                test: /\.(j|t)s$/,
                exclude: /node-modules/,

                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                extractComments: false,
            }),

            new HTMLMinimizerWebpackPlugin(),
            new CSSMinimizerWebpackPlugin(),
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),

        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src', 'index.html'),

            hash: true,
        }),
    ],

    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
};
