import { prompt } from "./helper.js";

//Refacto de la calculatrice en functions

console.log("ADDITION-MASTER ™️");

let operator = Number(await prompt(`
Choose an operator:
1. Addition
2. Soustraction
3. Multiplication
4. Division

Enter the operator:
`));

while (operator < 1 || operator > 4 || Number.isNaN(operator)) {
  console.log("Error: operator is invalid. Please retry.");
  operator = Number(await prompt(`
  Choose an operator:
  1. Addition
  2. Soustraction
  3. Multiplication
  4. Division

  Enter the operator
  `));
};
const MAX_VALUE = 100000000000000;

let firstNumber = Number(await prompt("Enter the first number: "));

if (Number.isNaN(firstNumber) || Math.abs(firstNumber) > MAX_VALUE ) {
  console.log(`Error: firstNumber is not a number or is superior to ${MAX_VALUE}`);
  firstNumber = Number(await prompt("Enter the first number: "));
}

let secondNumber = Number(await prompt("Enter the second number: "));

if (Number.isNaN(secondNumber) || Math.abs(secondNumber) > MAX_VALUE) {
  console.log(`Error: secondNumber is not a number or is superior to ${MAX_VALUE}`);
  secondNumber = Number(await prompt("Enter the second number: "));
}

switch (operator) {
  case 1:
    console.log("The result of addition is: ", firstNumber + secondNumber);
    break;
  case 2:
    console.log("The result of soustraction is: ", firstNumber - secondNumber);
    break;
  case 3:
    console.log("The result of multiplication is: ", firstNumber * secondNumber);
    break;
  case 4:
    while (secondNumber === 0) {
      console.log("Error: can't divide by 0")
      secondNumber = Number(await prompt("Enter the second number: "));
    }
    console.log("The result of division is: ", firstNumber / secondNumber);
    break;
  default:
    break;
}

