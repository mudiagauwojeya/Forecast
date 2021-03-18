/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/components/weather.js":
/*!**************************************!*\
  !*** ./source/components/weather.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_weather_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/weather.scss */ \"./source/css/weather.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Weather = function Weather(coordinates) {\n  _classCallCheck(this, Weather);\n\n  this.lng = coordinates.lng;\n  this.lat = coordinates.lat;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jb21wb25lbnRzL3dlYXRoZXIuanM/NzM4NiJdLCJuYW1lcyI6WyJXZWF0aGVyIiwiY29vcmRpbmF0ZXMiLCJsbmciLCJsYXQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7SUFFTUEsTyxHQUNMLGlCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3hCLE9BQUtDLEdBQUwsR0FBV0QsV0FBVyxDQUFDQyxHQUF2QjtBQUNBLE9BQUtDLEdBQUwsR0FBV0YsV0FBVyxDQUFDRSxHQUF2QjtBQUNBLEMiLCJmaWxlIjoiLi9zb3VyY2UvY29tcG9uZW50cy93ZWF0aGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi4vY3NzL3dlYXRoZXIuc2Nzc1wiO1xyXG5cclxuY2xhc3MgV2VhdGhlciB7XHJcblx0Y29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMubG5nID0gY29vcmRpbmF0ZXMubG5nO1xyXG5cdFx0dGhpcy5sYXQgPSBjb29yZGluYXRlcy5sYXQ7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/components/weather.js\n");

/***/ }),

/***/ "./source/css/weather.scss":
/*!*********************************!*\
  !*** ./source/css/weather.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jc3Mvd2VhdGhlci5zY3NzP2VhNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc291cmNlL2Nzcy93ZWF0aGVyLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/css/weather.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/components/weather.js");
/******/ 	
/******/ })()
;