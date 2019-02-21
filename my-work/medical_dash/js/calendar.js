let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentMonthIndex = new Date().getMonth();

let currentYear = new Date().getFullYear();
let firstDay = getFirstDay(currentMonthIndex, currentYear);
let daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);

// Set the month to current month
function setMonth() {
  if (currentMonthIndex < 0) {
    currentMonthIndex = months.length - 1;
  } else if (currentMonthIndex >= months.length) {
    currentMonthIndex = 0;
  }
  firstDay = getFirstDay(currentMonthIndex, currentYear);
  daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
  document.getElementById('c-month').innerHTML = months[currentMonthIndex];
  generateCalendar();
}

// Set current year
function setYear() {
  firstDay = getFirstDay(currentMonthIndex, currentYear);
  daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
  document.getElementById('c-year').innerHTML = currentYear.toString();
  generateCalendar();
}

// Set year and month on load
setMonth();
setYear();

// Change month or year on btn click
let btns = document.querySelectorAll('.change');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // currentMonthIndex = currentMonthIndex >= months.length - 1 ? 0 : currentMonthIndex;
    switch (btn.id) {
      case 'p-month':
        currentMonthIndex -= 1;
        setMonth();
        break;
      case 'n-month':
        currentMonthIndex += 1;
        setMonth();
        break;
      case 'p-year':
        currentYear -= 1;
        setYear();
        break;
      case 'n-year':
        currentYear += 1;
        setYear();
      default:
        break;
    }
  });
});

function getDaysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

function getFirstDay(month, year) {
  return new Date(year, month).getDay();
}


function generateCalendar() {
  let calendar = document.getElementById('calendar-grid');
  while (calendar.firstChild) {
    calendar.removeChild(calendar.firstChild);
  }

  function createDaysColumn(day) {
    let div = document.createElement('div');
    if (day == 'Sat') {
      div.classList.add('no-border');
    }
    div.classList.add('cal-grid', 'days');
    div.appendChild(document.createTextNode(day));
    return div;
  }

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i of days) {
    document.getElementById('calendar-grid').append(createDaysColumn(i));
  }

  function createDiv(number, classNames) {
    let div = document.createElement('div');
    div.classList.add(...classNames);
    div.appendChild(document.createTextNode(number.toString()));
    return div;
  }

  let daysInPreviousMonth = getDaysInMonth(currentMonthIndex - 1, currentYear);

  let daysInNextMonth = getDaysInMonth(currentMonthIndex + 1, currentYear);

  let formerDays = [];
  for (let i = daysInPreviousMonth; i > daysInPreviousMonth - firstDay; i--) {
    formerDays.unshift(createDiv(i, ['cal-grid', 'former']));
  }

  let currentDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    currentDays.push(createDiv(i, ['cal-grid', 'current']));
  }

  let allDays = [...formerDays, ...currentDays];

  let lastIndexInDays = -1;
  allDays.forEach((day, index) => {
    lastIndexInDays++;
    lastIndexInDays = lastIndexInDays >= days.length ? 0 : lastIndexInDays;
    if (days[lastIndexInDays] == 'Sat' || days[lastIndexInDays] == 'Sun') {
      day.classList.add('blur');
    }
  });

  for (let i = 1; i < days.length - lastIndexInDays; i++) {
    allDays.push(createDiv(i, ['cal-grid', 'future']));
  }

  lastIndexInDays = -1;
  allDays.forEach((day, index) => {
    lastIndexInDays++;
    lastIndexInDays = lastIndexInDays >= days.length ? 0 : lastIndexInDays;
    if (days[lastIndexInDays] == 'Sat') {
      day.classList.add('no-border');
    }
  });

  document.getElementById('calendar-grid').append(...allDays);
}