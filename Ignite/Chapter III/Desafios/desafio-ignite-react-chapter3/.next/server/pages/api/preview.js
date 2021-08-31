module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/preview.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/preview.ts":
/*!**********************************!*\
  !*** ./src/pages/api/preview.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable consistent-return */\n\n/* eslint-disable @typescript-eslint/explicit-module-boundary-types */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable @typescript-eslint/explicit-function-return-type */\n\nconst apiEndpoint = process.env.PRISMIC_API_ENDPOINT;\nconst accessToken = process.env.PRISMIC_ACCESS_TOKEN;\n\nfunction linkResolver(doc) {\n  if (doc.type === 'posts') {\n    return `/post/${doc.uid}`;\n  }\n\n  return '/';\n} // Client method to query from the Prismic repo\n\n\nconst Client = (req = null) => _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default.a.client(apiEndpoint, createClientOptions(req, accessToken));\n\nconst createClientOptions = (req = null, prismicAccessToken = null) => {\n  const reqOption = req ? {\n    req\n  } : {};\n  const accessTokenOption = prismicAccessToken ? {\n    accessToken: prismicAccessToken\n  } : {};\n  return _objectSpread(_objectSpread({}, reqOption), accessTokenOption);\n};\n\nconst Preview = async (req, res) => {\n  const {\n    token: ref,\n    documentId\n  } = req.query;\n  const redirectUrl = await Client(req).getPreviewResolver(ref, documentId).resolve(linkResolver, '/');\n\n  if (!redirectUrl) {\n    return res.status(401).json({\n      message: 'Invalid token'\n    });\n  }\n\n  res.setPreviewData({\n    ref\n  });\n  res.writeHead(302, {\n    Location: `${redirectUrl}`\n  });\n  res.end();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Preview);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3ByZXZpZXcudHM/NTkyNSJdLCJuYW1lcyI6WyJhcGlFbmRwb2ludCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0FQSV9FTkRQT0lOVCIsImFjY2Vzc1Rva2VuIiwiUFJJU01JQ19BQ0NFU1NfVE9LRU4iLCJsaW5rUmVzb2x2ZXIiLCJkb2MiLCJ0eXBlIiwidWlkIiwiQ2xpZW50IiwicmVxIiwiUHJpc21pYyIsImNsaWVudCIsImNyZWF0ZUNsaWVudE9wdGlvbnMiLCJwcmlzbWljQWNjZXNzVG9rZW4iLCJyZXFPcHRpb24iLCJhY2Nlc3NUb2tlbk9wdGlvbiIsIlByZXZpZXciLCJyZXMiLCJ0b2tlbiIsInJlZiIsImRvY3VtZW50SWQiLCJxdWVyeSIsInJlZGlyZWN0VXJsIiwiZ2V0UHJldmlld1Jlc29sdmVyIiwicmVzb2x2ZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic2V0UHJldmlld0RhdGEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUlBLE1BQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUFoQztBQUNBLE1BQU1DLFdBQVcsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUFoQzs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUE2QztBQUMzQyxNQUFJQSxHQUFHLENBQUNDLElBQUosS0FBYSxPQUFqQixFQUEwQjtBQUN4QixXQUFRLFNBQVFELEdBQUcsQ0FBQ0UsR0FBSSxFQUF4QjtBQUNEOztBQUNELFNBQU8sR0FBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQUNDLEdBQUcsR0FBRyxJQUFQLEtBQ2JDLHdEQUFPLENBQUNDLE1BQVIsQ0FBZWIsV0FBZixFQUE0QmMsbUJBQW1CLENBQUNILEdBQUQsRUFBTVAsV0FBTixDQUEvQyxDQURGOztBQUdBLE1BQU1VLG1CQUFtQixHQUFHLENBQUNILEdBQUcsR0FBRyxJQUFQLEVBQWFJLGtCQUFrQixHQUFHLElBQWxDLEtBQTJDO0FBQ3JFLFFBQU1DLFNBQVMsR0FBR0wsR0FBRyxHQUFHO0FBQUVBO0FBQUYsR0FBSCxHQUFhLEVBQWxDO0FBQ0EsUUFBTU0saUJBQWlCLEdBQUdGLGtCQUFrQixHQUN4QztBQUFFWCxlQUFXLEVBQUVXO0FBQWYsR0FEd0MsR0FFeEMsRUFGSjtBQUdBLHlDQUNLQyxTQURMLEdBRUtDLGlCQUZMO0FBSUQsQ0FURDs7QUFXQSxNQUFNQyxPQUFPLEdBQUcsT0FBT1AsR0FBUCxFQUFZUSxHQUFaLEtBQW9CO0FBQ2xDLFFBQU07QUFBRUMsU0FBSyxFQUFFQyxHQUFUO0FBQWNDO0FBQWQsTUFBNkJYLEdBQUcsQ0FBQ1ksS0FBdkM7QUFDQSxRQUFNQyxXQUFXLEdBQUcsTUFBTWQsTUFBTSxDQUFDQyxHQUFELENBQU4sQ0FDdkJjLGtCQUR1QixDQUNKSixHQURJLEVBQ0NDLFVBREQsRUFFdkJJLE9BRnVCLENBRWZwQixZQUZlLEVBRUQsR0FGQyxDQUExQjs7QUFJQSxNQUFJLENBQUNrQixXQUFMLEVBQWtCO0FBQ2hCLFdBQU9MLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDs7QUFFRFYsS0FBRyxDQUFDVyxjQUFKLENBQW1CO0FBQUVUO0FBQUYsR0FBbkI7QUFDQUYsS0FBRyxDQUFDWSxTQUFKLENBQWMsR0FBZCxFQUFtQjtBQUFFQyxZQUFRLEVBQUcsR0FBRVIsV0FBWTtBQUEzQixHQUFuQjtBQUNBTCxLQUFHLENBQUNjLEdBQUo7QUFDRCxDQWJEOztBQWVlZixzRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvcHJldmlldy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCc7XG5cbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnQHByaXNtaWNpby9jbGllbnQvdHlwZXMvZG9jdW1lbnRzJztcblxuY29uc3QgYXBpRW5kcG9pbnQgPSBwcm9jZXNzLmVudi5QUklTTUlDX0FQSV9FTkRQT0lOVDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU47XG5cbmZ1bmN0aW9uIGxpbmtSZXNvbHZlcihkb2M6IERvY3VtZW50KTogc3RyaW5nIHtcbiAgaWYgKGRvYy50eXBlID09PSAncG9zdHMnKSB7XG4gICAgcmV0dXJuIGAvcG9zdC8ke2RvYy51aWR9YDtcbiAgfVxuICByZXR1cm4gJy8nO1xufVxuXG4vLyBDbGllbnQgbWV0aG9kIHRvIHF1ZXJ5IGZyb20gdGhlIFByaXNtaWMgcmVwb1xuY29uc3QgQ2xpZW50ID0gKHJlcSA9IG51bGwpID0+XG4gIFByaXNtaWMuY2xpZW50KGFwaUVuZHBvaW50LCBjcmVhdGVDbGllbnRPcHRpb25zKHJlcSwgYWNjZXNzVG9rZW4pKTtcblxuY29uc3QgY3JlYXRlQ2xpZW50T3B0aW9ucyA9IChyZXEgPSBudWxsLCBwcmlzbWljQWNjZXNzVG9rZW4gPSBudWxsKSA9PiB7XG4gIGNvbnN0IHJlcU9wdGlvbiA9IHJlcSA/IHsgcmVxIH0gOiB7fTtcbiAgY29uc3QgYWNjZXNzVG9rZW5PcHRpb24gPSBwcmlzbWljQWNjZXNzVG9rZW5cbiAgICA/IHsgYWNjZXNzVG9rZW46IHByaXNtaWNBY2Nlc3NUb2tlbiB9XG4gICAgOiB7fTtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZXFPcHRpb24sXG4gICAgLi4uYWNjZXNzVG9rZW5PcHRpb24sXG4gIH07XG59O1xuXG5jb25zdCBQcmV2aWV3ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgdG9rZW46IHJlZiwgZG9jdW1lbnRJZCB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zdCByZWRpcmVjdFVybCA9IGF3YWl0IENsaWVudChyZXEpXG4gICAgLmdldFByZXZpZXdSZXNvbHZlcihyZWYsIGRvY3VtZW50SWQpXG4gICAgLnJlc29sdmUobGlua1Jlc29sdmVyLCAnLycpO1xuXG4gIGlmICghcmVkaXJlY3RVcmwpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCB0b2tlbicgfSk7XG4gIH1cblxuICByZXMuc2V0UHJldmlld0RhdGEoeyByZWYgfSk7XG4gIHJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBgJHtyZWRpcmVjdFVybH1gIH0pO1xuICByZXMuZW5kKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/preview.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prismicio/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiPzdiNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtaWNpby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21pY2lvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prismicio/client\n");

/***/ })

/******/ });