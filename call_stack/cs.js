// const axios = require("axios");


// const obj = {
//   name: "John Doe",
//   sayHi() {
//     debugger;
//     console.log(this.name);
//   }
// }

// obj.sayHi();

// function countSmth() {
//   let counter = 0;
//   function incCounter() {
//     debugger;
//     return counter++;
//   }
//   return incCounter;
// }

// countSmth()();

// function add5(n) {
//   for (let i = 0; i < 10; i++) {
//     if (i === 7) {
//       n = add10(n);
//     }
//   }
//   return n + 5;
// }

// function add10(n) {
//   debugger;
//   return n + 10;
// }

// add5(10);



// function getFactorial(n) {
  // if (n === 1) {
  //   debugger; 
  // }
//   return n <= 1 ? 1 : n * getFactorial(n - 1);
// }

// console.log(getFactorial(5));
// console.log(getFactorial(25));
// console.log(getFactorial(11440));


// function isObject(obj) {
//   return typeof obj === "object" && obj !== null && !Array.isArray(obj);
// }

// function getDetailWeatherReport(reportObj) {
//   for (const key in reportObj) {
//     if (isObject(reportObj[key])) {
//       getDetailWeatherReport(reportObj[key]);
//     } else if (Array.isArray(reportObj[key])) {
//       reportObj[key].forEach(item => getDetailWeatherReport(item));
//     } else {
//       console.log(`Key: ${key} --- Value: ${reportObj[key]}`);
//     }
//   }
// }


// async function getWeather() {
//   const weather = await axios.get(`https://api.darksky.net/forecast/d6423f7bbdfbcf0d85cef39f0d7ba5bf/37.8267,-122.4233?units=si&exclude=minutely,flags,alerts,daily`);
//   getDetailWeatherReport(weather.data);
// }

// getWeather();