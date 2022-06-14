"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["projectForm"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdEZvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdEZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJvamVjdEZvcm0oKXtcbi8vIFByb2plY3QgRm9ybSAtLXZcbi8vIEZvcm0gTGF5b3V0XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG5jb25zdCBwcm9qZWN0Rm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuY29uc3QgZmVpbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG5jb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuY29uc3QgbGJsUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBidG5Qcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4vLyBDbGFzc2VzXG5wcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm1XcmFwcGVyQWN0aXZlJylcblxuLy8gQ29udGVudFxuZmVpbGRzZXQuY2xhc3NMaXN0LmFkZCgnZmVpbGRzZXQnKVxuZm9ybS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWFrZXRvZG9JdGVtJylcbmZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdmb3JtU3VibWl0KCknKVxubGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB5b3VyIFRvRG8gSXRlbSdcbmxibFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdpbnB1dFByb2plY3RUaXRsZScpXG5sYmxQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBUaXRsZTogJ1xuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG5pbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnaW5wdXRQcm9qZWN0VGl0bGUnKVxuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywnaW5wdXRQcm9qZWN0VGl0bGUnKVxuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcIm1pbmxlbmd0aFwiLCBcIjFcIilcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpXG5idG5Qcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG5idG5Qcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdBZGQgUHJvamVjdCcpXG5cbi8vIEFwcGVuZFxuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybVdyYXBwZXIpXG5wcm9qZWN0Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbmZvcm0uYXBwZW5kQ2hpbGQoZmVpbGRzZXQpXG5mZWlsZHNldC5hcHBlbmQobGVnZW5kLCBsYmxQcm9qZWN0VGl0bGUsaW5wdXRQcm9qZWN0VGl0bGUsYnRuUHJvamVjdFN1Ym1pdClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Rm9ybSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==