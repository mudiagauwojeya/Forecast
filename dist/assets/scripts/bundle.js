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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\n/* harmony import */ var _components_finder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/finder */ \"./source/components/finder.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // service worker\n\nif (\"serviceWorker\" in navigator) {\n  window.addEventListener(\"load\", function () {\n    //register service worker\n    navigator.serviceWorker.register(\"/service-worker.js\").then(function () {\n      return;\n    }).catch(function (err) {\n      var error = {\n        message: err.message\n      };\n      console.log(error);\n    });\n  });\n}\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.getStartedBtn = document.getElementById(\"getStartedBtn\");\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      var options = {\n        root: null,\n        rootMargin: \"0px 0px -200px 0px\",\n        threshold: 0.05\n      };\n      var observer = new IntersectionObserver(fadeIn, options);\n      document.querySelectorAll(\".lorem\").forEach(function (lorem) {\n        observer.observe(lorem);\n      });\n\n      function fadeIn(elements) {\n        elements.forEach(function (element) {\n          if (element.isIntersecting) {\n            element.target.classList.add(\"active\");\n          } else {\n            element.target.classList.remove(\"active\");\n          }\n        });\n      }\n    }\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIkFwcCIsImdldFN0YXJ0ZWRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImZhZGVJbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibG9yZW0iLCJvYnNlcnZlIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQUksbUJBQW1CQSxTQUF2QixFQUFrQztBQUNqQ0MsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3JDO0FBQ0FGLGFBQVMsQ0FBQ0csYUFBVixDQUNFQyxRQURGLENBQ1csb0JBRFgsRUFFRUMsSUFGRixDQUVPLFlBQU07QUFDWDtBQUNBLEtBSkYsRUFLRUMsS0FMRixDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNmLFVBQU1DLEtBQUssR0FBRztBQUFFQyxlQUFPLEVBQUVGLEdBQUcsQ0FBQ0U7QUFBZixPQUFkO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0EsS0FSRjtBQVNBLEdBWEQ7QUFZQTs7SUFFS0ksRztBQUNMLGlCQUFjO0FBQUE7O0FBQ2IsU0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXJCO0FBQ0E7Ozs7V0FFRCxnQkFBTztBQUNOLFVBQU1DLE9BQU8sR0FBRztBQUNmQyxZQUFJLEVBQUUsSUFEUztBQUVmQyxrQkFBVSxFQUFFLG9CQUZHO0FBR2ZDLGlCQUFTLEVBQUU7QUFISSxPQUFoQjtBQU1BLFVBQUlDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QkMsTUFBekIsRUFBaUNOLE9BQWpDLENBQWY7QUFDQUYsY0FBUSxDQUFDUyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0MsT0FBcEMsQ0FBNEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3RETCxnQkFBUSxDQUFDTSxPQUFULENBQWlCRCxLQUFqQjtBQUNBLE9BRkQ7O0FBSUEsZUFBU0gsTUFBVCxDQUFnQkssUUFBaEIsRUFBMEI7QUFDekJBLGdCQUFRLENBQUNILE9BQVQsQ0FBaUIsVUFBQ0ksT0FBRCxFQUFhO0FBQzdCLGNBQUlBLE9BQU8sQ0FBQ0MsY0FBWixFQUE0QjtBQUMzQkQsbUJBQU8sQ0FBQ0UsTUFBUixDQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QjtBQUNBLFdBRkQsTUFFTztBQUNOSixtQkFBTyxDQUFDRSxNQUFSLENBQWVDLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0E7QUFDRCxTQU5EO0FBT0E7QUFDRDs7Ozs7O0FBR0YsSUFBTUMsR0FBRyxHQUFHLElBQUl0QixHQUFKLEVBQVo7QUFDQXNCLEdBQUcsQ0FBQ0MsSUFBSiIsImZpbGUiOiIuL3NvdXJjZS9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL2Nzcy9hcHAuc2Nzc1wiO1xyXG5pbXBvcnQgRmluZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZmluZGVyXCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlclxyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRcdC8vcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcclxuXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcblx0XHRcdC5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGVycm9yID0geyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9O1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmNsYXNzIEFwcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmdldFN0YXJ0ZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldFN0YXJ0ZWRCdG5cIik7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0cm9vdDogbnVsbCxcclxuXHRcdFx0cm9vdE1hcmdpbjogXCIwcHggMHB4IC0yMDBweCAwcHhcIixcclxuXHRcdFx0dGhyZXNob2xkOiAwLjA1LFxyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZmFkZUluLCBvcHRpb25zKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9yZW1cIikuZm9yRWFjaCgobG9yZW0pID0+IHtcclxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShsb3JlbSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBmYWRlSW4oZWxlbWVudHMpIHtcclxuXHRcdFx0ZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdGlmIChlbGVtZW50LmlzSW50ZXJzZWN0aW5nKSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/app.js\n");

/***/ }),

/***/ "./source/components/finder.js":
/*!*************************************!*\
  !*** ./source/components/finder.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Finder = /*#__PURE__*/function () {\n  function Finder() {\n    _classCallCheck(this, Finder);\n\n    this.this.lng = coordinates.lng;\n    this.lat = coordinates.lat;\n  }\n\n  _createClass(Finder, [{\n    key: \"getLocation\",\n    value: function getLocation() {\n      if (navigator.geolocation.getCurrentPosition) {\n        navigator.geolocation.getCurrentPosition(function (coordinates) {\n          var coords = {\n            lng: coordinates.longitude,\n            lat: coordinates.latitude\n          };\n          console.log(coords);\n        });\n      }\n    }\n  }]);\n\n  return Finder;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Finder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jb21wb25lbnRzL2ZpbmRlci5qcz8zZGJlIl0sIm5hbWVzIjpbIkZpbmRlciIsInRoaXMiLCJsbmciLCJjb29yZGluYXRlcyIsImxhdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BLE07QUFDTCxvQkFBYztBQUFBOztBQUNiLFNBQUtDLElBQUwsQ0FBVUMsR0FBVixHQUFnQkMsV0FBVyxDQUFDRCxHQUE1QjtBQUNBLFNBQUtFLEdBQUwsR0FBV0QsV0FBVyxDQUFDQyxHQUF2QjtBQUNBOzs7O1dBRUQsdUJBQWM7QUFDYixVQUFJQyxTQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUExQixFQUE4QztBQUM3Q0YsaUJBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLFVBQUNKLFdBQUQsRUFBaUI7QUFDekQsY0FBTUssTUFBTSxHQUFHO0FBQ2ROLGVBQUcsRUFBRUMsV0FBVyxDQUFDTSxTQURIO0FBRWRMLGVBQUcsRUFBRUQsV0FBVyxDQUFDTztBQUZILFdBQWY7QUFJQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0EsU0FORDtBQU9BO0FBQ0Q7Ozs7OztBQUdGLCtEQUFlUixNQUFmIiwiZmlsZSI6Ii4vc291cmNlL2NvbXBvbmVudHMvZmluZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmluZGVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMudGhpcy5sbmcgPSBjb29yZGluYXRlcy5sbmc7XHJcblx0XHR0aGlzLmxhdCA9IGNvb3JkaW5hdGVzLmxhdDtcclxuXHR9XHJcblxyXG5cdGdldExvY2F0aW9uKCkge1xyXG5cdFx0aWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24pIHtcclxuXHRcdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoY29vcmRpbmF0ZXMpID0+IHtcclxuXHRcdFx0XHRjb25zdCBjb29yZHMgPSB7XHJcblx0XHRcdFx0XHRsbmc6IGNvb3JkaW5hdGVzLmxvbmdpdHVkZSxcclxuXHRcdFx0XHRcdGxhdDogY29vcmRpbmF0ZXMubGF0aXR1ZGUsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhjb29yZHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbmRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/components/finder.js\n");

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