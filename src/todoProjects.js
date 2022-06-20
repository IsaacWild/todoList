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
        projectItem.textContent = name
        projectItemComplete.textContent = 'X'
        projectItem.classList.add('projectItem')
        projectItemComplete.classList.add('projectItem')
        activeProWrapper.append(projectItem,projectItemComplete)
        projectItem.addEventListener('click', () => {
            //load todo items into main body
        })
        projectItemComplete.addEventListener('click', () => {
            completeProject(name)
            activeProWrapper.removeChild(projectItem)
            activeProWrapper.removeChild(projectItemComplete)
        })
    }
    return {name, newProject, displayProject}
}

function createProject(projectName){
    const project = projectFactory(projectName);
    project.newProject();
    project.displayProject();
}

function completeProject(projectName){
    for (let i = 0; i < projects.length; i++) {
        if (projects[i] == projectName){
            projects.splice(i,1)
            completedProjects.push(projectName)
            console.log(projectName + ' was removed from the project list')
            console.log('current project Array: ' + projects)
            console.log('current completed project Array: ' + completedProjects)
            return
        }   
    }
}

// const todoItem = (project, title, description, date, priority) =>{
//     return {project, title, description, date, priority}
// }

export {createProject}