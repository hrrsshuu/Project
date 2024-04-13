document.addEventListener('DOMContentLoaded', function () {
  const inputBox = document.getElementById('inputbox');
  const buttons = document.querySelectorAll('button');

  let currentInput = '';
  let calculation = '';

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const buttonText = button.textContent;

          // Handle numeric input
          if (!isNaN(parseInt(buttonText)) || buttonText === '.') {
              currentInput += buttonText;
              inputBox.value = currentInput;
          }

          // Handle operator input
          else if (button.classList.contains('operator')) {
              // Clear input
              if (buttonText === 'AC') {
                  currentInput = '';
                  calculation = '';
                  inputBox.value = '';
              }
              // Clear last entry
              else if (buttonText === 'C') {
                  currentInput = currentInput.slice(0, -1);
                  inputBox.value = currentInput;
              }
              // Percentage calculation
              else if (buttonText === '%') {
                  currentInput = (parseFloat(currentInput) / 100).toString();
                  inputBox.value = currentInput;
              }
              // Basic operators
              else {
                  // If there is no current input, do nothing
                  if (currentInput === '') return;
                  calculation += currentInput + buttonText;
                  currentInput = '';
                  inputBox.value = calculation;
              }
          }

          // Handle equal button
          else if (buttonText === '=') {
              if (calculation === '') return;
              calculation += currentInput;
              currentInput = eval(calculation).toString();
              calculation = '';
              inputBox.value = currentInput;
          }
      });
  });
});
