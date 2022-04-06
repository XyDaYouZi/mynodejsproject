const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    //设置mode,production/development
    mode: 'development',
    //配置入口
    entry: {
        app: './src/app.js'
    },
    devtool: 'source-map',
    //出口文件夹,必须写物理路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'app.js'
    },
    //配置插件 
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/*.ico',
                    to: path.join(__dirname, './dist/'),
                    transformPath(targetPath, absolutePate) {
                        return targetPath.replace('public', '')
                    },
                    toType: 'dir'
                },
                {
                    from: 'public/css/*.css',
                    to: path.join(__dirname, './dist/'),
                    transformPath(targetPath, absolutePate) {
                        return targetPath.replace('public', '')
                    },
                    toType: 'dir'
                },
                {
                    from: 'public/js/*.js',
                    to: path.join(__dirname, './dist/'),
                    transformPath(targetPath, absolutePate) {
                        return targetPath.replace('public', '')
                    },
                    toType: 'dir'
                },
                {
                    from: 'public/fonts/*.woff2',
                    to: path.join(__dirname, './dist/'),
                    transformPath(targetPath, absolutePate) {
                        return targetPath.replace('public', '')
                    },
                    toType: 'dir'
                },
                {
                    from: 'public/img/*.jpg',
                    to: path.join(__dirname, './dist/'),
                    transformPath(targetPath, absolutePate) {
                        return targetPath.replace('public', '')
                    },
                    toType: 'dir'
                }
            ]
        }),
    ],
    //配置server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
}