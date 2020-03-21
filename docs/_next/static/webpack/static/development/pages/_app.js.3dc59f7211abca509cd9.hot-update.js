webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styleguide/Heading.tsx":
/*!*******************************************!*\
  !*** ./components/styleguide/Heading.tsx ***!
  \*******************************************/
/*! exports provided: Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Heading_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.module.css */ "./components/styleguide/Heading.module.css");
/* harmony import */ var _Heading_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Heading_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/Heading.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Heading = function Heading(_ref) {
  var children = _ref.children,
      className = _ref.className,
      idProp = _ref.id,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? '1' : _ref$variant,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className", "id", "variant"]);

  var id = idProp || Object(lodash__WEBPACK_IMPORTED_MODULE_4__["snakeCase"])(children);
  var Component;

  if (variant === '2') {
    Component = 'h2';
  } else if (variant === '3') {
    Component = 'h3';
  } else if (variant === '4') {
    Component = 'h4';
  } else {
    Component = 'h1';
  }

  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_Heading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Heading, 'lh-title mb3 relative', variant === '1' && 'f2 f1-l fw8 mt3', variant === '2' && 'f3 f2-l fw5 mt4', variant === '3' && 'f4 f3-l fw5 mt4', variant === '4' && 'dark-gray f5 fw7 mt4 tracked ttu', className),
    id: id
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("a", {
    "aria-label": "Link to header",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_Heading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.HeadingAnchor, 'absolute dark-red dib f5 fw4 no-underline pv1 tc'),
    href: "#".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "#"), children);
};

try {
  // @ts-ignore
  Heading.displayName = "Heading"; // @ts-ignore

  Heading.__docgenInfo = {
    "description": "",
    "displayName": "Heading",
    "props": {
      "variant": {
        "defaultValue": {
          value: "1"
        },
        "description": "",
        "name": "variant",
        "required": false,
        "type": {
          "name": "HeadingVariant"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["components/styleguide/Heading.tsx#Heading"] = {
      docgenInfo: Heading.__docgenInfo,
      name: "Heading",
      path: "components/styleguide/Heading.tsx#Heading"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ })

})
//# sourceMappingURL=_app.js.3dc59f7211abca509cd9.hot-update.js.map