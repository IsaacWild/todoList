import './style.css';
import './todoFormStyle.css'
import icon from './icons/todoIcon.svg'
import todoForm from './todoForm.js';
import projectForm from './projectForm.js';


//initial page wrapper container
const pageWrapper = document.createElement('div');
pageWrapper.classList.add('pageWrapper')
document.body.appendChild(pageWrapper);
const header = document.createElement('div')
const sidebar = document.createElement('div')
const body = document.createElement('div')
const footer = document.createElement('div')
pageWrapper.append(header, sidebar,body,footer)

//header --v
//header layout
const myIcon = new Image();
const headerTitle = document.createElement('p')
//header classes
header.classList.add('header')
myIcon.classList.add('icon');
headerTitle.classList.add('headerTitle')
//header content
headerTitle.textContent = 'ToDo List'
myIcon.src = icon;

//header append
header.append(headerTitle, myIcon)

//sidebar --v
//sidebar layout
const activeTitle = document.createElement('p')
const completeTitle = document.createElement('p')
const activeProWrapper = document.createElement('div')
const completedProWrapper = document.createElement('div')
const btnAddProject = document.createElement('button')
const btnClearCompleted = document.createElement('button')

//sidebarclasses
sidebar.classList.add('sidebar')
activeTitle.classList.add('sideTitle', 'activeTitle')
completeTitle.classList.add('sideTitle', 'completeTitle')
activeProWrapper.classList.add('activeProWrapper')
completedProWrapper.classList.add('completedProWrapper')
btnAddProject.classList.add('btnAddProject')
btnClearCompleted.classList.add('btnClearCompleted')
//sidebarcontent
activeTitle.textContent = 'Active Projects'
completeTitle.textContent = 'Completed Projects'
activeProWrapper.textContent ='Home'
completedProWrapper.textContent = 'Away'
btnAddProject.textContent = 'Add Project'
btnClearCompleted.textContent = 'Clear Completed'
//sidebar append
sidebar.append(activeTitle,activeProWrapper,completeTitle, completedProWrapper);
activeTitle.appendChild(btnAddProject)
completeTitle.appendChild(btnClearCompleted)
//event listeners
btnAddProject.addEventListener('click', () =>{
    projectForm()
})


//body --v
//body layout
const bodyTitle = document.createElement('p')
const todoHeadTitle = document.createElement('p')
const todoHeadDescription = document.createElement('p')
const todoHeadDate = document.createElement('p')
const todoHeadPriority = document.createElement('p')
const todoWrapper = document.createElement('div')
const btnAddTodo = document.createElement('button')
//body classes
body.classList.add('body')
bodyTitle.classList.add('bodyTitle')
todoHeadTitle.classList.add('todoHead', 'headTitle')
todoHeadDescription.classList.add('todoHead', 'headDescription')
todoHeadDate.classList.add('todoHead', 'headDate')
todoHeadPriority.classList.add('todoHead', 'headPriority')
todoWrapper.classList.add('todoWrapper')
btnAddTodo.classList.add('btnAddTodoItem')
//body content
bodyTitle.textContent = 'Project Title'
todoHeadTitle.textContent = 'Title'
todoHeadDescription.textContent = 'Description'
todoHeadDate.textContent = 'Due Date'
todoHeadPriority.textContent = 'Priority'
btnAddTodo.textContent = 'Add ToDo Item'
//body append
body.append(bodyTitle,btnAddTodo,todoWrapper)
todoWrapper.append(todoHeadTitle,todoHeadDescription,todoHeadDate,todoHeadPriority)
//event listeners
btnAddTodo.addEventListener('click', () =>{
    todoForm()
})



//footer --v
//footer layout
const footer1 = document.createElement('a')
const footer2 = document.createElement('a')
//footer classes
footer.classList.add('footer')
//footer content
footer1.textContent = 'Created by Isaac Sutton-Wild'
footer2.textContent = 'Icons by svgrepo.com'
footer2.href = 'https://www.svgrepo.com/'
footer1.href = 'https://github.com/IsaacWild/restaurantPage'
//footer append
footer.append(footer1, footer2)