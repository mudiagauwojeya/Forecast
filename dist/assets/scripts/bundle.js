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

/***/ "./source/app.js":
/*!***********************!*\
  !*** ./source/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar getStartedBtn = document.getElementById(\"getStartedBtn\"); // service worker\n\nif (\"serviceWorker\" in navigator) {\n  window.addEventListener(\"load\", function () {\n    //register service worker\n    navigator.serviceWorker.register(\"/service-worker.js\").then(function () {\n      return;\n    }).catch(function (err) {\n      var error = {\n        message: err.message\n      };\n      console.log(err);\n    });\n  });\n}\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.weather;\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {}\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();\nvar options = {\n  root: null,\n  rootMargin: \"0px 0px -200px 0px\",\n  threshold: 0.05\n};\nvar observer = new IntersectionObserver(fadeIn, options);\ndocument.querySelectorAll(\".lorem\").forEach(function (lorem) {\n  observer.observe(lorem);\n});\n\nfunction fadeIn(elements) {\n  elements.forEach(function (element) {\n    if (element.isIntersecting) {\n      element.target.classList.add(\"active\");\n    } else {\n      element.target.classList.remove(\"active\");\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJnZXRTdGFydGVkQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwid2VhdGhlciIsImFwcCIsImluaXQiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZmFkZUluIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsb3JlbSIsIm9ic2VydmUiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXRCLEMsQ0FFQTs7QUFDQSxJQUFJLG1CQUFtQkMsU0FBdkIsRUFBa0M7QUFDakNDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUNyQztBQUNBRixhQUFTLENBQUNHLGFBQVYsQ0FDRUMsUUFERixDQUNXLG9CQURYLEVBRUVDLElBRkYsQ0FFTyxZQUFNO0FBQ1g7QUFDQSxLQUpGLEVBS0VDLEtBTEYsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDZixVQUFNQyxLQUFLLEdBQUc7QUFBRUMsZUFBTyxFQUFFRixHQUFHLENBQUNFO0FBQWYsT0FBZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWjtBQUNBLEtBUkY7QUFTQSxHQVhEO0FBWUE7O0lBRUtLLEc7QUFDTCxpQkFBYztBQUFBOztBQUNiLFNBQUtDLE9BQUw7QUFDQTs7OztXQUVELGdCQUFPLENBQUU7Ozs7OztBQUdWLElBQU1DLEdBQUcsR0FBRyxJQUFJRixHQUFKLEVBQVo7QUFDQUUsR0FBRyxDQUFDQyxJQUFKO0FBRUEsSUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLE1BQUksRUFBRSxJQURTO0FBRWZDLFlBQVUsRUFBRSxvQkFGRztBQUdmQyxXQUFTLEVBQUU7QUFISSxDQUFoQjtBQU1BLElBQUlDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QkMsTUFBekIsRUFBaUNOLE9BQWpDLENBQWY7QUFDQWxCLFFBQVEsQ0FBQ3lCLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DQyxPQUFwQyxDQUE0QyxVQUFDQyxLQUFELEVBQVc7QUFDdERMLFVBQVEsQ0FBQ00sT0FBVCxDQUFpQkQsS0FBakI7QUFDQSxDQUZEOztBQUlBLFNBQVNILE1BQVQsQ0FBZ0JLLFFBQWhCLEVBQTBCO0FBQ3pCQSxVQUFRLENBQUNILE9BQVQsQ0FBaUIsVUFBQ0ksT0FBRCxFQUFhO0FBQzdCLFFBQUlBLE9BQU8sQ0FBQ0MsY0FBWixFQUE0QjtBQUMzQkQsYUFBTyxDQUFDRSxNQUFSLENBQWVDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFFBQTdCO0FBQ0EsS0FGRCxNQUVPO0FBQ05KLGFBQU8sQ0FBQ0UsTUFBUixDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQztBQUNBO0FBQ0QsR0FORDtBQU9BIiwiZmlsZSI6Ii4vc291cmNlL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcIi4vY3NzL2FwcC5zY3NzXCI7XHJcblxyXG5jb25zdCBnZXRTdGFydGVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRTdGFydGVkQnRuXCIpO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXJcclxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblx0XHQvL3JlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXHJcblx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG5cdFx0XHQucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIilcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRjb25zdCBlcnJvciA9IHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMud2VhdGhlcjtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7fVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0KCk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG5cdHJvb3Q6IG51bGwsXHJcblx0cm9vdE1hcmdpbjogXCIwcHggMHB4IC0yMDBweCAwcHhcIixcclxuXHR0aHJlc2hvbGQ6IDAuMDUsXHJcbn07XHJcblxyXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZmFkZUluLCBvcHRpb25zKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb3JlbVwiKS5mb3JFYWNoKChsb3JlbSkgPT4ge1xyXG5cdG9ic2VydmVyLm9ic2VydmUobG9yZW0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGZhZGVJbihlbGVtZW50cykge1xyXG5cdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmIChlbGVtZW50LmlzSW50ZXJzZWN0aW5nKSB7XHJcblx0XHRcdGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/app.js\n");

/***/ }),

/***/ "./source/css/app.scss":
/*!*****************************!*\
  !*** ./source/css/app.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jc3MvYXBwLnNjc3M/M2E5YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zb3VyY2UvY3NzL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/css/app.scss\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/app.js");
/******/ 	
/******/ })()
;