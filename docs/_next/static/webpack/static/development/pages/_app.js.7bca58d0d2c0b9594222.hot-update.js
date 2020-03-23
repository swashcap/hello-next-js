webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/library/Icon.tsx":
/*!*************************************!*\
  !*** ./components/library/Icon.tsx ***!
  \*************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _jsxFileName = "/Users/creed/dev/hello-next-js/components/library/Icon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



/**
 * Icon.
 */
var Icon = function Icon(_ref) {
  var className = _ref.className,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "name", "size"]);

  return __jsx("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('dib tc', size === 'small' && 'f5 h1 w1', size === 'large' && 'f4 h2 w2', className)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), name === 'arrowDown' && '↓', name === 'arrowLeft' && '←', name === 'arrowRight' && '→', name === 'arrowUp' && '↑', name === 'close' && '✕');
};

try {
  // @ts-ignore
  Icon.displayName = "Icon"; // @ts-ignore

  Icon.__docgenInfo = {
    "description": "Icon.",
    "displayName": "Icon",
    "props": {
      "name": {
        "defaultValue": null,
        "description": "The icon's name.",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": {
          value: "small"
        },
        "description": "The icon's size.",
        "name": "size",
        "required": false,
        "type": {
          "name": "IconSize"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["components/library/Icon.tsx#Icon"] = {
      docgenInfo: Icon.__docgenInfo,
      name: "Icon",
      path: "components/library/Icon.tsx#Icon"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ })

})
//# sourceMappingURL=_app.js.7bca58d0d2c0b9594222.hot-update.js.map