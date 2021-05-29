webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Hero */ \"./components/Hero.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/sanity */ \"./lib/sanity/index.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Link */ \"./components/Link.js\");\n/* harmony import */ var _components_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Forms/ContactForm */ \"./components/Forms/ContactForm.js\");\n/* harmony import */ var util_toPlainText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util/toPlainText */ \"./util/toPlainText.js\");\n\n\nvar _jsxFileName = \"/home/alexander/github/XanderJL/last-draft/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var _heroImage$metadata;\n\n  var data = _ref.data;\n  var heroImage = data.heroImage,\n      heroCard = data.heroCard,\n      cards = data.cards,\n      cardsTitle = data.cardsTitle,\n      contactHeading = data.contactHeading,\n      contactBody = data.contactBody,\n      testimonials = data.testimonials;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var interval = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    interval.current = setInterval(function () {\n      return setIndex(function (prev) {\n        var nextIndex = prev + 1;\n        return nextIndex > testimonials.length - 1 ? 0 : nextIndex;\n      });\n    }, 9000);\n    return function () {\n      return clearInterval(interval.current);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      placeholder: heroImage === null || heroImage === void 0 ? void 0 : (_heroImage$metadata = heroImage.metadata) === null || _heroImage$metadata === void 0 ? void 0 : _heroImage$metadata.lqip,\n      image: heroImage === null || heroImage === void 0 ? void 0 : heroImage.url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        maxW: \"container.xl\",\n        color: \"white\",\n        textShadow: \"2px 2px #000\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_sanity__WEBPACK_IMPORTED_MODULE_5__[\"PortableText\"], {\n          blocks: heroCard,\n          serializers: {\n            types: {\n              block: function block(props) {\n                var _props$node$style = props.node.style,\n                    style = _props$node$style === void 0 ? \"normal\" : _props$node$style;\n\n                switch (style) {\n                  case \"h1\":\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                      size: \"4xl\",\n                      textTransform: \"uppercase\",\n                      pb: \"0.5rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 63,\n                      columnNumber: 25\n                    }, _this);\n\n                  case \"h2\":\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                      as: \"h2\",\n                      size: \"xl\",\n                      textTransform: \"uppercase\",\n                      pb: \"0.5rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 25\n                    }, _this);\n\n                  default:\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                      pb: \"1rem\",\n                      children: props.children\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 30\n                    }, _this);\n                }\n              }\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      maxW: \"container.xl\",\n      p: {\n        base: \"3rem 1.25rem\",\n        md: \"7rem 1.25rem\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"VStack\"], {\n        spacing: 4,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n          textAlign: \"center\",\n          textTransform: \"uppercase\",\n          children: cardsTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n          templateColumns: {\n            base: \"minmax(0, 1fr)\",\n            md: \"repeat(3, 1fr)\"\n          },\n          gap: 12,\n          children: cards.map(function (card) {\n            var _key = card._key,\n                title = card.title,\n                body = card.body,\n                service = card.service,\n                icon = card.icon;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"GridItem\"], {\n              textAlign: \"center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                href: \"/services/#\".concat(service.slug),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n                  direction: \"column\",\n                  justifyContent: \"center\",\n                  alignItems: \"center\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n                    boxSize: 125,\n                    viewBox: \"0 0 80 80\",\n                    m: 10,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"image\", {\n                      href: icon.url,\n                      height: \"80\",\n                      width: \"80\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 114,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 113,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n                    as: \"h2\",\n                    size: \"md\",\n                    pb: 2,\n                    textAlign: \"center\",\n                    textTransform: \"uppercase\",\n                    children: title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 116,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 108,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 107,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_sanity__WEBPACK_IMPORTED_MODULE_5__[\"PortableText\"], {\n                blocks: body\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 19\n              }, _this)]\n            }, _key, true, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: \"./index/newsletter-header.jpg\",\n      minH: \"100vh\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        mx: \"auto\",\n        w: \"full\",\n        maxW: \"70ch\",\n        bg: \"blackAlpha.800\",\n        color: \"white\",\n        overflowX: \"hidden\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n          w: \"calc(100% * \".concat(testimonials.length, \")\"),\n          templateColumns: \"repeat(\".concat(testimonials.length, \", 1fr)\"),\n          transform: \"translateX(-\".concat(index / 4 * 100, \"%)\"),\n          transition: \"transform 1000ms ease-in-out\",\n          children: testimonials.map(function (test) {\n            var _id = test._id,\n                brandName = test.brandName,\n                brandRep = test.brandRep,\n                brandUrl = test.brandUrl,\n                repTitle = test.repTitle,\n                testimonial = test.testimonial;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n              p: \"3rem 2rem\",\n              textAlign: \"center\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                fontStyle: \"italic\",\n                pb: \"1rem\",\n                children: Object(util_toPlainText__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(testimonial)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 160,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                href: brandUrl,\n                fontWeight: 600,\n                isExternal: true,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                  children: brandRep\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 164,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n                  children: \"\".concat(brandName, \", \").concat(repTitle)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 165,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 163,\n                columnNumber: 19\n              }, _this)]\n            }, _id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, _this), testimonials.map(function (_, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            w: 4,\n            h: 4,\n            bg: \"gray.700\",\n            as: \"button\",\n            onClick: function onClick() {\n              setIndex(i);\n              clearInterval(interval.current);\n            },\n            _after: {\n              content: \"''\",\n              boxSize: 4,\n              borderRadius: \"full\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 172,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      maxW: \"container.xl\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: contactHeading,\n        body: contactBody\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ClbMwsSS6Y8gCPRrquaqhgFyo7w=\");\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGF0YSIsImhlcm9JbWFnZSIsImhlcm9DYXJkIiwiY2FyZHMiLCJjYXJkc1RpdGxlIiwiY29udGFjdEhlYWRpbmciLCJjb250YWN0Qm9keSIsInRlc3RpbW9uaWFscyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsImludGVydmFsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNldEludGVydmFsIiwicHJldiIsIm5leHRJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJtZXRhZGF0YSIsImxxaXAiLCJ1cmwiLCJ0eXBlcyIsImJsb2NrIiwicHJvcHMiLCJub2RlIiwic3R5bGUiLCJjaGlsZHJlbiIsImJhc2UiLCJtZCIsIm1hcCIsImNhcmQiLCJfa2V5IiwidGl0bGUiLCJib2R5Iiwic2VydmljZSIsImljb24iLCJzbHVnIiwidGVzdCIsIl9pZCIsImJyYW5kTmFtZSIsImJyYW5kUmVwIiwiYnJhbmRVcmwiLCJyZXBUaXRsZSIsInRlc3RpbW9uaWFsIiwidG9QbGFpblRleHQiLCJfIiwiaSIsImNvbnRlbnQiLCJib3hTaXplIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFFdkJDLFNBRnVCLEdBU3JCRCxJQVRxQixDQUV2QkMsU0FGdUI7QUFBQSxNQUd2QkMsUUFIdUIsR0FTckJGLElBVHFCLENBR3ZCRSxRQUh1QjtBQUFBLE1BSXZCQyxLQUp1QixHQVNyQkgsSUFUcUIsQ0FJdkJHLEtBSnVCO0FBQUEsTUFLdkJDLFVBTHVCLEdBU3JCSixJQVRxQixDQUt2Qkks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RSxtQkFBTTtBQUNidEMsc0JBQVEsQ0FBQ3NDLENBQUQsQ0FBUjtBQUNBN0IsMkJBQWEsQ0FBQ1IsUUFBUSxDQUFDRyxPQUFWLENBQWI7QUFDRCxhQVJIO0FBU0Usa0JBQU0sRUFBRTtBQUNObUMscUJBQU8sRUFBRSxJQURIO0FBRU5DLHFCQUFPLEVBQUUsQ0FGSDtBQUdOQywwQkFBWSxFQUFFO0FBSFI7QUFUVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBLFNBQWpCLENBcENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwRkYsZUE0SUUscUVBQUMsMERBQUQ7QUFBVyxVQUFJLEVBQUMsY0FBaEI7QUFBQSw2QkFDRSxxRUFBQyxxRUFBRDtBQUFhLGFBQUssRUFBRTlDLGNBQXBCO0FBQW9DLFlBQUksRUFBRUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1SUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrSkQsQ0E1S0Q7O0dBQU1QLEk7O0tBQUFBLEk7O0FBdU5TQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGdyb3EgfSBmcm9tIFwibmV4dC1zYW5pdHlcIlxuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIkBsaWIvc2FuaXR5L3Nhbml0eS5zZXJ2ZXJcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCBIZXJvIGZyb20gXCJAY29tcG9uZW50cy9IZXJvXCJcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIEZsZXgsXG4gIEdyaWQsXG4gIEdyaWRJdGVtLFxuICBIZWFkaW5nLFxuICBJY29uLFxuICBUZXh0LFxuICBWU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAbGliL3Nhbml0eVwiXG5pbXBvcnQgTGluayBmcm9tIFwiQGNvbXBvbmVudHMvTGlua1wiXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIkBjb21wb25lbnRzL0Zvcm1zL0NvbnRhY3RGb3JtXCJcbmltcG9ydCB0b1BsYWluVGV4dCBmcm9tIFwidXRpbC90b1BsYWluVGV4dFwiXG5cbmNvbnN0IEhvbWUgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGhlcm9JbWFnZSxcbiAgICBoZXJvQ2FyZCxcbiAgICBjYXJkcyxcbiAgICBjYXJkc1RpdGxlLFxuICAgIGNvbnRhY3RIZWFkaW5nLFxuICAgIGNvbnRhY3RCb2R5LFxuICAgIHRlc3RpbW9uaWFscyxcbiAgfSA9IGRhdGFcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBpbnRlcnZhbCA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnRlcnZhbC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoXG4gICAgICAoKSA9PlxuICAgICAgICBzZXRJbmRleCgocHJldikgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHByZXYgKyAxXG4gICAgICAgICAgcmV0dXJuIG5leHRJbmRleCA+IHRlc3RpbW9uaWFscy5sZW5ndGggLSAxID8gMCA6IG5leHRJbmRleFxuICAgICAgICB9KSxcbiAgICAgIDkwMDBcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbC5jdXJyZW50KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVybyBwbGFjZWhvbGRlcj17aGVyb0ltYWdlPy5tZXRhZGF0YT8ubHFpcH0gaW1hZ2U9e2hlcm9JbWFnZT8udXJsfT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLnhsXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHRTaGFkb3c9XCIycHggMnB4ICMwMDBcIj5cbiAgICAgICAgICA8UG9ydGFibGVUZXh0XG4gICAgICAgICAgICBibG9ja3M9e2hlcm9DYXJkfVxuICAgICAgICAgICAgc2VyaWFsaXplcnM9e3tcbiAgICAgICAgICAgICAgdHlwZXM6IHtcbiAgICAgICAgICAgICAgICBibG9jazogKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHN0eWxlID0gXCJub3JtYWxcIiB9ID0gcHJvcHMubm9kZVxuXG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMVwiOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiNHhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBiPVwiMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImgyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGI9XCIwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBwYj1cIjFyZW1cIj57cHJvcHMuY2hpbGRyZW59PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9IZXJvPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtYXhXPVwiY29udGFpbmVyLnhsXCJcbiAgICAgICAgcD17eyBiYXNlOiBcIjNyZW0gMS4yNXJlbVwiLCBtZDogXCI3cmVtIDEuMjVyZW1cIiB9fVxuICAgICAgPlxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICAgIDxIZWFkaW5nIHRleHRBbGlnbj1cImNlbnRlclwiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgIHtjYXJkc1RpdGxlfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPXt7IGJhc2U6IFwibWlubWF4KDAsIDFmcilcIiwgbWQ6IFwicmVwZWF0KDMsIDFmcilcIiB9fVxuICAgICAgICAgICAgZ2FwPXsxMn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgX2tleSwgdGl0bGUsIGJvZHksIHNlcnZpY2UsIGljb24gfSA9IGNhcmRcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0ga2V5PXtfa2V5fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2VydmljZXMvIyR7c2VydmljZS5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gYm94U2l6ZT17MTI1fSB2aWV3Qm94PVwiMCAwIDgwIDgwXCIgbT17MTB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltYWdlIGhyZWY9e2ljb24udXJsfSBoZWlnaHQ9XCI4MFwiIHdpZHRoPVwiODBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJoMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGI9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dCBibG9ja3M9e2JvZHl9IC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEhlcm8gaW1hZ2U9XCIuL2luZGV4L25ld3NsZXR0ZXItaGVhZGVyLmpwZ1wiIG1pbkg9XCIxMDB2aFwiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgbXg9XCJhdXRvXCJcbiAgICAgICAgICB3PVwiZnVsbFwiXG4gICAgICAgICAgbWF4Vz1cIjcwY2hcIlxuICAgICAgICAgIGJnPVwiYmxhY2tBbHBoYS44MDBcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIG92ZXJmbG93WD1cImhpZGRlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgdz17YGNhbGMoMTAwJSAqICR7dGVzdGltb25pYWxzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz17YHJlcGVhdCgke3Rlc3RpbW9uaWFscy5sZW5ndGh9LCAxZnIpYH1cbiAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZVgoLSR7KGluZGV4IC8gNCkgKiAxMDB9JSlgfVxuICAgICAgICAgICAgdHJhbnNpdGlvbj1cInRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0ZXN0aW1vbmlhbHMubWFwKCh0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBfaWQsXG4gICAgICAgICAgICAgICAgYnJhbmROYW1lLFxuICAgICAgICAgICAgICAgIGJyYW5kUmVwLFxuICAgICAgICAgICAgICAgIGJyYW5kVXJsLFxuICAgICAgICAgICAgICAgIHJlcFRpdGxlLFxuICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFsLFxuICAgICAgICAgICAgICB9ID0gdGVzdFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCb3gga2V5PXtfaWR9IHA9XCIzcmVtIDJyZW1cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTdHlsZT1cIml0YWxpY1wiIHBiPVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgICAgICB7dG9QbGFpblRleHQodGVzdGltb25pYWwpfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YnJhbmRVcmx9IGZvbnRXZWlnaHQ9ezYwMH0gaXNFeHRlcm5hbD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2JyYW5kUmVwfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2Ake2JyYW5kTmFtZX0sICR7cmVwVGl0bGV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICB3PXs0fVxuICAgICAgICAgICAgICBoPXs0fVxuICAgICAgICAgICAgICBiZz1cImdyYXkuNzAwXCJcbiAgICAgICAgICAgICAgYXM9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SW5kZXgoaSlcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsLmN1cnJlbnQpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIF9hZnRlcj17e1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgICAgICAgICAgICBib3hTaXplOiA0LFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJmdWxsXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvSGVybz5cbiAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiPlxuICAgICAgICA8Q29udGFjdEZvcm0gdGl0bGU9e2NvbnRhY3RIZWFkaW5nfSBib2R5PXtjb250YWN0Qm9keX0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmNvbnN0IGhvbWVQYWdlUXVlcnkgPSBncm9xYFxuICAqW190eXBlID09IFwiaW5kZXhQYWdlXCJde1xuICAgIHRpdGxlLFxuICAgIG1ldGFEZXNjcmlwdGlvbixcbiAgICBoZXJvQ2FyZCxcbiAgICBjb250YWN0SGVhZGluZyxcbiAgICBjb250YWN0Qm9keSxcbiAgICBcImhlcm9JbWFnZVwiOiBoZXJvSW1hZ2UuYXNzZXQtPntcbiAgICAgIHVybCxcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0sXG4gICAgY2FyZHNUaXRsZSxcbiAgICBjYXJkc1tde1xuICAgICAgX2tleSxcbiAgICAgIHRpdGxlLFxuICAgICAgYm9keSxcbiAgICAgIFwiaWNvblwiOiBpY29uLmFzc2V0LT57XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICB9LFxuICAgICAgc2VydmljZS0+e1xuICAgICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRlc3RpbW9uaWFsc1tdLT57XG4gICAgICB0ZXN0aW1vbmlhbCxcbiAgICAgIGJyYW5kTmFtZSxcbiAgICAgIGJyYW5kUmVwLFxuICAgICAgcmVwVGl0bGUsXG4gICAgICBicmFuZFVybCxcbiAgICAgIF9pZFxuICAgIH0sXG4gIH1bMF1cbmBcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goaG9tZVBhZ2VRdWVyeSlcblxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})