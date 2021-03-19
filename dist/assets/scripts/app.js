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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // service worker\n// if (\"serviceWorker\" in navigator) {\n// \twindow.addEventListener(\"load\", () => {\n// \t\t//register service worker\n// \t\tnavigator.serviceWorker\n// \t\t\t.register(\"/service-worker.js\", {\n// \t\t\t\tscope: \"/\",\n// \t\t\t})\n// \t\t\t.then(() => {\n// \t\t\t\treturn;\n// \t\t\t})\n// \t\t\t.catch((err) => {\n// \t\t\t\tconst error = { message: err.message };\n// \t\t\t\tconsole.log(err);\n// \t\t\t});\n// \t});\n// }\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.weather;\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {}\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();\nvar options = {\n  root: null,\n  rootMargin: \"0px 0px -200px 0px\",\n  threshold: 0.05\n};\nvar observer = new IntersectionObserver(fadeIn, options);\ndocument.querySelectorAll(\".lorem\").forEach(function (lorem) {\n  observer.observe(lorem);\n});\n\nfunction fadeIn(elements) {\n  elements.forEach(function (element) {\n    if (element.isIntersecting) {\n      element.target.classList.add(\"active\");\n    } else {\n      element.target.classList.remove(\"active\");\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJBcHAiLCJ3ZWF0aGVyIiwiYXBwIiwiaW5pdCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJmYWRlSW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibG9yZW0iLCJvYnNlcnZlIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRztBQUNMLGlCQUFjO0FBQUE7O0FBQ2IsU0FBS0MsT0FBTDtBQUNBOzs7O1dBRUQsZ0JBQU8sQ0FBRTs7Ozs7O0FBR1YsSUFBTUMsR0FBRyxHQUFHLElBQUlGLEdBQUosRUFBWjtBQUNBRSxHQUFHLENBQUNDLElBQUo7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZkMsTUFBSSxFQUFFLElBRFM7QUFFZkMsWUFBVSxFQUFFLG9CQUZHO0FBR2ZDLFdBQVMsRUFBRTtBQUhJLENBQWhCO0FBTUEsSUFBSUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCQyxNQUF6QixFQUFpQ04sT0FBakMsQ0FBZjtBQUNBTyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DQyxPQUFwQyxDQUE0QyxVQUFDQyxLQUFELEVBQVc7QUFDdEROLFVBQVEsQ0FBQ08sT0FBVCxDQUFpQkQsS0FBakI7QUFDQSxDQUZEOztBQUlBLFNBQVNKLE1BQVQsQ0FBZ0JNLFFBQWhCLEVBQTBCO0FBQ3pCQSxVQUFRLENBQUNILE9BQVQsQ0FBaUIsVUFBQ0ksT0FBRCxFQUFhO0FBQzdCLFFBQUlBLE9BQU8sQ0FBQ0MsY0FBWixFQUE0QjtBQUMzQkQsYUFBTyxDQUFDRSxNQUFSLENBQWVDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFFBQTdCO0FBQ0EsS0FGRCxNQUVPO0FBQ05KLGFBQU8sQ0FBQ0UsTUFBUixDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQztBQUNBO0FBQ0QsR0FORDtBQU9BIiwiZmlsZSI6Ii4vc291cmNlL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcIi4vY3NzL2FwcC5zY3NzXCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlclxyXG4vLyBpZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcbi8vIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuLy8gXHRcdC8vcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcclxuLy8gXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcbi8vIFx0XHRcdC5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiLCB7XHJcbi8vIFx0XHRcdFx0c2NvcGU6IFwiL1wiLFxyXG4vLyBcdFx0XHR9KVxyXG4vLyBcdFx0XHQudGhlbigoKSA9PiB7XHJcbi8vIFx0XHRcdFx0cmV0dXJuO1xyXG4vLyBcdFx0XHR9KVxyXG4vLyBcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG4vLyBcdFx0XHRcdGNvbnN0IGVycm9yID0geyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9O1xyXG4vLyBcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0XHRcdH0pO1xyXG4vLyBcdH0pO1xyXG4vLyB9XHJcblxyXG5jbGFzcyBBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy53ZWF0aGVyO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHt9XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLmluaXQoKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcblx0cm9vdDogbnVsbCxcclxuXHRyb290TWFyZ2luOiBcIjBweCAwcHggLTIwMHB4IDBweFwiLFxyXG5cdHRocmVzaG9sZDogMC4wNSxcclxufTtcclxuXHJcbmxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmYWRlSW4sIG9wdGlvbnMpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvcmVtXCIpLmZvckVhY2goKGxvcmVtKSA9PiB7XHJcblx0b2JzZXJ2ZXIub2JzZXJ2ZShsb3JlbSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZmFkZUluKGVsZW1lbnRzKSB7XHJcblx0ZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKGVsZW1lbnQuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHRcdFx0ZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/app.js\n");

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