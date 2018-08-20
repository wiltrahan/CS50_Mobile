const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

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
        createAndAddToView(userTodo.value, listItemId);
    }
};

function createAndAddToView(listItem, listItemId) {
    const li = document.createElement("li");
    const text = document.createTextNode(listItem);
    const checkbox = createCheckbox(listItemId);

    li.appendChild(text);
    li.appendChild(checkbox);
    li.className = classNames.TODO_ITEM + " " + classNames.TODO_TEXT;
    list.appendChild(li);

    addToListArrayAndIncrementCount(listItem, checkbox.id);
};

function createCheckbox() {
    const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = listItemId - 1;
        checkbox.className = classNames.TODO_CHECKBOX;
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                onCheckMarkDecrementCount();
            } else if(this.checked === false) {
                uncheckAndIncrementCount();
            }
        });
    return checkbox;
};

function addToListArrayAndIncrementCount(listItem, id) {
    const todoObject = {};
    todoObject["todo"] = listItem;
    todoObject["id"] = id;

    arrayOfTodos.push(todoObject);
    itemCountSpan.innerText = arrayOfTodos.length;
    uncheckedItemCount();

};

function uncheckedItemCount() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    uncheckedCountSpan.innerText = arrayOfTodos.length - checked;
};

function onCheckMarkDecrementCount() {
    if(uncheckedCountSpan.innerText > 0) {
        uncheckedCountSpan.innerText--;
    }
};

function uncheckAndIncrementCount() {
    uncheckedCountSpan.innerText++;
};
