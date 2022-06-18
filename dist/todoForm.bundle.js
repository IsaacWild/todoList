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
const btnAddTodo = document.querySelector('.btnAddTodoItem')
const formWrapper = document.querySelector('.formWrapperActive')
const form = document.createElement('div')
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
const btnCancel = document.createElement('button')

//todo Form Classes
formWrapper.classList.remove('formWrapperInactive')
feildset.classList.add('feildset')
btnSubmit.classList.add('btnSubmit')
btnCancel.classList.add('btnCancel')
//todo Form Content
form.setAttribute('name', 'maketodoItem')
form.setAttribute('id', 'maketodoItem')
form.setAttribute('action', '#')
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
btnSubmit.textContent = 'Add ToDo Item'
btnCancel.textContent = 'Cancel'
//todo Form Append
formWrapper.appendChild(form)
form.appendChild(feildset)
feildset.append(legend,lblTodoTitle,inputTodoTitle,lblTodoDescription,inputTodoDescription,lblTodoDate,inputTodoDate,lblTodoPriority,selectTodoPriority,btnCancel,btnSubmit)
selectTodoPriority.append(priorityHigh,priorityMed,priorityLow)
//event Listeners

btnCancel.addEventListener('click', () =>{
    removeForm()
    btnAddTodo.classList.remove('btnAddTodoItemInactive')
    formWrapper.classList.add('formWrapperInactive')
})

//functions
function removeForm(){
    while (formWrapper.firstChild) {
        formWrapper.removeChild(formWrapper.lastChild);
      }
}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoForm);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todoForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0Zvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9kb0Zvcm0oKXtcbi8vdG9kbyBGb3JtIC0tdlxuLy9Gb3JtIExheW91dFxuY29uc3QgYnRuQWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5BZGRUb2RvSXRlbScpXG5jb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtV3JhcHBlckFjdGl2ZScpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGZlaWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbmNvbnN0IGxibFRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuY29uc3QgbGJsVG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuY29uc3QgaW5wdXRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0VG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5jb25zdCBsYmxUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5jb25zdCBzZWxlY3RUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IHByaW9yaXR5TWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbmNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5jb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4vL3RvZG8gRm9ybSBDbGFzc2VzXG5mb3JtV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtV3JhcHBlckluYWN0aXZlJylcbmZlaWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2ZlaWxkc2V0JylcbmJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG5TdWJtaXQnKVxuYnRuQ2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2J0bkNhbmNlbCcpXG4vL3RvZG8gRm9ybSBDb250ZW50XG5mb3JtLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtYWtldG9kb0l0ZW0nKVxuZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21ha2V0b2RvSXRlbScpXG5mb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKVxubGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB5b3VyIFRvRG8gSXRlbSdcbmxibFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvVGl0bGUnKVxubGJsVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9UaXRsZScpXG5pbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb1RpdGxlJylcbmlucHV0VG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxubGJsVG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9EZXNjcmlwdGlvbicpXG5sYmxUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcbmlucHV0VG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9EZXNjcmlwdGlvbicpXG5pbnB1dFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0b2RvRGVzY3JpcHRpb24nKVxuaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9EYXRlLnNldEF0dHJpYnV0ZSA9ICgnZm9yJywgJ3RvZG9EYXRlJylcbmxibFRvZG9EYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOidcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvRGF0ZScpXG5pbnB1dFRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RvZG9EYXRlJylcbmlucHV0VG9kb0RhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJylcbmxibFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvUHJpb3JpdHknKVxubGJsVG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnXG5zZWxlY3RUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb1ByaW9yaXR5JylcbnNlbGVjdFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywncmVxdWlyZWQnKVxucHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIaWdoJylcbnByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJ1xucHJpb3JpdHlNZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ01lZGl1bScpXG5wcmlvcml0eU1lZC50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG5wcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93JylcbnByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdydcbmJ0blN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgVG9EbyBJdGVtJ1xuYnRuQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbi8vdG9kbyBGb3JtIEFwcGVuZFxuZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbmZvcm0uYXBwZW5kQ2hpbGQoZmVpbGRzZXQpXG5mZWlsZHNldC5hcHBlbmQobGVnZW5kLGxibFRvZG9UaXRsZSxpbnB1dFRvZG9UaXRsZSxsYmxUb2RvRGVzY3JpcHRpb24saW5wdXRUb2RvRGVzY3JpcHRpb24sbGJsVG9kb0RhdGUsaW5wdXRUb2RvRGF0ZSxsYmxUb2RvUHJpb3JpdHksc2VsZWN0VG9kb1ByaW9yaXR5LGJ0bkNhbmNlbCxidG5TdWJtaXQpXG5zZWxlY3RUb2RvUHJpb3JpdHkuYXBwZW5kKHByaW9yaXR5SGlnaCxwcmlvcml0eU1lZCxwcmlvcml0eUxvdylcbi8vZXZlbnQgTGlzdGVuZXJzXG5cbmJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIHJlbW92ZUZvcm0oKVxuICAgIGJ0bkFkZFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYnRuQWRkVG9kb0l0ZW1JbmFjdGl2ZScpXG4gICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybVdyYXBwZXJJbmFjdGl2ZScpXG59KVxuXG4vL2Z1bmN0aW9uc1xuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpe1xuICAgIHdoaWxlIChmb3JtV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgIGZvcm1XcmFwcGVyLnJlbW92ZUNoaWxkKGZvcm1XcmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICB9XG59XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kb0Zvcm0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=