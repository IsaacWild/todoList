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

// const sidebar = document.querySelector('.sidebar')
const projectFormWrapper = document.querySelector('.projectFormWrapperActive')
const form = document.createElement('div')
const proFeildset = document.createElement('fieldset')
const legend = document.createElement('legend')
const lblProjectTitle = document.createElement('label')
const inputProjectTitle = document.createElement('input')
const btnProjectSubmit = document.createElement('input')
const btnProjectCancel = document.createElement('button')

// Classes
// projectFormWrapper.classList.add('projectFormWrapperActive')
proFeildset.classList.add('projectFeildset')
legend.classList.add('proLegend')
lblProjectTitle.classList.add('proLabel')
inputProjectTitle.classList.add('proInput')
btnProjectSubmit.classList.add('btnProjectSubmit')
btnProjectCancel.classList.add('btnProjectCancel')
// Content
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
btnProjectCancel.textContent = 'Cancel'

// Append
// sidebar.append(projectFormWrapper)
projectFormWrapper.appendChild(form)
form.appendChild(proFeildset)
proFeildset.append(legend,lblProjectTitle,inputProjectTitle,btnProjectCancel,btnProjectSubmit)

btnProjectCancel.addEventListener('click', () =>{
    clearForm()
    projectFormWrapper.classList.toggle('projectFormWrapperInactive')
})

//functions
function clearForm() {
    while (projectFormWrapper.firstChild) {
        projectFormWrapper.removeChild(projectFormWrapper.lastChild);
      }
}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdEZvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHByb2plY3RGb3JtKCl7XG4vLyBQcm9qZWN0IEZvcm0gLS12XG4vLyBGb3JtIExheW91dFxuXG4vLyBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuY29uc3QgcHJvamVjdEZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtV3JhcHBlckFjdGl2ZScpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IHByb0ZlaWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbmNvbnN0IGxibFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuY29uc3QgYnRuUHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IGJ0blByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4vLyBDbGFzc2VzXG4vLyBwcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm1XcmFwcGVyQWN0aXZlJylcbnByb0ZlaWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGZWlsZHNldCcpXG5sZWdlbmQuY2xhc3NMaXN0LmFkZCgncHJvTGVnZW5kJylcbmxibFByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9MYWJlbCcpXG5pbnB1dFByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9JbnB1dCcpXG5idG5Qcm9qZWN0U3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0blByb2plY3RTdWJtaXQnKVxuYnRuUHJvamVjdENhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG5Qcm9qZWN0Q2FuY2VsJylcbi8vIENvbnRlbnRcbmZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ21ha2V0b2RvSXRlbScpXG5mb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAnZm9ybVN1Ym1pdCgpJylcbmxlZ2VuZC50ZXh0Q29udGVudCA9ICdDcmVhdGUgeW91ciBUb0RvIEl0ZW0nXG5sYmxQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAnaW5wdXRQcm9qZWN0VGl0bGUnKVxubGJsUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3QgVGl0bGU6ICdcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ2lucHV0UHJvamVjdFRpdGxlJylcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2lucHV0UHJvamVjdFRpdGxlJylcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCdyZXF1aXJlZCcpXG5pbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIiwgXCIxXCIpXG5pbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKVxuYnRuUHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuYnRuUHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnQWRkIFByb2plY3QnKVxuYnRuUHJvamVjdENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG5cbi8vIEFwcGVuZFxuLy8gc2lkZWJhci5hcHBlbmQocHJvamVjdEZvcm1XcmFwcGVyKVxucHJvamVjdEZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pXG5mb3JtLmFwcGVuZENoaWxkKHByb0ZlaWxkc2V0KVxucHJvRmVpbGRzZXQuYXBwZW5kKGxlZ2VuZCxsYmxQcm9qZWN0VGl0bGUsaW5wdXRQcm9qZWN0VGl0bGUsYnRuUHJvamVjdENhbmNlbCxidG5Qcm9qZWN0U3VibWl0KVxuXG5idG5Qcm9qZWN0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgY2xlYXJGb3JtKClcbiAgICBwcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJvamVjdEZvcm1XcmFwcGVySW5hY3RpdmUnKVxufSlcblxuLy9mdW5jdGlvbnNcbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICB3aGlsZSAocHJvamVjdEZvcm1XcmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdEZvcm1XcmFwcGVyLnJlbW92ZUNoaWxkKHByb2plY3RGb3JtV3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgfVxufVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGb3JtIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9