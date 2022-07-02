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
                todoActionWrapper.classList = 'todoActionWrapper'
                todoBtnEdit.classList.add('todoItemBtn', 'todoItemBtnEdit')
                todoBtnComplete.classList.add('todoItemBtn')
                //event listerner
                todoBtnComplete.addEventListener('click', () => {
                    completedTodo(newTodo.project, newTodo.title, newTodo.description, newTodo.date, newTodo.priority)
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
    todoItems.forEach(newTodo => {
        if (project == projectTitle) {
        }
    });
}

function completedTodo(project, todoTitle, todoDescription, todoDate, todoPriority) {
    console.log(`Project: ${project}  Title: ${todoTitle}  Description: ${todoDescription} Date: ${todoDate}  Priority: ${todoPriority}`)
    
    


    // for (let i = 0; i < todoItems.length; i++) {
    //     if ((todoItems[i].project == project) && (todoItems[i].todoTitle == todoTitle) && (todoItems[i].todoDescription == todoDescription)(todoItems[i].todoDate == todoDate) && (todoItems[i].priority == todoPriority)) {
    //         todoItems.splice(i, 1)
    //         completedTodoItems.push({ project, todoTitle, todoDescription, todoDate, todoPriority })
    //         console.log('todo Item was removed, current todo Items: ')
    //         console.table(todoItems)
    //         console.log('to do Item was added to completed todo Items: ')
    //         console.table(completedTodoItems)
    //     } else (
    //         console.log('something went wrong')
    //     )
    // }
}

export { createProject, todoFactory, createTodo, projects, completedProjects, displayTodo }