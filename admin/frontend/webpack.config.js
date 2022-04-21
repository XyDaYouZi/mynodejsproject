const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    //设置mode,production/development
    mode: 'development',
    //配置入口
    entry: {
        'js/app': './src/app.js'
    },
    devtool: 'source-map',
    //出口文件夹,必须写物理路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name]-[hash:6].js'
    },
    //配置加载器:模块—>规则
    module: {
        rules: [{
                test: /\.jpg$/,
                use: {
                    loader: "file-loader"
                }
            }, {
                test: /\.png$/,
                use: {
                    loader: "url-loader?mimetype=image/png"
                }
            },
            {
                test: /\.art$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'art-template-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    //配置插件 
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new CopyPlugin({
            patterns: [{
                    from: 'public/*.ico',
                    to: path.join(__dirname, './dist/'),
                    transformPath(targetPath, absolutePate) {
                        return targetPath.replace('public', '')
                    },
                    toType: 'dir'
                },
                {
                    from: 'public/css/',
                    to: path.join(__dirname, './dist/css/'),
                    // transformPath(targetPath, absolutePate) {
                    //     return targetPath.replace('public', '')
                    // },
                    // toType: 'dir'
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
                    from: 'public/fonts/',
                    to: path.join(__dirname, './dist/fonts/'),
                    // transformPath(targetPath, absolutePate) {
                    //     return targetPath.replace('public', '')
                    // },
                    // toType: 'dir'
                },
                {
                    from: 'public/img/',
                    to: path.join(__dirname, './dist/img/'),
                    // transformPath(targetPath, absolutePate) {
                    //     return targetPath.replace('public', '')
                    // },
                    // toType: 'dir'
                }
            ]
        }),
    ],
    //配置server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        // 是否热更新
        hot: true,
        //解决server清空dist文件夹的问题
        writeToDisk: true,
        //反向代理配置
        proxy: {
            "/api": {
                target: "http://localhost:3000",
            }
        }
    },
}