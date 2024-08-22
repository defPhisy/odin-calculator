function add(a, b) {
  console.log("add");
  return a + b;
}

function subtract(a, b) {
  console.log("subtract");
  return a - b;
}

function multiply(a, b) {
  console.log("multiply");
  return a * b;
}

function divide(a, b) {
  console.log("divide");
  return a / b;
}

// TODO: insert correct input DOM for variables
const num1 = 3;
const num2 = 6;
const operator = "+";

let result = "";

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break;

    case "*":
      result = multiply(num1, num2);
      break;

    case "/":
      result = divide(num1, num2);
      break;

    default:
      console.log("Invalid operator. Use only + - * /");
      break;
  }
}

operate(num1, num2, "+");
console.log(result);


// console.log("Add: " + (add(3, 6) === 9));
// console.log("Subtract: " + (subtract(3, 6) === -3));
// console.log("Multiply: " + (multiply(3, 6) === 18));
// console.log("Divide: " + (divide(3, 6) === 0.5));
