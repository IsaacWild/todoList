import './style.css';
import printMe from './print.js';

const pageWrapper = document.createElement('div');
document.body.appendChild(pageWrapper);

const btn = document.createElement('button');

pageWrapper.textContent = 'Chillin in beans'

btn.innerHTML = 'Click me and check the console!';
btn.onclick = printMe;
pageWrapper.appendChild(btn);