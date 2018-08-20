const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const userTodo = document.getElementById('user-todo');

function newTodo() {
  if(userTodo.value.length === 0) {
    alert("Please add something TODO!");
  } else {
    addToListAndIncrement(userTodo.value);
  }
}

function addToListAndIncrement(listItem) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(listItem));
  list.appendChild(li);
  itemCountSpan.innerText++;
}
