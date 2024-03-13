let expression = '';

function appendToDisplay(value) {
  const display = document.getElementById('result');
  expression += value;
  display.value = expression;
}

function operation(operator) {
  if (expression !== '' && !isNaN(expression[expression.length - 1])) {
    appendToDisplay(operator);
  } else {
    alert('Only numbers are allowed');
  }
}

function calculate() {
  if (expression !== '' && !isNaN(expression[expression.length - 1])) {
    const display = document.getElementById('result');
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } else {
    alert('Only numbers are allowed');
  }
}

function clearDisplay() {
  const display = document.getElementById('result');
  display.value = '';
  expression = '';
}

function backspace() {
  const display = document.getElementById('result');
  expression = expression.slice(0, -1);
  display.value = expression;
}
