const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(config, {
    mode: 'production',
    output: {
        filename: 'main.[hash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    }
})