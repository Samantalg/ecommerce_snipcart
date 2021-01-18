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

/***/ "./src/context/state.tsx":
/*!*******************************!*\
  !*** ./src/context/state.tsx ***!
  \*******************************/
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
/* harmony import */ var _utils_contentfulApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/contentfulApi */ "./src/utils/contentfulApi.tsx");

var _jsxFileName = "C:\\Users\\slara\\workspace\\next-commerce\\src\\context\\state.tsx";



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
      catalogue.sort((a, b) => a.id - b.id);
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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/state */ "./src/context/state.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");

var _jsxFileName = "C:\\Users\\slara\\workspace\\next-commerce\\src\\pages\\_app.tsx";

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

/***/ "./src/utils/contentfulApi.tsx":
/*!*************************************!*\
  !*** ./src/utils/contentfulApi.tsx ***!
  \*************************************/
/*! exports provided: fetchEntries, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEntries", function() { return fetchEntries; });
const space = 'n7v8mvcnauae';
const accessToken = 'sCp0sqiq2oZR-bhm9kjdW5GUG-u_040Jg4DyLHVy9uM';

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

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb250ZW50ZnVsQXBpLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImkxOG4iLCJ1c2UiLCJpbml0UmVhY3RJMThuZXh0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uRU4iLCJlcyIsInRyYW5zbGF0aW9uRVMiLCJpbml0IiwiZmFsbGJhY2tMbmciLCJkZWJ1ZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIkFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXBwV3JhcHBlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHNTdGF0ZSIsInNldFByb2R1Y3RzU3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvYWREYXRhIiwicmVzIiwiZmV0Y2hFbnRyaWVzIiwiY2F0YWxvZ3VlIiwibWFwIiwiaXRlbSIsImlkIiwiZmllbGRzIiwibmFtZSIsIm5hbWVFcyIsInByaWNlIiwidG9GaXhlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25FcyIsImltYWdlIiwiZmlsZSIsInVybCIsInNvcnQiLCJhIiwiYiIsInZhbHVlcyIsInVzZU1lbW8iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcGxpY2F0aW9uIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3BhY2UiLCJhY2Nlc3NUb2tlbiIsImNsaWVudCIsInJlcXVpcmUiLCJjcmVhdGVDbGllbnQiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSw4Q0FBSSxDQUFDQyxHQUFMLENBQVNDLDhEQUFULEUsQ0FFQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRTtBQUNGQyxlQUFXLEVBQUVDLDJEQUFhQTtBQUR4QixHQURZO0FBSWhCQyxJQUFFLEVBQUU7QUFDRkYsZUFBVyxFQUFFRywyREFBYUE7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QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFFY0YsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBLE1BQU1HLEtBQUssR0FBRyxjQUFkO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLDZDQUFwQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERKLE9BQUssRUFBRUEsS0FEeUM7QUFFaERDLGFBQVcsRUFBRUE7QUFGbUMsQ0FBbkMsQ0FBZjs7QUFLTyxlQUFlMUIsWUFBZixHQUE4QjtBQUNwQyxRQUFNOEIsT0FBTyxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksVUFBUCxFQUF0Qjs7QUFDQyxNQUFJRCxPQUFPLENBQUNFLEtBQVosRUFBbUI7QUFDakIsV0FBT0YsT0FBTyxDQUFDRSxLQUFmO0FBQ0QsR0FGRCxNQUVPO0FBQ0xDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLHVDQUFiO0FBQ0Q7QUFDRjtBQUVjO0FBQUVsQztBQUFGLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB0cmFuc2xhdGlvbkVOIGZyb20gJy4vcHVibGljL2xvY2FsZXMvZW4vY29tbW9uLmpzb24nXHJcbmltcG9ydCB0cmFuc2xhdGlvbkVTIGZyb20gJy4vcHVibGljL2xvY2FsZXMvZXMvY29tbW9uLmpzb24nXHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiXHJcblxyXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG5cclxuLy8gdGhlIHRyYW5zbGF0aW9uc1xyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgZW46IHtcclxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkVOXHJcbiAgfSxcclxuICBlczoge1xyXG4gICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uRVNcclxuICB9XHJcbn07XHJcblxyXG5pMThuXHJcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG4gIC8vIGluaXQgaTE4bmV4dFxyXG4gIC8vIGZvciBhbGwgb3B0aW9ucyByZWFkOiBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9jb25maWd1cmF0aW9uLW9wdGlvbnNcclxuICAuaW5pdCh7XHJcbiAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgIGZhbGxiYWNrTG5nOiAnZW4nLFxyXG4gICAgZGVidWc6IHRydWUsXHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIG5vdCBuZWVkZWQgZm9yIHJlYWN0IGFzIGl0IGVzY2FwZXMgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG47IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBmZXRjaEVudHJpZXMgfSBmcm9tICcuLi91dGlscy9jb250ZW50ZnVsQXBpJ1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgQXBwV3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwicHJpY2VcIjogMC4wMCxcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZUVzXCI6IFwiXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvbkVzXCI6IFwiXCIsXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0c1N0YXRlLCBzZXRQcm9kdWN0c1N0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEVudHJpZXMoKVxyXG4gICAgICAgICAgICBjb25zdCBjYXRhbG9ndWUgPSBhd2FpdCByZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmZpZWxkcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmZpZWxkcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVFczogaXRlbS5maWVsZHMubmFtZUVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLmZpZWxkcy5wcmljZS50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmZpZWxkcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVzOiBpdGVtLmZpZWxkcy5kZXNjcmlwdGlvbkVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBpdGVtLmZpZWxkcy5pbWFnZS5maWVsZHMuZmlsZS51cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2F0YWxvZ3VlLnNvcnQoKGEsIGIpID0+IGEuaWQgLSBiLmlkKVxyXG4gICAgICAgICAgICBzZXRQcm9kdWN0c1N0YXRlKGNhdGFsb2d1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZERhdGEoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IHVzZU1lbW8oKCkgPT4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdHNTdGF0ZSwgICAgICAvLyBTdGF0ZXMgcXVlIHNlcmFuIHZpc2libGVzIGVuIGVsIGNvbnRleHRvLlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWVzLnByb2R1Y3RzU3RhdGV9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICAgIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcbn0iLCJpbXBvcnQgeyBBcHBXcmFwcGVyIH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZSdcclxuaW1wb3J0ICcuLi8uLi9pMThuJyAvLyBuZWVkcyB0byBiZSBidW5kbGVkXHJcblxyXG5mdW5jdGlvbiBBcHBsaWNhdGlvbih7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0FwcFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uIiwiY29uc3Qgc3BhY2UgPSAnbjd2OG12Y25hdWFlJ1xyXG5jb25zdCBhY2Nlc3NUb2tlbiA9ICdzQ3Awc3FpcTJvWlItYmhtOWtqZFc1R1VHLXVfMDQwSmc0RHlMSFZ5OXVNJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnY29udGVudGZ1bCcpLmNyZWF0ZUNsaWVudCh7XHJcbiAgc3BhY2U6IHNwYWNlLFxyXG4gIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcclxufSlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEVudHJpZXMoKSB7XHJcbiBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoKVxyXG4gIGlmIChlbnRyaWVzLml0ZW1zKSB7XHJcbiAgICByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciBjb250ZW50ZnVsLmApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGZldGNoRW50cmllcyB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=