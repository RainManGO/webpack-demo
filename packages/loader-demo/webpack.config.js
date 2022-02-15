/*
 * @Description:  webpack 打包配置文件
 * @Author: ZY
 * @Date: 2021-04-08 20:47:46
 * @LastEditors: ZY
 * @LastEditTime: 2022-02-15 11:06:23
 */

const { resolve } = require('path')

module.exports = {
    //webpack 配置
    //入口起点
    entry:'./src/index.js',
    //输出
    output:{
        //输出文件名
        filename:'app.js',
        //输出路径
        path:resolve(__dirname,'dist')
    },
    resolveLoader:{
        alias:{
            'skill-loader':resolve(__dirname,'src/custom-loader/skill-loader.js'),
            'select-hero-loader':resolve(__dirname,'src/custom-loader/select-hero-loader.js')
        }
    },
    //loader 配置
    module:{
        rules:[
            //详细loader配置
            {
                //匹配哪些文件
                test:/\.css$/,
                //使用哪些loader处理
                use:[
                    //use数组中loader执行顺序：从右到左从后到上
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            //less loader
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            //scss loader
            {
                test:/\.scss$|\.sass$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                use: [
                    "./src/custom-loader/hero-loader.js",
                    {
                        loader:"select-hero-loader",
                        options:{
                            heroName:'寒冰射手'
                        }
                    }
                ]   // 看这里，看这里
            }
        ]
    },
    //模式
    mode:'development'
}
