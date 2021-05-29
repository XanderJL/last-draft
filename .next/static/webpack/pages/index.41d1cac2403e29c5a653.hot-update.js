webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Hero */ \"./components/Hero.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/sanity */ \"./lib/sanity/index.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Link */ \"./components/Link.js\");\n/* harmony import */ var _components_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Forms/ContactForm */ \"./components/Forms/ContactForm.js\");\n/* harmony import */ var util_toPlainText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util/toPlainText */ \"./util/toPlainText.js\");\n\n\nvar _jsxFileName = \"/home/alexander/github/XanderJL/last-draft/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var _heroImage$metadata;\n\n  var data = _ref.data;\n  var heroImage = data.heroImage,\n      heroCard = data.heroCard,\n      cards = data.cards,\n      cardsTitle = data.cardsTitle,\n      contactHeading = data.contactHeading,\n      contactBody = data.contactBody,\n      testimonials = data.testimonials;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var interval = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    interval.current = setInterval(function () {\n      return setIndex(function (prev) {\n        var nextIndex = prev + 1;\n        return nextIndex > testimonials.length - 1 ? 0 : nextIndex;\n      });\n    }, 9000);\n    return function () {\n      return clearInterval(interval.current);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      placeholder: heroImage === null || heroImage === void 0 ? void 0 : (_heroImage$metadata = heroImage.metadata) === null || _heroImage$metadata === void 0 ? void 0 : _heroImage$metadata.lqip,\n      image: heroImage === null || heroImage === void 0 ? void 0 : heroImage.url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        maxW: \"container.xl\",\n        color: \"white\",\n        textShadow: \"2px 2px #000\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_sanity__WEBPACK_IMPORTED_MODULE_5__[\"PortableText\"], {\n          blocks: heroCard,\n          serializers: {\n            types: {\n              block: function block(props) {\n                var _props$node$style = props.node.style,\n                    style = _props$node$style === void 0 ? \"normal\" : _props$node$style;\n\n                switch (style) {\n                  case \"h1\":\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                      size: \"4xl\",\n                      textTransform: \"uppercase\",\n                      pb: \"0.5rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 63,\n                      columnNumber: 25\n                    }, _this);\n\n                  case \"h2\":\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                      as: \"h2\",\n                      size: \"xl\",\n                      textTransform: \"uppercase\",\n                      pb: \"0.5rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 25\n                    }, _this);\n\n                  default:\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                      pb: \"1rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 30\n                    }, _this);\n                }\n              }\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      maxW: \"container.xl\",\n      p: {\n        base: \"3rem 1.25rem\",\n        md: \"7rem 1.25rem\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"VStack\"], {\n        spacing: 4,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n          textAlign: \"center\",\n          textTransform: \"uppercase\",\n          children: cardsTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n          templateColumns: {\n            base: \"minmax(0, 1fr)\",\n            md: \"repeat(3, 1fr)\"\n          },\n          gap: 12,\n          children: cards.map(function (card) {\n            var _key = card._key,\n                title = card.title,\n                body = card.body,\n                service = card.service,\n                icon = card.icon;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"GridItem\"], {\n              textAlign: \"center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                href: \"/services/#\".concat(service.slug),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n                  direction: \"column\",\n                  justifyContent: \"center\",\n                  alignItems: \"center\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n                    boxSize: 125,\n                    viewBox: \"0 0 80 80\",\n                    m: 10,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"image\", {\n                      href: icon.url,\n                      height: \"80\",\n                      width: \"80\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 114,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 113,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                    as: \"h2\",\n                    size: \"md\",\n                    pb: 2,\n                    textAlign: \"center\",\n                    textTransform: \"uppercase\",\n                    children: title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 116,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 108,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 107,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_sanity__WEBPACK_IMPORTED_MODULE_5__[\"PortableText\"], {\n                blocks: body\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 19\n              }, _this)]\n            }, _key, true, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: \"./index/newsletter-header.jpg\",\n      minH: \"100vh\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        mx: \"auto\",\n        w: \"full\",\n        maxW: \"70ch\",\n        bg: \"blackAlpha.800\",\n        color: \"white\",\n        overflowX: \"hidden\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n          w: \"calc(100% * \".concat(testimonials.length, \")\"),\n          templateColumns: \"repeat(\".concat(testimonials.length, \", 1fr)\"),\n          transform: \"translateX(-\".concat(index / 4 * 100, \"%)\"),\n          transition: \"transform 1000ms ease-in-out\",\n          children: testimonials.map(function (test) {\n            var _id = test._id,\n                brandName = test.brandName,\n                brandRep = test.brandRep,\n                brandUrl = test.brandUrl,\n                repTitle = test.repTitle,\n                testimonial = test.testimonial;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n              p: \"3rem 2rem\",\n              textAlign: \"center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                fontStyle: \"italic\",\n                pb: \"1rem\",\n                children: Object(util_toPlainText__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(testimonial)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 160,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                href: brandUrl,\n                fontWeight: 600,\n                isExternal: true,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                  children: brandRep\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 164,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                  children: \"\".concat(brandName, \", \").concat(repTitle)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 165,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 163,\n                columnNumber: 19\n              }, _this)]\n            }, _id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, _this), testimonials.map(function (_, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n            boxSize: 4,\n            borderRadius: \"full\",\n            color: \"blackAlpha.800\",\n            onClick: function onClick() {\n              setIndex(i);\n              clearInterval(interval.current);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 172,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      maxW: \"container.xl\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: contactHeading,\n        body: contactBody\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 185,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ClbMwsSS6Y8gCPRrquaqhgFyo7w=\");\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGF0YSIsImhlcm9JbWFnZSIsImhlcm9DYXJkIiwiY2FyZHMiLCJjYXJkc1RpdGxlIiwiY29udGFjdEhlYWRpbmciLCJjb250YWN0Qm9keSIsInRlc3RpbW9uaWFscyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsImludGVydmFsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNldEludGVydmFsIiwicHJldiIsIm5leHRJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJtZXRhZGF0YSIsImxxaXAiLCJ1cmwiLCJ0eXBlcyIsImJsb2NrIiwicHJvcHMiLCJub2RlIiwic3R5bGUiLCJjaGlsZHJlbiIsImJhc2UiLCJtZCIsIm1hcCIsImNhcmQiLCJfa2V5IiwidGl0bGUiLCJib2R5Iiwic2VydmljZSIsImljb24iLCJzbHVnIiwidGVzdCIsIl9pZCIsImJyYW5kTmFtZSIsImJyYW5kUmVwIiwiYnJhbmRVcmwiLCJyZXBUaXRsZSIsInRlc3RpbW9uaWFsIiwidG9QbGFpblRleHQiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBOztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUFBLE1BRXZCQyxTQUZ1QixHQVNyQkQsSUFUcUIsQ0FFdkJDLFNBRnVCO0FBQUEsTUFHdkJDLFFBSHVCLEdBU3JCRixJQVRxQixDQUd2QkUsUUFIdUI7QUFBQSxNQUl2QkMsS0FKdUIsR0FTckJILElBVHFCLENBSXZCRyxLQUp1QjtBQUFBLE1BS3ZCQyxVQUx1QixHQVNyQkosSUFUcUIsQ0FLdkJJLFVBTHVCO0FBQUEsTUFNdkJDLGNBTnVCLEdBU3JCTCxJQVRx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Q0FBQ1IsUUFBUSxDQUFDRyxPQUFWLENBQWI7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUEsU0FBakIsQ0FwQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBGRixlQXNJRSxxRUFBQywwREFBRDtBQUFXLFVBQUksRUFBQyxjQUFoQjtBQUFBLDZCQUNFLHFFQUFDLHFFQUFEO0FBQWEsYUFBSyxFQUFFVCxjQUFwQjtBQUFvQyxZQUFJLEVBQUVDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdElGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNElELENBdEtEOztHQUFNUCxJOztLQUFBQSxJOztBQWlOU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBncm9xIH0gZnJvbSBcIm5leHQtc2FuaXR5XCJcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCJAbGliL3Nhbml0eS9zYW5pdHkuc2VydmVyXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgSGVybyBmcm9tIFwiQGNvbXBvbmVudHMvSGVyb1wiXG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBGbGV4LFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgSGVhZGluZyxcbiAgSWNvbixcbiAgVGV4dCxcbiAgVlN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQGxpYi9zYW5pdHlcIlxuaW1wb3J0IExpbmsgZnJvbSBcIkBjb21wb25lbnRzL0xpbmtcIlxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCJAY29tcG9uZW50cy9Gb3Jtcy9Db250YWN0Rm9ybVwiXG5pbXBvcnQgdG9QbGFpblRleHQgZnJvbSBcInV0aWwvdG9QbGFpblRleHRcIlxuXG5jb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBoZXJvSW1hZ2UsXG4gICAgaGVyb0NhcmQsXG4gICAgY2FyZHMsXG4gICAgY2FyZHNUaXRsZSxcbiAgICBjb250YWN0SGVhZGluZyxcbiAgICBjb250YWN0Qm9keSxcbiAgICB0ZXN0aW1vbmlhbHMsXG4gIH0gPSBkYXRhXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgaW50ZXJ2YWwgPSB1c2VSZWYoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW50ZXJ2YWwuY3VycmVudCA9IHNldEludGVydmFsKFxuICAgICAgKCkgPT5cbiAgICAgICAgc2V0SW5kZXgoKHByZXYpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBwcmV2ICsgMVxuICAgICAgICAgIHJldHVybiBuZXh0SW5kZXggPiB0ZXN0aW1vbmlhbHMubGVuZ3RoIC0gMSA/IDAgOiBuZXh0SW5kZXhcbiAgICAgICAgfSksXG4gICAgICA5MDAwXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwuY3VycmVudClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlcm8gcGxhY2Vob2xkZXI9e2hlcm9JbWFnZT8ubWV0YWRhdGE/LmxxaXB9IGltYWdlPXtoZXJvSW1hZ2U/LnVybH0+XG4gICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIGNvbG9yPVwid2hpdGVcIiB0ZXh0U2hhZG93PVwiMnB4IDJweCAjMDAwXCI+XG4gICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgYmxvY2tzPXtoZXJvQ2FyZH1cbiAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXt7XG4gICAgICAgICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICAgICAgYmxvY2s6IChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdHlsZSA9IFwibm9ybWFsXCIgfSA9IHByb3BzLm5vZGVcblxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaDFcIjpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjR4bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYj1cIjAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMlwiOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBiPVwiMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgcGI9XCIxcmVtXCI+e3Byb3BzLmNoaWxkcmVufTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvSGVybz5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgbWF4Vz1cImNvbnRhaW5lci54bFwiXG4gICAgICAgIHA9e3sgYmFzZTogXCIzcmVtIDEuMjVyZW1cIiwgbWQ6IFwiN3JlbSAxLjI1cmVtXCIgfX1cbiAgICAgID5cbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICA8SGVhZGluZyB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+XG4gICAgICAgICAgICB7Y2FyZHNUaXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz17eyBiYXNlOiBcIm1pbm1heCgwLCAxZnIpXCIsIG1kOiBcInJlcGVhdCgzLCAxZnIpXCIgfX1cbiAgICAgICAgICAgIGdhcD17MTJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IF9rZXksIHRpdGxlLCBib2R5LCBzZXJ2aWNlLCBpY29uIH0gPSBjYXJkXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGtleT17X2tleX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3NlcnZpY2VzLyMke3NlcnZpY2Uuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGJveFNpemU9ezEyNX0gdmlld0JveD1cIjAgMCA4MCA4MFwiIG09ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBocmVmPXtpY29uLnVybH0gaGVpZ2h0PVwiODBcIiB3aWR0aD1cIjgwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBiPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgYmxvY2tzPXtib2R5fSAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxIZXJvIGltYWdlPVwiLi9pbmRleC9uZXdzbGV0dGVyLWhlYWRlci5qcGdcIiBtaW5IPVwiMTAwdmhcIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIG14PVwiYXV0b1wiXG4gICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgIG1heFc9XCI3MGNoXCJcbiAgICAgICAgICBiZz1cImJsYWNrQWxwaGEuODAwXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBvdmVyZmxvd1g9XCJoaWRkZW5cIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIHc9e2BjYWxjKDEwMCUgKiAke3Rlc3RpbW9uaWFscy5sZW5ndGh9KWB9XG4gICAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e2ByZXBlYXQoJHt0ZXN0aW1vbmlhbHMubGVuZ3RofSwgMWZyKWB9XG4gICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGVYKC0keyhpbmRleCAvIDQpICogMTAwfSUpYH1cbiAgICAgICAgICAgIHRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgX2lkLFxuICAgICAgICAgICAgICAgIGJyYW5kTmFtZSxcbiAgICAgICAgICAgICAgICBicmFuZFJlcCxcbiAgICAgICAgICAgICAgICBicmFuZFVybCxcbiAgICAgICAgICAgICAgICByZXBUaXRsZSxcbiAgICAgICAgICAgICAgICB0ZXN0aW1vbmlhbCxcbiAgICAgICAgICAgICAgfSA9IHRlc3RcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17X2lkfSBwPVwiM3JlbSAycmVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBmb250U3R5bGU9XCJpdGFsaWNcIiBwYj1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICAgICAge3RvUGxhaW5UZXh0KHRlc3RpbW9uaWFsKX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2JyYW5kVXJsfSBmb250V2VpZ2h0PXs2MDB9IGlzRXh0ZXJuYWw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PnticmFuZFJlcH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PntgJHticmFuZE5hbWV9LCAke3JlcFRpdGxlfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgYm94U2l6ZT17NH1cbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tBbHBoYS44MDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SW5kZXgoaSlcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsLmN1cnJlbnQpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvSGVybz5cbiAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiPlxuICAgICAgICA8Q29udGFjdEZvcm0gdGl0bGU9e2NvbnRhY3RIZWFkaW5nfSBib2R5PXtjb250YWN0Qm9keX0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmNvbnN0IGhvbWVQYWdlUXVlcnkgPSBncm9xYFxuICAqW190eXBlID09IFwiaW5kZXhQYWdlXCJde1xuICAgIHRpdGxlLFxuICAgIG1ldGFEZXNjcmlwdGlvbixcbiAgICBoZXJvQ2FyZCxcbiAgICBjb250YWN0SGVhZGluZyxcbiAgICBjb250YWN0Qm9keSxcbiAgICBcImhlcm9JbWFnZVwiOiBoZXJvSW1hZ2UuYXNzZXQtPntcbiAgICAgIHVybCxcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0sXG4gICAgY2FyZHNUaXRsZSxcbiAgICBjYXJkc1tde1xuICAgICAgX2tleSxcbiAgICAgIHRpdGxlLFxuICAgICAgYm9keSxcbiAgICAgIFwiaWNvblwiOiBpY29uLmFzc2V0LT57XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICB9LFxuICAgICAgc2VydmljZS0+e1xuICAgICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRlc3RpbW9uaWFsc1tdLT57XG4gICAgICB0ZXN0aW1vbmlhbCxcbiAgICAgIGJyYW5kTmFtZSxcbiAgICAgIGJyYW5kUmVwLFxuICAgICAgcmVwVGl0bGUsXG4gICAgICBicmFuZFVybCxcbiAgICAgIF9pZFxuICAgIH0sXG4gIH1bMF1cbmBcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goaG9tZVBhZ2VRdWVyeSlcblxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})