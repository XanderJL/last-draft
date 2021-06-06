webpackHotUpdate_N_E("pages/stories",{

/***/ "./components/BlogTabs.js":
/*!********************************!*\
  !*** ./components/BlogTabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/tabs */ \"./node_modules/@chakra-ui/tabs/dist/esm/index.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\nvar _jsxFileName = \"/home/alexander/github/XanderJL/last-draft/components/BlogTabs.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar BlogTabs = function BlogTabs(_ref) {\n  _s();\n\n  var categories = _ref.categories;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_tabs__WEBPACK_IMPORTED_MODULE_2__[\"Tabs\"], {\n    defaultIndex: categories.findIndex(function (_ref2) {\n      var slug = _ref2.slug;\n      return slug === router.query.category;\n    }),\n    overflowX: {\n      base: \"scroll\",\n      md: \"hidden\"\n    },\n    colorScheme: \"cyan\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_tabs__WEBPACK_IMPORTED_MODULE_2__[\"TabList\"], {\n      children: categories.map(function (category) {\n        var _id = category._id,\n            title = category.title,\n            slug = category.slug;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          href: \"/stories/\".concat(slug),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_tabs__WEBPACK_IMPORTED_MODULE_2__[\"Tab\"], {\n            textTransform: \"uppercase\",\n            whiteSpace: \"nowrap\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, _this)\n        }, _id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BlogTabs, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = BlogTabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogTabs);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogTabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nVGFicy5qcz8zOGZhIl0sIm5hbWVzIjpbIkJsb2dUYWJzIiwiY2F0ZWdvcmllcyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbmRJbmRleCIsInNsdWciLCJxdWVyeSIsImNhdGVnb3J5IiwiYmFzZSIsIm1kIiwibWFwIiwiX2lkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDRSxxRUFBQyxvREFBRDtBQUNFLGdCQUFZLEVBQUVGLFVBQVUsQ0FBQ0csU0FBWCxDQUNaO0FBQUEsVUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsYUFBY0EsSUFBSSxLQUFLSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsUUFBcEM7QUFBQSxLQURZLENBRGhCO0FBSUUsYUFBUyxFQUFFO0FBQUVDLFVBQUksRUFBRSxRQUFSO0FBQWtCQyxRQUFFLEVBQUU7QUFBdEIsS0FKYjtBQUtFLGVBQVcsRUFBQyxNQUxkO0FBQUEsMkJBT0UscUVBQUMsdURBQUQ7QUFBQSxnQkFDR1IsVUFBVSxDQUFDUyxHQUFYLENBQWUsVUFBQ0gsUUFBRCxFQUFjO0FBQUEsWUFDcEJJLEdBRG9CLEdBQ0NKLFFBREQsQ0FDcEJJLEdBRG9CO0FBQUEsWUFDZkMsS0FEZSxHQUNDTCxRQURELENBQ2ZLLEtBRGU7QUFBQSxZQUNSUCxJQURRLEdBQ0NFLFFBREQsQ0FDUkYsSUFEUTtBQUU1Qiw0QkFDRSxxRUFBQyw2Q0FBRDtBQUFnQixjQUFJLHFCQUFjQSxJQUFkLENBQXBCO0FBQUEsaUNBQ0UscUVBQUMsbURBQUQ7QUFBSyx5QkFBYSxFQUFDLFdBQW5CO0FBQStCLHNCQUFVLEVBQUMsUUFBMUM7QUFBQSxzQkFDR087QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBV0QsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBT0QsT0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F6QkQ7O0dBQU1YLFE7VUFDV0cscUQ7OztLQURYSCxRO0FBMkJTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmxvZ1RhYnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgVGFiLCBUYWJMaXN0LCBUYWJzIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGFic1wiXG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCJcblxuY29uc3QgQmxvZ1RhYnMgPSAoeyBjYXRlZ29yaWVzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxUYWJzXG4gICAgICBkZWZhdWx0SW5kZXg9e2NhdGVnb3JpZXMuZmluZEluZGV4KFxuICAgICAgICAoeyBzbHVnIH0pID0+IHNsdWcgPT09IHJvdXRlci5xdWVyeS5jYXRlZ29yeVxuICAgICAgKX1cbiAgICAgIG92ZXJmbG93WD17eyBiYXNlOiBcInNjcm9sbFwiLCBtZDogXCJoaWRkZW5cIiB9fVxuICAgICAgY29sb3JTY2hlbWU9XCJjeWFuXCJcbiAgICA+XG4gICAgICA8VGFiTGlzdD5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgX2lkLCB0aXRsZSwgc2x1ZyB9ID0gY2F0ZWdvcnlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtfaWR9IGhyZWY9e2Avc3Rvcmllcy8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgIDxUYWIgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiIHdoaXRlU3BhY2U9XCJub3dyYXBcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L1RhYkxpc3Q+XG4gICAgPC9UYWJzPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dUYWJzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BlogTabs.js\n");

/***/ })

})