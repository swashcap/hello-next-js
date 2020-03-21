webpackHotUpdate("static/development/pages/components/Breadcrumb.js",{

/***/ "./pages/components/Breadcrumb.mdx":
/*!*****************************************!*\
  !*** ./pages/components/Breadcrumb.mdx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _components_library_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/library/Breadcrumb */ "./components/library/Breadcrumb.tsx");
/* harmony import */ var _components_styleguide_CodeBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styleguide/CodeBlock */ "./components/styleguide/CodeBlock.tsx");
/* harmony import */ var _components_styleguide_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/styleguide/Grid */ "./components/styleguide/Grid.tsx");
/* harmony import */ var _components_styleguide_component_MethodsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/styleguide/component/MethodsTable */ "./components/styleguide/component/MethodsTable.tsx");
/* harmony import */ var _components_styleguide_component_PropsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/styleguide/component/PropsTable */ "./components/styleguide/component/PropsTable.tsx");
/* harmony import */ var _components_styleguide_component_TableOfContents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/styleguide/component/TableOfContents */ "./components/styleguide/component/TableOfContents.tsx");


var _jsxFileName = "/Users/creed/dev/hello-next-js/pages/components/Breadcrumb.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */








var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Breadcrumb"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    mdxType: "Grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    className: "w-100 w-75-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    className: "f4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Give users context to their current location in a hierarchical navigation system with Breadcrumb."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "The breadcrumb provides awareness in deeply nested page structures or views, and permits users to move freely up the structure, promoting discovery."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["CodeBlock"], {
    language: "tsx",
    preview: true,
    scope: {
      Breadcrumb: _components_library_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"]
    },
    mdxType: "CodeBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "<Breadcrumb>\n  <Breadcrumb.Item href=\"/music\">Music</Breadcrumb.Item>\n  <Breadcrumb.Item href=\"/music/hip-hop\">Hip Hop</Breadcrumb.Item>\n  <Breadcrumb.Item active>Wu-Tang Clan</Breadcrumb.Item>\n</Breadcrumb>")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    className: "w-100 w-25-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_component_TableOfContents__WEBPACK_IMPORTED_MODULE_9__["TableOfContents"], {
    items: [['Usage'], ['Accessibility'], ['Component API', ['Props', 'Methods']]],
    mdxType: "TableOfContents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Related"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "#"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "Navigation design guidelines \u2197"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Import the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Breadcrumb"), " component into a React component in your project:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-typescript"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), "import {Breadcrumb} from 'hello-next-js'\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "The root ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Breadcrumb"), " is a styling wrapper for the breadcrumb's items, exposed through the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Breadcrumb.Item"), " component. Compose these in a React component in your project to form a breadcrumb:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-tsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "import React from 'react'\nimport {Breadcrumb} from 'hello-next-js'\n\nexport const MyComponent: React.FC<any> = () => {\n  return (\n    <Breadcrumb>\n      <Breadcrumb.Item href=\"/music\">Music</Breadcrumb.Item>\n      <Breadcrumb.Item href=\"/music/hip-hop\">Hip Hop</Breadcrumb.Item>\n      <Breadcrumb.Item active>Wu-Tang Clan</Breadcrumb.Item>\n    </Breadcrumb>\n  )\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Accessibility"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Ensure that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Breadcrumb.Item"), "s have the appropriate ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "href"), " property to ensure the links are accessible:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-tsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), "<Breadcrumb.Item href=\"/path/to/sub-page\">Sub Page</Breadcrumb.Item>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Breadcrumb"), " component applies ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "aria-current=\"page\""), " to a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Breadcrumb.Item"), " with an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "active"), " property."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Related"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "https://www.w3.org/TR/wai-aria-1.1/#aria-current"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), "WAI-ARIA 1.1 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "aria-current"), " spec \u2197"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Component API"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Props"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_component_PropsTable__WEBPACK_IMPORTED_MODULE_8__["PropsTable"], {
    component: _components_library_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"],
    mdxType: "PropsTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Methods"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_component_MethodsTable__WEBPACK_IMPORTED_MODULE_7__["MethodsTable"], {
    component: _components_library_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"],
    mdxType: "MethodsTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=Breadcrumb.js.f9bd0df7fdf0c5b66aa2.hot-update.js.map