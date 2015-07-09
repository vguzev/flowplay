var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        app: ["webpack/hot/dev-server", "./app/main.js"]
    },
    output: {
        path: path.join(__dirname, 'build')
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?harmony&insertPragma=React.DOM' },
            // Про ExtractTextPlugin см. http://habrahabr.ru/post/245991/
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        root: path.resolve(__dirname, 'app'),
        extensions: ['', '.js', '.jsx']
    },
    devtools: "#eval-cheap-module-source-map",
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};