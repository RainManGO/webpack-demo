/*
 * @Author: ZY
 * @Date: 2022-02-15 09:23:52
 * @LastEditors: ZY
 * @LastEditTime: 2022-02-15 11:06:52
 * @FilePath: /webpack-demo/packages/loader-demo/src/custom-loader/select-hero-loader.js
 * @Description: 文件描述
 */
module.exports = function (source) {
 const {heroName} =  this.query
 //也可以查出options map
//  const {heroName} =  this.getOptions()
 if (heroName && this.resourcePath.endsWith('select.js')) {
  this.callback(null,source.replace('您选择了英雄',`您选择了英雄:${heroName}`))
 }
  return source
}
