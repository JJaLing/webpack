var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    devtool: 'source-map', //soruce-map
    entry: __dirname + '/app/main.js', //入口
    output: {
        path: __dirname + "/build", //打包后的目录
        filename: "[name]-[hash].js" //打包后的js文件名
    },
    devServer: {
        contentBase: "./public", //本地服务器加载页面的目录
        historyApiFallback: true, //始终index.html
        inline: true //实时刷新
    },
    module: {
        loaders: [{
            test: /\.json$/, //json
            loader: 'json-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            // query: {
            //     presets: ['es2015', 'react']
            // } //通过.babelrc配置文件进行配置
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) //！对css文件使用两种loader //?modules css modules //分离css
        }]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright"), //版权
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }), //html模板
        new ExtractTextPlugin("style.css")
    ]
}