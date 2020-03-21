webpackHotUpdate("static/development/pages/components/Alert.js",{

/***/ "./components/styleguide/component/PropsTable.tsx":
/*!********************************************************!*\
  !*** ./components/styleguide/component/PropsTable.tsx ***!
  \********************************************************/
/*! exports provided: PropsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropsTable", function() { return PropsTable; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Code */ "./components/styleguide/Code.tsx");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Empty */ "./components/styleguide/Empty.tsx");


var _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/component/PropsTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





/**
 * Props table.
 *
 * Display a React component's properties and related metadata in a table.
 */
var PropsTable = function PropsTable(_ref) {
  var className = _ref.className,
      component = _ref.component,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "component"]);

  if (!(component === null || component === void 0 ? void 0 : component.__docgenInfo) || !Object.keys(component.__docgenInfo.props).length) {
    return __jsx(_Empty__WEBPACK_IMPORTED_MODULE_5__["Empty"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "No props found");
  }

  var props = component.__docgenInfo.props;
  return __jsx("table", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('collapse overflow-scroll w-100', className)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("thead", {
    className: "bg-near-white tl v-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("th", {
    className: "pa2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Name"), __jsx("th", {
    className: "pa2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "pa2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Default"), __jsx("th", {
    className: "pa2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Description"), __jsx("th", {
    className: "pa2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Required"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object.keys(props).map(function (key) {
    var _props$key = props[key],
        defaultValue = _props$key.defaultValue,
        description = _props$key.description,
        name = _props$key.name,
        required = _props$key.required,
        type = _props$key.type;
    return __jsx("tr", {
      className: "bb b--silver v-top",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("td", {
      className: "pa2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_Code__WEBPACK_IMPORTED_MODULE_4__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, name)), __jsx("td", {
      className: "pa2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_Code__WEBPACK_IMPORTED_MODULE_4__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, type.name, " ", type.raw)), __jsx("td", {
      className: "pa2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, !!(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.value) && __jsx(_Code__WEBPACK_IMPORTED_MODULE_4__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, defaultValue.value)), __jsx("td", {
      className: "pa2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, description), __jsx("td", {
      className: "pa2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, required ? 'Required' : ''));
  })));
};

try {
  // @ts-ignore
  PropsTable.displayName = "PropsTable"; // @ts-ignore

  PropsTable.__docgenInfo = {
    "description": "Props table.\n\nDisplay a React component's properties and related metadata in a table.",
    "displayName": "PropsTable",
    "props": {
      "component": {
        "defaultValue": null,
        "description": "",
        "name": "component",
        "required": false,
        "type": {
          "name": "(ComponentClass<any, any> & { __docgenInfo?: ComponentDoc; }) | (FunctionComponent<any> & { __docgenInfo?: ComponentDoc; })"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["components/styleguide/component/PropsTable.tsx#PropsTable"] = {
      docgenInfo: PropsTable.__docgenInfo,
      name: "PropsTable",
      path: "components/styleguide/component/PropsTable.tsx#PropsTable"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ })

})
//# sourceMappingURL=Alert.js.6435de5b580fbe2eced9.hot-update.js.map