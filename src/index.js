document.addEventListener('DOMContentLoaded', () => {
  const tasksEl = document.querySelector('#tasks');
  const formEl = document.querySelector('#create-task-form');
  let taskData = [];

  function byPriority(a, b) {
    return b[1] - a[1];
  }

  function byName(a, b) {
    if (a > b) {
      return 1;
    } if (a < b) {
      return -1;
    }
    return 0;
  }

  let sorterFunction = byName;

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
    const priority = document.querySelector('#task-priority');
    taskData = [...taskData, [task, priority.options.selectedIndex]];
  }

  function buildLi(task, priority) {
    const listEl = document.createElement('li');
    listEl.setAttribute('data-priority', priority);
    listEl.style.color = color(priority);
    listEl.innerHTML = `${task}<button>X</button>`;
    tasksEl.appendChild(listEl);

    const deleteBtn = listEl.querySelector('button');
    deleteBtn.addEventListener('click', () => {
      listEl.remove();
    });
    return listEl;
  }

  function buildUl() {
    tasksEl.innerHTML = '';
    taskData.sort(sorterFunction).forEach((data) => {
      tasksEl.appendChild(buildLi(data[0], data[1]));
    });
  }

  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = formEl['new-task-description'].value;
    addTask(task);
    buildUl();
    formEl.reset();
  });

  document.querySelector('#btn-by-name').addEventListener('click', () => {
    sorterFunction = byName;
    buildUl();
  });

  document.querySelector('#btn-by-priority').addEventListener('click', () => {
    sorterFunction = byPriority;
    buildUl();
  });
});
