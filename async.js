const axios = require("axios");

async function sum(a, b) {
  return a + b;
}

console.log(sum(10, 3));

function printSumAndOperands(a, b, cb) {
  let resultString = `${a} plus ${b} is equal: ${cb(a, b)}`;
  console.log(resultString);
}

async function printAsyncSumAndOperands(a, b, cb) {
  let resultString = `${a} plus ${b} is equal: ${await cb(a, b)}`;
  console.log(resultString);
}

printSumAndOperands(30, 3, sum);
printAsyncSumAndOperands(30, 36, sum);

class User {
  async getUser(id) {
    try {
      const headers = await axios.get("https://jsonplaceholder.typicode.com/users");
      const user = await headers.data[id];
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
}

new User().getUser(6);