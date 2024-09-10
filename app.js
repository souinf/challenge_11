function addtask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();// trim pour éléminer l'espace
if (taskText === ''){
  alert('Please inter a text');
}

let taskList = document.querySelector('.myItems');
let li = document.createElement('li');
let h2 = document.createElement('h2');
h2.textContent = taskText;
let btnContainer = document.createElement('div');
let editbutton = document.createElement('button');
let deletebutton = document.createElement('button');

btnContainer.classList.add('action-btns');
editbutton.textContent='edit';
editbutton.classList.add('edit');
deletebutton.textContent='delete';
deletebutton.classList.add('delete');

editbutton.onclick = function(){
  edittask(h2,li);
}

// pr faire fonctionner le delete button
deletebutton.onclick = function(){
  taskList.removeChild(li);
}

btnContainer.appendChild(editbutton); // pour ordonner
btnContainer.appendChild(deletebutton);

li.appendChild(h2);
li.appendChild(btnContainer);
taskList.appendChild(li);
}

//pr editer(changer la valeur)
function edittask(h2,li){
  let currentvalue = h2.textContent;
  let newValue = prompt('edit task :' , currentvalue);

  if( newValue !== null && newValue.trim() !== ''){
    h2.textContent = newValue.trim();
} else {
    alert ('task cant be empty');
}
}
