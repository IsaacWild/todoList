import { storeProjects, storeCompletedProjects, storeTodo } from "./localStorage"

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
        storeProjects()
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
            storeProjects()
            completedProjects.push(projectName)
            console.log(JSON.stringify(completedProjects))
            storeCompletedProjects()
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
    storeTodo()

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
            storeTodo()
        } else {
        }
    }
}



export { createProject, todoFactory, createTodo, projects, completedProjects, displayTodo, todoItems , completedTodoItems }