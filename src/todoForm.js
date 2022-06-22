import { createTodo } from "./todoProjects"


function todoForm(){
//todo Form --v
//Form Layout
const btnAddTodo = document.querySelector('.btnAddTodoItem')
const formWrapper = document.querySelector('.formWrapperActive')
const form = document.createElement('div')
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
const btnSubmit = document.createElement('button')
const btnCancel = document.createElement('button')

//todo Form Classes
formWrapper.classList.remove('formWrapperInactive')
feildset.classList.add('feildset')
btnSubmit.classList.add('btnSubmit')
btnCancel.classList.add('btnCancel')
//todo Form Content
form.setAttribute('name', 'maketodoItem')
form.setAttribute('id', 'maketodoItem')
form.setAttribute('action', '#')
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
btnSubmit.textContent = 'Add ToDo Item'
btnCancel.textContent = 'Cancel'
//todo Form Append
formWrapper.appendChild(form)
form.appendChild(feildset)
feildset.append(legend,lblTodoTitle,inputTodoTitle,lblTodoDescription,inputTodoDescription,lblTodoDate,inputTodoDate,lblTodoPriority,selectTodoPriority,btnCancel,btnSubmit)
selectTodoPriority.append(priorityHigh,priorityMed,priorityLow)
//event Listeners

btnSubmit.addEventListener('click', () =>{
    //let all the inputs as input values
    const activeProject = document.querySelector('.bodyTitle')
    const itemWrapper = document.querySelector('.todoItemWrapper')
    let project = activeProject.textContent
    let title = inputTodoTitle.value
    let description = inputTodoDescription.value
    let date = inputTodoDate.value
    let priority = selectTodoPriority.value
    //set validation for empty
    if((title != '') && (description != '') && (date != '')){
        while (itemWrapper.firstChild) {
            itemWrapper.removeChild(itemWrapper.lastChild);
        }
        createTodo(project, title, description, date, priority)
    }
    //close form
    removeForm()
    btnAddTodo.classList.remove('btnAddTodoItemInactive')
    formWrapper.classList.add('formWrapperInactive')
})

btnCancel.addEventListener('click', () =>{
    removeForm()
    btnAddTodo.classList.remove('btnAddTodoItemInactive')
    formWrapper.classList.add('formWrapperInactive')
})

//functions
function removeForm(){
    while (formWrapper.firstChild) {
        formWrapper.removeChild(formWrapper.lastChild);
      }
}

}

export default todoForm