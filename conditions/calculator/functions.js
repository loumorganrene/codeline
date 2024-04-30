import { prompt } from "./helper.js";

function promptOperator() {
  const operator = Number(prompt(`
  Choose an operator:
  1. Addition
  2. Soustraction
  3. Multiplication
  4. Division

  Enter the operator
  `));

  if(operator < 1 || operator > 4 || Number.isNaN(operator)) {
    console.log("Error: operator is invalid. Please retry.");
    return promptOperator()
  }
}

function promptNumber(message) {
  const number = Number(prompt(message));
  validateNumber(number);
  return number;
}

const MAX_VALUE = 100000000000000;
function validateNumber(number) {
  if (Number.isNaN(number) || Math.abs(number) > MAX_VALUE) {
    console.log(`Error: number is invalid or is superior to ${MAX_VALUE}`);
    process.exit(1);
  }
}

function calculateResult(operator, firstNumber, secondNumber) {
  if (operator === 4) {
    if (secondNumber === 0) {
      console.log("Error: can't divide by 0")
      return secondNumber = promptNumber("Enter the second number: ");
    }
    console.log("The result of division is: ", firstNumber / secondNumber);
  }
  if (operator === 1) {
    return console.log("The result of addition is: ", firstNumber + secondNumber);
  }
  if (operator === 2) {
    return console.log("The result of soustraction is: ", firstNumber - secondNumber);
  }
  if (operator === 3) {
    return console.log("The result of multiplication is: ", firstNumber * secondNumber);
  }
}

function calculator() {
  console.log("ADDITION-MASTER ™️");
  let operator = promptOperator()
  let firstNumber = promptNumber("Enter the first number: ");
  let secondNumber = promptNumber("Enter the second number: ");
  let result = calculateResult(operator, firstNumber, secondNumber);
}

calculator()
