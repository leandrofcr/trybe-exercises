function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfMonth() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDays.length; index += 1) {
    const days = dezDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.className = "day";

    switch (dezDays[index]) {
      case 24:
        dayListItem.className = "day-holiday";
        break;
      case 25:
        dayListItem.className = "day-holiday";
        dayListItem.className = "day-friday";
        break;
      case 31:
        dayListItem.className = "day-holiday";
        break;
      case 4:
        dayListItem.className = "day-friday";
        break;
      case 11:
        dayListItem.className = "day-friday";
        break;
      case 18:
        dayListItem.className = "day-friday";
        break;
    }
    dezDaysList.appendChild(dayListItem);
  }
};

createDaysOfMonth();

function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Feriados';
  button.idName = "btn-holiday";
  document.querySelector('.buttons-container').appendChild(button);
}

createButton();