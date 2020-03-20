webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styleguide/Root.tsx":
/*!****************************************!*\
  !*** ./components/styleguide/Root.tsx ***!
  \****************************************/
/*! exports provided: Root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Divider */ "./components/styleguide/Divider.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./components/styleguide/Footer.tsx");
/* harmony import */ var _layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/FullPageLayout */ "./components/styleguide/layouts/FullPageLayout.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Link */ "./components/styleguide/Link.tsx");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Nav */ "./components/styleguide/Nav.tsx");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SearchForm */ "./components/styleguide/SearchForm.tsx");
/* harmony import */ var _layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/SidebarLayout */ "./components/styleguide/layouts/SidebarLayout.tsx");
/* harmony import */ var _library_VisuallyHidden__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../library/VisuallyHidden */ "./components/library/VisuallyHidden.tsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Grid */ "./components/styleguide/Grid.tsx");



var _ref,
    _config$publicRuntime,
    _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/Root.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;














var config = next_config__WEBPACK_IMPORTED_MODULE_5___default()();
var assetPrefix = ((_ref = config === null || config === void 0 ? void 0 : (_config$publicRuntime = config.publicRuntimeConfig) === null || _config$publicRuntime === void 0 ? void 0 : _config$publicRuntime.assetPrefix) !== null && _ref !== void 0 ? _ref : '').replace(/.*\/$/, '');
var Root = function Root(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      description = _ref2.description,
      title = _ref2.title,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["className", "children", "description", "title"]);

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(),
      pathname = _useRouter.pathname;

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('flex flex-column', className),
    style: {
      minHeight: '100vh'
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_library_VisuallyHidden__WEBPACK_IMPORTED_MODULE_14__["VisuallyHidden"], {
    as: "a",
    focusable: true,
    href: "#content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Skip to content"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("link", {
    rel: "icon",
    href: "".concat(assetPrefix, "/favicon.ico"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, title), !!description && __jsx("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx("header", {
    className: "bb b--silver items-center",
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    className: "flex-wrap items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
    className: "w-100 w-70-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["Link"], {
    className: "fw7 pv3",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Hello, Next.js!"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
    className: "inline-flex pl3",
    inline: true,
    links: [{
      href: "".concat(assetPrefix, "/components/"),
      name: 'Components'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
    className: "w-100 w-30-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_12__["SearchForm"], {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))), __jsx("main", {
    style: {
      flex: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, pathname.includes('components') ? __jsx(_layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_13__["SidebarLayout"], {
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
      className: "mb2 mt3",
      links: [{
        href: "".concat(assetPrefix, "/components/"),
        name: 'Getting Started'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
      className: "mv2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
      className: "mv2",
      links: [{
        href: "".concat(assetPrefix, "/components/Alert/"),
        name: 'Alert'
      }, {
        href: "".concat(assetPrefix, "/components/Breadcrumb/"),
        name: 'Breadcrumb'
      }, {
        href: "".concat(assetPrefix, "/components/Button/"),
        name: 'Button'
      }, {
        href: "".concat(assetPrefix, "/components/Card/"),
        name: 'Card'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
      className: "mv2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
      className: "mv2",
      links: [{
        href: "".concat(assetPrefix, "/components/utilities/"),
        name: 'Utilities'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("article", {
    className: "mb4 mt3",
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, children)) : __jsx(_layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_9__["FullPageLayout"], {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, children)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }));
};

try {
  // @ts-ignore
  Root.displayName = "Root"; // @ts-ignore

  Root.__docgenInfo = {
    "description": "",
    "displayName": "Root",
    "props": {
      "description": {
        "defaultValue": null,
        "description": "",
        "name": "description",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "title": {
        "defaultValue": null,
        "description": "",
        "name": "title",
        "required": true,
        "type": {
          "name": "string"
        }
      }
    }
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["components/styleguide/Root.tsx#Root"] = {
      docgenInfo: Root.__docgenInfo,
      name: "Root",
      path: "components/styleguide/Root.tsx#Root"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ })

})
//# sourceMappingURL=_app.js.654909a3750aa1302879.hot-update.js.map