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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // service worker\n\nif (\"serviceWorker\" in navigator) {\n  window.addEventListener(\"load\", function () {\n    //register service worker\n    navigator.serviceWorker.register(\"/service-worker.js\", {\n      scope: \"/\"\n    }).then(function () {\n      return;\n    }).catch(function (err) {\n      var error = {\n        message: err.message\n      };\n      console.log(err);\n    });\n  });\n}\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.weather;\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {}\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();\nvar options = {\n  root: null,\n  rootMargin: \"0px 0px -200px 0px\",\n  threshold: 0.05\n};\nvar observer = new IntersectionObserver(fadeIn, options);\ndocument.querySelectorAll(\".lorem\").forEach(function (lorem) {\n  observer.observe(lorem);\n});\n\nfunction fadeIn(elements) {\n  elements.forEach(function (element) {\n    if (element.isIntersecting) {\n      element.target.classList.add(\"active\");\n    } else {\n      element.target.classList.remove(\"active\");\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwic2NvcGUiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwid2VhdGhlciIsImFwcCIsImluaXQiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZmFkZUluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxvcmVtIiwib2JzZXJ2ZSIsImVsZW1lbnRzIiwiZWxlbWVudCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBOztBQUNBLElBQUksbUJBQW1CQSxTQUF2QixFQUFrQztBQUNqQ0MsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3JDO0FBQ0FGLGFBQVMsQ0FBQ0csYUFBVixDQUNFQyxRQURGLENBQ1csb0JBRFgsRUFDaUM7QUFDL0JDLFdBQUssRUFBRTtBQUR3QixLQURqQyxFQUlFQyxJQUpGLENBSU8sWUFBTTtBQUNYO0FBQ0EsS0FORixFQU9FQyxLQVBGLENBT1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2YsVUFBTUMsS0FBSyxHQUFHO0FBQUVDLGVBQU8sRUFBRUYsR0FBRyxDQUFDRTtBQUFmLE9BQWQ7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlKLEdBQVo7QUFDQSxLQVZGO0FBV0EsR0FiRDtBQWNBOztJQUVLSyxHO0FBQ0wsaUJBQWM7QUFBQTs7QUFDYixTQUFLQyxPQUFMO0FBQ0E7Ozs7V0FFRCxnQkFBTyxDQUFFOzs7Ozs7QUFHVixJQUFNQyxHQUFHLEdBQUcsSUFBSUYsR0FBSixFQUFaO0FBQ0FFLEdBQUcsQ0FBQ0MsSUFBSjtBQUVBLElBQU1DLE9BQU8sR0FBRztBQUNmQyxNQUFJLEVBQUUsSUFEUztBQUVmQyxZQUFVLEVBQUUsb0JBRkc7QUFHZkMsV0FBUyxFQUFFO0FBSEksQ0FBaEI7QUFNQSxJQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUJDLE1BQXpCLEVBQWlDTixPQUFqQyxDQUFmO0FBQ0FPLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDLFVBQUNDLEtBQUQsRUFBVztBQUN0RE4sVUFBUSxDQUFDTyxPQUFULENBQWlCRCxLQUFqQjtBQUNBLENBRkQ7O0FBSUEsU0FBU0osTUFBVCxDQUFnQk0sUUFBaEIsRUFBMEI7QUFDekJBLFVBQVEsQ0FBQ0gsT0FBVCxDQUFpQixVQUFDSSxPQUFELEVBQWE7QUFDN0IsUUFBSUEsT0FBTyxDQUFDQyxjQUFaLEVBQTRCO0FBQzNCRCxhQUFPLENBQUNFLE1BQVIsQ0FBZUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7QUFDQSxLQUZELE1BRU87QUFDTkosYUFBTyxDQUFDRSxNQUFSLENBQWVDLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0E7QUFDRCxHQU5EO0FBT0EiLCJmaWxlIjoiLi9zb3VyY2UvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi9jc3MvYXBwLnNjc3NcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyXHJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cdFx0Ly9yZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxyXG5cdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuXHRcdFx0LnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIsIHtcclxuXHRcdFx0XHRzY29wZTogXCIvXCIsXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXJyb3IgPSB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH07XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmNsYXNzIEFwcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLndlYXRoZXI7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge31cclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdCgpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuXHRyb290OiBudWxsLFxyXG5cdHJvb3RNYXJnaW46IFwiMHB4IDBweCAtMjAwcHggMHB4XCIsXHJcblx0dGhyZXNob2xkOiAwLjA1LFxyXG59O1xyXG5cclxubGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZhZGVJbiwgb3B0aW9ucyk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9yZW1cIikuZm9yRWFjaCgobG9yZW0pID0+IHtcclxuXHRvYnNlcnZlci5vYnNlcnZlKGxvcmVtKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBmYWRlSW4oZWxlbWVudHMpIHtcclxuXHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRpZiAoZWxlbWVudC5pc0ludGVyc2VjdGluZykge1xyXG5cdFx0XHRlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/app.js\n");

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