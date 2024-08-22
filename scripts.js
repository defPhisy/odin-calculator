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

console.log("Add: " + (add(3, 6) === 9));
console.log("Subtract: " + (subtract(3, 6) === -3));
console.log("Multiply: " + (multiply(3, 6) === 18));
console.log("Divide: " + (divide(3, 6) === 0.5));
