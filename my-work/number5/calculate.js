function performOperation(id, nums) {
  let result;
  switch (id) {
    case "add":
      result = parseFloat(nums[0]) + parseFloat(nums[1]);
      break;
    case "subtract":
      result = parseFloat(nums[0]) - parseFloat(nums[1]);
      break;
    case "divide":
      result = parseFloat(nums[0]) / parseFloat(nums[1]);
      break;
    case "product":
      result = parseFloat(nums[0]) * parseFloat(nums[1]);
      break;
    default:
      break;
  }
  return result;
}

window.addEventListener("load", () => {
  let previousText = document.getElementById("previous");
  let currentText = document.getElementById("current");
  // Initializing buttons
  let clear = document.getElementById("clear");
  let numbers = document.querySelectorAll(".calc-btns");
  let signs = document.querySelectorAll(".calc-btns.last");
  let add = document.getElementById("add");
  let subtract = document.getElementById("subtract");
  let divide = document.getElementById("divide");
  let product = document.getElementById("product");
  let equals = document.getElementById("equals");
  let percentage = document.getElementById("percentage");
  let negate = document.getElementById('negate');

  let nums = [];
  let numberToBeAdded = "";
  let result = "";
  let lastSign = "";

  // Modifiy content of screen on number press
  let typedNumber = "";
  numbers.forEach(number => {
    number.addEventListener("click", () => {
      if (number.id != "equals" && number.id != 'negate') {
        typedNumber += number.innerHTML;
        currentText.innerHTML = typedNumber;
      }
      // Move cursor to end of line on overflow
      currentText.scrollLeft = currentText.scrollWidth;
    });
  });

  equals.addEventListener("click", () => {
    let newNum = typedNumber;
    if (typedNumber.split("").indexOf("x") > -1) {
      let index = typedNumber.split("").indexOf("x");
      newNum = typedNumber.replace("x", "*");
    }
    let dividedBy = String.fromCharCode("0xf7");
    if (typedNumber.split("").indexOf(dividedBy) > -1) {
      let index = typedNumber.split("").indexOf(dividedBy);
      newNum = typedNumber.replace(dividedBy, "/");
    }
    let finalResult = eval(newNum);
    previousText.innerHTML = typedNumber;
    typedNumber = finalResult;
    // nums = [finalResult];
    currentText.innerHTML = finalResult;
    // numberToBeAdded = finalResult;
  });

  negate.addEventListener('click', () => {
    let text = currentText.innerHTML.toString();
    currentText.innerHTML = text.substring(0, text.length - 1);
    typedNumber = currentText.innerHTML;
  });

  // Clear screen on 'C' btn press
  clear.addEventListener("click", () => {
    previousText.innerHTML = "0";
    currentText.innerHTML = "0";
    typedNumber = "";
    nums = [];
    numberToBeAdded = "";
  });
});