let months = ['January', 'February', 'March', 'April', 'May', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentMonth = months[new Date().getMonth()];

// Set the month to current month
document.getElementById('c-month').innerHTML = currentMonth;

// Set current year
document.getElementById('c-year').innerHTML = new Date().getFullYear().toString();