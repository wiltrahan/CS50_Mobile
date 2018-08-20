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

const arrayOfTodos = [];
let listItemId = 0;

function newTodo() {
  if(userTodo.value.length === 0) {
    alert("Please add something TODO!");
  } else {
    listItemId++;
    addToList(userTodo.value, listItemId);
  }
}

function addToList(listItem, listItemId) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = listItemId - 1;
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                onCheckMarkDecrementCount();
            }
        });
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(listItem));
  list.appendChild(li);

  addToListArrayAndIncrementCount(listItem, checkbox.id);
}

function addToListArrayAndIncrementCount(listItem, id) {
  const todoObject = {};
  todoObject["todo"] = listItem;
  todoObject["id"] = id;

  arrayOfTodos.push(todoObject);
  itemCountSpan.innerText = arrayOfTodos.length;
  uncheckedCountSpan.innerText = arrayOfTodos.length;
  console.log(arrayOfTodos);


}

function onCheckMarkDecrementCount() {
    uncheckedCountSpan.innerText--;
}
