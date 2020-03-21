webpackHotUpdate("static/development/pages/components/Button.js",{

/***/ "./pages/components/Button.mdx":
/*!*************************************!*\
  !*** ./pages/components/Button.mdx ***!
  \*************************************/
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
/* harmony import */ var _components_library_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/library/Button */ "./components/library/Button.tsx");
/* harmony import */ var _components_styleguide_CodeBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styleguide/CodeBlock */ "./components/styleguide/CodeBlock.tsx");
/* harmony import */ var _components_styleguide_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/styleguide/Grid */ "./components/styleguide/Grid.tsx");
/* harmony import */ var _components_styleguide_component_MethodsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/styleguide/component/MethodsTable */ "./components/styleguide/component/MethodsTable.tsx");
/* harmony import */ var _components_styleguide_component_PropsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/styleguide/component/PropsTable */ "./components/styleguide/component/PropsTable.tsx");
/* harmony import */ var _components_styleguide_component_TableOfContents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/styleguide/component/TableOfContents */ "./components/styleguide/component/TableOfContents.tsx");


var _jsxFileName = "/Users/creed/dev/hello-next-js/pages/components/Button.mdx";
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
  }, "Button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
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
  }, "The Button is the base interactive component for hello-next-js: it affords navigation, form submission, and application state changes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Three variations of Button exist to demonstrate the level of interaction: primary, secondary, and tertiary."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["CodeBlock"], {
    language: "tsx",
    preview: true,
    scope: {
      Button: _components_library_Button__WEBPACK_IMPORTED_MODULE_4__["Button"]
    },
    mdxType: "CodeBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\n<div className=\"flex flex-wrap content-center\">\n  <Button className=\"mr3\">Primary</Button>\n  <Button className=\"mr3\" variant=\"secondary\">Secondary</Button>\n  <Button variant=\"tertiary\">Tertiary</Button>\n</div>")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    className: "w-100 w-25-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_component_TableOfContents__WEBPACK_IMPORTED_MODULE_9__["TableOfContents"], {
    items: [['Usage', ['Variants']], ['Accessibility'], ['Component API', ['Props', 'Methods']]],
    mdxType: "TableOfContents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Related"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "#"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), "Interaction design guidelines \u2197")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
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
  }), "Button design specifications \u2197"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
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
  }, "Button"), " component into a React component in your project:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }), "import {Button} from 'hello-next-js'\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Button"), " by passing it children and an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "onClick"), " handler in your React component:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
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
  }), "import React from 'react'\nimport {Button} from 'hello-next-js'\n\nexport const MyComponent: React.FC<any> = () => {\n  return (\n    <Button\n      onClick={(event) => {\n        console.log('Clicked!', event)\n      }}\n    >\n      My Button\n    </Button>\n  )\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Variants"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Button"), " comes with three variations, set through the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "variant"), " property:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Primary"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Use the primary variant for call to action, form submission, dialog or modal trigger."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["CodeBlock"], {
    language: "tsx",
    live: true,
    scope: {
      Button: _components_library_Button__WEBPACK_IMPORTED_MODULE_4__["Button"]
    },
    mdxType: "CodeBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "<Button>Primary button</Button>"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Secondary"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["CodeBlock"], {
    language: "tsx",
    live: true,
    scope: {
      Button: _components_library_Button__WEBPACK_IMPORTED_MODULE_4__["Button"]
    },
    mdxType: "CodeBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "<Button variant=\"secondary\">Secondary button</Button>"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Tertiary"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["CodeBlock"], {
    language: "tsx",
    live: true,
    scope: {
      Button: _components_library_Button__WEBPACK_IMPORTED_MODULE_4__["Button"]
    },
    mdxType: "CodeBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "<Button variant=\"tertiary\">Tertiary button</Button>"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Accessibility"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Button"), " component has a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "role=\"button\""), " property provided. Ensure that the element has the appropriate role for its use:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "role=\"submit\""), " for a form submission button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "role=\"reset\""), " for a form reset button")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Related"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "https://www.deque.com/blog/accessible-aria-buttons/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), "\"Building Accessible Buttons with ARIA\" on Deque \u2197")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), "\"ARIA: button role\" on MDN \u2197"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Component API"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Props"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_component_PropsTable__WEBPACK_IMPORTED_MODULE_8__["PropsTable"], {
    component: _components_library_Button__WEBPACK_IMPORTED_MODULE_4__["Button"],
    mdxType: "PropsTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Methods"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_styleguide_component_MethodsTable__WEBPACK_IMPORTED_MODULE_7__["MethodsTable"], {
    component: _components_library_Button__WEBPACK_IMPORTED_MODULE_4__["Button"],
    mdxType: "MethodsTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=Button.js.378a0a696256b7e38747.hot-update.js.map