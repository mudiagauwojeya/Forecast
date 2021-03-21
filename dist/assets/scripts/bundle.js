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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.scss */ \"./source/css/app.scss\");\n/* harmony import */ var _components_finder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/finder */ \"./source/components/finder.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nwindow.addEventListener(\"load\", function () {\n  console.log(\"loaded\"); // service worker\n\n  if (\"serviceWorker\" in navigator) {\n    window.addEventListener(\"load\", function () {\n      //register service worker\n      navigator.serviceWorker.register(\"/service-worker.js\").then(function () {\n        return;\n      }).catch(function (err) {\n        var error = {\n          message: err.message\n        };\n        console.log(error);\n      });\n    });\n  }\n});\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      var geolocationBtn = document.getElementById(\"geolocation-btn\");\n      var options = {\n        root: null,\n        rootMargin: \"0px 0px -200px 0px\",\n        threshold: 0.05\n      };\n      var observer = new IntersectionObserver(fadeIn, options);\n      document.querySelectorAll(\".lorem\").forEach(function (lorem) {\n        observer.observe(lorem);\n      });\n\n      function fadeIn(elements) {\n        elements.forEach(function (element) {\n          if (element.isIntersecting) {\n            element.target.classList.add(\"active\");\n          } else {\n            element.target.classList.remove(\"active\");\n          }\n        });\n      }\n\n      geolocationBtn.addEventListener(\"click\", this.getUserCoordinates.bind(this));\n    }\n  }, {\n    key: \"getUserCoordinates\",\n    value: function getUserCoordinates() {\n      if (navigator.geolocation) {\n        navigator.geolocation.getCurrentPosition(function (success) {\n          var coordinates = {\n            lng: success.coords.longitude,\n            lat: success.coords.latitude\n          };\n          var finder = new _components_finder__WEBPACK_IMPORTED_MODULE_1__.default();\n          finder.getUserLocation(coordinates);\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    }\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9hcHAuanM/MGJlZSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJjYXRjaCIsImVyciIsImVycm9yIiwibWVzc2FnZSIsIkFwcCIsImdlb2xvY2F0aW9uQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJmYWRlSW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxvcmVtIiwib2JzZXJ2ZSIsImVsZW1lbnRzIiwiZWxlbWVudCIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0VXNlckNvb3JkaW5hdGVzIiwiYmluZCIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2VzcyIsImNvb3JkaW5hdGVzIiwibG5nIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwibGF0IiwibGF0aXR1ZGUiLCJmaW5kZXIiLCJGaW5kZXIiLCJnZXRVc2VyTG9jYXRpb24iLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUNyQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQURxQyxDQUVyQzs7QUFDQSxNQUFJLG1CQUFtQkMsU0FBdkIsRUFBa0M7QUFDakNKLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUNyQztBQUNBRyxlQUFTLENBQUNDLGFBQVYsQ0FDRUMsUUFERixDQUNXLG9CQURYLEVBRUVDLElBRkYsQ0FFTyxZQUFNO0FBQ1g7QUFDQSxPQUpGLEVBS0VDLEtBTEYsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDZixZQUFNQyxLQUFLLEdBQUc7QUFBRUMsaUJBQU8sRUFBRUYsR0FBRyxDQUFDRTtBQUFmLFNBQWQ7QUFDQVQsZUFBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDQSxPQVJGO0FBU0EsS0FYRDtBQVlBO0FBQ0QsQ0FqQkQ7O0lBbUJNRSxHO0FBQ0wsaUJBQWM7QUFBQTtBQUFFOzs7O1dBRWhCLGdCQUFPO0FBQ04sVUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXZCO0FBRUEsVUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLFlBQUksRUFBRSxJQURTO0FBRWZDLGtCQUFVLEVBQUUsb0JBRkc7QUFHZkMsaUJBQVMsRUFBRTtBQUhJLE9BQWhCO0FBTUEsVUFBSUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCQyxNQUF6QixFQUFpQ04sT0FBakMsQ0FBZjtBQUNBRixjQUFRLENBQUNTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DQyxPQUFwQyxDQUE0QyxVQUFDQyxLQUFELEVBQVc7QUFDdERMLGdCQUFRLENBQUNNLE9BQVQsQ0FBaUJELEtBQWpCO0FBQ0EsT0FGRDs7QUFJQSxlQUFTSCxNQUFULENBQWdCSyxRQUFoQixFQUEwQjtBQUN6QkEsZ0JBQVEsQ0FBQ0gsT0FBVCxDQUFpQixVQUFDSSxPQUFELEVBQWE7QUFDN0IsY0FBSUEsT0FBTyxDQUFDQyxjQUFaLEVBQTRCO0FBQzNCRCxtQkFBTyxDQUFDRSxNQUFSLENBQWVDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFFBQTdCO0FBQ0EsV0FGRCxNQUVPO0FBQ05KLG1CQUFPLENBQUNFLE1BQVIsQ0FBZUMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsUUFBaEM7QUFDQTtBQUNELFNBTkQ7QUFPQTs7QUFFRHBCLG9CQUFjLENBQUNaLGdCQUFmLENBQ0MsT0FERCxFQUVDLEtBQUtpQyxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FGRDtBQUlBOzs7V0FFRCw4QkFBcUI7QUFDcEIsVUFBSS9CLFNBQVMsQ0FBQ2dDLFdBQWQsRUFBMkI7QUFDMUJoQyxpQkFBUyxDQUFDZ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQ0MsVUFBQ0MsT0FBRCxFQUFhO0FBQ1osY0FBTUMsV0FBVyxHQUFHO0FBQ25CQyxlQUFHLEVBQUVGLE9BQU8sQ0FBQ0csTUFBUixDQUFlQyxTQUREO0FBRW5CQyxlQUFHLEVBQUVMLE9BQU8sQ0FBQ0csTUFBUixDQUFlRztBQUZELFdBQXBCO0FBSUEsY0FBTUMsTUFBTSxHQUFHLElBQUlDLHVEQUFKLEVBQWY7QUFDQUQsZ0JBQU0sQ0FBQ0UsZUFBUCxDQUF1QlIsV0FBdkI7QUFDQSxTQVJGLEVBU0MsVUFBQzdCLEtBQUQsRUFBVztBQUNWUixpQkFBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDQSxTQVhGO0FBYUE7QUFDRDs7Ozs7O0FBR0YsSUFBTXNDLEdBQUcsR0FBRyxJQUFJcEMsR0FBSixFQUFaO0FBQ0FvQyxHQUFHLENBQUNDLElBQUoiLCJmaWxlIjoiLi9zb3VyY2UvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi9jc3MvYXBwLnNjc3NcIjtcclxuaW1wb3J0IEZpbmRlciBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbmRlclwiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb25zb2xlLmxvZyhcImxvYWRlZFwiKTtcclxuXHQvLyBzZXJ2aWNlIHdvcmtlclxyXG5cdGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblx0XHRcdC8vcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcclxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuXHRcdFx0XHQucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIilcclxuXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH07XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBnZW9sb2NhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VvbG9jYXRpb24tYnRuXCIpO1xyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHJvb3Q6IG51bGwsXHJcblx0XHRcdHJvb3RNYXJnaW46IFwiMHB4IDBweCAtMjAwcHggMHB4XCIsXHJcblx0XHRcdHRocmVzaG9sZDogMC4wNSxcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZhZGVJbiwgb3B0aW9ucyk7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvcmVtXCIpLmZvckVhY2goKGxvcmVtKSA9PiB7XHJcblx0XHRcdG9ic2VydmVyLm9ic2VydmUobG9yZW0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZmFkZUluKGVsZW1lbnRzKSB7XHJcblx0XHRcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRpZiAoZWxlbWVudC5pc0ludGVyc2VjdGluZykge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdlb2xvY2F0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdFwiY2xpY2tcIixcclxuXHRcdFx0dGhpcy5nZXRVc2VyQ29vcmRpbmF0ZXMuYmluZCh0aGlzKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFVzZXJDb29yZGluYXRlcygpIHtcclxuXHRcdGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuXHRcdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuXHRcdFx0XHQoc3VjY2VzcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcblx0XHRcdFx0XHRcdGxuZzogc3VjY2Vzcy5jb29yZHMubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0XHRsYXQ6IHN1Y2Nlc3MuY29vcmRzLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGNvbnN0IGZpbmRlciA9IG5ldyBGaW5kZXIoKTtcclxuXHRcdFx0XHRcdGZpbmRlci5nZXRVc2VyTG9jYXRpb24oY29vcmRpbmF0ZXMpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/app.js\n");

/***/ }),

/***/ "./source/components/finder.js":
/*!*************************************!*\
  !*** ./source/components/finder.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Finder = /*#__PURE__*/function () {\n  function Finder() {\n    _classCallCheck(this, Finder);\n  }\n\n  _createClass(Finder, [{\n    key: \"getUserLocation\",\n    value: function getUserLocation(coordinates) {\n      console.log(coordinates);\n    }\n  }]);\n\n  return Finder;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Finder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jb21wb25lbnRzL2ZpbmRlci5qcz8zZGJlIl0sIm5hbWVzIjpbIkZpbmRlciIsImNvb3JkaW5hdGVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQSxNOzs7Ozs7O1dBQ0wseUJBQWdCQyxXQUFoQixFQUE2QjtBQUM1QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFDQTs7Ozs7O0FBR0YsK0RBQWVELE1BQWYiLCJmaWxlIjoiLi9zb3VyY2UvY29tcG9uZW50cy9maW5kZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGaW5kZXIge1xyXG5cdGdldFVzZXJMb2NhdGlvbihjb29yZGluYXRlcykge1xyXG5cdFx0Y29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmluZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/components/finder.js\n");

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