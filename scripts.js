function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  const n1 = +numberStack[0]; // +equation.split(/[\+\-\*\/]/)[0];
  const op = operator; // equation.replace(/[0-9]/g, "");
  const n2 = +numberStack[1]; // +equation.split(/[\+\-\*\/]/)[1];

  switch (op) {
    case "+":
      solution = add(n1, n2);
      break;

    case "-":
      solution = subtract(n1, n2);
      break;

    case "×":
      solution = multiply(n1, n2);
      break;

    case "÷":
      if (n2 == 0) {
        solution = "ERROR";
        equation = "zero division"
      } else {
        solution = divide(n1, n2);
        break;
      }

    default:
      console.log("Invalid operator. Use only + - * /");
      break;
  }
}

function numInput(e) {
  if (numberBuffer.toString().length >= 7) {
    return;
  } else {
    numberBuffer += e.target.textContent;
    printToDisplay("main", numberBuffer);
  }
}

function dotInput(e) {
  if (numberBuffer.includes(".")) {
    return;
  }
  numberBuffer += e.target.textContent;
}

function opInput(e) {
  evalInput();
  operator = e.target.textContent;
  printToDisplay("main", operator);
}

function evalInput() {
  if (numberBuffer) {
    moveToNumberStack(numberBuffer);
    numberBuffer = "";

    if (numberStack.length > 1) {
      equation = `${numberStack[0]} ${operator} ${numberStack[1]}`;
      operate();
      numberStack = [];
      moveToNumberStack(solution);
      if (solution === "error") {
        resetInput();
      }
      if (solution.toString().length >= 7) {
        solution = solution.toExponential(2);
      }
      printToDisplay("main", solution);
      printToDisplay("top", equation);
    }
  }
}

function moveToNumberStack(number) {
  numberStack.push(number);
}

function printToDisplay(position, content) {
  const main = displayResult;
  const top = displayHeader;
  switch (position) {
    case "main":
      main.textContent = content;
      break;

    case "top":
      top.textContent = content;
      break;

    default:
      break;
  }
}

function resetInput() {
  displayHeader.textContent = "";
  displayResult.textContent = "";
  numberStack = [];
  numberBuffer = "";
  equation = "";
}

function del() {
  if (numberBuffer) {
    let newNumArray = numberBuffer.split("");
    newNumArray.pop();
    newNum = newNumArray.join("");
    numberBuffer = newNum;
    printToDisplay("main", numberBuffer);
  }
}

let equation = "";
let numberBuffer = "";
let numberStack = [];
let operator = "";
let solution = "";

const displayHeader = document.querySelector(".display-header");
const displayResult = document.querySelector(".display-result");

const numButtons = document.querySelectorAll("button.num");
numButtons.forEach((button) => button.addEventListener("click", numInput));

const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", dotInput);

const opButtons = document.querySelectorAll("button.operator");
opButtons.forEach((button) => button.addEventListener("click", opInput));

const evalButton = document.querySelector("#eval");
evalButton.addEventListener("click", evalInput);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetInput);

const deleteButton = document.querySelector("#del");
deleteButton.addEventListener("click", del);
