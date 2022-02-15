/*
 * @Author: ZY
 * @Date: 2022-02-14 11:44:14
 * @LastEditors: ZY
 * @LastEditTime: 2022-02-15 11:04:58
 * @FilePath: /webpack-demo/packages/loader-demo/src/index.js
 * @Description: 文件描述
 */

import hero from "./hero.js";
import skill from "!skill-loader!./skill.js";
import selectHero from "./select.js";

console.log(hero);
console.log(skill);
selectHero()