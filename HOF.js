function getSquareRoot(num) {
  return Math.sqrt(num);
}

const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81];
const roots = arr.map(getSquareRoot);
console.log(roots);