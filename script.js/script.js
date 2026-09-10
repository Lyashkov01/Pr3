const day = document.querySelector('.date h1')
const date = document.querySelector('.date p')
let now = new Date();
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
day.textContent = days[now.getDay()];
date.textContent = `${now.getDate()} ${months[now.getMonth()]}`;

const btnFilters = document.querySelector('.filters button')
