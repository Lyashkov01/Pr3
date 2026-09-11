const day = document.querySelector('.date h1')
const date = document.querySelector('.date p')
let now = new Date();
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
day.textContent = days[now.getDay()];
date.textContent = `${now.getDate()} ${months[now.getMonth()]}`;

const btnFilters = document.querySelectorAll('.filters button')

const tasks = document.querySelectorAll('.task');

btnFilters.forEach(button => {
    button.addEventListener('click', () => {
        btnFilters.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        tasks.forEach(task => {
            if (button.classList.contains('btnFilterAll')) {
                task.style.display = 'flex';
            } else if (button.classList.contains('btnFilterActive')) {
                task.style.display = task.classList.contains('done') ? 'none' : 'flex';
            } else if (button.classList.contains('btnFilterFinish')) {
                task.style.display = task.classList.contains('done') ? 'flex' : 'none';
            }
        });
    });
});

const checkboxes = document.querySelectorAll('.task-checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const task = checkbox.closest('.task');
        task.classList.toggle('done');
    });
});


const searchInput = document.querySelector('.searchBar input');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    tasks.forEach(task => {
        const text = task.querySelector('.task-text').textContent.toLowerCase();
        task.style.display = text.includes(query) ? 'flex' : 'none';
    });
});


const btnEdit = document.querySelector('.btnEdit');
const modalBackground = document.querySelector('.modal-background');
const btnCancel = document.querySelector('.btnCancel');
const btnAdd = document.querySelector('.btnAdd');

btnEdit.addEventListener('click', () => {
    modalBackground.style.display = 'flex';
});

btnCancel.addEventListener('click', () => {
    modalBackground.style.display = 'none';
});

const modalInputs = document.querySelectorAll('.modal-content input[type="text"]');
const inputDescription = modalInputs[0];
const inputDate = modalInputs[1];


btnAdd.addEventListener('click', () => {
    const newTask = document.createElement('div');
newTask.className = 'task';
newTask.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <div class="task-info">
        <span class="task-time">${inputDate.value}</span>
        <span class="task-text">${inputDescription.value}</span>
    </div>
`;

const taskList = document.querySelector('.task-list');
taskList.appendChild(newTask);

const newCheckbox = newTask.querySelector('.task-checkbox');

newCheckbox.addEventListener('change', () => {
    newTask.classList.toggle('done');
});

modalBackground.style.display = 'none';
inputDescription.value = '';
inputDate.value = '';
})