/*
 * @Author: ZY
 * @Date: 2022-02-14 16:26:02
 * @LastEditors: ZY
 * @LastEditTime: 2022-02-14 16:39:37
 * @FilePath: /webpack-demo/packages/loader-demo/src/custom-loader/skill-loader.js
 * @Description: 文件描述
 */

module.exports = function (source) {
  return  source.replace("大宝剑","R技能是：大宝剑！")
}
