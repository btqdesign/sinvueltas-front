/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./assets/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_pages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/pages.js */ \"./assets/js/pages.js\");\n/* harmony import */ var _js_pages_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_pages_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/pages.js":
/*!****************************!*\
  !*** ./assets/js/pages.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function radiosCheck(){\r\n    $(\".radio\").click( function(){\r\n        if ($(this).is(':checked')){\r\n            $(this).parent().find(\".dot\").css(\"display\", \"block\");\r\n            $(\".radio\").not(this).parent().find(\".dot\").css(\"display\", \"none\")\r\n        }\r\n        else{\r\n            \r\n\r\n        }\r\n    })\r\n}\r\nfunction quantity() {\r\n    $('<div class=\"quantity-nav\"><div class=\"quantity-button quantity-up\">+</div><div class=\"quantity-button quantity-down\">-</div></div>').insertAfter('.quantity input');\r\n    $('.quantity').each(function() {\r\n      var spinner = $(this),\r\n        input = spinner.find('input[type=\"number\"]'),\r\n        btnUp = spinner.find('.quantity-up'),\r\n        btnDown = spinner.find('.quantity-down'),\r\n        min = input.attr('min'),\r\n        max = input.attr('max');\r\n    \r\n      btnUp.click(function() {\r\n        var oldValue = parseFloat(input.val());\r\n        if (oldValue >= max) {\r\n          var newVal = oldValue;\r\n        } else {\r\n          var newVal = oldValue + 1;\r\n        }\r\n        spinner.find(\"input\").val(newVal);\r\n        spinner.find(\"input\").trigger(\"change\");\r\n      });\r\n    \r\n      btnDown.click(function() {\r\n        var oldValue = parseFloat(input.val());\r\n        if (oldValue <= min) {\r\n          var newVal = oldValue;\r\n        } else {\r\n          var newVal = oldValue - 1;\r\n        }\r\n        spinner.find(\"input\").val(newVal);\r\n        spinner.find(\"input\").trigger(\"change\");\r\n      });\r\n    \r\n    });\r\n}\r\n\r\n\r\n\r\nradiosCheck();\r\n$(document).ready( function(){\r\n    radiosCheck();\r\n    quantity();\r\n})\n\n//# sourceURL=webpack:///./assets/js/pages.js?");

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/style.scss?");

/***/ })

/******/ });