window.addEventListener('load', () => {
  let previousText = document.getElementById('previous');
  let currentText = document.getElementById('current');
  // Initializing buttons
  let clear = document.getElementById('clear');
  let numbers = document.querySelectorAll('.grid-item');
  let signs = document.querySelectorAll('.grid-item.last');
  let add = document.getElementById('add');
  let subtract = document.getElementById('subtract');
  let divide = document.getElementById('divide');
  let product = document.getElementById('product');
  let equals = document.getElementById('equals');
  let percentage = document.getElementById('percentage');

  signs.forEach(sign => {
    sign.addEventListener('click', () => {
      console.log(sign.innerHTML)
    });
  });

  equals.addEventListener('click', () => {
    previousText.innerHTML = currentText.innerHTML;
    currentText.innerHTML = eval(typedNumber);
    typedNumber = '';
  })

  // Modifiy content of screen on number press
  let typedNumber = '';
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (number.classList.value.indexOf('last') < 0) {
        typedNumber += number.innerHTML;
        currentText.innerHTML = typedNumber;
      }
    });
  });

  // Clear screen on 'C' btn press
  clear.addEventListener('click', () => {
    previousText.innerHTML = '0';
    currentText.innerHTML = '0';
    typedNumber = '';
  })
});