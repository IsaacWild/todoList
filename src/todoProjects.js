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
        console.log(name + ' was pushed to the project array')
        console.log('current project Array: ' + projects)
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
            console.log(`Displaid todo's for project: ${name}`)
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
            completedProjects.push(projectName)
            const completedProWrapper = document.querySelector('.completedProWrapper')
            const completedPro = document.createElement('button')
            completedPro.classList.add('completedPro')
            completedPro.textContent = projectName
            completedProWrapper.appendChild(completedPro)
            console.log(projectName + ' was removed from the project list')
            console.log('current project Array: ' + projects)
            console.log('current completed project Array: ' + completedProjects)
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
    console.log('current todo Array: ')
    console.table(todoItems)

    const displayTodo = (projectTitle) => {
        const itemWrapper = document.querySelector('.todoItemWrapper')
        for (let i = 0; i < todoItems.length; i++) {
            if (todoItems[i].project == projectTitle) {
                //create items
                const todoTitle = document.createElement('p')
                const todoDescription = document.createElement('p')
                const todoDate = document.createElement('p')
                const todoPriority = document.createElement('p')
                const todoActionWrapper = document.createElement('div')
                const todoBtnEdit = document.createElement('button')
                const todoBtnComplete = document.createElement('button')
                //give values
                todoTitle.textContent = todoItems[i].title
                todoDescription.textContent = todoItems[i].description
                todoDate.textContent = todoItems[i].date
                todoPriority.textContent = todoItems[i].priority
                todoBtnEdit.textContent = '✎'
                todoBtnComplete.textContent = '✓'
                todoBtnComplete.id = newTodo.ID;
                todoActionWrapper.classList = 'todoActionWrapper'
                todoBtnEdit.classList.add('todoItemBtn', 'todoItemBtnEdit')
                todoBtnComplete.classList.add('todoItemBtn')
                //event listerner
                todoBtnComplete.addEventListener('click', () => {
                    console.log('Item to be deleted: ')
                    console.log(`Project: ${projectTitle} Title: ${todoTitle.textContent} Description: ${todoDescription.textContent} Date: ${todoDate.textContent} Priority: ${todoPriority.textContent}`)
                    completedTodo(projectTitle,todoTitle.textContent, todoDescription.textContent,todoDate.textContent,todoPriority.textContent)
                    todoTitle.remove()
                    todoDescription.remove()
                    todoDate.remove()
                    todoPriority.remove()
                    todoActionWrapper.remove()
                })
                //append
                itemWrapper.append(todoTitle, todoDescription, todoDate, todoPriority,todoActionWrapper)
                todoActionWrapper.append(todoBtnEdit, todoBtnComplete)
                console.table(todoItems[i])
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
    for (let i = 0; i < todoItems.length; i++) {
            todo.displayTodo(projectTitle)
    }
}

function clearTodo(){
    const todoWrapper = document.querySelector('.todoItemWrapper')
    while (todoWrapper.firstChild) {
        todoWrapper.removeChild(todoWrapper.lastChild);
      }
}

function completedTodo(project, title, description, date, priority) {
    // console.log(`Given details - Project: ${project} Title: ${title} Description: ${description} Date: ${date} Priority: ${priority}`)
    for (let i = 0; i < todoItems.length; i++) {
        if(todoItems[i].project == project && todoItems[i].title == title && todoItems[i].description == description && todoItems[i].date == date && todoItems[i].priority == priority){
            completedTodoItems.push({project, title, description, date, priority})
            todoItems.splice(i,1)
            console.log('item removed')
        }else{
            console.log('something went horribly wrong....')
        }
    }
    console.log('Current todo Item array: ')
    console.table(todoItems)
    console.log('Completed todo Array: ')
    console.table(completedTodoItems)
}



export { createProject, todoFactory, createTodo, projects, completedProjects, displayTodo }