document.addEventListener('DOMContentLoaded', () => {
  const tasksEl = document.querySelector('#tasks');
  const formEl = document.querySelector('#create-task-form');

  function addTask(task) {
    const listEl = document.createElement('li');
    listEl.innerHTML = `${task}<button>X</button>`;
    tasksEl.appendChild(listEl);
    const deleteBtn = listEl.querySelector('button');
    deleteBtn.addEventListener('click', () => {
      listEl.remove();
    });
  }

  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = formEl['new-task-description'].value;
    addTask(task);
    formEl.reset();
  });
});
