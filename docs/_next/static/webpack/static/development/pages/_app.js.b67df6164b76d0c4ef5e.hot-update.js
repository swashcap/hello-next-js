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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Divider */ "./components/styleguide/Divider.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/styleguide/Footer.tsx");
/* harmony import */ var _layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/FullPageLayout */ "./components/styleguide/layouts/FullPageLayout.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Link */ "./components/styleguide/Link.tsx");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Nav */ "./components/styleguide/Nav.tsx");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SearchForm */ "./components/styleguide/SearchForm.tsx");
/* harmony import */ var _layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/SidebarLayout */ "./components/styleguide/layouts/SidebarLayout.tsx");
/* harmony import */ var _library_VisuallyHidden__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../library/VisuallyHidden */ "./components/library/VisuallyHidden.tsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Grid */ "./components/styleguide/Grid.tsx");


var _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/Root.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













var assetPrefix = ( false || '').replace(/\/$/, '');
var Root = function Root(_ref) {
  var className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      title = _ref.title,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "description", "title"]);

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      pathname = _useRouter.pathname;

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('flex flex-column', className),
    style: {
      minHeight: '100vh'
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_library_VisuallyHidden__WEBPACK_IMPORTED_MODULE_13__["VisuallyHidden"], {
    as: "a",
    focusable: true,
    href: "#content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Skip to content"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("link", {
    rel: "icon",
    href: "".concat(assetPrefix, "/favicon.ico"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, title), !!description && __jsx("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("header", {
    className: "flex bb b--silver pb3 pb0-m pb0-l items-center",
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
    className: "items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
    className: "w-100 w-70-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    className: "fw7 pv3",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Hello, Next.js!"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
    className: "inline-flex pl3",
    inline: true,
    links: [{
      href: "".concat(assetPrefix, "/components/"),
      name: 'Components'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
    className: "w-100 w-30-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_11__["SearchForm"], {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))), __jsx("main", {
    style: {
      flex: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, pathname.includes('components') ? __jsx(_layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_12__["SidebarLayout"], {
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
      className: "mb2 mt3",
      links: [{
        href: "".concat(assetPrefix, "/components/"),
        name: 'Getting Started'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
      className: "mv2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
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
        lineNumber: 87
      },
      __self: this
    }), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
      className: "mv2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
      className: "mv2",
      links: [{
        href: "".concat(assetPrefix, "/components/utilities/"),
        name: 'Utilities'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("article", {
    className: "mb4 mt3",
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, children)) : __jsx(_layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_8__["FullPageLayout"], {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, children)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
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
//# sourceMappingURL=_app.js.b67df6164b76d0c4ef5e.hot-update.js.map