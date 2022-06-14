"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["todoForm"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todoForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0Zvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Gb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZG9Gb3JtKCl7XG4vL3RvZG8gRm9ybSAtLXZcbi8vRm9ybSBMYXlvdXRcbmNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9XcmFwcGVyJylcbmNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbmNvbnN0IGZlaWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbmNvbnN0IGxibFRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuY29uc3QgbGJsVG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0VG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5jb25zdCBzZWxlY3RUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IHByaW9yaXR5TWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbi8vdG9kbyBGb3JtIENsYXNzZXNcbmZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1XcmFwcGVyQWN0aXZlJylcbmZlaWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2ZlaWxkc2V0JylcbmJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG5TdWJtaXQnKVxuLy90b2RvIEZvcm0gQ29udGVudFxuZm9ybS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWFrZXRvZG9JdGVtJylcbmZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdtYWtldG9kb0l0ZW0nKVxubGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB5b3VyIFRvRG8gSXRlbSdcbmxibFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvVGl0bGUnKVxubGJsVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9UaXRsZScpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb1RpdGxlJylcbmlucHV0VG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxubGJsVG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9EZXNjcmlwdGlvbicpXG5sYmxUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcbmlucHV0VG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9EZXNjcmlwdGlvbicpXG5pbnB1dFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0b2RvRGVzY3JpcHRpb24nKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9EYXRlLnNldEF0dHJpYnV0ZSA9ICgnZm9yJywgJ3RvZG9EYXRlJylcbmxibFRvZG9EYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOidcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvRGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RvZG9EYXRlJylcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvUHJpb3JpdHknKVxubGJsVG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnXG5zZWxlY3RUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywncmVxdWlyZWQnKVxucHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIaWdoJylcbnByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJ1xucHJpb3JpdHlNZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ01lZGl1bScpXG5wcmlvcml0eU1lZC50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG5wcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93JylcbnByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdydcbmJ0blN1Ym1pdC50ZXh0Q29udGVudD0gJ0NyZWF0ZSBUb0RvIEl0ZW0nXG4vL3RvZG8gRm9ybSBBcHBlbmRcbnRvZG9XcmFwcGVyLmFwcGVuZChmb3JtV3JhcHBlcilcbmZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pXG5mb3JtLmFwcGVuZENoaWxkKGZlaWxkc2V0KVxuZmVpbGRzZXQuYXBwZW5kKGxlZ2VuZCxsYmxUb2RvVGl0bGUsaW5wdXRUb2RvVGl0bGUsbGJsVG9kb0Rlc2NyaXB0aW9uLGlucHV0VG9kb0Rlc2NyaXB0aW9uLGxibFRvZG9EYXRlLGlucHV0VG9kb0RhdGUsbGJsVG9kb1ByaW9yaXR5LHNlbGVjdFRvZG9Qcmlvcml0eSwgYnRuU3VibWl0KVxuc2VsZWN0VG9kb1ByaW9yaXR5LmFwcGVuZChwcmlvcml0eUhpZ2gscHJpb3JpdHlNZWQscHJpb3JpdHlMb3cpXG4vL2V2ZW50IExpc3RlbmVyc1xuLy8gYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICBpZihmb3JtLmNoZWNrVmFsaWRpdHkoKSl7XG4vLyAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybVdyYXBwZXJJbmFjdGl2ZScpXG4vLyAgIH1cbi8vIH0pXG5cbiQoJyNmb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9Gb3JtIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9