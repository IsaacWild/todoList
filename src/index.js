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

//sidebarclasses
sidebar.classList.add('sidebar')
activeTitle.classList.add('sideTitle')
completeTitle.classList.add('sideTitle')
activeProWrapper.classList.add('activeProWrapper')
completedProWrapper.classList.add('completedProWrapper')
//sidebarcontent
activeTitle.textContent = 'Active Projects'
completeTitle.textContent = 'Completed Projects'
activeProWrapper.textContent ='Home'
completedProWrapper.textContent = 'Away'
//sidebar append
sidebar.append(activeTitle,activeProWrapper,completeTitle, completedProWrapper);

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
todoHeadDescription.classList.add('todoHead')
todoHeadTitle.classList.add('todoHead')
todoHeadDate.classList.add('todoHead')
todoHeadPriority.classList.add('todoHead')
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