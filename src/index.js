import './style.css';
import printMe from './print.js';

//initial page wrapper container
const pageWrapper = document.createElement('div');
pageWrapper.classList.add('pageWrapper')
document.body.appendChild(pageWrapper);

//setup layout of page
const header = document.createElement('div')
const sidebar = document.createElement('div')
const body = document.createElement('div')
const footer = document.createElement('div')

//add classes
header.classList.add('header')
sidebar.classList.add('sidebar')
body.classList.add('body')
footer.classList.add('footer')

//add a little text
header.textContent = 'Header'
sidebar.textContent = 'Sidebar'
body.textContent = 'Body'
footer.textContent = 'Footer'

//append away!
pageWrapper.append(header, sidebar,body,footer)
