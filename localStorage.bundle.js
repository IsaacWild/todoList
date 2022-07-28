"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["localStorage"],{

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProjects */ "./src/todoProjects.js");
//put the code here to grab array updates and set and get items and load them in



let proJSONHolder = '';

function storeProjects() {
    const projectJSON = JSON.stringify(_todoProjects__WEBPACK_IMPORTED_MODULE_0__.projects)
    if (storageAvailable('localStorage')) {
        localStorage.setItem('storedProjects',projectJSON)
      }
      else {
        alert('Local storage is not avalible to save projects')
      }
      
}



function getProjects() {
    proJSONHolder = localStorage.getItem('storedProjects')
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/localStorage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUV1Qzs7QUFFdkM7O0FBRUE7QUFDQSx1Q0FBdUMsbURBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0Esc0NBQXNDLDZDQUE2QztBQUNuRjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Qcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3B1dCB0aGUgY29kZSBoZXJlIHRvIGdyYWIgYXJyYXkgdXBkYXRlcyBhbmQgc2V0IGFuZCBnZXQgaXRlbXMgYW5kIGxvYWQgdGhlbSBpblxuXG5pbXBvcnQge3Byb2plY3RzfSBmcm9tICcuL3RvZG9Qcm9qZWN0cydcblxubGV0IHByb0pTT05Ib2xkZXIgPSAnJztcblxuZnVuY3Rpb24gc3RvcmVQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0SlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKVxuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnLHByb2plY3RKU09OKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMb2NhbCBzdG9yYWdlIGlzIG5vdCBhdmFsaWJsZSB0byBzYXZlIHByb2plY3RzJylcbiAgICAgIH1cbiAgICAgIFxufVxuXG5cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcHJvSlNPTkhvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRQcm9qZWN0cycpXG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG4iLCIvL2NyZWF0aW5nIHByb2plY3RzXG4vL2NyZWF0aW5nIHRvZG8nc1xuLy9hcnJheSBvZiBwcm9qZWN0cyBhbmQgdG9kbydzXG5sZXQgcHJvamVjdHMgPSBbXVxubGV0IHRvZG9JdGVtcyA9IFtdXG5sZXQgY29tcGxldGVkUHJvamVjdHMgPSBbXVxubGV0IGNvbXBsZXRlZFRvZG9JdGVtcyA9IFtdXG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgICB9XG4gICAgY29uc3QgZGlzcGxheVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlUHJvV3JhcHBlcicpXG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHlUaXRsZScpXG4gICAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gbmFtZVxuICAgICAgICBwcm9qZWN0SXRlbUNvbXBsZXRlLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtJylcbiAgICAgICAgcHJvamVjdEl0ZW1Db21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbScpXG4gICAgICAgIGFjdGl2ZVByb1dyYXBwZXIuYXBwZW5kKHByb2plY3RJdGVtLCBwcm9qZWN0SXRlbUNvbXBsZXRlKVxuICAgICAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vbG9hZCB0b2RvIGl0ZW1zIGludG8gbWFpbiBib2R5XG4gICAgICAgICAgICBhY3RpdmVQcm9UaXRsZS50ZXh0Q29udGVudCA9IG5hbWVcbiAgICAgICAgICAgIGNsZWFyVG9kbygpXG4gICAgICAgICAgICBkaXNwbGF5VG9kbyhuYW1lKVxuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0SXRlbUNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29tcGxldGVQcm9qZWN0KG5hbWUpXG4gICAgICAgICAgICBhY3RpdmVQcm9XcmFwcGVyLnJlbW92ZUNoaWxkKHByb2plY3RJdGVtKVxuICAgICAgICAgICAgYWN0aXZlUHJvV3JhcHBlci5yZW1vdmVDaGlsZChwcm9qZWN0SXRlbUNvbXBsZXRlKVxuICAgICAgICAgICAgaWYgKGFjdGl2ZVByb1RpdGxlLnRleHRDb250ZW50ID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9UaXRsZS50ZXh0Q29udGVudCA9ICdBY3RpdmUgcHJvamVjdCB3YXMgbWFya2VkIGNvbXBsZXRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4geyBuYW1lLCBuZXdQcm9qZWN0LCBkaXNwbGF5UHJvamVjdCB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdC5uZXdQcm9qZWN0KCk7XG4gICAgcHJvamVjdC5kaXNwbGF5UHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXSA9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgICAgICAgICBjb21wbGV0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29tcGxldGVkUHJvamVjdHMpKVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkUHJvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWRQcm9XcmFwcGVyJylcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZFBybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBjb21wbGV0ZWRQcm8uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkUHJvJylcbiAgICAgICAgICAgIGNvbXBsZXRlZFByby50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAgICAgICAgICBjb21wbGV0ZWRQcm9XcmFwcGVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFBybylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCB0b2RvRmFjdG9yeSA9IChwcm9qZWN0LCB0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB7fTtcbiAgICBuZXdUb2RvLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIG5ld1RvZG8udGl0bGUgPSB0b2RvVGl0bGU7XG4gICAgbmV3VG9kby5kZXNjcmlwdGlvbiA9IHRvZG9EZXNjcmlwdGlvbjtcbiAgICBuZXdUb2RvLmRhdGUgPSB0b2RvRGF0ZTtcbiAgICBuZXdUb2RvLnByaW9yaXR5ID0gdG9kb1ByaW9yaXR5O1xuICAgIHRvZG9JdGVtcy5wdXNoKG5ld1RvZG8pXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW1zKSlcblxuICAgIGNvbnN0IGRpc3BsYXlUb2RvID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvSXRlbVdyYXBwZXInKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvZG9JdGVtc1tpXS5wcm9qZWN0ID09IHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgICAgIC8vY3JlYXRlIGl0ZW1zXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvQnRuQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgIC8vZ2l2ZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbXNbaV0udGl0bGVcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvSXRlbXNbaV0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9JdGVtc1tpXS5kYXRlXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kb0l0ZW1zW2ldLnByaW9yaXR5XG4gICAgICAgICAgICAgICAgdG9kb0J0bkNvbXBsZXRlLnRleHRDb250ZW50ID0gJ+KckydcbiAgICAgICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUuaWQgPSBuZXdUb2RvLklEO1xuICAgICAgICAgICAgICAgIHRvZG9CdG5Db21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbUJ0bicpXG4gICAgICAgICAgICAgICAgLy9ldmVudCBsaXN0ZXJuZXJcbiAgICAgICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRvZG8ocHJvamVjdFRpdGxlLCB0b2RvVGl0bGUudGV4dENvbnRlbnQsIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCwgdG9kb0RhdGUudGV4dENvbnRlbnQsIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZS5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgdG9kb0J0bkNvbXBsZXRlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL2FwcGVuZFxuICAgICAgICAgICAgICAgIGl0ZW1XcmFwcGVyLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb0J0bkNvbXBsZXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbmV3VG9kbywgZGlzcGxheVRvZG8gfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHByb2plY3QsIHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KSB7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9GYWN0b3J5KHByb2plY3QsIHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KVxuICAgIHRvZG8uZGlzcGxheVRvZG8ocHJvamVjdClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG8ocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0l0ZW1XcmFwcGVyJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9kb0l0ZW1zW2ldLnByb2plY3QgPT0gcHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICAvL2NyZWF0ZSBpdGVtc1xuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGNvbnN0IHRvZG9CdG5Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAvL2dpdmUgdmFsdWVzXG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbXNbaV0udGl0bGVcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9JdGVtc1tpXS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbXNbaV0uZGF0ZVxuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kb0l0ZW1zW2ldLnByaW9yaXR5XG4gICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUudGV4dENvbnRlbnQgPSAn4pyTJ1xuICAgICAgICAgICAgdG9kb0J0bkNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtQnRuJylcbiAgICAgICAgICAgIC8vZXZlbnQgbGlzdGVybmVyXG4gICAgICAgICAgICB0b2RvQnRuQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVkVG9kbyhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZS50ZXh0Q29udGVudCwgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50LCB0b2RvRGF0ZS50ZXh0Q29udGVudCwgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIHRvZG9EYXRlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgdG9kb0J0bkNvbXBsZXRlLnJlbW92ZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9hcHBlbmRcbiAgICAgICAgICAgIGl0ZW1XcmFwcGVyLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb0J0bkNvbXBsZXRlKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRvZG8oKSB7XG4gICAgY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0l0ZW1XcmFwcGVyJylcbiAgICB3aGlsZSAodG9kb1dyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RvV3JhcHBlci5yZW1vdmVDaGlsZCh0b2RvV3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcGxldGVkVG9kbyhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvZG9JdGVtc1tpXS5wcm9qZWN0ID09IHByb2plY3QgJiYgdG9kb0l0ZW1zW2ldLnRpdGxlID09IHRpdGxlICYmIHRvZG9JdGVtc1tpXS5kZXNjcmlwdGlvbiA9PSBkZXNjcmlwdGlvbiAmJiB0b2RvSXRlbXNbaV0uZGF0ZSA9PSBkYXRlICYmIHRvZG9JdGVtc1tpXS5wcmlvcml0eSA9PSBwcmlvcml0eSkge1xuICAgICAgICAgICAgY29tcGxldGVkVG9kb0l0ZW1zLnB1c2goeyBwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5IH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRUb2RvSXRlbXMpKVxuICAgICAgICAgICAgdG9kb0l0ZW1zLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW1zKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIHRvZG9GYWN0b3J5LCBjcmVhdGVUb2RvLCBwcm9qZWN0cywgY29tcGxldGVkUHJvamVjdHMsIGRpc3BsYXlUb2RvIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=