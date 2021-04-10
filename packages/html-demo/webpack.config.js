/*
 * @Description: 
 * @Author: ZY
 * @Date: 2021-04-09 11:01:24
 * @LastEditors: ZY
 * @LastEditTime: 2021-04-09 17:35:41
 */

const { resolve } = require('path')
const HtmlwebpackPligin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js',
        path:resolve(__dirname,'dist')
    },
    plugins:[
        //默认什么不写的时候，会自动创建index.html，引入打包完成的资源
        //同时支持title/template/templateContent 等参数
        new HtmlwebpackPligin({
            title:'html-demo',
            templateContent: `
            <html>
              <body>
                <h1>Hello World</h1>
              </body>
            </html>
          `
        })
    ],
    mode:'development'
}