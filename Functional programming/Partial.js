const multipleBy = (a, b) => a * b;
const multipleBy3 = multipleBy.bind(null, 3);

console.log(multipleBy3(10));