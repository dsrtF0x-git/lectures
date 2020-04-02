const ten = 10;
const array = [1, 2, 3, 4, 5, 6];

function getRandomFromInterval(from, to) {
  return Math.trunc(Math.random() * (to - from) + from);
}

console.log(getRandomFromInterval(1, 100));
console.log(getRandomFromInterval(1, 100));
console.log(getRandomFromInterval(1, 100));

function withSideCause(num) {
  return num * ten;
}

console.log(withSideCause(202));

function withSideEffect(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

withSideEffect(array);
console.log(array)