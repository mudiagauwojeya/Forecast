/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/components/finder.js":
/*!*************************************!*\
  !*** ./source/components/finder.js ***!
  \*************************************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Finder = /*#__PURE__*/function () {\n  function Finder() {\n    _classCallCheck(this, Finder);\n\n    this.lng = coordinates.lng;\n    this.lat = coordinates.lat;\n  }\n\n  _createClass(Finder, [{\n    key: \"getLocation\",\n    value: function getLocation() {\n      if (navigator.geolocation.getCurrentPosition) {\n        navigator.geolocation.getCurrentPosition(function (coordinates) {\n          var coords = {\n            lng: coordinates.longitude,\n            lat: coordinates.latitude\n          };\n          console.log(coords);\n        });\n      }\n    }\n  }]);\n\n  return Finder;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JlY2FzdC8uL3NvdXJjZS9jb21wb25lbnRzL2ZpbmRlci5qcz8zZGJlIl0sIm5hbWVzIjpbIkZpbmRlciIsImxuZyIsImNvb3JkaW5hdGVzIiwibGF0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxNO0FBQ0wsb0JBQWM7QUFBQTs7QUFDYixTQUFLQyxHQUFMLEdBQVdDLFdBQVcsQ0FBQ0QsR0FBdkI7QUFDQSxTQUFLRSxHQUFMLEdBQVdELFdBQVcsQ0FBQ0MsR0FBdkI7QUFDQTs7OztXQUVELHVCQUFjO0FBQ2IsVUFBSUMsU0FBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBMUIsRUFBOEM7QUFDN0NGLFFBQUFBLFNBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLFVBQUNKLFdBQUQsRUFBaUI7QUFDekQsY0FBTUssTUFBTSxHQUFHO0FBQ2ROLFlBQUFBLEdBQUcsRUFBRUMsV0FBVyxDQUFDTSxTQURIO0FBRWRMLFlBQUFBLEdBQUcsRUFBRUQsV0FBVyxDQUFDTztBQUZILFdBQWY7QUFJQUMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxTQU5EO0FBT0E7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpbmRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmxuZyA9IGNvb3JkaW5hdGVzLmxuZztcclxuXHRcdHRoaXMubGF0ID0gY29vcmRpbmF0ZXMubGF0O1xyXG5cdH1cclxuXHJcblx0Z2V0TG9jYXRpb24oKSB7XHJcblx0XHRpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbikge1xyXG5cdFx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChjb29yZGluYXRlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNvb3JkcyA9IHtcclxuXHRcdFx0XHRcdGxuZzogY29vcmRpbmF0ZXMubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0bGF0OiBjb29yZGluYXRlcy5sYXRpdHVkZSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGNvb3Jkcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwiZmlsZSI6Ii4vc291cmNlL2NvbXBvbmVudHMvZmluZGVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/components/finder.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/components/finder.js"]();
/******/ 	
/******/ })()
;