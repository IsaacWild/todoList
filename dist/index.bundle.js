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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    /* outline: solid blue 1px; */\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n    font-size: 18px;\n    font-weight: 500;\n}\n.pageWrapper{\n    display: grid;\n    grid-template: auto 1fr auto / minmax(110px, 25%) 1fr;\n    height: 100vh; \n}\n\n/* header */\n.header{\n    background-color: aquamarine;\n    /* background-image: linear-gradient(to bottom, #DD2476, #FD8451); */\n    padding: 0.8rem 2rem;\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2rem;\n}\n\n.icon{\n    height: 6rem;\n}\n\n.headerTitle{\n    font-weight: 600;\n    font-size: 2.8rem;\n    margin: 0;\n}\n\n/* sidebar */\n.sidebar{\n    background-color: lightcoral;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: auto 1fr auto 1fr;\n    gap: 1rem;\n    \n}\n\n.sideTitle{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    /* text-decoration: underline; */\n    padding: 0.5rem 0rem 0.5rem;\n    margin: 0;\n    background-color: #E2D1C3;\n    border-radius: 1rem;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    /* background-image: linear-gradient(to bottom right, #5761B2, #1FC5A8); */\n    /* grid-area: 1/1/2/2; */\n}\n\n.activeTitle{\n    grid-area: 1/1/2/2;\n}\n\n.completeTitle{\n    grid-area: 3/1/4/2;\n}\n\n.activeProWrapper{\n    display: grid;\n    justify-items: center;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom right, hsl(148, 100%, 39%), #FCEE21); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 2/1/3/2;\n\n}\n\n.completedProWrapper{\n    color: hsl(0, 0%, 25%);\n    display: grid;\n    justify-items: center;\n    text-decoration: line-through;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom, hsl(119, 96%, 70%), hsl(209, 40%, 41%)); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 4/1/5/2;\n}\n\n.btnAddProject{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(27, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnAddProject:hover{\n    background-color: hsl(27, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n.btnClearCompleted{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(5, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnClearCompleted:hover{\n    background-color: hsl(5, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n/* Body */\n.body{\n    background-color:wheat;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    text-align: center;\n    padding: 0.5rem;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n}\n\n.bodyTitle{\n    grid-area: 1/1/2/-1;\n    text-align: center;\n    text-decoration: underline;\n    font-size: 1.4rem;\n    margin: 0;\n}\n\n.todoWrapper{\n    grid-column: 1/-1;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n    overflow: auto;\n}\n\n.todoHead{\n    /* display: flex; */\n    text-decoration: underline 0.13rem;\n}\n\n.headTitle{\n    grid-area: 1/1/2/2;\n}\n.headDescription{\n    grid-area: 1/2/2/3;\n}\n.headDate{\n    grid-area: 1/3/2/4;\n}\n.headPriority{\n    grid-area: 1/4/2/5;\n}\n\n\n/* Footer */\n.footer{\n    background-color:plum;\n    /* background-image: linear-gradient(to bottom right, #FFBD6F, hsl(33, 100%, 42%)); */\n\n    padding: 0.2rem;\n    font-size: 0.8rem;\n    grid-column: 1/3;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,4CAA4C;IAC5C,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,qDAAqD;IACrD,aAAa;AACjB;;AAEA,WAAW;AACX;IACI,4BAA4B;IAC5B,oEAAoE;IACpE,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;AACb;;AAEA,YAAY;AACZ;IACI,4BAA4B;IAC5B,oEAAoE;IACpE,eAAe;IACf,aAAa;IACb,qCAAqC;IACrC,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,gCAAgC;IAChC,2BAA2B;IAC3B,SAAS;IACT,yBAAyB;IACzB,mBAAmB;IACnB,wCAAwC;IACxC,0EAA0E;IAC1E,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,sFAAsF;IACtF,yBAAyB;IACzB,wCAAwC;IACxC,kBAAkB;;AAEtB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,mBAAmB;IACnB,0FAA0F;IAC1F,yBAAyB;IACzB,wCAAwC;IACxC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;IACZ,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,kCAAkC;IAClC,YAAY;IACZ,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,kCAAkC;IAClC,+BAA+B;IAC/B,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA,SAAS;AACT;IACI,sBAAsB;IACtB,oEAAoE;IACpE,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,0BAA0B;IAC1B,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,yCAAyC;IACzC,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;;;AAGA,WAAW;AACX;IACI,qBAAqB;IACrB,qFAAqF;;IAErF,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');\n\n*{\n    /* outline: solid blue 1px; */\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n    font-size: 18px;\n    font-weight: 500;\n}\n.pageWrapper{\n    display: grid;\n    grid-template: auto 1fr auto / minmax(110px, 25%) 1fr;\n    height: 100vh; \n}\n\n/* header */\n.header{\n    background-color: aquamarine;\n    /* background-image: linear-gradient(to bottom, #DD2476, #FD8451); */\n    padding: 0.8rem 2rem;\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2rem;\n}\n\n.icon{\n    height: 6rem;\n}\n\n.headerTitle{\n    font-weight: 600;\n    font-size: 2.8rem;\n    margin: 0;\n}\n\n/* sidebar */\n.sidebar{\n    background-color: lightcoral;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    padding: 0.5rem;\n    display: grid;\n    grid-template-rows: auto 1fr auto 1fr;\n    gap: 1rem;\n    \n}\n\n.sideTitle{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    /* text-decoration: underline; */\n    padding: 0.5rem 0rem 0.5rem;\n    margin: 0;\n    background-color: #E2D1C3;\n    border-radius: 1rem;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    /* background-image: linear-gradient(to bottom right, #5761B2, #1FC5A8); */\n    /* grid-area: 1/1/2/2; */\n}\n\n.activeTitle{\n    grid-area: 1/1/2/2;\n}\n\n.completeTitle{\n    grid-area: 3/1/4/2;\n}\n\n.activeProWrapper{\n    display: grid;\n    justify-items: center;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom right, hsl(148, 100%, 39%), #FCEE21); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 2/1/3/2;\n\n}\n\n.completedProWrapper{\n    color: hsl(0, 0%, 25%);\n    display: grid;\n    justify-items: center;\n    text-decoration: line-through;\n    border-radius: 1rem;\n    /* background-image: linear-gradient(to bottom, hsl(119, 96%, 70%), hsl(209, 40%, 41%)); */\n    background-color: #E2D1C3;\n    box-shadow: 0px 2px 3px hsl(27, 0%, 35%);\n    grid-area: 4/1/5/2;\n}\n\n.btnAddProject{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(27, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnAddProject:hover{\n    background-color: hsl(27, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n.btnClearCompleted{\n    font-size: 1.2rem;\n    border-radius: 2rem;\n    background-color: hsl(5, 70%, 65%);\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.btnClearCompleted:hover{\n    background-color: hsl(5, 70%, 55%);\n    transform: translate(2px, -2px);\n    transition: all 0.3s;\n    box-shadow: -2px 2px 3px hsl(27, 0%, 35%);\n}\n\n/* Body */\n.body{\n    background-color:wheat;\n    /* background-image: linear-gradient(to bottom, #FD8451, #FFBD6F); */\n    text-align: center;\n    padding: 0.5rem;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n}\n\n.bodyTitle{\n    grid-area: 1/1/2/-1;\n    text-align: center;\n    text-decoration: underline;\n    font-size: 1.4rem;\n    margin: 0;\n}\n\n.todoWrapper{\n    grid-column: 1/-1;\n    display: grid;\n    grid-template: auto 1fr / repeat(4, auto);\n    overflow: auto;\n}\n\n.todoHead{\n    /* display: flex; */\n    text-decoration: underline 0.13rem;\n}\n\n.headTitle{\n    grid-area: 1/1/2/2;\n}\n.headDescription{\n    grid-area: 1/2/2/3;\n}\n.headDate{\n    grid-area: 1/3/2/4;\n}\n.headPriority{\n    grid-area: 1/4/2/5;\n}\n\n\n/* Footer */\n.footer{\n    background-color:plum;\n    /* background-image: linear-gradient(to bottom right, #FFBD6F, hsl(33, 100%, 42%)); */\n\n    padding: 0.2rem;\n    font-size: 0.8rem;\n    grid-column: 1/3;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
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
    ;(0,_todoForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
})

//body --v
//body layout
const bodyTitle = document.createElement('p')
const todoHeadTitle = document.createElement('p')
const todoHeadDescription = document.createElement('p')
const todoHeadDate = document.createElement('p')
const todoHeadPriority = document.createElement('p')
const todoWrapper = document.createElement('div')
//body classes
body.classList.add('body')
bodyTitle.classList.add('bodyTitle')
todoHeadTitle.classList.add('todoHead', 'headTitle')
todoHeadDescription.classList.add('todoHead', 'headDescription')
todoHeadDate.classList.add('todoHead', 'headDate')
todoHeadPriority.classList.add('todoHead', 'headPriority')
todoWrapper.classList.add('todoWrapper')
//body content
bodyTitle.textContent = 'Project Title'
todoHeadTitle.textContent = 'Title'
todoHeadDescription.textContent = 'Description'
todoHeadDate.textContent = 'Due Date'
todoHeadPriority.textContent = 'Priority'
//body append
body.append(bodyTitle,todoWrapper)
todoWrapper.append(todoHeadTitle,todoHeadDescription,todoHeadDate,todoHeadPriority)



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
console.log('creating form')
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
const btnSubmit = document.createElement('input')

//todo Form Classes
formWrapper.classList.add('formWrapperActive')
feildset.classList.add('feildset')
btnSubmit.classList.add('btnSubmit')
//todo Form Content
form.setAttribute('name', 'maketodoItem')
form.setAttribute('id', 'maketodoItem')
// form.setAttribute('onsubmit', 'formSubmit()')
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
btnSubmit.setAttribute('type', 'submit')
btnSubmit.setAttribute('value', 'Create ToDo Item')
//todo Form Append
todoWrapper.append(formWrapper)
formWrapper.appendChild(form)
form.appendChild(feildset)
feildset.append(legend,lblTodoTitle,inputTodoTitle,lblTodoDescription,inputTodoDescription,lblTodoDate,inputTodoDate,lblTodoPriority,selectTodoPriority, btnSubmit)
selectTodoPriority.append(priorityHigh,priorityMed,priorityLow)
//event Listeners
btnSubmit.addEventListener('click', () => {
  if(form.checkValidity()){
    formWrapper.classList.toggle('formWrapperActive')
    formWrapper.classList.toggle('formWrapperActive')

  }
})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Gb3JtU3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Gb3JtU3R5bGUuY3NzPzFmNGEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU0rUExVUytSb3VuZGVkKzFjOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIC8qIG91dGxpbmU6IHNvbGlkIGJsdWUgMXB4OyAqL1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTSBQTFVTIFJvdW5kZWQgMWMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5wYWdlV3JhcHBlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgYXV0byAvIG1pbm1heCgxMTBweCwgMjUlKSAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG4uaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjREQyNDc2LCAjRkQ4NDUxKTsgKi9cXG4gICAgcGFkZGluZzogMC44cmVtIDJyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLmljb257XFxuICAgIGhlaWdodDogNnJlbTtcXG59XFxuXFxuLmhlYWRlclRpdGxle1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBzaWRlYmFyICovXFxuLnNpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRDg0NTEsICNGRkJENkYpOyAqL1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0byAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgXFxufVxcblxcbi5zaWRlVGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cXG4gICAgcGFkZGluZzogMC41cmVtIDByZW0gMC41cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkQxQzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM1NzYxQjIsICMxRkM1QTgpOyAqL1xcbiAgICAvKiBncmlkLWFyZWE6IDEvMS8yLzI7ICovXFxufVxcblxcbi5hY3RpdmVUaXRsZXtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4uY29tcGxldGVUaXRsZXtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbn1cXG5cXG4uYWN0aXZlUHJvV3JhcHBlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCBoc2woMTQ4LCAxMDAlLCAzOSUpLCAjRkNFRTIxKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRDFDMztcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggaHNsKDI3LCAwJSwgMzUlKTtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcblxcbn1cXG5cXG4uY29tcGxldGVkUHJvV3JhcHBlcntcXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgMjUlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgaHNsKDExOSwgOTYlLCA3MCUpLCBoc2woMjA5LCA0MCUsIDQxJSkpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJEMUMzO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxufVxcblxcbi5idG5BZGRQcm9qZWN0e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3LCA3MCUsIDY1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bkFkZFByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNywgNzAlLCA1NSUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxufVxcblxcbi5idG5DbGVhckNvbXBsZXRlZHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg1LCA3MCUsIDY1JSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bkNsZWFyQ29tcGxldGVkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNSwgNzAlLCA1NSUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxufVxcblxcbi8qIEJvZHkgKi9cXG4uYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGVhdDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZEODQ1MSwgI0ZGQkQ2Rik7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIHJlcGVhdCg0LCBhdXRvKTtcXG59XFxuXFxuLmJvZHlUaXRsZXtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8tMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRvZG9XcmFwcGVye1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyByZXBlYXQoNCwgYXV0byk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kb0hlYWR7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDAuMTNyZW07XFxufVxcblxcbi5oZWFkVGl0bGV7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuLmhlYWREZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4uaGVhZERhdGV7XFxuICAgIGdyaWQtYXJlYTogMS8zLzIvNDtcXG59XFxuLmhlYWRQcmlvcml0eXtcXG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbn1cXG5cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnBsdW07XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNGRkJENkYsIGhzbCgzMywgMTAwJSwgNDIlKSk7ICovXFxuXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsYUFBYTtBQUNqQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSw0QkFBNEI7SUFDNUIsb0VBQW9FO0lBQ3BFLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBLFlBQVk7QUFDWjtJQUNJLDRCQUE0QjtJQUM1QixvRUFBb0U7SUFDcEUsZUFBZTtJQUNmLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLDBFQUEwRTtJQUMxRSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzRkFBc0Y7SUFDdEYseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiwwRkFBMEY7SUFDMUYseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIseUNBQXlDO0FBQzdDOztBQUVBLFNBQVM7QUFDVDtJQUNJLHNCQUFzQjtJQUN0QixvRUFBb0U7SUFDcEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSxXQUFXO0FBQ1g7SUFDSSxxQkFBcUI7SUFDckIscUZBQXFGOztJQUVyRixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TStQTFVTK1JvdW5kZWQrMWM6d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKntcXG4gICAgLyogb3V0bGluZTogc29saWQgYmx1ZSAxcHg7ICovXFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNIFBMVVMgUm91bmRlZCAxYycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnBhZ2VXcmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gbWlubWF4KDExMHB4LCAyNSUpIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxufVxcblxcbi8qIGhlYWRlciAqL1xcbi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNERDI0NzYsICNGRDg0NTEpOyAqL1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uaWNvbntcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHNpZGViYXIgKi9cXG4uc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZEODQ1MSwgI0ZGQkQ2Rik7ICovXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBcXG59XFxuXFxuLnNpZGVUaXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbSAwLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRDFDMztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggaHNsKDI3LCAwJSwgMzUlKTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzU3NjFCMiwgIzFGQzVBOCk7ICovXFxuICAgIC8qIGdyaWQtYXJlYTogMS8xLzIvMjsgKi9cXG59XFxuXFxuLmFjdGl2ZVRpdGxle1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbi5jb21wbGV0ZVRpdGxle1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcblxcbi5hY3RpdmVQcm9XcmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIGhzbCgxNDgsIDEwMCUsIDM5JSksICNGQ0VFMjEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJEMUMzO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCBoc2woMjcsIDAlLCAzNSUpO1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFxufVxcblxcbi5jb21wbGV0ZWRQcm9XcmFwcGVye1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBoc2woMTE5LCA5NiUsIDcwJSksIGhzbCgyMDksIDQwJSwgNDElKSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkQxQzM7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IGhzbCgyNywgMCUsIDM1JSk7XFxuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcXG59XFxuXFxuLmJ0bkFkZFByb2plY3R7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjcsIDcwJSwgNjUlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuQWRkUHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3LCA3MCUsIDU1JSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAzcHggaHNsKDI3LCAwJSwgMzUlKTtcXG59XFxuXFxuLmJ0bkNsZWFyQ29tcGxldGVke1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDUsIDcwJSwgNjUlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuQ2xlYXJDb21wbGV0ZWQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg1LCA3MCUsIDU1JSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAzcHggaHNsKDI3LCAwJSwgMzUlKTtcXG59XFxuXFxuLyogQm9keSAqL1xcbi5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoZWF0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkQ4NDUxLCAjRkZCRDZGKTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gcmVwZWF0KDQsIGF1dG8pO1xcbn1cXG5cXG4uYm9keVRpdGxle1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLy0xO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udG9kb1dyYXBwZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIHJlcGVhdCg0LCBhdXRvKTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvSGVhZHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMC4xM3JlbTtcXG59XFxuXFxuLmhlYWRUaXRsZXtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG4uaGVhZERlc2NyaXB0aW9ue1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcbi5oZWFkRGF0ZXtcXG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbn1cXG4uaGVhZFByaW9yaXR5e1xcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxufVxcblxcblxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cGx1bTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI0ZGQkQ2RiwgaHNsKDMzLCAxMDAlLCA0MiUpKTsgKi9cXG5cXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybVdyYXBwZXJBY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjcsIDAlLCAyNSUsIDAuODUpO1xcbiAgICBncmlkLWFyZWE6IDEvIDEgLyAtMS8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4uZm9ybVdyYXBwZXJJbmFjdGl2ZXtcXG4gICAgei1pbmRleDogLTUwMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mZWlsZHNldHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgcm93LWdhcDogMnJlbTtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uYnRuU3VibWl0e1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvRm9ybVN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9ybVdyYXBwZXJBY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjcsIDAlLCAyNSUsIDAuODUpO1xcbiAgICBncmlkLWFyZWE6IDEvIDEgLyAtMS8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4uZm9ybVdyYXBwZXJJbmFjdGl2ZXtcXG4gICAgei1pbmRleDogLTUwMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mZWlsZHNldHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgcm93LWdhcDogMnJlbTtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAganVzdGlmeS1pdGVtczpzdHJldGNoO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uYnRuU3VibWl0e1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb0Zvcm1TdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9Gb3JtU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3RvZG9Gb3JtU3R5bGUuY3NzJ1xuaW1wb3J0IGljb24gZnJvbSAnLi9pY29ucy90b2RvSWNvbi5zdmcnXG5pbXBvcnQgdG9kb0Zvcm0gZnJvbSAnLi90b2RvRm9ybS5qcyc7XG5cbi8vaW5pdGlhbCBwYWdlIHdyYXBwZXIgY29udGFpbmVyXG5jb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncGFnZVdyYXBwZXInKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlV3JhcHBlcik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5wYWdlV3JhcHBlci5hcHBlbmQoaGVhZGVyLCBzaWRlYmFyLGJvZHksZm9vdGVyKVxuXG4vL2hlYWRlciAtLXZcbi8vaGVhZGVyIGxheW91dFxuY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuLy9oZWFkZXIgY2xhc3Nlc1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5teUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyVGl0bGUnKVxuLy9oZWFkZXIgY29udGVudFxuaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnVG9EbyBMaXN0J1xubXlJY29uLnNyYyA9IGljb247XG5cbi8vaGVhZGVyIGFwcGVuZFxuaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSwgbXlJY29uKVxuXG4vL3NpZGViYXIgLS12XG4vL3NpZGViYXIgbGF5b3V0XG5jb25zdCBhY3RpdmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgY29tcGxldGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgYWN0aXZlUHJvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb21wbGV0ZWRQcm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29uc3QgYnRuQ2xlYXJDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4vL3NpZGViYXJjbGFzc2VzXG5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxuYWN0aXZlVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZVRpdGxlJywgJ2FjdGl2ZVRpdGxlJylcbmNvbXBsZXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZVRpdGxlJywgJ2NvbXBsZXRlVGl0bGUnKVxuYWN0aXZlUHJvV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmVQcm9XcmFwcGVyJylcbmNvbXBsZXRlZFByb1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkUHJvV3JhcHBlcicpXG5idG5BZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bkFkZFByb2plY3QnKVxuYnRuQ2xlYXJDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnYnRuQ2xlYXJDb21wbGV0ZWQnKVxuLy9zaWRlYmFyY29udGVudFxuYWN0aXZlVGl0bGUudGV4dENvbnRlbnQgPSAnQWN0aXZlIFByb2plY3RzJ1xuY29tcGxldGVUaXRsZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQgUHJvamVjdHMnXG5hY3RpdmVQcm9XcmFwcGVyLnRleHRDb250ZW50ID0nSG9tZSdcbmNvbXBsZXRlZFByb1dyYXBwZXIudGV4dENvbnRlbnQgPSAnQXdheSdcbmJ0bkFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG5idG5DbGVhckNvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdDbGVhciBDb21wbGV0ZWQnXG4vL3NpZGViYXIgYXBwZW5kXG5zaWRlYmFyLmFwcGVuZChhY3RpdmVUaXRsZSxhY3RpdmVQcm9XcmFwcGVyLGNvbXBsZXRlVGl0bGUsIGNvbXBsZXRlZFByb1dyYXBwZXIpO1xuYWN0aXZlVGl0bGUuYXBwZW5kQ2hpbGQoYnRuQWRkUHJvamVjdClcbmNvbXBsZXRlVGl0bGUuYXBwZW5kQ2hpbGQoYnRuQ2xlYXJDb21wbGV0ZWQpXG4vL2V2ZW50IGxpc3RlbmVyc1xuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIHRvZG9Gb3JtKClcbn0pXG5cbi8vYm9keSAtLXZcbi8vYm9keSBsYXlvdXRcbmNvbnN0IGJvZHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgdG9kb0hlYWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgdG9kb0hlYWREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuY29uc3QgdG9kb0hlYWREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5jb25zdCB0b2RvSGVhZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5jb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vL2JvZHkgY2xhc3Nlc1xuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5JylcbmJvZHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2R5VGl0bGUnKVxudG9kb0hlYWRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvSGVhZCcsICdoZWFkVGl0bGUnKVxudG9kb0hlYWREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSGVhZCcsICdoZWFkRGVzY3JpcHRpb24nKVxudG9kb0hlYWREYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9IZWFkJywgJ2hlYWREYXRlJylcbnRvZG9IZWFkUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kb0hlYWQnLCAnaGVhZFByaW9yaXR5JylcbnRvZG9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9XcmFwcGVyJylcbi8vYm9keSBjb250ZW50XG5ib2R5VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBUaXRsZSdcbnRvZG9IZWFkVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnXG50b2RvSGVhZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xudG9kb0hlYWREYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJ1xudG9kb0hlYWRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSdcbi8vYm9keSBhcHBlbmRcbmJvZHkuYXBwZW5kKGJvZHlUaXRsZSx0b2RvV3JhcHBlcilcbnRvZG9XcmFwcGVyLmFwcGVuZCh0b2RvSGVhZFRpdGxlLHRvZG9IZWFkRGVzY3JpcHRpb24sdG9kb0hlYWREYXRlLHRvZG9IZWFkUHJpb3JpdHkpXG5cblxuXG4vL2Zvb3RlciAtLXZcbi8vZm9vdGVyIGxheW91dFxuY29uc3QgZm9vdGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuY29uc3QgZm9vdGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuLy9mb290ZXIgY2xhc3Nlc1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4vL2Zvb3RlciBjb250ZW50XG5mb290ZXIxLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgSXNhYWMgU3V0dG9uLVdpbGQnXG5mb290ZXIyLnRleHRDb250ZW50ID0gJ0ljb25zIGJ5IHN2Z3JlcG8uY29tJ1xuZm9vdGVyMi5ocmVmID0gJ2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tLydcbmZvb3RlcjEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vSXNhYWNXaWxkL3Jlc3RhdXJhbnRQYWdlJ1xuLy9mb290ZXIgYXBwZW5kXG5mb290ZXIuYXBwZW5kKGZvb3RlcjEsIGZvb3RlcjIpIiwiZnVuY3Rpb24gdG9kb0Zvcm0oKXtcbmNvbnNvbGUubG9nKCdjcmVhdGluZyBmb3JtJylcbi8vdG9kbyBGb3JtIC0tdlxuLy9Gb3JtIExheW91dFxuY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1dyYXBwZXInKVxuY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuY29uc3QgZmVpbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG5jb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuY29uc3QgbGJsVG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5jb25zdCBpbnB1dFRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IGxibFRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IGxibFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IHNlbGVjdFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5jb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuY29uc3QgcHJpb3JpdHlNZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4vL3RvZG8gRm9ybSBDbGFzc2VzXG5mb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JtV3JhcHBlckFjdGl2ZScpXG5mZWlsZHNldC5jbGFzc0xpc3QuYWRkKCdmZWlsZHNldCcpXG5idG5TdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuU3VibWl0Jylcbi8vdG9kbyBGb3JtIENvbnRlbnRcbmZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ21ha2V0b2RvSXRlbScpXG5mb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFrZXRvZG9JdGVtJylcbi8vIGZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdmb3JtU3VibWl0KCknKVxubGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB5b3VyIFRvRG8gSXRlbSdcbmxibFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvVGl0bGUnKVxubGJsVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9UaXRsZScpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb1RpdGxlJylcbmlucHV0VG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxubGJsVG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9EZXNjcmlwdGlvbicpXG5sYmxUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcbmlucHV0VG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9EZXNjcmlwdGlvbicpXG5pbnB1dFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0b2RvRGVzY3JpcHRpb24nKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9EYXRlLnNldEF0dHJpYnV0ZSA9ICgnZm9yJywgJ3RvZG9EYXRlJylcbmxibFRvZG9EYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOidcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvRGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RvZG9EYXRlJylcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvUHJpb3JpdHknKVxubGJsVG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnXG5zZWxlY3RUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywncmVxdWlyZWQnKVxucHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIaWdoJylcbnByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJ1xucHJpb3JpdHlNZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ01lZGl1bScpXG5wcmlvcml0eU1lZC50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG5wcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93JylcbnByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdydcbmJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbmJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0NyZWF0ZSBUb0RvIEl0ZW0nKVxuLy90b2RvIEZvcm0gQXBwZW5kXG50b2RvV3JhcHBlci5hcHBlbmQoZm9ybVdyYXBwZXIpXG5mb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtKVxuZm9ybS5hcHBlbmRDaGlsZChmZWlsZHNldClcbmZlaWxkc2V0LmFwcGVuZChsZWdlbmQsbGJsVG9kb1RpdGxlLGlucHV0VG9kb1RpdGxlLGxibFRvZG9EZXNjcmlwdGlvbixpbnB1dFRvZG9EZXNjcmlwdGlvbixsYmxUb2RvRGF0ZSxpbnB1dFRvZG9EYXRlLGxibFRvZG9Qcmlvcml0eSxzZWxlY3RUb2RvUHJpb3JpdHksIGJ0blN1Ym1pdClcbnNlbGVjdFRvZG9Qcmlvcml0eS5hcHBlbmQocHJpb3JpdHlIaWdoLHByaW9yaXR5TWVkLHByaW9yaXR5TG93KVxuLy9ldmVudCBMaXN0ZW5lcnNcbmJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYoZm9ybS5jaGVja1ZhbGlkaXR5KCkpe1xuICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm1XcmFwcGVyQWN0aXZlJylcbiAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtV3JhcHBlckFjdGl2ZScpXG5cbiAgfVxufSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kb0Zvcm0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=