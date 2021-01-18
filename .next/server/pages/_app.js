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
/* harmony import */ var _utils_contentfulApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/contentfulApi */ "./utils/contentfulApi.tsx");

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
    "description": "",
    "nameEs": "",
    "descriptionEs": ""
  }];
  const {
    0: productsState,
    1: setProductsState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function loadData() {
      const res = await Object(_utils_contentfulApi__WEBPACK_IMPORTED_MODULE_2__["fetchEntries"])();
      const catalogue = await res.map(item => {
        return {
          id: item.fields.id,
          name: item.fields.name,
          nameEs: item.fields.nameEs,
          price: item.fields.price.toFixed(2),
          description: item.fields.description,
          descriptionEs: item.fields.descriptionEs,
          image: item.fields.image.fields.file.url
        };
      });
      console.log('cat: ', catalogue);
      setProductsState(catalogue);
    }

    loadData();
  }, []);
  const values = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    productsState // States que seran visibles en el contexto.

  }), initialState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: values.productsState,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
/*! exports provided: shop, home, catalogue, products, home_message, footer, footer2, add_cart, loading, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"shop\":\"Flower shop\",\"home\":\"Home\",\"catalogue\":\"Catalogue\",\"products\":\"Products\",\"home_message\":\"Go to the store\",\"footer\":\"Next.js app with\",\"footer2\":\"and pictures from Pexels\",\"add_cart\":\"Add to cart\",\"loading\":\"Loading...\"}");

/***/ }),

/***/ "./public/locales/es/common.json":
/*!***************************************!*\
  !*** ./public/locales/es/common.json ***!
  \***************************************/
/*! exports provided: shop, home, catalogue, products, home_message, footer, footer2, add_cart, loading, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"shop\":\"Floristería\",\"home\":\"Inicio\",\"catalogue\":\"Catálogo\",\"products\":\"Productos\",\"home_message\":\"Visita la tienda\",\"footer\":\"Next.js app creada con\",\"footer2\":\"y fotos de Pexels\",\"add_cart\":\"Añadir al carrito\",\"loading\":\"Cargando...\"}");

/***/ }),

/***/ "./utils/contentfulApi.tsx":
/*!*********************************!*\
  !*** ./utils/contentfulApi.tsx ***!
  \*********************************/
/*! exports provided: fetchEntries, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEntries", function() { return fetchEntries; });
const space = "n7v8mvcnauae";
const accessToken = "sCp0sqiq2oZR-bhm9kjdW5GUG-u_040Jg4DyLHVy9uM";

const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: space,
  accessToken: accessToken
});

async function fetchEntries() {
  const entries = await client.getEntries();

  if (entries.items) {
    return entries.items;
  } else {
    console.log(`Error getting Entries for contentful.`);
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchEntries
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb250ZW50ZnVsQXBpLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXBwV3JhcHBlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHNTdGF0ZSIsInNldFByb2R1Y3RzU3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvYWREYXRhIiwicmVzIiwiZmV0Y2hFbnRyaWVzIiwiY2F0YWxvZ3VlIiwibWFwIiwiaXRlbSIsImlkIiwiZmllbGRzIiwibmFtZSIsIm5hbWVFcyIsInByaWNlIiwidG9GaXhlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25FcyIsImltYWdlIiwiZmlsZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJ1c2VNZW1vIiwidXNlQXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJpMThuIiwidXNlIiwiaW5pdFJlYWN0STE4bmV4dCIsInJlc291cmNlcyIsImVuIiwidHJhbnNsYXRpb24iLCJ0cmFuc2xhdGlvbkVOIiwiZXMiLCJ0cmFuc2xhdGlvbkVTIiwiaW5pdCIsImZhbGxiYWNrTG5nIiwiZGVidWciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJBcHBsaWNhdGlvbiIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFoQztBQUVPLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUN4QyxRQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUNsQixVQUFNLENBRFk7QUFFbEIsWUFBUSxFQUZVO0FBR2xCLGFBQVMsSUFIUztBQUlsQixhQUFTLEVBSlM7QUFLbEIsbUJBQWUsRUFMRztBQU1sQixjQUFVLEVB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LEtBQUssR0FBR0MsY0FBZDtBQUNBLE1BQU1DLFdBQVcsR0FBR0QsNkNBQXBCOztBQUVBLE1BQU1FLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUFQLENBQXNCQyxZQUF0QixDQUFtQztBQUNoREwsT0FBSyxFQUFFQSxLQUR5QztBQUVoREUsYUFBVyxFQUFFQTtBQUZtQyxDQUFuQyxDQUFmOztBQUtPLGVBQWV4QyxZQUFmLEdBQThCO0FBQ3BDLFFBQU00QyxPQUFPLEdBQUcsTUFBTUgsTUFBTSxDQUFDSSxVQUFQLEVBQXRCOztBQUNDLE1BQUlELE9BQU8sQ0FBQ0UsS0FBWixFQUFtQjtBQUNqQixXQUFPRixPQUFPLENBQUNFLEtBQWY7QUFDRCxHQUZELE1BRU87QUFDTC9CLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLHVDQUFiO0FBQ0Q7QUFDRjtBQUVjO0FBQUVoQjtBQUFGLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZmV0Y2hFbnRyaWVzIH0gZnJvbSAnLi4vdXRpbHMvY29udGVudGZ1bEFwaSdcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcInByaWNlXCI6IDAuMDAsXHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICBcIm5hbWVFc1wiOiBcIlwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25Fc1wiOiBcIlwiLFxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdHNTdGF0ZSwgc2V0UHJvZHVjdHNTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRW50cmllcygpXHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGFsb2d1ZSA9IGF3YWl0IHJlcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uZmllbGRzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uZmllbGRzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZUVzOiBpdGVtLmZpZWxkcy5uYW1lRXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0uZmllbGRzLnByaWNlLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZmllbGRzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRXM6IGl0ZW0uZmllbGRzLmRlc2NyaXB0aW9uRXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2F0OiAnLCBjYXRhbG9ndWUpXHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzU3RhdGUoY2F0YWxvZ3VlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkRGF0YSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgdmFsdWVzID0gdXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0c1N0YXRlLCAgICAgIC8vIFN0YXRlcyBxdWUgc2VyYW4gdmlzaWJsZXMgZW4gZWwgY29udGV4dG8uXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZXMucHJvZHVjdHNTdGF0ZX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxufSIsImltcG9ydCB0cmFuc2xhdGlvbkVOIGZyb20gJy4vcHVibGljL2xvY2FsZXMvZW4vY29tbW9uLmpzb24nXHJcbmltcG9ydCB0cmFuc2xhdGlvbkVTIGZyb20gJy4vcHVibGljL2xvY2FsZXMvZXMvY29tbW9uLmpzb24nXHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiXHJcblxyXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG5cclxuLy8gdGhlIHRyYW5zbGF0aW9uc1xyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgZW46IHtcclxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkVOXHJcbiAgfSxcclxuICBlczoge1xyXG4gICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uRVNcclxuICB9XHJcbn07XHJcblxyXG5pMThuXHJcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG4gIC8vIGluaXQgaTE4bmV4dFxyXG4gIC8vIGZvciBhbGwgb3B0aW9ucyByZWFkOiBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9jb25maWd1cmF0aW9uLW9wdGlvbnNcclxuICAuaW5pdCh7XHJcbiAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgIGZhbGxiYWNrTG5nOiAnZW4nLFxyXG4gICAgZGVidWc6IHRydWUsXHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIG5vdCBuZWVkZWQgZm9yIHJlYWN0IGFzIGl0IGVzY2FwZXMgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG47IiwiaW1wb3J0IHsgQXBwV3JhcHBlciB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUnXHJcbmltcG9ydCAnLi4vaTE4bicgLy8gbmVlZHMgdG8gYmUgYnVuZGxlZFxyXG5cclxuZnVuY3Rpb24gQXBwbGljYXRpb24oeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BcHBXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbiIsImNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRFxyXG5jb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXHJcblxyXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcclxuICBzcGFjZTogc3BhY2UsXHJcbiAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxyXG59KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRW50cmllcygpIHtcclxuIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcygpXHJcbiAgaWYgKGVudHJpZXMuaXRlbXMpIHtcclxuICAgIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yIGNvbnRlbnRmdWwuYClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgZmV0Y2hFbnRyaWVzIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb250ZW50ZnVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==