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
/* harmony import */ var _todoProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProjects */ "./src/todoProjects.js");


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

//listeners
btnProjectCancel.addEventListener('click', () =>{
    clearForm()
})

btnProjectSubmit.addEventListener('click', () =>{
    let projectTitle = inputProjectTitle.value
    if(projectTitle != ''){
        if(_todoProjects__WEBPACK_IMPORTED_MODULE_0__.projects.length != 0){
            for (let i = 0; i < _todoProjects__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
                if(projectTitle == _todoProjects__WEBPACK_IMPORTED_MODULE_0__.projects[i]){
                    alert('You have an active project with this title already')
                }else{
                    (0,_todoProjects__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectTitle);
                    clearForm()
                    break
                }
            }
        }else{
            (0,_todoProjects__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectTitle);
            clearForm()
        }
    } else{
        alert('Please enter a project title')
    }
} )

//functions
function clearForm() {
    while (projectFormWrapper.firstChild) {
        projectFormWrapper.removeChild(projectFormWrapper.lastChild);
      }
    projectFormWrapper.classList.toggle('projectFormWrapperInactive')
}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);

/***/ }),

/***/ "./src/todoProjects.js":
/*!*****************************!*\
  !*** ./src/todoProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedProjects": () => (/* binding */ completedProjects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory)
/* harmony export */ });
//creating projects
//creating todo's
//array of projects and todo's
let projects = []
let todoItems = []
let completedProjects = []
let completedTodoItems = []

const projectFactory = (name) => {
    const newProject = () => {
        projects.push(name)
        console.log(JSON.stringify(projects))
    }
    const displayProject = () => {
        const activeProWrapper = document.querySelector('.activeProWrapper')
        const projectItem = document.createElement('button')
        const projectItemComplete = document.createElement('button')
        const activeProTitle = document.querySelector('.bodyTitle')
        projectItem.textContent = name
        projectItemComplete.textContent = 'X'
        projectItem.classList.add('projectItem')
        projectItemComplete.classList.add('projectItem')
        activeProWrapper.append(projectItem, projectItemComplete)
        projectItem.addEventListener('click', () => {
            //load todo items into main body
            activeProTitle.textContent = name
            clearTodo()
            displayTodo(name)
        })
        projectItemComplete.addEventListener('click', () => {
            completeProject(name)
            activeProWrapper.removeChild(projectItem)
            activeProWrapper.removeChild(projectItemComplete)
            if (activeProTitle.textContent == name) {
                activeProTitle.textContent = 'Active project was marked complete'
            }
        })
    }
    return { name, newProject, displayProject }
}


function createProject(projectName) {
    const project = projectFactory(projectName);
    project.newProject();
    project.displayProject();
}

function completeProject(projectName) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i] == projectName) {
            projects.splice(i, 1)
            console.log(JSON.stringify(projects))
            completedProjects.push(projectName)
            console.log(JSON.stringify(completedProjects))
            const completedProWrapper = document.querySelector('.completedProWrapper')
            const completedPro = document.createElement('button')
            completedPro.classList.add('completedPro')
            completedPro.textContent = projectName
            completedProWrapper.appendChild(completedPro)
            return
        }
    }
}

const todoFactory = (project, todoTitle, todoDescription, todoDate, todoPriority) => {
    const newTodo = {};
    newTodo.project = project;
    newTodo.title = todoTitle;
    newTodo.description = todoDescription;
    newTodo.date = todoDate;
    newTodo.priority = todoPriority;
    todoItems.push(newTodo)
    console.log(JSON.stringify(todoItems))

    const displayTodo = (projectTitle) => {
        const itemWrapper = document.querySelector('.todoItemWrapper')
        for (let i = 0; i < todoItems.length; i++) {
            if (todoItems[i].project == projectTitle) {
                //create items
                const todoTitle = document.createElement('p')
                const todoDescription = document.createElement('p')
                const todoDate = document.createElement('p')
                const todoPriority = document.createElement('p')
                const todoBtnComplete = document.createElement('button')
                //give values
                todoTitle.textContent = todoItems[i].title
                todoDescription.textContent = todoItems[i].description
                todoDate.textContent = todoItems[i].date
                todoPriority.textContent = todoItems[i].priority
                todoBtnComplete.textContent = '✓'
                todoBtnComplete.id = newTodo.ID;
                todoBtnComplete.classList.add('todoItemBtn')
                //event listerner
                todoBtnComplete.addEventListener('click', () => {
                    completedTodo(projectTitle, todoTitle.textContent, todoDescription.textContent, todoDate.textContent, todoPriority.textContent)
                    todoTitle.remove()
                    todoDescription.remove()
                    todoDate.remove()
                    todoPriority.remove()
                    todoBtnComplete.remove()
                })
                //append
                itemWrapper.append(todoTitle, todoDescription, todoDate, todoPriority, todoBtnComplete)
            }
        }
    }

    return { newTodo, displayTodo }
}

function createTodo(project, todoTitle, todoDescription, todoDate, todoPriority) {
    const todo = todoFactory(project, todoTitle, todoDescription, todoDate, todoPriority)
    todo.displayTodo(project)
}

function displayTodo(projectTitle) {
    const itemWrapper = document.querySelector('.todoItemWrapper')
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].project == projectTitle) {
            //create items
            const todoTitle = document.createElement('p')
            const todoDescription = document.createElement('p')
            const todoDate = document.createElement('p')
            const todoPriority = document.createElement('p')
            const todoBtnComplete = document.createElement('button')
            //give values
            todoTitle.textContent = todoItems[i].title
            todoDescription.textContent = todoItems[i].description
            todoDate.textContent = todoItems[i].date
            todoPriority.textContent = todoItems[i].priority
            todoBtnComplete.textContent = '✓'
            todoBtnComplete.classList.add('todoItemBtn')
            //event listerner
            todoBtnComplete.addEventListener('click', () => {
                completedTodo(projectTitle, todoTitle.textContent, todoDescription.textContent, todoDate.textContent, todoPriority.textContent)
                todoTitle.remove()
                todoDescription.remove()
                todoDate.remove()
                todoPriority.remove()
                todoBtnComplete.remove()
            })
            //append
            itemWrapper.append(todoTitle, todoDescription, todoDate, todoPriority, todoBtnComplete)
        }
    }
}

function clearTodo() {
    const todoWrapper = document.querySelector('.todoItemWrapper')
    while (todoWrapper.firstChild) {
        todoWrapper.removeChild(todoWrapper.lastChild);
    }
}

function completedTodo(project, title, description, date, priority) {
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].project == project && todoItems[i].title == title && todoItems[i].description == description && todoItems[i].date == date && todoItems[i].priority == priority) {
            completedTodoItems.push({ project, title, description, date, priority })
            console.log(JSON.stringify(completedTodoItems))
            todoItems.splice(i, 1)
            console.log(JSON.stringify(todoItems))
        } else {
        }
    }
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdEZvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMERBQWU7QUFDMUIsNEJBQTRCLElBQUksMERBQWUsRUFBRTtBQUNqRCxtQ0FBbUMsbURBQVE7QUFDM0M7QUFDQSxpQkFBaUI7QUFDakIsb0JBQW9CLDREQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFlBQVksNERBQWE7QUFDekI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLHNDQUFzQyw2Q0FBNkM7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Qcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9Qcm9qZWN0c1wiXG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtKCl7XG4vLyBQcm9qZWN0IEZvcm0gLS12XG4vLyBGb3JtIExheW91dFxuXG4vLyBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuY29uc3QgcHJvamVjdEZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtV3JhcHBlckFjdGl2ZScpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IHByb0ZlaWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbmNvbnN0IGxibFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbmNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuY29uc3QgYnRuUHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmNvbnN0IGJ0blByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4vLyBDbGFzc2VzXG4vLyBwcm9qZWN0Rm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm1XcmFwcGVyQWN0aXZlJylcbnByb0ZlaWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGZWlsZHNldCcpXG5sZWdlbmQuY2xhc3NMaXN0LmFkZCgncHJvTGVnZW5kJylcbmxibFByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9MYWJlbCcpXG5pbnB1dFByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9JbnB1dCcpXG5idG5Qcm9qZWN0U3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0blByb2plY3RTdWJtaXQnKVxuYnRuUHJvamVjdENhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG5Qcm9qZWN0Q2FuY2VsJylcbi8vIENvbnRlbnRcbmZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ21ha2V0b2RvSXRlbScpXG5mb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAnZm9ybVN1Ym1pdCgpJylcbmxlZ2VuZC50ZXh0Q29udGVudCA9ICdDcmVhdGUgeW91ciBUb0RvIEl0ZW0nXG5sYmxQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAnaW5wdXRQcm9qZWN0VGl0bGUnKVxubGJsUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3QgVGl0bGU6ICdcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuaW5wdXRQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ2lucHV0UHJvamVjdFRpdGxlJylcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2lucHV0UHJvamVjdFRpdGxlJylcbmlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCdyZXF1aXJlZCcpXG5pbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIiwgXCIxXCIpXG5pbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKVxuYnRuUHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuYnRuUHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnQWRkIFByb2plY3QnKVxuYnRuUHJvamVjdENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG5cbi8vIEFwcGVuZFxuLy8gc2lkZWJhci5hcHBlbmQocHJvamVjdEZvcm1XcmFwcGVyKVxucHJvamVjdEZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pXG5mb3JtLmFwcGVuZENoaWxkKHByb0ZlaWxkc2V0KVxucHJvRmVpbGRzZXQuYXBwZW5kKGxlZ2VuZCxsYmxQcm9qZWN0VGl0bGUsaW5wdXRQcm9qZWN0VGl0bGUsYnRuUHJvamVjdENhbmNlbCxidG5Qcm9qZWN0U3VibWl0KVxuXG4vL2xpc3RlbmVyc1xuYnRuUHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIGNsZWFyRm9ybSgpXG59KVxuXG5idG5Qcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGlucHV0UHJvamVjdFRpdGxlLnZhbHVlXG4gICAgaWYocHJvamVjdFRpdGxlICE9ICcnKXtcbiAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3RUaXRsZSA9PSBwcm9qZWN0c1tpXSl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3UgaGF2ZSBhbiBhY3RpdmUgcHJvamVjdCB3aXRoIHRoaXMgdGl0bGUgYWxyZWFkeScpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJGb3JtKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgY2xlYXJGb3JtKClcbiAgICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHByb2plY3QgdGl0bGUnKVxuICAgIH1cbn0gKVxuXG4vL2Z1bmN0aW9uc1xuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIHdoaWxlIChwcm9qZWN0Rm9ybVdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0Rm9ybVdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvamVjdEZvcm1XcmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgcHJvamVjdEZvcm1XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ3Byb2plY3RGb3JtV3JhcHBlckluYWN0aXZlJylcbn1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Rm9ybSIsIi8vY3JlYXRpbmcgcHJvamVjdHNcbi8vY3JlYXRpbmcgdG9kbydzXG4vL2FycmF5IG9mIHByb2plY3RzIGFuZCB0b2RvJ3NcbmxldCBwcm9qZWN0cyA9IFtdXG5sZXQgdG9kb0l0ZW1zID0gW11cbmxldCBjb21wbGV0ZWRQcm9qZWN0cyA9IFtdXG5sZXQgY29tcGxldGVkVG9kb0l0ZW1zID0gW11cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmFtZSlcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgIH1cbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVQcm9XcmFwcGVyJylcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keVRpdGxlJylcbiAgICAgICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBuYW1lXG4gICAgICAgIHByb2plY3RJdGVtQ29tcGxldGUudGV4dENvbnRlbnQgPSAnWCdcbiAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKVxuICAgICAgICBwcm9qZWN0SXRlbUNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtJylcbiAgICAgICAgYWN0aXZlUHJvV3JhcHBlci5hcHBlbmQocHJvamVjdEl0ZW0sIHByb2plY3RJdGVtQ29tcGxldGUpXG4gICAgICAgIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy9sb2FkIHRvZG8gaXRlbXMgaW50byBtYWluIGJvZHlcbiAgICAgICAgICAgIGFjdGl2ZVByb1RpdGxlLnRleHRDb250ZW50ID0gbmFtZVxuICAgICAgICAgICAgY2xlYXJUb2RvKClcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvKG5hbWUpXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RJdGVtQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb21wbGV0ZVByb2plY3QobmFtZSlcbiAgICAgICAgICAgIGFjdGl2ZVByb1dyYXBwZXIucmVtb3ZlQ2hpbGQocHJvamVjdEl0ZW0pXG4gICAgICAgICAgICBhY3RpdmVQcm9XcmFwcGVyLnJlbW92ZUNoaWxkKHByb2plY3RJdGVtQ29tcGxldGUpXG4gICAgICAgICAgICBpZiAoYWN0aXZlUHJvVGl0bGUudGV4dENvbnRlbnQgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVByb1RpdGxlLnRleHRDb250ZW50ID0gJ0FjdGl2ZSBwcm9qZWN0IHdhcyBtYXJrZWQgY29tcGxldGUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB7IG5hbWUsIG5ld1Byb2plY3QsIGRpc3BsYXlQcm9qZWN0IH1cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0Lm5ld1Byb2plY3QoKTtcbiAgICBwcm9qZWN0LmRpc3BsYXlQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldID09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgICAgICAgICAgIGNvbXBsZXRlZFByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRQcm9qZWN0cykpXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRQcm9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZFByb1dyYXBwZXInKVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkUHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGNvbXBsZXRlZFByby5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWRQcm8nKVxuICAgICAgICAgICAgY29tcGxldGVkUHJvLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcbiAgICAgICAgICAgIGNvbXBsZXRlZFByb1dyYXBwZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkUHJvKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHByb2plY3QsIHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IHt9O1xuICAgIG5ld1RvZG8ucHJvamVjdCA9IHByb2plY3Q7XG4gICAgbmV3VG9kby50aXRsZSA9IHRvZG9UaXRsZTtcbiAgICBuZXdUb2RvLmRlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIG5ld1RvZG8uZGF0ZSA9IHRvZG9EYXRlO1xuICAgIG5ld1RvZG8ucHJpb3JpdHkgPSB0b2RvUHJpb3JpdHk7XG4gICAgdG9kb0l0ZW1zLnB1c2gobmV3VG9kbylcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2RvSXRlbXMpKVxuXG4gICAgY29uc3QgZGlzcGxheVRvZG8gPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9JdGVtV3JhcHBlcicpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9kb0l0ZW1zW2ldLnByb2plY3QgPT0gcHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgaXRlbXNcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9CdG5Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgLy9naXZlIHZhbHVlc1xuICAgICAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG9JdGVtc1tpXS50aXRsZVxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9JdGVtc1tpXS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kb0l0ZW1zW2ldLmRhdGVcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvSXRlbXNbaV0ucHJpb3JpdHlcbiAgICAgICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUudGV4dENvbnRlbnQgPSAn4pyTJ1xuICAgICAgICAgICAgICAgIHRvZG9CdG5Db21wbGV0ZS5pZCA9IG5ld1RvZG8uSUQ7XG4gICAgICAgICAgICAgICAgdG9kb0J0bkNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtQnRuJylcbiAgICAgICAgICAgICAgICAvL2V2ZW50IGxpc3Rlcm5lclxuICAgICAgICAgICAgICAgIHRvZG9CdG5Db21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkVG9kbyhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZS50ZXh0Q29udGVudCwgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50LCB0b2RvRGF0ZS50ZXh0Q29udGVudCwgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGUucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vYXBwZW5kXG4gICAgICAgICAgICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvQnRuQ29tcGxldGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBuZXdUb2RvLCBkaXNwbGF5VG9kbyB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8ocHJvamVjdCwgdG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpIHtcbiAgICBjb25zdCB0b2RvID0gdG9kb0ZhY3RvcnkocHJvamVjdCwgdG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpXG4gICAgdG9kby5kaXNwbGF5VG9kbyhwcm9qZWN0KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbyhwcm9qZWN0VGl0bGUpIHtcbiAgICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvSXRlbVdyYXBwZXInKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvSXRlbXNbaV0ucHJvamVjdCA9PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgIC8vY3JlYXRlIGl0ZW1zXG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgY29uc3QgdG9kb0J0bkNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIC8vZ2l2ZSB2YWx1ZXNcbiAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG9JdGVtc1tpXS50aXRsZVxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb0l0ZW1zW2ldLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9JdGVtc1tpXS5kYXRlXG4gICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvSXRlbXNbaV0ucHJpb3JpdHlcbiAgICAgICAgICAgIHRvZG9CdG5Db21wbGV0ZS50ZXh0Q29udGVudCA9ICfinJMnXG4gICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW1CdG4nKVxuICAgICAgICAgICAgLy9ldmVudCBsaXN0ZXJuZXJcbiAgICAgICAgICAgIHRvZG9CdG5Db21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRUb2RvKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLnRleHRDb250ZW50LCB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQsIHRvZG9EYXRlLnRleHRDb250ZW50LCB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgdG9kb1RpdGxlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgdG9kb0RhdGUucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUucmVtb3ZlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2FwcGVuZFxuICAgICAgICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvQnRuQ29tcGxldGUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyVG9kbygpIHtcbiAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvSXRlbVdyYXBwZXInKVxuICAgIHdoaWxlICh0b2RvV3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG9XcmFwcGVyLnJlbW92ZUNoaWxkKHRvZG9XcmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wbGV0ZWRUb2RvKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9kb0l0ZW1zW2ldLnByb2plY3QgPT0gcHJvamVjdCAmJiB0b2RvSXRlbXNbaV0udGl0bGUgPT0gdGl0bGUgJiYgdG9kb0l0ZW1zW2ldLmRlc2NyaXB0aW9uID09IGRlc2NyaXB0aW9uICYmIHRvZG9JdGVtc1tpXS5kYXRlID09IGRhdGUgJiYgdG9kb0l0ZW1zW2ldLnByaW9yaXR5ID09IHByaW9yaXR5KSB7XG4gICAgICAgICAgICBjb21wbGV0ZWRUb2RvSXRlbXMucHVzaCh7IHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZFRvZG9JdGVtcykpXG4gICAgICAgICAgICB0b2RvSXRlbXMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2RvSXRlbXMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgdG9kb0ZhY3RvcnksIGNyZWF0ZVRvZG8sIHByb2plY3RzLCBjb21wbGV0ZWRQcm9qZWN0cywgZGlzcGxheVRvZG8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==