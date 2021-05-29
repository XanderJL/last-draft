webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Hero */ \"./components/Hero.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/sanity */ \"./lib/sanity/index.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Link */ \"./components/Link.js\");\n/* harmony import */ var _components_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Forms/ContactForm */ \"./components/Forms/ContactForm.js\");\n/* harmony import */ var util_toPlainText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util/toPlainText */ \"./util/toPlainText.js\");\n\n\nvar _jsxFileName = \"/home/alexander/github/XanderJL/last-draft/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var _heroImage$metadata;\n\n  var data = _ref.data;\n  var heroImage = data.heroImage,\n      heroCard = data.heroCard,\n      cards = data.cards,\n      cardsTitle = data.cardsTitle,\n      contactHeading = data.contactHeading,\n      contactBody = data.contactBody,\n      testimonials = data.testimonials;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var interval = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    interval.current = setInterval(function () {\n      return setIndex(function (prev) {\n        var nextIndex = prev + 1;\n        return nextIndex > testimonials.length - 1 ? 0 : nextIndex;\n      });\n    }, 9000);\n    return function () {\n      return clearInterval(interval.current);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      placeholder: heroImage === null || heroImage === void 0 ? void 0 : (_heroImage$metadata = heroImage.metadata) === null || _heroImage$metadata === void 0 ? void 0 : _heroImage$metadata.lqip,\n      image: heroImage === null || heroImage === void 0 ? void 0 : heroImage.url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        maxW: \"container.xl\",\n        color: \"white\",\n        textShadow: \"2px 2px #000\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_sanity__WEBPACK_IMPORTED_MODULE_5__[\"PortableText\"], {\n          blocks: heroCard,\n          serializers: {\n            types: {\n              block: function block(props) {\n                var _props$node$style = props.node.style,\n                    style = _props$node$style === void 0 ? \"normal\" : _props$node$style;\n\n                switch (style) {\n                  case \"h1\":\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                      size: \"4xl\",\n                      textTransform: \"uppercase\",\n                      pb: \"0.5rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 64,\n                      columnNumber: 25\n                    }, _this);\n\n                  case \"h2\":\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                      as: \"h2\",\n                      size: \"xl\",\n                      textTransform: \"uppercase\",\n                      pb: \"0.5rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 74,\n                      columnNumber: 25\n                    }, _this);\n\n                  default:\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                      pb: \"1rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 84,\n                      columnNumber: 30\n                    }, _this);\n                }\n              }\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      maxW: \"container.xl\",\n      p: {\n        base: \"3rem 1.25rem\",\n        md: \"7rem 1.25rem\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"VStack\"], {\n        spacing: 4,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n          textAlign: \"center\",\n          textTransform: \"uppercase\",\n          children: cardsTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n          templateColumns: {\n            base: \"minmax(0, 1fr)\",\n            md: \"repeat(3, 1fr)\"\n          },\n          gap: 12,\n          children: cards.map(function (card) {\n            var _key = card._key,\n                title = card.title,\n                body = card.body,\n                service = card.service,\n                icon = card.icon;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"GridItem\"], {\n              textAlign: \"center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                href: \"/services/#\".concat(service.slug),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n                  direction: \"column\",\n                  justifyContent: \"center\",\n                  alignItems: \"center\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n                    boxSize: 125,\n                    viewBox: \"0 0 80 80\",\n                    m: 10,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"image\", {\n                      href: icon.url,\n                      height: \"80\",\n                      width: \"80\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 115,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 114,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                    as: \"h2\",\n                    size: \"md\",\n                    pb: 2,\n                    textAlign: \"center\",\n                    textTransform: \"uppercase\",\n                    children: title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 117,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 109,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_sanity__WEBPACK_IMPORTED_MODULE_5__[\"PortableText\"], {\n                blocks: body\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 128,\n                columnNumber: 19\n              }, _this)]\n            }, _key, true, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: \"./index/newsletter-header.jpg\",\n      minH: \"100vh\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        mx: \"auto\",\n        w: \"full\",\n        maxW: \"70ch\",\n        bg: \"blackAlpha.800\",\n        color: \"white\",\n        overflowX: \"hidden\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n          w: \"calc(100% * \".concat(testimonials.length, \")\"),\n          templateColumns: \"repeat(\".concat(testimonials.length, \", 1fr)\"),\n          transform: \"translateX(-\".concat(index / testimonials.length * 100, \"%)\"),\n          transition: \"transform 1000ms ease-in-out\",\n          children: testimonials.map(function (test) {\n            var _id = test._id,\n                brandName = test.brandName,\n                brandRep = test.brandRep,\n                brandUrl = test.brandUrl,\n                repTitle = test.repTitle,\n                testimonial = test.testimonial;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n              textAlign: \"center\",\n              p: \"3rem 2rem\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                fontStyle: \"italic\",\n                pb: \"1rem\",\n                children: Object(util_toPlainText__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(testimonial)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 161,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                href: brandUrl,\n                fontWeight: 600,\n                isExternal: true,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                  children: brandRep\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 165,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                  children: \"\".concat(brandName, \", \").concat(repTitle)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 166,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 164,\n                columnNumber: 19\n              }, _this)]\n            }, _id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 160,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"HStack\"], {\n          spacing: 4,\n          justify: \"center\",\n          children: testimonials.map(function (_, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n              w: 2,\n              h: 2,\n              bg: \"gray.500\",\n              borderRadius: \"full\",\n              as: \"button\",\n              onClick: function onClick() {\n                setIndex(i);\n                clearInterval(interval.current);\n              },\n              _after: {\n                content: \"''\",\n                boxSize: 4,\n                borderRadius: \"full\"\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 174,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      maxW: \"container.xl\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: contactHeading,\n        body: contactBody\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ClbMwsSS6Y8gCPRrquaqhgFyo7w=\");\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGF0YSIsImhlcm9JbWFnZSIsImhlcm9DYXJkIiwiY2FyZHMiLCJjYXJkc1RpdGxlIiwiY29udGFjdEhlYWRpbmciLCJjb250YWN0Qm9keSIsInRlc3RpbW9uaWFscyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsImludGVydmFsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNldEludGVydmFsIiwicHJldiIsIm5leHRJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJtZXRhZGF0YSIsImxxaXAiLCJ1cmwiLCJ0eXBlcyIsImJsb2NrIiwicHJvcHMiLCJub2RlIiwic3R5bGUiLCJjaGlsZHJlbiIsImJhc2UiLCJtZCIsIm1hcCIsImNhcmQiLCJfa2V5IiwidGl0bGUiLCJib2R5Iiwic2VydmljZSIsImljb24iLCJzbHVnIiwidGVzdCIsIl9pZCIsImJyYW5kTmFtZSIsImJyYW5kUmVwIiwiYnJhbmRVcmwiLCJyZXBUaXRsZSIsInRlc3RpbW9uaWFsIiwidG9QbGFpblRleHQiLCJfIiwiaSIsImNvbnRlbnQiLCJib3hTaXplIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFFdkJDLFNBRnVCLEdBU3JCRCxJQVRxQixDQUV2QkMsU0FGdUI7QUFBQSxNQUd2QkMsUUFIdUIsR0FTckJGLElBVHFCLENBR3ZCRSxRQUh1QjtBQUFBLE1BSXZCQyxLQUp1QixHQVNyQkgsSUFUcUIsQ0FJdkJHLEtBSnVCO0FBQUEsTUFLdkJDLFVBTHVCLEdBU3JCSixJQVRxQixDQUt2Qkks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QUUsQ0FETDtBQUVFLGVBQUMsRUFBRSxDQUZMO0FBR0UsZ0JBQUUsRUFBQyxVQUhMO0FBSUUsMEJBQVksRUFBQyxNQUpmO0FBS0UsZ0JBQUUsRUFBQyxRQUxMO0FBTUUscUJBQU8sRUFBRSxtQkFBTTtBQUNidEMsd0JBQVEsQ0FBQ3NDLENBQUQsQ0FBUjtBQUNBN0IsNkJBQWEsQ0FBQ1IsUUFBUSxDQUFDRyxPQUFWLENBQWI7QUFDRCxlQVRIO0FBVUUsb0JBQU0sRUFBRTtBQUNObUMsdUJBQU8sRUFBRSxJQURIO0FBRU5DLHVCQUFPLEVBQUUsQ0FGSDtBQUdOQyw0QkFBWSxFQUFFO0FBSFI7QUFWVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURnQjtBQUFBLFdBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBGRixlQStJRSxxRUFBQywwREFBRDtBQUFXLFVBQUksRUFBQyxjQUFoQjtBQUFBLDZCQUNFLHFFQUFDLHFFQUFEO0FBQWEsYUFBSyxFQUFFOUMsY0FBcEI7QUFBb0MsWUFBSSxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9JRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFKRCxDQS9LRDs7R0FBTVAsSTs7S0FBQUEsSTs7QUEwTlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZ3JvcSB9IGZyb20gXCJuZXh0LXNhbml0eVwiXG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiQGxpYi9zYW5pdHkvc2FuaXR5LnNlcnZlclwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IEhlcm8gZnJvbSBcIkBjb21wb25lbnRzL0hlcm9cIlxuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgR3JpZCxcbiAgR3JpZEl0ZW0sXG4gIEhlYWRpbmcsXG4gIEhTdGFjayxcbiAgSWNvbixcbiAgVGV4dCxcbiAgVlN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQGxpYi9zYW5pdHlcIlxuaW1wb3J0IExpbmsgZnJvbSBcIkBjb21wb25lbnRzL0xpbmtcIlxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCJAY29tcG9uZW50cy9Gb3Jtcy9Db250YWN0Rm9ybVwiXG5pbXBvcnQgdG9QbGFpblRleHQgZnJvbSBcInV0aWwvdG9QbGFpblRleHRcIlxuXG5jb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBoZXJvSW1hZ2UsXG4gICAgaGVyb0NhcmQsXG4gICAgY2FyZHMsXG4gICAgY2FyZHNUaXRsZSxcbiAgICBjb250YWN0SGVhZGluZyxcbiAgICBjb250YWN0Qm9keSxcbiAgICB0ZXN0aW1vbmlhbHMsXG4gIH0gPSBkYXRhXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgaW50ZXJ2YWwgPSB1c2VSZWYoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW50ZXJ2YWwuY3VycmVudCA9IHNldEludGVydmFsKFxuICAgICAgKCkgPT5cbiAgICAgICAgc2V0SW5kZXgoKHByZXYpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBwcmV2ICsgMVxuICAgICAgICAgIHJldHVybiBuZXh0SW5kZXggPiB0ZXN0aW1vbmlhbHMubGVuZ3RoIC0gMSA/IDAgOiBuZXh0SW5kZXhcbiAgICAgICAgfSksXG4gICAgICA5MDAwXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwuY3VycmVudClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlcm8gcGxhY2Vob2xkZXI9e2hlcm9JbWFnZT8ubWV0YWRhdGE/LmxxaXB9IGltYWdlPXtoZXJvSW1hZ2U/LnVybH0+XG4gICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIGNvbG9yPVwid2hpdGVcIiB0ZXh0U2hhZG93PVwiMnB4IDJweCAjMDAwXCI+XG4gICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgYmxvY2tzPXtoZXJvQ2FyZH1cbiAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXt7XG4gICAgICAgICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICAgICAgYmxvY2s6IChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdHlsZSA9IFwibm9ybWFsXCIgfSA9IHByb3BzLm5vZGVcblxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaDFcIjpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjR4bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYj1cIjAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMlwiOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBiPVwiMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgcGI9XCIxcmVtXCI+e3Byb3BzLmNoaWxkcmVufTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvSGVybz5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgbWF4Vz1cImNvbnRhaW5lci54bFwiXG4gICAgICAgIHA9e3sgYmFzZTogXCIzcmVtIDEuMjVyZW1cIiwgbWQ6IFwiN3JlbSAxLjI1cmVtXCIgfX1cbiAgICAgID5cbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICA8SGVhZGluZyB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+XG4gICAgICAgICAgICB7Y2FyZHNUaXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz17eyBiYXNlOiBcIm1pbm1heCgwLCAxZnIpXCIsIG1kOiBcInJlcGVhdCgzLCAxZnIpXCIgfX1cbiAgICAgICAgICAgIGdhcD17MTJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IF9rZXksIHRpdGxlLCBib2R5LCBzZXJ2aWNlLCBpY29uIH0gPSBjYXJkXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIGtleT17X2tleX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3NlcnZpY2VzLyMke3NlcnZpY2Uuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGJveFNpemU9ezEyNX0gdmlld0JveD1cIjAgMCA4MCA4MFwiIG09ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBocmVmPXtpY29uLnVybH0gaGVpZ2h0PVwiODBcIiB3aWR0aD1cIjgwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBiPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgYmxvY2tzPXtib2R5fSAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxIZXJvIGltYWdlPVwiLi9pbmRleC9uZXdzbGV0dGVyLWhlYWRlci5qcGdcIiBtaW5IPVwiMTAwdmhcIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIG14PVwiYXV0b1wiXG4gICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgIG1heFc9XCI3MGNoXCJcbiAgICAgICAgICBiZz1cImJsYWNrQWxwaGEuODAwXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBvdmVyZmxvd1g9XCJoaWRkZW5cIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIHc9e2BjYWxjKDEwMCUgKiAke3Rlc3RpbW9uaWFscy5sZW5ndGh9KWB9XG4gICAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e2ByZXBlYXQoJHt0ZXN0aW1vbmlhbHMubGVuZ3RofSwgMWZyKWB9XG4gICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGVYKC0keyhpbmRleCAvIHRlc3RpbW9uaWFscy5sZW5ndGgpICogMTAwfSUpYH1cbiAgICAgICAgICAgIHRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgX2lkLFxuICAgICAgICAgICAgICAgIGJyYW5kTmFtZSxcbiAgICAgICAgICAgICAgICBicmFuZFJlcCxcbiAgICAgICAgICAgICAgICBicmFuZFVybCxcbiAgICAgICAgICAgICAgICByZXBUaXRsZSxcbiAgICAgICAgICAgICAgICB0ZXN0aW1vbmlhbCxcbiAgICAgICAgICAgICAgfSA9IHRlc3RcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17X2lkfSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBwPVwiM3JlbSAycmVtXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBmb250U3R5bGU9XCJpdGFsaWNcIiBwYj1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICAgICAge3RvUGxhaW5UZXh0KHRlc3RpbW9uaWFsKX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2JyYW5kVXJsfSBmb250V2VpZ2h0PXs2MDB9IGlzRXh0ZXJuYWw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PnticmFuZFJlcH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PntgJHticmFuZE5hbWV9LCAke3JlcFRpdGxlfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgdz17Mn1cbiAgICAgICAgICAgICAgICBoPXsyfVxuICAgICAgICAgICAgICAgIGJnPVwiZ3JheS41MDBcIlxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRJbmRleChpKVxuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbC5jdXJyZW50KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgX2FmdGVyPXt7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICAgICAgICAgICAgICBib3hTaXplOiA0LFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcImZ1bGxcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9IZXJvPlxuICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLnhsXCI+XG4gICAgICAgIDxDb250YWN0Rm9ybSB0aXRsZT17Y29udGFjdEhlYWRpbmd9IGJvZHk9e2NvbnRhY3RCb2R5fSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuY29uc3QgaG9tZVBhZ2VRdWVyeSA9IGdyb3FgXG4gICpbX3R5cGUgPT0gXCJpbmRleFBhZ2VcIl17XG4gICAgdGl0bGUsXG4gICAgbWV0YURlc2NyaXB0aW9uLFxuICAgIGhlcm9DYXJkLFxuICAgIGNvbnRhY3RIZWFkaW5nLFxuICAgIGNvbnRhY3RCb2R5LFxuICAgIFwiaGVyb0ltYWdlXCI6IGhlcm9JbWFnZS5hc3NldC0+e1xuICAgICAgdXJsLFxuICAgICAgbWV0YWRhdGEsXG4gICAgfSxcbiAgICBjYXJkc1RpdGxlLFxuICAgIGNhcmRzW117XG4gICAgICBfa2V5LFxuICAgICAgdGl0bGUsXG4gICAgICBib2R5LFxuICAgICAgXCJpY29uXCI6IGljb24uYXNzZXQtPntcbiAgICAgICAgdXJsLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgIH0sXG4gICAgICBzZXJ2aWNlLT57XG4gICAgICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGVzdGltb25pYWxzW10tPntcbiAgICAgIHRlc3RpbW9uaWFsLFxuICAgICAgYnJhbmROYW1lLFxuICAgICAgYnJhbmRSZXAsXG4gICAgICByZXBUaXRsZSxcbiAgICAgIGJyYW5kVXJsLFxuICAgICAgX2lkXG4gICAgfSxcbiAgfVswXVxuYFxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChob21lUGFnZVF1ZXJ5KVxuXG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})