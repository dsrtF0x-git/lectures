const multipleTen = number => number * 10;
let total = multipleTen(13);

const divideBy2 = number => number / 2;
const power2 = number => number ** 2;
const squareRoot = number => Math.sqrt(number);

const operationsList = [power2, divideBy2, squareRoot];

for (const operation of operationsList) {
  total = operation(total);
  console.log(operation.name, total);
}

const operationsObj = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}

function binaryAlgebraicOperation (operand1, operand2, operator) {
  const func = operationsObj[operator];
  return func(operand1, operand2);
}

console.log(binaryAlgebraicOperation(10, 3, "+"));

function deleteSpaces(str) {
  return str.replace(/\s/g, "");
}

function congrats(fn, name) {
  return "Hello, " + fn(name);
}

console.log(congrats(deleteSpaces, "   A  n  dr ew   "));

function multipleTenAddX(num) {
  return function(toAdd) {
    return num * 10 + toAdd;
  }
}

console.log(multipleTenAddX(3)(3));