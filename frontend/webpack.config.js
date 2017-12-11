var path = require("path");
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./public/app.jsx",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: [
                    /\.jsx?$/, /\.js?$/
                ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};