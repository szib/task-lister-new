document.addEventListener('DOMContentLoaded', () => {
  const tasksEl = document.querySelector('#tasks');
  const formEl = document.querySelector('#create-task-form');

  function color(index) {
    switch (index) {
      case 0:
        return 'green';
      case 2:
        return 'red';
      default:
        return 'olive';
    }
  }

  function addTask(task) {
    const listEl = document.createElement('li');
    const priority = document.querySelector('#task-priority');

    listEl.setAttribute('data-priority', priority.options.selectedIndex);
    listEl.style.color = color(priority.options.selectedIndex);

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
