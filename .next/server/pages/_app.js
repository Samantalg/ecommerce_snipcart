module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
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
/* harmony import */ var _public_api_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/api/data.json */ "./public/api/data.json");
var _public_api_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./public/api/data.json */ "./public/api/data.json", 1);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_4__);





i18next__WEBPACK_IMPORTED_MODULE_4___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_3__["initReactI18next"]); // the translations

const resources = {
  en: {
    translation: _public_locales_en_common_json__WEBPACK_IMPORTED_MODULE_0__
  },
  es: {
    translation: _public_locales_es_common_json__WEBPACK_IMPORTED_MODULE_1__
  }
};
i18next__WEBPACK_IMPORTED_MODULE_4___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_3__["initReactI18next"]) // init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  resources: resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default

  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_4___default.a);

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

/***/ "./public/api/data.json":
/*!******************************!*\
  !*** ./public/api/data.json ***!
  \******************************/
/*! exports provided: products, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"products\":[{\"id\":1,\"name\":\"Halfmoon Betta\",\"price\":25,\"image\":\"../static/halfmoon.jpg\",\"description\":\"The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.\"},{\"id\":2,\"name\":\"Dragon Scale Betta\",\"price\":35,\"image\":\"../static/dragonscale.jpg\",\"description\":\"The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.\"},{\"id\":3,\"name\":\"Dragon Scale Betta\",\"price\":15,\"image\":\"../static/fish1.jpg\",\"description\":\"The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.\"},{\"id\":4,\"name\":\"Dragon Scale Betta\",\"price\":20,\"image\":\"../static/fish2.jpg\",\"description\":\"The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.\"},{\"id\":5,\"name\":\"Dragon Scale Betta\",\"price\":30,\"image\":\"../static/fish3.jpg\",\"description\":\"The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.\"},{\"id\":6,\"name\":\"Dragon Scale Betta\",\"price\":10,\"image\":\"../static/fish4.jpg\",\"description\":\"The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.\"}]}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0c1N0YXRlIiwic2V0UHJvZHVjdHNTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9hZERhdGEiLCJyZXNwb25zZSIsInByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsInZhbHVlcyIsInVzZU1lbW8iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImkxOG4iLCJ1c2UiLCJpbml0UmVhY3RJMThuZXh0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uRU4iLCJlcyIsInRyYW5zbGF0aW9uRVMiLCJpbml0IiwiZmFsbGJhY2tMbmciLCJkZWJ1ZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIkFwcGxpY2F0aW9uIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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O0FBQUEsMkJBQ0kscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRWNGLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHQvLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbiBcdC8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZSgpIHtcbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gW3tcclxuICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiAwLjAwLFxyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCJcclxuICAgIH1dXHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3RzU3RhdGUsIHNldFByb2R1Y3RzU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbXBvcnQoJy4uL3B1YmxpYy9hcGkvZGF0YS5qc29uJylcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSByZXNwb25zZS5wcm9kdWN0c1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdGUnLCBwcm9kdWN0cylcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHNTdGF0ZShwcm9kdWN0cylcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZERhdGEoKVxyXG4gICAgfSwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZXMgPSB1c2VNZW1vKCgpID0+IChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzU3RhdGUsICAgICAgLy8gU3RhdGVzIHF1ZSBzZXJhbiB2aXNpYmxlcyBlbiBlbCBjb250ZXh0by5cclxuICAgICAgICB9KSxcclxuICAgICAgICBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlcy5wcm9kdWN0c1N0YXRlfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxufSIsImltcG9ydCB0cmFuc2xhdGlvbkVOIGZyb20gJy4vcHVibGljL2xvY2FsZXMvZW4vY29tbW9uLmpzb24nXHJcbmltcG9ydCB0cmFuc2xhdGlvbkVTIGZyb20gJy4vcHVibGljL2xvY2FsZXMvZXMvY29tbW9uLmpzb24nXHJcbmltcG9ydCBwcm9kdWN0c0VOIGZyb20gJy4vcHVibGljL2FwaS9kYXRhLmpzb24nXHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiXHJcblxyXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG5cclxuLy8gdGhlIHRyYW5zbGF0aW9uc1xyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgZW46IHtcclxuICAgIHRyYW5zbGF0aW9uOiBcclxuICAgICAgdHJhbnNsYXRpb25FTlxyXG4gIH0sXHJcbiAgZXM6IHtcclxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkVTXHJcbiAgfVxyXG59O1xyXG5cclxuaTE4blxyXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuICAvLyBpbml0IGkxOG5leHRcclxuICAvLyBmb3IgYWxsIG9wdGlvbnMgcmVhZDogaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zXHJcbiAgLmluaXQoe1xyXG4gICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICBmYWxsYmFja0xuZzogJ2VuJyxcclxuICAgIGRlYnVnOiB0cnVlLFxyXG5cclxuICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyBub3QgbmVlZGVkIGZvciByZWFjdCBhcyBpdCBlc2NhcGVzIGJ5IGRlZmF1bHRcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuOyIsImltcG9ydCB7IEFwcFdyYXBwZXIgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlJ1xyXG5pbXBvcnQgJy4uL2kxOG4nIC8vIG5lZWRzIHRvIGJlIGJ1bmRsZWRcclxuXHJcbmZ1bmN0aW9uIEFwcGxpY2F0aW9uKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwV3JhcHBlcj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQXBwV3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb24iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=