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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/styleguide/Footer.tsx");
/* harmony import */ var _layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/FullPageLayout */ "./components/styleguide/layouts/FullPageLayout.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Link */ "./components/styleguide/Link.tsx");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Nav */ "./components/styleguide/Nav.tsx");
/* harmony import */ var _layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/SidebarLayout */ "./components/styleguide/layouts/SidebarLayout.tsx");
/* harmony import */ var _library_VisuallyHidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../library/VisuallyHidden */ "./components/library/VisuallyHidden.tsx");


var _jsxFileName = "/Users/creed/dev/hello-next-js/components/styleguide/Root.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Root = function Root(_ref) {
  var className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      title = _ref.title,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "description", "title"]);

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      pathname = _useRouter.pathname;

  debugger;
  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('flex flex-column', className),
    style: {
      minHeight: '100vh'
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_library_VisuallyHidden__WEBPACK_IMPORTED_MODULE_11__["VisuallyHidden"], {
    as: "a",
    focusable: true,
    href: "#main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Skip to content"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, title), !!description && __jsx("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("header", {
    className: "bb b--silver items-center flex",
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    className: "fw7 pv3",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Hello, Next.js!"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
    className: "pl3",
    inline: true,
    links: [{
      href: '/getting-started',
      name: 'Getting Started'
    }, {
      href: '/components',
      name: 'Components'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx("main", {
    id: "main",
    style: {
      flex: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, pathname.includes('components') ? __jsx(_layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_10__["SidebarLayout"], {
    sidebar: __jsx(_Nav__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
      className: "mv3",
      links: [{
        href: '/components/Alert',
        name: 'Alert'
      }, {
        href: '/components/Breadcrumb',
        name: 'Breadcrumb'
      }, {
        href: '/components/Button',
        name: 'Button'
      }, {
        href: '/components/Card',
        name: 'Card'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, children) : __jsx(_layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_7__["FullPageLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, children)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=_app.js.739399338350584c2427.hot-update.js.map