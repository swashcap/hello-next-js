webpackHotUpdate("static/development/pages/components/Alert.js",{

/***/ "./components/styleguide/component/MethodsTable.tsx":
/*!**********************************************************!*\
  !*** ./components/styleguide/component/MethodsTable.tsx ***!
  \**********************************************************/
/*! exports provided: MethodsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodsTable", function() { return MethodsTable; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Code */ "./components/styleguide/Code.tsx");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Empty */ "./components/styleguide/Empty.tsx");


var _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/component/MethodsTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





/**
 * Methods table.
 *
 * Display a React component's methods.
 */
var MethodsTable = function MethodsTable(_ref) {
  var _component$__docgenIn, _component$__docgenIn2;

  var className = _ref.className,
      component = _ref.component,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "component"]);

  if (!(component === null || component === void 0 ? void 0 : (_component$__docgenIn = component.__docgenInfo) === null || _component$__docgenIn === void 0 ? void 0 : (_component$__docgenIn2 = _component$__docgenIn.methods) === null || _component$__docgenIn2 === void 0 ? void 0 : _component$__docgenIn2.length)) {
    return __jsx(_Empty__WEBPACK_IMPORTED_MODULE_5__["Empty"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "No methods found");
  }

  var methods = component.__docgenInfo.methods;
  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('overflow-scroll w-100', className)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("table", {
    className: "collapse w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("thead", {
    className: "bg-near-white tl v-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("th", {
    className: "pa2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Name"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, methods.map(function (_ref2) {
    var name = _ref2.name;
    return __jsx("tr", {
      className: "bb b--silver v-top",
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("td", {
      className: "pa2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_Code__WEBPACK_IMPORTED_MODULE_4__["Code"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, name)));
  }))));
};

try {
  // @ts-ignore
  MethodsTable.displayName = "MethodsTable"; // @ts-ignore

  MethodsTable.__docgenInfo = {
    "description": "Methods table.\n\nDisplay a React component's methods.",
    "displayName": "MethodsTable",
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
    STORYBOOK_REACT_CLASSES["components/styleguide/component/MethodsTable.tsx#MethodsTable"] = {
      docgenInfo: MethodsTable.__docgenInfo,
      name: "MethodsTable",
      path: "components/styleguide/component/MethodsTable.tsx#MethodsTable"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ })

})
//# sourceMappingURL=Alert.js.f2cc411e9561eba497f9.hot-update.js.map