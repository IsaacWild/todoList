import { createProject } from "./todoProjects"

function projectForm(){
// Project Form --v
// Form Layout

// const sidebar = document.querySelector('.sidebar')
const projectFormWrapper = document.querySelector('.projectFormWrapperActive')
const form = document.createElement('div')
const proFeildset = document.createElement('fieldset')
const legend = document.createElement('legend')
const lblProjectTitle = document.createElement('label')
const inputProjectTitle = document.createElement('input')
const btnProjectSubmit = document.createElement('input')
const btnProjectCancel = document.createElement('button')

// Classes
// projectFormWrapper.classList.add('projectFormWrapperActive')
proFeildset.classList.add('projectFeildset')
legend.classList.add('proLegend')
lblProjectTitle.classList.add('proLabel')
inputProjectTitle.classList.add('proInput')
btnProjectSubmit.classList.add('btnProjectSubmit')
btnProjectCancel.classList.add('btnProjectCancel')
// Content
form.setAttribute('name', 'maketodoItem')
form.setAttribute('onsubmit', 'formSubmit()')
legend.textContent = 'Create your ToDo Item'
lblProjectTitle.setAttribute('for', 'inputProjectTitle')
lblProjectTitle.textContent = 'Project Title: '
inputProjectTitle.setAttribute('type','text')
inputProjectTitle.setAttribute('id','inputProjectTitle')
inputProjectTitle.setAttribute('name','inputProjectTitle')
inputProjectTitle.setAttribute('required','required')
inputProjectTitle.setAttribute("minlength", "1")
inputProjectTitle.setAttribute("maxlength", "30")
btnProjectSubmit.setAttribute('type','submit')
btnProjectSubmit.setAttribute('value','Add Project')
btnProjectCancel.textContent = 'Cancel'

// Append
// sidebar.append(projectFormWrapper)
projectFormWrapper.appendChild(form)
form.appendChild(proFeildset)
proFeildset.append(legend,lblProjectTitle,inputProjectTitle,btnProjectCancel,btnProjectSubmit)

//listeners
btnProjectCancel.addEventListener('click', () =>{
    clearForm()
})

btnProjectSubmit.addEventListener('click', () =>{
    let projectTitle = inputProjectTitle.value
    if(projectTitle != ''){
        createProject(projectTitle);
        clearForm()
    } else{
        alert('Please enter a project title')
    }
} )

//functions
function clearForm() {
    while (projectFormWrapper.firstChild) {
        projectFormWrapper.removeChild(projectFormWrapper.lastChild);
      }
    projectFormWrapper.classList.toggle('projectFormWrapperInactive')
}

}

export default projectForm