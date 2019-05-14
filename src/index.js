document.addEventListener('DOMContentLoaded', () => {
  const tasksEl = document.querySelector('#tasks');
  const formEl = document.querySelector('#create-task-form');

  function addTask(task) {
    const listEl = document.createElement('li');
    listEl.textContent = task;
    tasksEl.appendChild(listEl);
  }

  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = formEl['new-task-description'].value;
    addTask(task);
    formEl.reset();
  });
});
