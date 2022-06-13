import './style.css';
import icon from './icons/todoIcon.svg'
import printMe from './print.js';

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
//body --v
//body layout
const bodyTitle = document.createElement('p')
const todoHeadTitle = document.createElement('p')
const todoHeadDescription = document.createElement('p')
const todoHeadDate = document.createElement('p')
const todoHeadPriority = document.createElement('p')
const todoWrapper = document.createElement('div')
//body classes
body.classList.add('body')
bodyTitle.classList.add('bodyTitle')
todoHeadTitle.classList.add('todoHead', 'headTitle')
todoHeadDescription.classList.add('todoHead', 'headDescription')
todoHeadDate.classList.add('todoHead', 'headDate')
todoHeadPriority.classList.add('todoHead', 'headPriority')
todoWrapper.classList.add('todoWrapper')
//body content
bodyTitle.textContent = 'Project Title'
todoHeadTitle.textContent = 'Title'
todoHeadDescription.textContent = 'Description'
todoHeadDate.textContent = 'Due Date'
todoHeadPriority.textContent = 'Priority'
//body append
body.append(bodyTitle,todoWrapper)
todoWrapper.append(todoHeadTitle,todoHeadDescription,todoHeadDate,todoHeadPriority)

//Project Form --v
//Form Layout
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
const btnSubmit = document.createElement('input')

//Form Classes
formWrapper.classList.add('formWrapper')
feildset.classList.add('feildset')
btnSubmit.classList.add('btnSubmit')
//form Content
form.setAttribute('name', 'maketodoItem')
form.setAttribute('onsubmit', 'formSubmit()')
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
btnSubmit.setAttribute('type', 'submit')
btnSubmit.setAttribute('value', 'Create ToDo Item')
//Form Append
todoWrapper.append(formWrapper)
formWrapper.appendChild(form)
form.appendChild(feildset)
feildset.append(legend,lblTodoTitle,inputTodoTitle,lblTodoDescription,inputTodoDescription,lblTodoDate,inputTodoDate,lblTodoPriority,selectTodoPriority, btnSubmit)
selectTodoPriority.append(priorityHigh,priorityMed,priorityLow)

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