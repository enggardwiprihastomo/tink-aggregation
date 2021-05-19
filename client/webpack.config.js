const path = require('path')


module.exports = {
    entry: {
        index: ['@babel/polyfill', './src/index.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3000,
        proxy: {
            '/': 'http://localhost:8080',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                    extensions: [".js", ".jsx"]
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(svg|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            }
        ]
    }
}