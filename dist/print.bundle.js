"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["print"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todoForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9kb0Zvcm0oKXtcbmNvbnNvbGUubG9nKCdjcmVhdGluZyBmb3JtJylcbi8vdG9kbyBGb3JtIC0tdlxuLy9Gb3JtIExheW91dFxuY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1dyYXBwZXInKVxuY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuY29uc3QgZmVpbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG5jb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuY29uc3QgbGJsVG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5jb25zdCBpbnB1dFRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IGxibFRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IGxibFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IHNlbGVjdFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5jb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuY29uc3QgcHJpb3JpdHlNZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4vL3RvZG8gRm9ybSBDbGFzc2VzXG5mb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JtV3JhcHBlckFjdGl2ZScpXG5mZWlsZHNldC5jbGFzc0xpc3QuYWRkKCdmZWlsZHNldCcpXG5idG5TdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuU3VibWl0Jylcbi8vdG9kbyBGb3JtIENvbnRlbnRcbmZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ21ha2V0b2RvSXRlbScpXG5mb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFrZXRvZG9JdGVtJylcbi8vIGZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdmb3JtU3VibWl0KCknKVxubGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB5b3VyIFRvRG8gSXRlbSdcbmxibFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvVGl0bGUnKVxubGJsVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9UaXRsZScpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb1RpdGxlJylcbmlucHV0VG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxubGJsVG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9EZXNjcmlwdGlvbicpXG5sYmxUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcbmlucHV0VG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9EZXNjcmlwdGlvbicpXG5pbnB1dFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0b2RvRGVzY3JpcHRpb24nKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9EYXRlLnNldEF0dHJpYnV0ZSA9ICgnZm9yJywgJ3RvZG9EYXRlJylcbmxibFRvZG9EYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOidcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvRGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RvZG9EYXRlJylcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvUHJpb3JpdHknKVxubGJsVG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnXG5zZWxlY3RUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywncmVxdWlyZWQnKVxucHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIaWdoJylcbnByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJ1xucHJpb3JpdHlNZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ01lZGl1bScpXG5wcmlvcml0eU1lZC50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG5wcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93JylcbnByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdydcbmJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbmJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0NyZWF0ZSBUb0RvIEl0ZW0nKVxuLy90b2RvIEZvcm0gQXBwZW5kXG50b2RvV3JhcHBlci5hcHBlbmQoZm9ybVdyYXBwZXIpXG5mb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtKVxuZm9ybS5hcHBlbmRDaGlsZChmZWlsZHNldClcbmZlaWxkc2V0LmFwcGVuZChsZWdlbmQsbGJsVG9kb1RpdGxlLGlucHV0VG9kb1RpdGxlLGxibFRvZG9EZXNjcmlwdGlvbixpbnB1dFRvZG9EZXNjcmlwdGlvbixsYmxUb2RvRGF0ZSxpbnB1dFRvZG9EYXRlLGxibFRvZG9Qcmlvcml0eSxzZWxlY3RUb2RvUHJpb3JpdHksIGJ0blN1Ym1pdClcbnNlbGVjdFRvZG9Qcmlvcml0eS5hcHBlbmQocHJpb3JpdHlIaWdoLHByaW9yaXR5TWVkLHByaW9yaXR5TG93KVxuLy9ldmVudCBMaXN0ZW5lcnNcbmJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYoZm9ybS5jaGVja1ZhbGlkaXR5KCkpe1xuICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm1XcmFwcGVyQWN0aXZlJylcbiAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtV3JhcHBlckFjdGl2ZScpXG5cbiAgfVxufSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kb0Zvcm0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=