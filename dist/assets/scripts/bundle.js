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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // service worker\n// if (\"serviceWorker\" in navigator) {\n// \twindow.addEventListener(\"load\", () => {\n// \t\t//register service worker\n// \t\tnavigator.serviceWorker\n// \t\t\t.register(\"/service-worker.js\")\n// \t\t\t.then(() => {\n// \t\t\t\treturn;\n// \t\t\t})\n// \t\t\t.catch((err) => {\n// \t\t\t\tconst error = { message: err.message };\n// \t\t\t\tconsole.log(error);\n// \t\t\t});\n// \t});\n// }\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.getStartedBtn = document.getElementById(\"getStartedBtn\");\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      var options = {\n        root: null,\n        rootMargin: \"0px 0px -200px 0px\",\n        threshold: 0.05\n      };\n      var observer = new IntersectionObserver(fadeIn, options);\n      document.querySelectorAll(\".lorem\").forEach(function (lorem) {\n        observer.observe(lorem);\n      });\n\n      function fadeIn(elements) {\n        elements.forEach(function (element) {\n          if (element.isIntersecting) {\n            element.target.classList.add(\"active\");\n          } else {\n            element.target.classList.remove(\"active\");\n          }\n        });\n      }\n\n      this.getStartedBtn.addEventListener(\"click\", function (e) {\n        console.log(e);\n      });\n    }\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJBcHAiLCJnZXRTdGFydGVkQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJmYWRlSW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxvcmVtIiwib2JzZXJ2ZSIsImVsZW1lbnRzIiwiZWxlbWVudCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiYXBwIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEc7QUFDTCxpQkFBYztBQUFBOztBQUNiLFNBQUtDLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBOzs7O1dBRUQsZ0JBQU87QUFDTixVQUFNQyxPQUFPLEdBQUc7QUFDZkMsWUFBSSxFQUFFLElBRFM7QUFFZkMsa0JBQVUsRUFBRSxvQkFGRztBQUdmQyxpQkFBUyxFQUFFO0FBSEksT0FBaEI7QUFNQSxVQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUJDLE1BQXpCLEVBQWlDTixPQUFqQyxDQUFmO0FBQ0FGLGNBQVEsQ0FBQ1MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDLFVBQUNDLEtBQUQsRUFBVztBQUN0REwsZ0JBQVEsQ0FBQ00sT0FBVCxDQUFpQkQsS0FBakI7QUFDQSxPQUZEOztBQUlBLGVBQVNILE1BQVQsQ0FBZ0JLLFFBQWhCLEVBQTBCO0FBQ3pCQSxnQkFBUSxDQUFDSCxPQUFULENBQWlCLFVBQUNJLE9BQUQsRUFBYTtBQUM3QixjQUFJQSxPQUFPLENBQUNDLGNBQVosRUFBNEI7QUFDM0JELG1CQUFPLENBQUNFLE1BQVIsQ0FBZUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7QUFDQSxXQUZELE1BRU87QUFDTkosbUJBQU8sQ0FBQ0UsTUFBUixDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQztBQUNBO0FBQ0QsU0FORDtBQU9BOztBQUNELFdBQUtwQixhQUFMLENBQW1CcUIsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDLFVBQUNDLENBQUQsRUFBTztBQUNuREMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQSxPQUZEO0FBR0E7Ozs7OztBQUdGLElBQU1HLEdBQUcsR0FBRyxJQUFJMUIsR0FBSixFQUFaO0FBQ0EwQixHQUFHLENBQUNDLElBQUoiLCJmaWxlIjoiLi9zb3VyY2UvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi9jc3MvYXBwLnNjc3NcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyXHJcbi8vIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuLy8gXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4vLyBcdFx0Ly9yZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxyXG4vLyBcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuLy8gXHRcdFx0LnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpXHJcbi8vIFx0XHRcdC50aGVuKCgpID0+IHtcclxuLy8gXHRcdFx0XHRyZXR1cm47XHJcbi8vIFx0XHRcdH0pXHJcbi8vIFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vIFx0XHRcdFx0Y29uc3QgZXJyb3IgPSB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH07XHJcbi8vIFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyBcdFx0XHR9KTtcclxuLy8gXHR9KTtcclxuLy8gfVxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZ2V0U3RhcnRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0U3RhcnRlZEJ0blwiKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRyb290OiBudWxsLFxyXG5cdFx0XHRyb290TWFyZ2luOiBcIjBweCAwcHggLTIwMHB4IDBweFwiLFxyXG5cdFx0XHR0aHJlc2hvbGQ6IDAuMDUsXHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmYWRlSW4sIG9wdGlvbnMpO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb3JlbVwiKS5mb3JFYWNoKChsb3JlbSkgPT4ge1xyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGxvcmVtKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50cykge1xyXG5cdFx0XHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZ2V0U3RhcnRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLmluaXQoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/app.js\n");

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