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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nwindow.addEventListener(\"load\", function () {\n  var App = /*#__PURE__*/function () {\n    function App() {\n      _classCallCheck(this, App);\n\n      var getStartedBtn = document.getElementById(\"getStartedBtn\");\n    }\n\n    _createClass(App, [{\n      key: \"init\",\n      value: function init() {\n        // service worker\n        if (\"serviceWorker\" in navigator) {\n          window.addEventListener(\"load\", function () {\n            //register service worker\n            navigator.serviceWorker.register(\"/service-worker.js\").then(function () {\n              return;\n            }).catch(function (err) {\n              var error = {\n                message: err.message\n              };\n              console.log(error);\n            });\n          });\n        }\n\n        var options = {\n          root: null,\n          rootMargin: \"0px 0px -200px 0px\",\n          threshold: 0.05\n        };\n        var observer = new IntersectionObserver(fadeIn, options);\n        document.querySelectorAll(\".lorem\").forEach(function (lorem) {\n          observer.observe(lorem);\n        });\n\n        function fadeIn(elements) {\n          elements.forEach(function (element) {\n            if (element.isIntersecting) {\n              element.target.classList.add(\"active\");\n            } else {\n              element.target.classList.remove(\"active\");\n            }\n          });\n        }\n      }\n    }]);\n\n    return App;\n  }();\n\n  var app = new App();\n  app.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiQXBwIiwiZ2V0U3RhcnRlZEJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImZhZGVJbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibG9yZW0iLCJvYnNlcnZlIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUFBLE1BQy9CQyxHQUQrQjtBQUVwQyxtQkFBYztBQUFBOztBQUNiLFVBQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXRCO0FBQ0E7O0FBSm1DO0FBQUE7QUFBQSxhQU1wQyxnQkFBTztBQUNOO0FBQ0EsWUFBSSxtQkFBbUJDLFNBQXZCLEVBQWtDO0FBQ2pDTixnQkFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3JDO0FBQ0FLLHFCQUFTLENBQUNDLGFBQVYsQ0FDRUMsUUFERixDQUNXLG9CQURYLEVBRUVDLElBRkYsQ0FFTyxZQUFNO0FBQ1g7QUFDQSxhQUpGLEVBS0VDLEtBTEYsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDZixrQkFBTUMsS0FBSyxHQUFHO0FBQUVDLHVCQUFPLEVBQUVGLEdBQUcsQ0FBQ0U7QUFBZixlQUFkO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLGFBUkY7QUFTQSxXQVhEO0FBWUE7O0FBRUQsWUFBTUksT0FBTyxHQUFHO0FBQ2ZDLGNBQUksRUFBRSxJQURTO0FBRWZDLG9CQUFVLEVBQUUsb0JBRkc7QUFHZkMsbUJBQVMsRUFBRTtBQUhJLFNBQWhCO0FBTUEsWUFBSUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCQyxNQUF6QixFQUFpQ04sT0FBakMsQ0FBZjtBQUNBWixnQkFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDLFVBQUNDLEtBQUQsRUFBVztBQUN0REwsa0JBQVEsQ0FBQ00sT0FBVCxDQUFpQkQsS0FBakI7QUFDQSxTQUZEOztBQUlBLGlCQUFTSCxNQUFULENBQWdCSyxRQUFoQixFQUEwQjtBQUN6QkEsa0JBQVEsQ0FBQ0gsT0FBVCxDQUFpQixVQUFDSSxPQUFELEVBQWE7QUFDN0IsZ0JBQUlBLE9BQU8sQ0FBQ0MsY0FBWixFQUE0QjtBQUMzQkQscUJBQU8sQ0FBQ0UsTUFBUixDQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QjtBQUNBLGFBRkQsTUFFTztBQUNOSixxQkFBTyxDQUFDRSxNQUFSLENBQWVDLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0E7QUFDRCxXQU5EO0FBT0E7QUFDRDtBQTNDbUM7O0FBQUE7QUFBQTs7QUE4Q3JDLE1BQU1DLEdBQUcsR0FBRyxJQUFJaEMsR0FBSixFQUFaO0FBQ0FnQyxLQUFHLENBQUNDLElBQUo7QUFDQSxDQWhERCIsImZpbGUiOiIuL3NvdXJjZS9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL2Nzcy9hcHAuc2Nzc1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjbGFzcyBBcHAge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdGNvbnN0IGdldFN0YXJ0ZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldFN0YXJ0ZWRCdG5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5pdCgpIHtcclxuXHRcdFx0Ly8gc2VydmljZSB3b3JrZXJcclxuXHRcdFx0aWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblx0XHRcdFx0XHQvL3JlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXHJcblx0XHRcdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG5cdFx0XHRcdFx0XHQucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIilcclxuXHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvciA9IHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRcdHJvb3Q6IG51bGwsXHJcblx0XHRcdFx0cm9vdE1hcmdpbjogXCIwcHggMHB4IC0yMDBweCAwcHhcIixcclxuXHRcdFx0XHR0aHJlc2hvbGQ6IDAuMDUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZmFkZUluLCBvcHRpb25zKTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb3JlbVwiKS5mb3JFYWNoKChsb3JlbSkgPT4ge1xyXG5cdFx0XHRcdG9ic2VydmVyLm9ic2VydmUobG9yZW0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50cykge1xyXG5cdFx0XHRcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChlbGVtZW50LmlzSW50ZXJzZWN0aW5nKSB7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblx0YXBwLmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/app.js\n");

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