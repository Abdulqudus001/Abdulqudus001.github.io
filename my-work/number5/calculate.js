function performOperation(id, nums) {
  let result;
  switch (id) {
    case 'add':
      result = parseFloat(nums[0]) + parseFloat(nums[1])
      break;
    case 'subtract':
      result = parseFloat(nums[0]) - parseFloat(nums[1])
      break;
    case 'divide':
      result = parseFloat(nums[0]) / parseFloat(nums[1])
      break;
    case 'product':
      result = parseFloat(nums[0]) * parseFloat(nums[1])
      break;
    default:
      break;
  }
  return result;
}

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

  let nums = [];
  let numberToBeAdded = '';
  let result = '';
  let lastSign = '';

  signs.forEach(sign => {
    sign.addEventListener('click', () => {
      if (sign.id != 'equals') {
        if (nums.length > 1) {
          nums = [];
          nums.push(result);
        }
        lastSign = sign.id;
        numberToBeAdded = '';
      }
    });
  });

  // Modifiy content of screen on number press
  let typedNumber = '';
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (number.id != 'equals') {
        typedNumber += number.innerHTML;
        currentText.innerHTML = typedNumber;
        if (number.classList.value.indexOf('last') < 0) {
          numberToBeAdded += number.innerHTML;
          nums.push(numberToBeAdded);
          if (nums.length > 1) {
            result = performOperation(lastSign, nums);
          }
        }
      }
    });
  });

  equals.addEventListener('click', () => {
    let finalResult = performOperation(lastSign, nums);
    previousText.innerHTML = typedNumber;
    typedNumber = finalResult;
    nums = [finalResult];
    currentText.innerHTML = finalResult;
    numberToBeAdded = finalResult;
  });

  // Clear screen on 'C' btn press
  clear.addEventListener('click', () => {
    previousText.innerHTML = '0';
    currentText.innerHTML = '0';
    typedNumber = '';
    nums = [];
    numberToBeAdded = '';
  })
});