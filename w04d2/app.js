$(document).ready(() => {
  console.log('hello from app.js!');

  // DOM
  console.log(navigator);
  console.log(window);
  console.log(document);

  // --------- HOW TO SELECT ELEMENTS
  // console.log(document.getElementById('header-title'));

  // with vanilla js
  // const header = document.getElementById('header');
  // const headerTitle = document.getElementById('header-title');
  // const headerDescription = document.getElementById('header-description');
  // const todoList = document.getElementById('todo-list');
  // const form = document.getElementById('form');
  // const formSubmit = document.getElementById('form-submit');

  // with jquery
  const header = $('#header');
  const todoList = $('#todo-list');
  const form = $('#form');

  // --------- HOW TO CHANGE CONTENT
  // with vanilla js
  // headerTitle.innerHTML = 'Hello from app.js! 👋';

  // with jquery
  $('#header-title').html('Hello from app.js! 👋');

  // --------- HOW TO CHANGE STYLES
  // with vanilla js
  // header.style.background = 'lightgreen';
  // header.style.color = 'black';

  // with jquery
  header.css('background', 'lightgreen');
  header.css('color', 'black');

  // --------- HOW TO DYNAMIC RENDERING
  const todosData = ['learn html', 'learn css', 'learn js'];

  console.log(todoList);

  const renderTodos = () => {
    // with vanilla js
    //   todoList.innerHTML = '';
    //   for (const todo of todosData) {
    //     const todoMarkup = `<article>
    //         <h4>${todo}</h4>
    //       </article>`;
    //     todoList.innerHTML += todoMarkup;
    //   }

    // with jquery
    todoList.empty();
    for (const todo of todosData) {
      const todoMarkup = `<article>
          <h4>${todo}</h4>
        </article>`;
      todoList.append(todoMarkup);
    }
  };

  renderTodos();

  // --------- HOW TO ACCESS TO EVENTS
  // document.addEventListener('click', () => {
  //   console.log('document clicked!');
  // });

  // with vanilla js
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();

  //   const { content } = event.target.elements;

  //   todosData.push(content.value);

  //   content.value = '';

  //   renderTodos();
  // });

  // with jquery
  form.submit((event) => {
    event.preventDefault();

    const { content } = event.target.elements;

    todosData.push(content.value);

    $(content).val('');

    renderTodos();
  });
});
