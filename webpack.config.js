const path = require('path');
//启用热更新
const webpack = require('webpack')
//导入html-webpack 生成的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {



    mode:'production',
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            //创建一个在内存中生成的HTML 页面的插件
            template:path.join(__dirname,"./src/index.html"),//指定模板页面
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        //所有的第三方模块加载器
        rules: [
            //所有第三方工具匹配规则
            {test:/\.css$/,use:["style-loader",'css-loader']},//  配置处理.css匹配规则
            {test:/\.less$/, use: ['style-loader','css-loader','less-loader']},//配置.less第三方规则
            {test:/\.(jpg|png|gif|jpeg)$/, use: "url-loader?limit=7631"},//图片处理
            {test:/\.js$/, use: "babel-loader",exclude:/node_modules/},//配Bable 来转换高级的
            {test:/\.vue$/, use: 'vue-loader'},
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader',
            },
            {
                test: /\.(woff?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'./fonts/[name].[hash:7].[ext]'
                }
            },

            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './font/[hash].[ext]',
                        },
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {

        }
    },
    performance: {

        hints: "warning", // 枚举

        maxAssetSize: 300000, // 整数类型（以字节为单位）

        maxEntrypointSize: 500000, // 整数类型（以字节为单位）

        assetFilter: function(assetFilename) {

// 提供资源文件名的断言函数

            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');

        }

    },

};


