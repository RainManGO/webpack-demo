/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*\n * @Author: ZY\n * @Date: 2022-02-14 16:26:29\n * @LastEditors: ZY\n * @LastEditTime: 2022-02-14 16:27:33\n * @FilePath: /webpack-demo/packages/loader-demo/src/hero.js\n * @Description: 文件描述\n */\n\nexports.hero ='英雄联盟保健哥：德玛西亚！'\n\n//# sourceURL=webpack:///./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.js */ \"./src/hero.js\");\n/* harmony import */ var _skill_loader_skill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !skill-loader!./skill.js */ \"./src/custom-loader/skill-loader.js!./src/skill.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.js */ \"./src/select.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_select_js__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * @Author: ZY\n * @Date: 2022-02-14 11:44:14\n * @LastEditors: ZY\n * @LastEditTime: 2022-02-15 11:04:58\n * @FilePath: /webpack-demo/packages/loader-demo/src/index.js\n * @Description: 文件描述\n */\n\n\n\n\n\nconsole.log(_hero_js__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log(_skill_loader_skill_js__WEBPACK_IMPORTED_MODULE_1__);\n_select_js__WEBPACK_IMPORTED_MODULE_2___default()()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/select.js":
/*!***********************!*\
  !*** ./src/select.js ***!
  \***********************/
/***/ ((module) => {

eval("/*\n * @Author: ZY\n * @Date: 2022-02-15 10:32:50\n * @LastEditors: ZY\n * @LastEditTime: 2022-02-15 10:56:39\n * @FilePath: /webpack-demo/packages/loader-demo/src/select.js\n * @Description: 文件描述\n */\n\nmodule.exports = function selectHero() {\n  console.log(`您选择了英雄寒冰射手:`);\n}\n\n//# sourceURL=webpack:///./src/select.js?");

/***/ }),

/***/ "./src/custom-loader/skill-loader.js!./src/skill.js":
/*!**********************************************************!*\
  !*** ./src/custom-loader/skill-loader.js!./src/skill.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*\n * @Author: ZY\n * @Date: 2022-02-14 16:26:35\n * @LastEditors: ZY\n * @LastEditTime: 2022-02-14 16:28:04\n * @FilePath: /webpack-demo/packages/loader-demo/src/skill.js\n * @Description: 文件描述\n */\n\nexports.skill = 'R技能是：大宝剑！'\n\n//# sourceURL=webpack:///./src/skill.js?./src/custom-loader/skill-loader.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;