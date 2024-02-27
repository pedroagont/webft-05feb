console.log('hello from app.js!');

// DOM
console.log(navigator);
console.log(window);
console.log(document);

// --------- HOW TO SELECT ELEMENTS
// console.log(document.getElementById('header-title'));

const header = document.getElementById('header');
const headerTitle = document.getElementById('header-title');
const headerDescription = document.getElementById('header-description');
const todoList = document.getElementById('todo-list');
const form = document.getElementById('form');
const formSubmit = document.getElementById('form-submit');

// --------- HOW TO CHANGE CONTENT
headerTitle.innerHTML = 'Hello from app.js! 👋';

// --------- HOW TO CHANGE STYLES
header.style.background = 'lightgreen';
header.style.color = 'black';

// --------- HOW TO DYNAMIC RENDERING
const todosData = ['learn html', 'learn css', 'learn js'];

console.log(todoList);

const renderTodos = () => {
  todoList.innerHTML = '';

  for (const todo of todosData) {
    const todoMarkup = `<article>
        <h4>${todo}</h4>
      </article>`;
    todoList.innerHTML += todoMarkup;
  }
};

renderTodos();

// --------- HOW TO ACCESS TO EVENTS
// document.addEventListener('click', () => {
//   console.log('document clicked!');
// });

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { content } = event.target.elements;

  todosData.push(content.value);

  content.value = '';

  renderTodos();
});
