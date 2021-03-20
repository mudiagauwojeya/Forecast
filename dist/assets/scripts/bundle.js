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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // service worker\n\nif (\"serviceWorker\" in navigator) {\n  window.addEventListener(\"load\", function () {\n    //register service worker\n    navigator.serviceWorker.register(\"/service-worker.js\").then(function () {\n      return;\n    }).catch(function (err) {\n      var error = {\n        message: err.message\n      };\n      console.log(error);\n    });\n  });\n}\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.getStartedBtn = document.getElementById(\"getStartedBtn\");\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      var options = {\n        root: null,\n        rootMargin: \"0px 0px -200px 0px\",\n        threshold: 0.05\n      };\n      var observer = new IntersectionObserver(fadeIn, options);\n      document.querySelectorAll(\".lorem\").forEach(function (lorem) {\n        observer.observe(lorem);\n      });\n\n      function fadeIn(elements) {\n        elements.forEach(function (element) {\n          if (element.isIntersecting) {\n            element.target.classList.add(\"active\");\n          } else {\n            element.target.classList.remove(\"active\");\n          }\n        });\n      }\n\n      this.getStartedBtn.addEventListener(\"click\", function (e) {\n        console.log(e);\n      });\n    }\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIkFwcCIsImdldFN0YXJ0ZWRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImZhZGVJbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibG9yZW0iLCJvYnNlcnZlIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlIiwiYXBwIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FFQTs7QUFDQSxJQUFJLG1CQUFtQkEsU0FBdkIsRUFBa0M7QUFDakNDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUNyQztBQUNBRixhQUFTLENBQUNHLGFBQVYsQ0FDRUMsUUFERixDQUNXLG9CQURYLEVBRUVDLElBRkYsQ0FFTyxZQUFNO0FBQ1g7QUFDQSxLQUpGLEVBS0VDLEtBTEYsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDZixVQUFNQyxLQUFLLEdBQUc7QUFBRUMsZUFBTyxFQUFFRixHQUFHLENBQUNFO0FBQWYsT0FBZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLEtBUkY7QUFTQSxHQVhEO0FBWUE7O0lBRUtJLEc7QUFDTCxpQkFBYztBQUFBOztBQUNiLFNBQUtDLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBOzs7O1dBRUQsZ0JBQU87QUFDTixVQUFNQyxPQUFPLEdBQUc7QUFDZkMsWUFBSSxFQUFFLElBRFM7QUFFZkMsa0JBQVUsRUFBRSxvQkFGRztBQUdmQyxpQkFBUyxFQUFFO0FBSEksT0FBaEI7QUFNQSxVQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUJDLE1BQXpCLEVBQWlDTixPQUFqQyxDQUFmO0FBQ0FGLGNBQVEsQ0FBQ1MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDLFVBQUNDLEtBQUQsRUFBVztBQUN0REwsZ0JBQVEsQ0FBQ00sT0FBVCxDQUFpQkQsS0FBakI7QUFDQSxPQUZEOztBQUlBLGVBQVNILE1BQVQsQ0FBZ0JLLFFBQWhCLEVBQTBCO0FBQ3pCQSxnQkFBUSxDQUFDSCxPQUFULENBQWlCLFVBQUNJLE9BQUQsRUFBYTtBQUM3QixjQUFJQSxPQUFPLENBQUNDLGNBQVosRUFBNEI7QUFDM0JELG1CQUFPLENBQUNFLE1BQVIsQ0FBZUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7QUFDQSxXQUZELE1BRU87QUFDTkosbUJBQU8sQ0FBQ0UsTUFBUixDQUFlQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQztBQUNBO0FBQ0QsU0FORDtBQU9BOztBQUNELFdBQUtwQixhQUFMLENBQW1CWCxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkMsVUFBQ2dDLENBQUQsRUFBTztBQUNuRHhCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZdUIsQ0FBWjtBQUNBLE9BRkQ7QUFHQTs7Ozs7O0FBR0YsSUFBTUMsR0FBRyxHQUFHLElBQUl2QixHQUFKLEVBQVo7QUFDQXVCLEdBQUcsQ0FBQ0MsSUFBSiIsImZpbGUiOiIuL3NvdXJjZS9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL2Nzcy9hcHAuc2Nzc1wiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXJcclxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblx0XHQvL3JlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXHJcblx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG5cdFx0XHQucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIilcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRjb25zdCBlcnJvciA9IHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5jbGFzcyBBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5nZXRTdGFydGVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRTdGFydGVkQnRuXCIpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHJvb3Q6IG51bGwsXHJcblx0XHRcdHJvb3RNYXJnaW46IFwiMHB4IDBweCAtMjAwcHggMHB4XCIsXHJcblx0XHRcdHRocmVzaG9sZDogMC4wNSxcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZhZGVJbiwgb3B0aW9ucyk7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvcmVtXCIpLmZvckVhY2goKGxvcmVtKSA9PiB7XHJcblx0XHRcdG9ic2VydmVyLm9ic2VydmUobG9yZW0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZmFkZUluKGVsZW1lbnRzKSB7XHJcblx0XHRcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRpZiAoZWxlbWVudC5pc0ludGVyc2VjdGluZykge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5nZXRTdGFydGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/app.js\n");

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