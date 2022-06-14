function projectForm(){
// Project Form --v
// Form Layout

const sidebar = document.querySelector('.sidebar')
const projectFormWrapper = document.createElement('div')
const form = document.createElement('form')
const feildset = document.createElement('fieldset')
const legend = document.createElement('legend')
const lblProjectTitle = document.createElement('label')
const inputProjectTitle = document.createElement('input')
const btnProjectSubmit = document.createElement('input')

// Classes
projectFormWrapper.classList.add('projectFormWrapperActive')

// Content
feildset.classList.add('feildset')
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

// Append
sidebar.appendChild(projectFormWrapper)
projectFormWrapper.appendChild(form)
form.appendChild(feildset)
feildset.append(legend, lblProjectTitle,inputProjectTitle,btnProjectSubmit)

}

export default projectForm