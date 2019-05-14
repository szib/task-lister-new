document.addEventListener('DOMContentLoaded', () => {
  const tasksEl = document.querySelector('#tasks');
  const formEl = document.querySelector('#create-task-form');
  let taskData = [];

  function byPriority(a, b) {
    return b[1] - a[1];
  }

  function byName(a, b) {
    if (a[0] > b[0]) {
      return 1;
    } if (a[0] < b[0]) {
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

  function getRandomId() {
    return Math.floor(Math.random() * (1000000 - 1)) + 1;
  }

  function addTask(task, priority) {
    taskData = [...taskData, [task, priority, getRandomId()]];
  }

  function buildLi(data) {
    const [task, priority, id] = data;
    const listEl = document.createElement('li');
    listEl.setAttribute('data-priority', priority);
    listEl.setAttribute('data-taskid', id);
    listEl.style.color = color(priority);
    listEl.innerHTML = `${task}<button>X</button>`;
    tasksEl.appendChild(listEl);

    const deleteBtn = listEl.querySelector('button');
    deleteBtn.addEventListener('click', () => {
      taskData = taskData.filter(element => element[2] !== parseInt(id, 10));
      buildUl();
    });
    return listEl;
  }

  function buildUl() {
    tasksEl.innerHTML = '';
    taskData.sort(sorterFunction).forEach((data) => {
      tasksEl.appendChild(buildLi(data));
    });
  }

  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = formEl['new-task-description'].value;
    const priority = document.querySelector('#task-priority').options.selectedIndex;
    addTask(task, priority);
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
