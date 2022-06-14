"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    /* outline: solid blue 1px; */\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n    font-size: 18px;\n    font-weight: 500;\n}\n.pageWrapper{\n    display: grid;\n    grid-template: auto 1fr auto / minmax(110px, 25%) 1fr;\n    height: 100vh; \n}\n\n/* header */\n.header{\n    background-color: aquamarine;\n    /* background-image: linear-gradient(to bottom, #DD2476, #FD8451); */\n    padding: 0.8rem 2rem;\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2rem;\n}\n\n.icon{\n    height: 6rem;\n}\n\n.headerTitle{\n    font-weight: 600;\n    font-size: 2.8rem;\n    margin: 0;\n}\n\n/* sidebar */\n.sidebar{\n    background-color: lightcoral;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: auto 1fr auto 1fr;\n    gap: 1rem;\n}\n\n.sideTitle{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    /* text-decoration: underline; */\n    padding: 0.5rem 0rem 0.5rem;\n    margin: 0;\n    background-color: #E2D1C3;\n    border-radius: 1rem;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    /* background-image: linear-gradient(to bottom right, #5761B2, #1FC5A8); */\n    /* grid-area: 1/1/2/2; */\n}\n\n.activeTitle{\n    grid-area: 1/1/2/2;\n}\n\n.completeTitle{\n    grid-area: 3/1/4/2;\n}\n\n.activeProWrapper{\n    display: grid;\n    justify-items: center;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom right, hsl(148, 100%, 39%), #FCEE21); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 2/1/3/2;\n\n}\n\n.completedProWrapper{\n    color: hsl(0, 0%, 25%);\n    display: grid;\n    justify-items: center;\n    text-decoration: line-through;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom, hsl(119, 96%, 70%), hsl(209, 40%, 41%)); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 4/1/5/2;\n}\n\n.btnAddProject{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(27, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnAddProject:hover{\n    background-color: hsl(27, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n.btnClearCompleted{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(5, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnClearCompleted:hover{\n    background-color: hsl(5, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n/* Body */\n.body{\n    background-color:wheat;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    text-align: center;\n    padding: 0.5rem;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n}\n\n.bodyTitle{\n    grid-area: 1/1/2/3;\n    text-align: center;\n    text-decoration: underline;\n    font-size: 1.4rem;\n    margin: 0;\n}\n\n.btnAddTodoItem{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(27, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    grid-area: 1/3/2/5;\n    width: 80%;\n}\n.btnAddTodoItem:hover{\n    background-color: hsl(27, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n.todoWrapper{\n    grid-column: 1/-1;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n    overflow: auto;\n}\n\n.todoHead{\n    /* display: flex; */\n    text-decoration: underline 0.13rem;\n}\n\n.headTitle{\n    grid-area: 1/1/2/2;\n}\n.headDescription{\n    grid-area: 1/2/2/3;\n}\n.headDate{\n    grid-area: 1/3/2/4;\n}\n.headPriority{\n    grid-area: 1/4/2/5;\n}\n\n\n/* Footer */\n.footer{\n    background-color:plum;\n    /* background-image: linear-gradient(to bottom right, #FFBD6F, hsl(33, 100%, 42%)); */\n\n    padding: 0.2rem;\n    font-size: 0.8rem;\n    grid-column: 1/3;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,4CAA4C;IAC5C,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,qDAAqD;IACrD,aAAa;AACjB;;AAEA,WAAW;AACX;IACI,4BAA4B;IAC5B,oEAAoE;IACpE,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;AACb;;AAEA,YAAY;AACZ;IACI,4BAA4B;IAC5B,oEAAoE;IACpE,eAAe;IACf,aAAa;IACb,qCAAqC;IACrC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,gCAAgC;IAChC,2BAA2B;IAC3B,SAAS;IACT,yBAAyB;IACzB,mBAAmB;IACnB,wCAAwC;IACxC,0EAA0E;IAC1E,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,sFAAsF;IACtF,yBAAyB;IACzB,wCAAwC;IACxC,kBAAkB;;AAEtB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,mBAAmB;IACnB,0FAA0F;IAC1F,yBAAyB;IACzB,wCAAwC;IACxC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;IACZ,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,kCAAkC;IAClC,YAAY;IACZ,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,kCAAkC;IAClC,+BAA+B;IAC/B,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA,SAAS;AACT;IACI,sBAAsB;IACtB,oEAAoE;IACpE,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,0BAA0B;IAC1B,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,yCAAyC;IACzC,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;;;AAGA,WAAW;AACX;IACI,qBAAqB;IACrB,qFAAqF;;IAErF,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');\n\n*{\n    /* outline: solid blue 1px; */\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n    font-size: 18px;\n    font-weight: 500;\n}\n.pageWrapper{\n    display: grid;\n    grid-template: auto 1fr auto / minmax(110px, 25%) 1fr;\n    height: 100vh; \n}\n\n/* header */\n.header{\n    background-color: aquamarine;\n    /* background-image: linear-gradient(to bottom, #DD2476, #FD8451); */\n    padding: 0.8rem 2rem;\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2rem;\n}\n\n.icon{\n    height: 6rem;\n}\n\n.headerTitle{\n    font-weight: 600;\n    font-size: 2.8rem;\n    margin: 0;\n}\n\n/* sidebar */\n.sidebar{\n    background-color: lightcoral;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: auto 1fr auto 1fr;\n    gap: 1rem;\n}\n\n.sideTitle{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    /* text-decoration: underline; */\n    padding: 0.5rem 0rem 0.5rem;\n    margin: 0;\n    background-color: #E2D1C3;\n    border-radius: 1rem;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    /* background-image: linear-gradient(to bottom right, #5761B2, #1FC5A8); */\n    /* grid-area: 1/1/2/2; */\n}\n\n.activeTitle{\n    grid-area: 1/1/2/2;\n}\n\n.completeTitle{\n    grid-area: 3/1/4/2;\n}\n\n.activeProWrapper{\n    display: grid;\n    justify-items: center;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom right, hsl(148, 100%, 39%), #FCEE21); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 2/1/3/2;\n\n}\n\n.completedProWrapper{\n    color: hsl(0, 0%, 25%);\n    display: grid;\n    justify-items: center;\n    text-decoration: line-through;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom, hsl(119, 96%, 70%), hsl(209, 40%, 41%)); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 4/1/5/2;\n}\n\n.btnAddProject{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(27, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnAddProject:hover{\n    background-color: hsl(27, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n.btnClearCompleted{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(5, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnClearCompleted:hover{\n    background-color: hsl(5, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n/* Body */\n.body{\n    background-color:wheat;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    text-align: center;\n    padding: 0.5rem;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n}\n\n.bodyTitle{\n    grid-area: 1/1/2/3;\n    text-align: center;\n    text-decoration: underline;\n    font-size: 1.4rem;\n    margin: 0;\n}\n\n.btnAddTodoItem{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(27, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    grid-area: 1/3/2/5;\n    width: 80%;\n}\n.btnAddTodoItem:hover{\n    background-color: hsl(27, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n.todoWrapper{\n    grid-column: 1/-1;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n    overflow: auto;\n}\n\n.todoHead{\n    /* display: flex; */\n    text-decoration: underline 0.13rem;\n}\n\n.headTitle{\n    grid-area: 1/1/2/2;\n}\n.headDescription{\n    grid-area: 1/2/2/3;\n}\n.headDate{\n    grid-area: 1/3/2/4;\n}\n.headPriority{\n    grid-area: 1/4/2/5;\n}\n\n\n/* Footer */\n.footer{\n    background-color:plum;\n    /* background-image: linear-gradient(to bottom right, #FFBD6F, hsl(33, 100%, 42%)); */\n\n    padding: 0.2rem;\n    font-size: 0.8rem;\n    grid-column: 1/3;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todoFormStyle.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todoFormStyle.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".formWrapperActive{\n    background-color: hsla(27, 0%, 25%, 0.85);\n    grid-area: 1/ 1 / -1/ -1;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    color: white;\n    border-radius: 1rem;\n    z-index: 500;\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n.formWrapperInactive{\n    z-index: -500;\n    pointer-events: none;\n}\n\n.feildset{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    row-gap: 2rem;\n    column-gap: 1rem;\n    justify-items:stretch;\n    text-align: right;\n    font-size: 2rem;\n    width: 80%;\n}\n\n.btnSubmit{\n    grid-column: 1/-1;\n    width: 80%;\n    justify-self: center;\n    font-size: 1.5rem;\n    border-radius: 2rem;\n    border: none;\n    margin-top: 1rem;\n    padding: 0.8rem;\n    cursor: pointer;\n}\n\ninput{\n    font-size: 1.8rem;\n}\n", "",{"version":3,"sources":["webpack://./src/todoFormStyle.css"],"names":[],"mappings":"AAAA;IACI,yCAAyC;IACzC,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,aAAa;IACb,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".formWrapperActive{\n    background-color: hsla(27, 0%, 25%, 0.85);\n    grid-area: 1/ 1 / -1/ -1;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    color: white;\n    border-radius: 1rem;\n    z-index: 500;\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n.formWrapperInactive{\n    z-index: -500;\n    pointer-events: none;\n}\n\n.feildset{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    row-gap: 2rem;\n    column-gap: 1rem;\n    justify-items:stretch;\n    text-align: right;\n    font-size: 2rem;\n    width: 80%;\n}\n\n.btnSubmit{\n    grid-column: 1/-1;\n    width: 80%;\n    justify-self: center;\n    font-size: 1.5rem;\n    border-radius: 2rem;\n    border: none;\n    margin-top: 1rem;\n    padding: 0.8rem;\n    cursor: pointer;\n}\n\ninput{\n    font-size: 1.8rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todoFormStyle.css":
/*!*******************************!*\
  !*** ./src/todoFormStyle.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todoFormStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./todoFormStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/todoFormStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todoFormStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todoFormStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todoFormStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todoFormStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoFormStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFormStyle.css */ "./src/todoFormStyle.css");
/* harmony import */ var _icons_todoIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/todoIcon.svg */ "./src/icons/todoIcon.svg");
/* harmony import */ var _todoForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoForm.js */ "./src/todoForm.js");
/* harmony import */ var _projectForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectForm.js */ "./src/projectForm.js");







//initial page wrapper container
const pageWrapper = document.createElement('div');
pageWrapper.classList.add('pageWrapper')
document.body.appendChild(pageWrapper);
const header = document.createElement('div')
const sidebar = document.createElement('div')
const body = document.createElement('div')
const footer = document.createElement('div')
pageWrapper.append(header, sidebar,body,footer)

//header --v
//header layout
const myIcon = new Image();
const headerTitle = document.createElement('p')
//header classes
header.classList.add('header')
myIcon.classList.add('icon');
headerTitle.classList.add('headerTitle')
//header content
headerTitle.textContent = 'ToDo List'
myIcon.src = _icons_todoIcon_svg__WEBPACK_IMPORTED_MODULE_2__;

//header append
header.append(headerTitle, myIcon)

//sidebar --v
//sidebar layout
const activeTitle = document.createElement('p')
const completeTitle = document.createElement('p')
const activeProWrapper = document.createElement('div')
const completedProWrapper = document.createElement('div')
const btnAddProject = document.createElement('button')
const btnClearCompleted = document.createElement('button')

//sidebarclasses
sidebar.classList.add('sidebar')
activeTitle.classList.add('sideTitle', 'activeTitle')
completeTitle.classList.add('sideTitle', 'completeTitle')
activeProWrapper.classList.add('activeProWrapper')
completedProWrapper.classList.add('completedProWrapper')
btnAddProject.classList.add('btnAddProject')
btnClearCompleted.classList.add('btnClearCompleted')
//sidebarcontent
activeTitle.textContent = 'Active Projects'
completeTitle.textContent = 'Completed Projects'
activeProWrapper.textContent ='Home'
completedProWrapper.textContent = 'Away'
btnAddProject.textContent = 'Add Project'
btnClearCompleted.textContent = 'Clear Completed'
//sidebar append
sidebar.append(activeTitle,activeProWrapper,completeTitle, completedProWrapper);
activeTitle.appendChild(btnAddProject)
completeTitle.appendChild(btnClearCompleted)
//event listeners
btnAddProject.addEventListener('click', () =>{
    ;(0,_projectForm_js__WEBPACK_IMPORTED_MODULE_4__["default"])()
})


//body --v
//body layout
const bodyTitle = document.createElement('p')
const todoHeadTitle = document.createElement('p')
const todoHeadDescription = document.createElement('p')
const todoHeadDate = document.createElement('p')
const todoHeadPriority = document.createElement('p')
const todoWrapper = document.createElement('div')
const btnAddTodo = document.createElement('button')
//body classes
body.classList.add('body')
bodyTitle.classList.add('bodyTitle')
todoHeadTitle.classList.add('todoHead', 'headTitle')
todoHeadDescription.classList.add('todoHead', 'headDescription')
todoHeadDate.classList.add('todoHead', 'headDate')
todoHeadPriority.classList.add('todoHead', 'headPriority')
todoWrapper.classList.add('todoWrapper')
btnAddTodo.classList.add('btnAddTodoItem')
//body content
bodyTitle.textContent = 'Project Title'
todoHeadTitle.textContent = 'Title'
todoHeadDescription.textContent = 'Description'
todoHeadDate.textContent = 'Due Date'
todoHeadPriority.textContent = 'Priority'
btnAddTodo.textContent = 'Add ToDo Item'
//body append
body.append(bodyTitle,btnAddTodo,todoWrapper)
todoWrapper.append(todoHeadTitle,todoHeadDescription,todoHeadDate,todoHeadPriority)
//event listeners
btnAddTodo.addEventListener('click', () =>{
    ;(0,_todoForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
})



//footer --v
//footer layout
const footer1 = document.createElement('a')
const footer2 = document.createElement('a')
//footer classes
footer.classList.add('footer')
//footer content
footer1.textContent = 'Created by Isaac Sutton-Wild'
footer2.textContent = 'Icons by svgrepo.com'
footer2.href = 'https://www.svgrepo.com/'
footer1.href = 'https://github.com/IsaacWild/restaurantPage'
//footer append
footer.append(footer1, footer2)

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function projectForm(){
// Project Form --v
// Form Layout

const sidebar = document.querySelector('.sidebar')
const projectFormWrapper = document.createElement('div')
const form = document.createElement('form')
const feildset = document.createElement('fieldset')
const legend = document.createElement('legend')
const lblProjectTitle = document.createElement('label')
const inputProjectTitle = document.createElement('input')
const btnProjectSubmit = document.createElement('input')

// Classes
projectFormWrapper.classList.add('projectFormWrapperActive')

// Content
feildset.classList.add('feildset')
form.setAttribute('name', 'maketodoItem')
form.setAttribute('onsubmit', 'formSubmit()')
legend.textContent = 'Create your ToDo Item'
lblProjectTitle.setAttribute('for', 'inputProjectTitle')
lblProjectTitle.textContent = 'Project Title: '
inputProjectTitle.setAttribute('type','text')
inputProjectTitle.setAttribute('id','inputProjectTitle')
inputProjectTitle.setAttribute('name','inputProjectTitle')
inputProjectTitle.setAttribute('required','required')
inputProjectTitle.setAttribute("minlength", "1")
inputProjectTitle.setAttribute("maxlength", "30")
btnProjectSubmit.setAttribute('type','submit')
btnProjectSubmit.setAttribute('value','Add Project')

// Append
sidebar.appendChild(projectFormWrapper)
projectFormWrapper.appendChild(form)
form.appendChild(feildset)
feildset.append(legend, lblProjectTitle,inputProjectTitle,btnProjectSubmit)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);

/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function todoForm(){
//todo Form --v
//Form Layout
const todoWrapper = document.querySelector('.todoWrapper')
const formWrapper = document.createElement('div')
const form = document.createElement('form')
const feildset = document.createElement('fieldset')
const legend = document.createElement('legend')
const lblTodoTitle = document.createElement('label')
const inputTodoTitle = document.createElement('input')
const lblTodoDescription = document.createElement('label')
const inputTodoDescription = document.createElement('input')
const lblTodoDate = document.createElement('label')
const inputTodoDate = document.createElement('input')
const lblTodoPriority = document.createElement('label')
const selectTodoPriority = document.createElement('select')
const priorityHigh = document.createElement('option')
const priorityMed = document.createElement('option')
const priorityLow = document.createElement('option')
const btnSubmit = document.createElement('button')

//todo Form Classes
formWrapper.classList.add('formWrapperActive')
feildset.classList.add('feildset')
btnSubmit.classList.add('btnSubmit')
//todo Form Content
form.setAttribute('name', 'maketodoItem')
form.setAttribute('id', 'maketodoItem')
legend.textContent = 'Create your ToDo Item'
lblTodoTitle.setAttribute('for', 'todoTitle')
lblTodoTitle.textContent = 'Title: '
inputTodoTitle.setAttribute('type', 'text')
inputTodoTitle.setAttribute('id', 'todoTitle')
inputTodoTitle.setAttribute('name', 'todoTitle')
inputTodoTitle.setAttribute('required', 'required')
lblTodoDescription.setAttribute('for', 'todoDescription')
lblTodoDescription.textContent = 'Description: '
inputTodoDescription.setAttribute('type','text')
inputTodoDescription.setAttribute('id','todoDescription')
inputTodoDescription.setAttribute('name','todoDescription')
inputTodoDescription.setAttribute('required','required')
lblTodoDate.setAttribute = ('for', 'todoDate')
lblTodoDate.textContent = 'Due Date:'
inputTodoDate.setAttribute('type','date')
inputTodoDate.setAttribute('id','todoDate')
inputTodoDate.setAttribute('name','todoDate')
inputTodoDate.setAttribute('required','required')
lblTodoPriority.setAttribute('for', 'todoPriority')
lblTodoPriority.textContent = 'Priority: '
selectTodoPriority.setAttribute('name','todoPriority')
selectTodoPriority.setAttribute('id','todoPriority')
selectTodoPriority.setAttribute('required','required')
priorityHigh.setAttribute('value','High')
priorityHigh.textContent = 'High'
priorityMed.setAttribute('value','Medium')
priorityMed.textContent = 'Medium'
priorityLow.setAttribute('value','Low')
priorityLow.textContent = 'Low'
btnSubmit.textContent= 'Create ToDo Item'
//todo Form Append
todoWrapper.append(formWrapper)
formWrapper.appendChild(form)
form.appendChild(feildset)
feildset.append(legend,lblTodoTitle,inputTodoTitle,lblTodoDescription,inputTodoDescription,lblTodoDate,inputTodoDate,lblTodoPriority,selectTodoPriority, btnSubmit)
selectTodoPriority.append(priorityHigh,priorityMed,priorityLow)
//event Listeners
// btnSubmit.addEventListener('click', () => {
//   if(form.checkValidity()){
//     formWrapper.classList.toggle('formWrapperInactive')
//   }
// })

$('#form').submit(function (e) {
  e.preventDefault();
});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoForm);

/***/ }),

/***/ "./src/icons/todoIcon.svg":
/*!********************************!*\
  !*** ./src/icons/todoIcon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49a2807f48fcba659f75.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFXO0FBQ2YsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBUTtBQUNaLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN4Q2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0Zvcm1TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0Zvcm1TdHlsZS5jc3M/MWY0YSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Gb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TStQTFVTK1JvdW5kZWQrMWM6d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgLyogb3V0bGluZTogc29saWQgYmx1ZSAxcHg7ICovXFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNIFBMVVMgUm91bmRlZCAxYycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnBhZ2VXcmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gbWlubWF4KDExMHB4LCAyNSUpIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxufVxcblxcbi8qIGhlYWRlciAqL1xcbi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNERDI0NzYsICNGRDg0NTEpOyAqL1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uaWNvbntcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHNpZGViYXIgKi9cXG4uc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZEODQ1MSwgI0ZGQkQ2Rik7ICovXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc2lkZVRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJEMUMzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNTc2MUIyLCAjMUZDNUE4KTsgKi9cXG4gICAgLyogZ3JpZC1hcmVhOiAxLzEvMi8yOyAqL1xcbn1cXG5cXG4uYWN0aXZlVGl0bGV7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuLmNvbXBsZXRlVGl0bGV7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuLmFjdGl2ZVByb1dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgaHNsKDE0OCwgMTAwJSwgMzklKSwgI0ZDRUUyMSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkQxQzM7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG5cXG59XFxuXFxuLmNvbXBsZXRlZFByb1dyYXBwZXJ7XFxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDI1JSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGhzbCgxMTksIDk2JSwgNzAlKSwgaHNsKDIwOSwgNDAlLCA0MSUpKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRDFDMztcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggaHNsKDI3LCAwJSwgMzUlKTtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG5cXG4uYnRuQWRkUHJvamVjdHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNywgNzAlLCA2NSUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG5BZGRQcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjcsIDcwJSwgNTUlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbn1cXG5cXG4uYnRuQ2xlYXJDb21wbGV0ZWR7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNSwgNzAlLCA2NSUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG5DbGVhckNvbXBsZXRlZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDUsIDcwJSwgNTUlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuLmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRDg0NTEsICNGRkJENkYpOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyByZXBlYXQoNCwgYXV0byk7XFxufVxcblxcbi5ib2R5VGl0bGV7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJ0bkFkZFRvZG9JdGVte1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3LCA3MCUsIDY1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiAxLzMvMi81O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uYnRuQWRkVG9kb0l0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNywgNzAlLCA1NSUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxufVxcblxcbi50b2RvV3JhcHBlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gcmVwZWF0KDQsIGF1dG8pO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG9IZWFke1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAwLjEzcmVtO1xcbn1cXG5cXG4uaGVhZFRpdGxle1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcbi5oZWFkRGVzY3JpcHRpb257XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuLmhlYWREYXRle1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcbi5oZWFkUHJpb3JpdHl7XFxuICAgIGdyaWQtYXJlYTogMS80LzIvNTtcXG59XFxuXFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpwbHVtO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRkZCRDZGLCBoc2woMzMsIDEwMCUsIDQyJSkpOyAqL1xcblxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscURBQXFEO0lBQ3JELGFBQWE7QUFDakI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksNEJBQTRCO0lBQzVCLG9FQUFvRTtJQUNwRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSw0QkFBNEI7SUFDNUIsb0VBQW9FO0lBQ3BFLGVBQWU7SUFDZixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLDBFQUEwRTtJQUMxRSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzRkFBc0Y7SUFDdEYseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiwwRkFBMEY7SUFDMUYseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIseUNBQXlDO0FBQzdDOztBQUVBLFNBQVM7QUFDVDtJQUNJLHNCQUFzQjtJQUN0QixvRUFBb0U7SUFDcEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSxXQUFXO0FBQ1g7SUFDSSxxQkFBcUI7SUFDckIscUZBQXFGOztJQUVyRixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TStQTFVTK1JvdW5kZWQrMWM6d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKntcXG4gICAgLyogb3V0bGluZTogc29saWQgYmx1ZSAxcHg7ICovXFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNIFBMVVMgUm91bmRlZCAxYycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnBhZ2VXcmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gbWlubWF4KDExMHB4LCAyNSUpIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxufVxcblxcbi8qIGhlYWRlciAqL1xcbi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNERDI0NzYsICNGRDg0NTEpOyAqL1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uaWNvbntcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHNpZGViYXIgKi9cXG4uc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZEODQ1MSwgI0ZGQkQ2Rik7ICovXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc2lkZVRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJEMUMzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNTc2MUIyLCAjMUZDNUE4KTsgKi9cXG4gICAgLyogZ3JpZC1hcmVhOiAxLzEvMi8yOyAqL1xcbn1cXG5cXG4uYWN0aXZlVGl0bGV7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuLmNvbXBsZXRlVGl0bGV7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuLmFjdGl2ZVByb1dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgaHNsKDE0OCwgMTAwJSwgMzklKSwgI0ZDRUUyMSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkQxQzM7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG5cXG59XFxuXFxuLmNvbXBsZXRlZFByb1dyYXBwZXJ7XFxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDI1JSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGhzbCgxMTksIDk2JSwgNzAlKSwgaHNsKDIwOSwgNDAlLCA0MSUpKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRDFDMztcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggaHNsKDI3LCAwJSwgMzUlKTtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG5cXG4uYnRuQWRkUHJvamVjdHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNywgNzAlLCA2NSUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG5BZGRQcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjcsIDcwJSwgNTUlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbn1cXG5cXG4uYnRuQ2xlYXJDb21wbGV0ZWR7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNSwgNzAlLCA2NSUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG5DbGVhckNvbXBsZXRlZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDUsIDcwJSwgNTUlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuLmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRDg0NTEsICNGRkJENkYpOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyByZXBlYXQoNCwgYXV0byk7XFxufVxcblxcbi5ib2R5VGl0bGV7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJ0bkFkZFRvZG9JdGVte1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3LCA3MCUsIDY1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiAxLzMvMi81O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uYnRuQWRkVG9kb0l0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNywgNzAlLCA1NSUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxufVxcblxcbi50b2RvV3JhcHBlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gcmVwZWF0KDQsIGF1dG8pO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG9IZWFke1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAwLjEzcmVtO1xcbn1cXG5cXG4uaGVhZFRpdGxle1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcbi5oZWFkRGVzY3JpcHRpb257XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuLmhlYWREYXRle1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcbi5oZWFkUHJpb3JpdHl7XFxuICAgIGdyaWQtYXJlYTogMS80LzIvNTtcXG59XFxuXFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpwbHVtO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRkZCRDZGLCBoc2woMzMsIDEwMCUsIDQyJSkpOyAqL1xcblxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtV3JhcHBlckFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyNywgMCUsIDI1JSwgMC44NSk7XFxuICAgIGdyaWQtYXJlYTogMS8gMSAvIC0xLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5mb3JtV3JhcHBlckluYWN0aXZle1xcbiAgICB6LWluZGV4OiAtNTAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmZlaWxkc2V0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOnN0cmV0Y2g7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5idG5TdWJtaXR7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0e1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG9Gb3JtU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtV3JhcHBlckFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyNywgMCUsIDI1JSwgMC44NSk7XFxuICAgIGdyaWQtYXJlYTogMS8gMSAvIC0xLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5mb3JtV3JhcHBlckluYWN0aXZle1xcbiAgICB6LWluZGV4OiAtNTAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmZlaWxkc2V0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOnN0cmV0Y2g7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5idG5TdWJtaXR7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0e1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvRm9ybVN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb0Zvcm1TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vdG9kb0Zvcm1TdHlsZS5jc3MnXG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb25zL3RvZG9JY29uLnN2ZydcbmltcG9ydCB0b2RvRm9ybSBmcm9tICcuL3RvZG9Gb3JtLmpzJztcbmltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tICcuL3Byb2plY3RGb3JtLmpzJztcblxuXG4vL2luaXRpYWwgcGFnZSB3cmFwcGVyIGNvbnRhaW5lclxuY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2VXcmFwcGVyJylcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZVdyYXBwZXIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucGFnZVdyYXBwZXIuYXBwZW5kKGhlYWRlciwgc2lkZWJhcixib2R5LGZvb3RlcilcblxuLy9oZWFkZXIgLS12XG4vL2hlYWRlciBsYXlvdXRcbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbi8vaGVhZGVyIGNsYXNzZXNcbmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxubXlJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbmhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlclRpdGxlJylcbi8vaGVhZGVyIGNvbnRlbnRcbmhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1RvRG8gTGlzdCdcbm15SWNvbi5zcmMgPSBpY29uO1xuXG4vL2hlYWRlciBhcHBlbmRcbmhlYWRlci5hcHBlbmQoaGVhZGVyVGl0bGUsIG15SWNvbilcblxuLy9zaWRlYmFyIC0tdlxuLy9zaWRlYmFyIGxheW91dFxuY29uc3QgYWN0aXZlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmNvbnN0IGNvbXBsZXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmNvbnN0IGFjdGl2ZVByb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgY29tcGxldGVkUHJvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGJ0bkNsZWFyQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuLy9zaWRlYmFyY2xhc3Nlc1xuc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcbmFjdGl2ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVUaXRsZScsICdhY3RpdmVUaXRsZScpXG5jb21wbGV0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVUaXRsZScsICdjb21wbGV0ZVRpdGxlJylcbmFjdGl2ZVByb1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlUHJvV3JhcHBlcicpXG5jb21wbGV0ZWRQcm9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZFByb1dyYXBwZXInKVxuYnRuQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdidG5BZGRQcm9qZWN0JylcbmJ0bkNsZWFyQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2J0bkNsZWFyQ29tcGxldGVkJylcbi8vc2lkZWJhcmNvbnRlbnRcbmFjdGl2ZVRpdGxlLnRleHRDb250ZW50ID0gJ0FjdGl2ZSBQcm9qZWN0cydcbmNvbXBsZXRlVGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkIFByb2plY3RzJ1xuYWN0aXZlUHJvV3JhcHBlci50ZXh0Q29udGVudCA9J0hvbWUnXG5jb21wbGV0ZWRQcm9XcmFwcGVyLnRleHRDb250ZW50ID0gJ0F3YXknXG5idG5BZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xuYnRuQ2xlYXJDb21wbGV0ZWQudGV4dENvbnRlbnQgPSAnQ2xlYXIgQ29tcGxldGVkJ1xuLy9zaWRlYmFyIGFwcGVuZFxuc2lkZWJhci5hcHBlbmQoYWN0aXZlVGl0bGUsYWN0aXZlUHJvV3JhcHBlcixjb21wbGV0ZVRpdGxlLCBjb21wbGV0ZWRQcm9XcmFwcGVyKTtcbmFjdGl2ZVRpdGxlLmFwcGVuZENoaWxkKGJ0bkFkZFByb2plY3QpXG5jb21wbGV0ZVRpdGxlLmFwcGVuZENoaWxkKGJ0bkNsZWFyQ29tcGxldGVkKVxuLy9ldmVudCBsaXN0ZW5lcnNcbmJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBwcm9qZWN0Rm9ybSgpXG59KVxuXG5cbi8vYm9keSAtLXZcbi8vYm9keSBsYXlvdXRcbmNvbnN0IGJvZHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgdG9kb0hlYWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgdG9kb0hlYWREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgdG9kb0hlYWREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5jb25zdCB0b2RvSGVhZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5jb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbi8vYm9keSBjbGFzc2VzXG5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKVxuYm9keVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvZHlUaXRsZScpXG50b2RvSGVhZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9IZWFkJywgJ2hlYWRUaXRsZScpXG50b2RvSGVhZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9IZWFkJywgJ2hlYWREZXNjcmlwdGlvbicpXG50b2RvSGVhZERhdGUuY2xhc3NMaXN0LmFkZCgndG9kb0hlYWQnLCAnaGVhZERhdGUnKVxudG9kb0hlYWRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvSGVhZCcsICdoZWFkUHJpb3JpdHknKVxudG9kb1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndG9kb1dyYXBwZXInKVxuYnRuQWRkVG9kby5jbGFzc0xpc3QuYWRkKCdidG5BZGRUb2RvSXRlbScpXG4vL2JvZHkgY29udGVudFxuYm9keVRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3QgVGl0bGUnXG50b2RvSGVhZFRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xudG9kb0hlYWREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbidcbnRvZG9IZWFkRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcbnRvZG9IZWFkUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknXG5idG5BZGRUb2RvLnRleHRDb250ZW50ID0gJ0FkZCBUb0RvIEl0ZW0nXG4vL2JvZHkgYXBwZW5kXG5ib2R5LmFwcGVuZChib2R5VGl0bGUsYnRuQWRkVG9kbyx0b2RvV3JhcHBlcilcbnRvZG9XcmFwcGVyLmFwcGVuZCh0b2RvSGVhZFRpdGxlLHRvZG9IZWFkRGVzY3JpcHRpb24sdG9kb0hlYWREYXRlLHRvZG9IZWFkUHJpb3JpdHkpXG4vL2V2ZW50IGxpc3RlbmVyc1xuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIHRvZG9Gb3JtKClcbn0pXG5cblxuXG4vL2Zvb3RlciAtLXZcbi8vZm9vdGVyIGxheW91dFxuY29uc3QgZm9vdGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuY29uc3QgZm9vdGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuLy9mb290ZXIgY2xhc3Nlc1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4vL2Zvb3RlciBjb250ZW50XG5mb290ZXIxLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgSXNhYWMgU3V0dG9uLVdpbGQnXG5mb290ZXIyLnRleHRDb250ZW50ID0gJ0ljb25zIGJ5IHN2Z3JlcG8uY29tJ1xuZm9vdGVyMi5ocmVmID0gJ2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tLydcbmZvb3RlcjEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vSXNhYWNXaWxkL3Jlc3RhdXJhbnRQYWdlJ1xuLy9mb290ZXIgYXBwZW5kXG5mb290ZXIuYXBwZW5kKGZvb3RlcjEsIGZvb3RlcjIpIiwiZnVuY3Rpb24gcHJvamVjdEZvcm0oKXtcbi8vIFByb2plY3QgRm9ybSAtLXZcbi8vIEZvcm0gTGF5b3V0XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG5jb25zdCBwcm9qZWN0Rm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuY29uc3QgZmVpbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG5jb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuY29uc3QgbGJsUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBidG5Qcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4vLyBDbGFzc2VzXG5wcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm1XcmFwcGVyQWN0aXZlJylcblxuLy8gQ29udGVudFxuZmVpbGRzZXQuY2xhc3NMaXN0LmFkZCgnZmVpbGRzZXQnKVxuZm9ybS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWFrZXRvZG9JdGVtJylcbmZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdmb3JtU3VibWl0KCknKVxubGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB5b3VyIFRvRG8gSXRlbSdcbmxibFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdpbnB1dFByb2plY3RUaXRsZScpXG5sYmxQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBUaXRsZTogJ1xuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG5pbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnaW5wdXRQcm9qZWN0VGl0bGUnKVxuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywnaW5wdXRQcm9qZWN0VGl0bGUnKVxuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcIm1pbmxlbmd0aFwiLCBcIjFcIilcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpXG5idG5Qcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG5idG5Qcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdBZGQgUHJvamVjdCcpXG5cbi8vIEFwcGVuZFxuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybVdyYXBwZXIpXG5wcm9qZWN0Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbmZvcm0uYXBwZW5kQ2hpbGQoZmVpbGRzZXQpXG5mZWlsZHNldC5hcHBlbmQobGVnZW5kLCBsYmxQcm9qZWN0VGl0bGUsaW5wdXRQcm9qZWN0VGl0bGUsYnRuUHJvamVjdFN1Ym1pdClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Rm9ybSIsImZ1bmN0aW9uIHRvZG9Gb3JtKCl7XG4vL3RvZG8gRm9ybSAtLXZcbi8vRm9ybSBMYXlvdXRcbmNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9XcmFwcGVyJylcbmNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbmNvbnN0IGZlaWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbmNvbnN0IGxibFRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuY29uc3QgbGJsVG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0VG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5jb25zdCBzZWxlY3RUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IHByaW9yaXR5TWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbi8vdG9kbyBGb3JtIENsYXNzZXNcbmZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1XcmFwcGVyQWN0aXZlJylcbmZlaWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2ZlaWxkc2V0JylcbmJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG5TdWJtaXQnKVxuLy90b2RvIEZvcm0gQ29udGVudFxuZm9ybS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWFrZXRvZG9JdGVtJylcbmZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdtYWtldG9kb0l0ZW0nKVxubGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB5b3VyIFRvRG8gSXRlbSdcbmxibFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvVGl0bGUnKVxubGJsVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9UaXRsZScpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb1RpdGxlJylcbmlucHV0VG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxubGJsVG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9EZXNjcmlwdGlvbicpXG5sYmxUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcbmlucHV0VG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9EZXNjcmlwdGlvbicpXG5pbnB1dFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0b2RvRGVzY3JpcHRpb24nKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9EYXRlLnNldEF0dHJpYnV0ZSA9ICgnZm9yJywgJ3RvZG9EYXRlJylcbmxibFRvZG9EYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOidcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvRGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RvZG9EYXRlJylcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvUHJpb3JpdHknKVxubGJsVG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnXG5zZWxlY3RUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywncmVxdWlyZWQnKVxucHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIaWdoJylcbnByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJ1xucHJpb3JpdHlNZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ01lZGl1bScpXG5wcmlvcml0eU1lZC50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG5wcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93JylcbnByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdydcbmJ0blN1Ym1pdC50ZXh0Q29udGVudD0gJ0NyZWF0ZSBUb0RvIEl0ZW0nXG4vL3RvZG8gRm9ybSBBcHBlbmRcbnRvZG9XcmFwcGVyLmFwcGVuZChmb3JtV3JhcHBlcilcbmZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pXG5mb3JtLmFwcGVuZENoaWxkKGZlaWxkc2V0KVxuZmVpbGRzZXQuYXBwZW5kKGxlZ2VuZCxsYmxUb2RvVGl0bGUsaW5wdXRUb2RvVGl0bGUsbGJsVG9kb0Rlc2NyaXB0aW9uLGlucHV0VG9kb0Rlc2NyaXB0aW9uLGxibFRvZG9EYXRlLGlucHV0VG9kb0RhdGUsbGJsVG9kb1ByaW9yaXR5LHNlbGVjdFRvZG9Qcmlvcml0eSwgYnRuU3VibWl0KVxuc2VsZWN0VG9kb1ByaW9yaXR5LmFwcGVuZChwcmlvcml0eUhpZ2gscHJpb3JpdHlNZWQscHJpb3JpdHlMb3cpXG4vL2V2ZW50IExpc3RlbmVyc1xuLy8gYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICBpZihmb3JtLmNoZWNrVmFsaWRpdHkoKSl7XG4vLyAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybVdyYXBwZXJJbmFjdGl2ZScpXG4vLyAgIH1cbi8vIH0pXG5cbiQoJyNmb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9Gb3JtIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9