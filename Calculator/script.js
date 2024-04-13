const display = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');
const buttonsArray = Array.from(buttons);
// const operatorButtons = document.querySelectorAll('[data-operator]');
// const clearButton = document.querySelector('[data-clear]');
// const equalsButton = document.querySelector('[data-equals]');

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

buttonsArray.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;

    if (buttonText === 'AC') {
      clearCalculator();
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      handleOperator(buttonText);
    } else if (buttonText === '=') {
      calculateResult();
    } else {
      appendNumber(buttonText);
    }

    console.log(e.target.innerHTML);
  });
});

function appendNumber(number) {
  if (currentOperator === null) {
    firstOperand = firstOperand!== null? parseFloat(`${firstOperand}${number}`) : number;
    display.value = firstOperand;
  } else {
    secondOperand = secondOperand!== null? parseFloat(`${secondOperand}${number}`) : number;
    display.value = secondOperand;
  }
}

function handleOperator(operator) {
  if (firstOperand!== null && secondOperand!== null) {
    calculateResult();
  }

  currentOperator = operator;
}

function calculateResult() {
  if (firstOperand!== null && secondOperand!== null && currentOperator!== null) {
    let result;

    switch (currentOperator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          alert('Cannot divide by zero');
          return;
        }
        result = firstOperand / secondOperand;
        break;
    }

    display.value = result;
    firstOperand = result;
    secondOperand = null;
    currentOperator = null;
  }
}

function clearCalculator() {
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  display.value = '';
}