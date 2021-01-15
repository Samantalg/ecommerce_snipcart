module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/state.tsx":
/*!***************************!*\
  !*** ./context/state.tsx ***!
  \***************************/
/*! exports provided: AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\slara\\workspace\\next-commerce\\context\\state.tsx";


const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
const AppWrapper = ({
  children
}) => {
  const initialState = [{
    "id": 0,
    "name": "",
    "price": 0.00,
    "image": "",
    "description": ""
  }];
  const {
    0: productsState,
    1: setProductsState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function loadData() {
      const response = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../public/api/data.json */ "./public/api/data.json", 3));
      const products = response.products;
      console.log('state', products);
      setProductsState(products);
    }

    loadData();
  }, initialState);
  const values = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    productsState // States que seran visibles en el contexto.

  }), initialState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: values.productsState,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};
function useAppContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
}

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_locales_en_common_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/locales/en/common.json */ "./public/locales/en/common.json");
var _public_locales_en_common_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./public/locales/en/common.json */ "./public/locales/en/common.json", 1);
/* harmony import */ var _public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/locales/es/common.json */ "./public/locales/es/common.json");
var _public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./public/locales/es/common.json */ "./public/locales/es/common.json", 1);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);




i18next__WEBPACK_IMPORTED_MODULE_3___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_2__["initReactI18next"]); // the translations

const resources = {
  en: {
    translation: _public_locales_en_common_json__WEBPACK_IMPORTED_MODULE_0__
  },
  es: {
    translation: _public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_1__
  }
};
i18next__WEBPACK_IMPORTED_MODULE_3___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_2__["initReactI18next"]) // init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  resources: resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default

  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_3___default.a);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/state */ "./context/state.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./i18n.js");

var _jsxFileName = "C:\\Users\\slara\\workspace\\next-commerce\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // needs to be bundled

function Application({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_state__WEBPACK_IMPORTED_MODULE_1__["AppWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Application);

/***/ }),

/***/ "./public/locales/en/common.json":
/*!***************************************!*\
  !*** ./public/locales/en/common.json ***!
  \***************************************/
/*! exports provided: aquarium, home, products, home_message, footer, add_cart, loading, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"aquarium\":\"Aquarium\",\"home\":\"Home\",\"products\":\"Products\",\"home_message\":\"Go to the store\",\"footer\":\"Next.js app with\",\"add_cart\":\"Add to cart\",\"loading\":\"Loading...\"}");

/***/ }),

/***/ "./public/locales/es/common.json":
/*!***************************************!*\
  !*** ./public/locales/es/common.json ***!
  \***************************************/
/*! exports provided: aquarium, home, products, home_message, footer, add_cart, loading, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"aquarium\":\"Acuario\",\"home\":\"Inicio\",\"products\":\"Productos\",\"home_message\":\"Visita la tienda\",\"footer\":\"Next.js app creada con\",\"add_cart\":\"Añadir al carrito\",\"loading\":\"Cargando...\"}");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0c1N0YXRlIiwic2V0UHJvZHVjdHNTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9hZERhdGEiLCJyZXNwb25zZSIsInByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsInZhbHVlcyIsInVzZU1lbW8iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImkxOG4iLCJ1c2UiLCJpbml0UmVhY3RJMThuZXh0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uRU4iLCJlcyIsInRyYW5zbGF0aW9uRVMiLCJpbml0IiwiZmFsbGJhY2tMbmciLCJkZWJ1ZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIkFwcGxpY2F0aW9uIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVB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UjtBQWVlYiw2R0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtDQUNpQjs7QUFFakIsU0FBU2MsV0FBVCxDQUFxQjtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBckIsRUFBK0M7QUFDM0Msc0JBQ0kscUVBQUMseURBQUQ7QUFBQSwyQkFDSSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFFY0YsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL19hcHBcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcInByaWNlXCI6IDAuMDAsXHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIlxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdHNTdGF0ZSwgc2V0UHJvZHVjdHNTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2FwaS9kYXRhLmpzb24nKVxyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IHJlc3BvbnNlLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZScsIHByb2R1Y3RzKVxyXG4gICAgICAgICAgICBzZXRQcm9kdWN0c1N0YXRlKHByb2R1Y3RzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkRGF0YSgpXHJcbiAgICB9LCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IHVzZU1lbW8oKCkgPT4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdHNTdGF0ZSwgICAgICAvLyBTdGF0ZXMgcXVlIHNlcmFuIHZpc2libGVzIGVuIGVsIGNvbnRleHRvLlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWVzLnByb2R1Y3RzU3RhdGV9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KVxyXG59IiwiaW1wb3J0IHRyYW5zbGF0aW9uRU4gZnJvbSAnLi9wdWJsaWMvbG9jYWxlcy9lbi9jb21tb24uanNvbidcclxuaW1wb3J0IHRyYW5zbGF0aW9uRVMgZnJvbSAnLi9wdWJsaWMvbG9jYWxlcy9lcy9jb21tb24uanNvbidcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCJcclxuXHJcbmkxOG4udXNlKGluaXRSZWFjdEkxOG5leHQpXHJcblxyXG4vLyB0aGUgdHJhbnNsYXRpb25zXHJcbmNvbnN0IHJlc291cmNlcyA9IHtcclxuICBlbjoge1xyXG4gICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uRU5cclxuICB9LFxyXG4gIGVzOiB7XHJcbiAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb25FU1xyXG4gIH1cclxufTtcclxuXHJcbmkxOG5cclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbiAgLy8gaW5pdCBpMThuZXh0XHJcbiAgLy8gZm9yIGFsbCBvcHRpb25zIHJlYWQ6IGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xyXG4gIC5pbml0KHtcclxuICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgZmFsbGJhY2tMbmc6ICdlbicsXHJcbiAgICBkZWJ1ZzogdHJ1ZSxcclxuXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSwgLy8gbm90IG5lZWRlZCBmb3IgcmVhY3QgYXMgaXQgZXNjYXBlcyBieSBkZWZhdWx0XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bjsiLCJpbXBvcnQgeyBBcHBXcmFwcGVyIH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZSdcclxuaW1wb3J0ICcuLi9pMThuJyAvLyBuZWVkcyB0byBiZSBidW5kbGVkXHJcblxyXG5mdW5jdGlvbiBBcHBsaWNhdGlvbih7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0FwcFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9