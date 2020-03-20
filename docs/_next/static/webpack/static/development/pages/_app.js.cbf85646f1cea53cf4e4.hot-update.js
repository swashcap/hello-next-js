webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styleguide/CodeBlock.tsx":
/*!*********************************************!*\
  !*** ./components/styleguide/CodeBlock.tsx ***!
  \*********************************************/
/*! exports provided: CodeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return CodeBlock; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _prismTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prismTheme */ "./components/styleguide/prismTheme.ts");



var _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/CodeBlock.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var CodeBlock = function CodeBlock(_ref) {
  var children = _ref.children,
      cls = _ref.className,
      live = _ref.live,
      preview = _ref.preview,
      scope = _ref.scope,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children", "className", "live", "preview", "scope"]);

  var language = cls.replace(/language-/, '');
  var code = (children === null || children === void 0 ? void 0 : children.trim()) || '';

  if (live) {
    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('ba b--silver', cls)
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_6__["LiveProvider"], {
      code: code,
      language: children,
      scope: _objectSpread({}, scope, {
        mdx: _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__["mdx"]
      }),
      theme: _prismTheme__WEBPACK_IMPORTED_MODULE_8__["prismTheme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_6__["LivePreview"], {
      className: "pa3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_6__["LiveError"], {
      className: "dark-red mv0 pa3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_6__["LiveEditor"], {
      style: {// fontFamily: 'Consolas, monaco, monospace',
        // fontSize: '1em',
        // lineHeight: 1.25,
        // padding: 16
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })));
  } else if (preview) {
    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('ba b--silver', cls)
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_6__["LiveProvider"], {
      code: code,
      language: children,
      noInline: true,
      scope: {
        mdx: _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__["mdx"]
      },
      theme: _prismTheme__WEBPACK_IMPORTED_MODULE_8__["prismTheme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_6__["LivePreview"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })));
  }

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__["defaultProps"], {
    code: code,
    language: language,
    theme: _prismTheme__WEBPACK_IMPORTED_MODULE_8__["prismTheme"]
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return __jsx("pre", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('code lh-title pa3', className, cls),
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, tokens.map(function (line, i) {
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getLineProps({
        line: line,
        key: i
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), line.map(function (token, key) {
        return __jsx("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTokenProps({
          token: token,
          key: key
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }));
      }));
    }));
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.cbf85646f1cea53cf4e4.hot-update.js.map