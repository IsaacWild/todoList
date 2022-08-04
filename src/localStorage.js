//put the code here to grab array updates and set and get items and load them in

import { todoItems, completedTodoItems, projects, completedProjects, createProject, loadJSONCompletedProjects, loadJSONtodoItems } from './todoProjects'

function storeProjects() {
    const projectJSON = JSON.stringify(projects)
    if (storageAvailable('localStorage')) {
        localStorage.setItem('storedProjects', projectJSON)
        console.log('projects have been stored')
    }
    else {
        console.log('Local storage is not avalible to save projects')
    }

}

function storeCompletedProjects() {
    const projectJSON = JSON.stringify(completedProjects)
    if (storageAvailable('localStorage')) {
        localStorage.setItem('storedCompletedProjects', projectJSON)
        console.log('completed projects have been stored')
    }
    else {
        console.log('Local storage is not avalible to save projects')
    }

}

function storeTodo() {
    const projectJSON = JSON.stringify(todoItems)
    if (storageAvailable('localStorage')) {
        localStorage.setItem('storedTodoItems', projectJSON)
        console.log('todo items have been stored')
    }
    else {
        console.log('Local storage is not avalible to save projects')
    }
}

function loadSavedProjects() {
    let projects = JSON.parse(localStorage.getItem('storedProjects'))
    if (projects != null) {
        for (let i = 0; i < projects.length; i++) {
            createProject(projects[i])
        }
    } else if (projects == null) {
        console.log(`No projects found in local storage`)
    }
}

function loadSavedCompletedProjects() {
    let completedProjects = JSON.parse(localStorage.getItem('storedCompletedProjects'))
    console.log(`Loaded Completed Projects:`)
    console.log(completedProjects)
    if (completedProjects != null) {
        for (let i = 0; i < completedProjects.length; i++) {
            loadJSONCompletedProjects(completedProjects[i])
        }
        storeCompletedProjects()
    } else if (completedProjects == null) {
        console.log(`No completed projects found in local storage`)
    }
}

function loadTodo() {
    let todoItems = JSON.parse(localStorage.getItem('storedTodoItems'))
    if (projects.length != 0) {
        for (let i = 0; i < todoItems.length; i++) {
            loadJSONtodoItems(todoItems[i].project, todoItems[i].title, todoItems[i].description, todoItems[i].date, todoItems[i].priority)
        }
    } else {
        console.log('No projects avalible')
    }
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
    catch (e) {
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

export { storeProjects, storeCompletedProjects, storeTodo, loadSavedProjects, loadSavedCompletedProjects, loadTodo }