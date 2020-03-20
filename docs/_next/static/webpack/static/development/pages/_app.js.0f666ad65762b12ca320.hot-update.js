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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _prismTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prismTheme */ "./components/styleguide/prismTheme.ts");


var _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/CodeBlock.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var CodeBlock = function CodeBlock(_ref) {
  var children = _ref.children,
      cls = _ref.className,
      live = _ref.live,
      preview = _ref.preview,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className", "live", "preview"]);

  var language = cls.replace(/language-/, '');
  var code = (children === null || children === void 0 ? void 0 : children.trim()) || '';

  if (live) {
    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('ba b--silver', cls)
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_5__["LiveProvider"], {
      code: code,
      language: children,
      scope: {
        mdx: _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"]
      },
      theme: _prismTheme__WEBPACK_IMPORTED_MODULE_7__["prismTheme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_5__["LivePreview"], {
      className: "pa3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_5__["LiveError"], {
      className: "dark-red mv0 pa3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_5__["LiveEditor"], {
      style: {// fontFamily: 'Consolas, monaco, monospace',
        // fontSize: '1em',
        // lineHeight: 1.25,
        // padding: 16
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  } else if (preview) {
    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('ba b--silver', cls)
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_5__["LiveProvider"], {
      code: code,
      language: children,
      noInline: true,
      scope: {
        mdx: _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["mdx"]
      },
      theme: _prismTheme__WEBPACK_IMPORTED_MODULE_7__["prismTheme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_5__["LivePreview"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })));
  }

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["defaultProps"], {
    code: code,
    language: language,
    theme: _prismTheme__WEBPACK_IMPORTED_MODULE_7__["prismTheme"]
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return __jsx("pre", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('code lh-title pa3', className, cls),
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, tokens.map(function (line, i) {
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getLineProps({
        line: line,
        key: i
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), line.map(function (token, key) {
        return __jsx("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTokenProps({
          token: token,
          key: key
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }));
      }));
    }));
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.0f666ad65762b12ca320.hot-update.js.map