// function* generator() {};

// console.log("Generator return: ", generator());



// function* generatorsIsIterable() {
//   yield 10;
//   yield 20;
//   yield 30;
// }

// const iterableGenerator = generatorsIsIterable();

// for (const expression of iterableGenerator) {
//   console.log("Yielded value >>> ", expression);
// }




// function* generatorFromTo(from, to) {
//   while(from < to) {
//     yield from++;
//   }
// }

// const generator = generatorFromTo(3, 7);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());




// function* yieldStopTheFlow() {
//   const PI = Math.PI;
//   yield "This 'yield' stoped the flow";
//   console.log(PI);
// }

// const stopFlow = yieldStopTheFlow();
// console.log(stopFlow.next());
// console.log(stopFlow.next());




// function *returnTerminateGenerator() {
//   yield "First";
//   yield "Second";
//   return "Third";
//   yield "Fourth";
// }

// const terminationGenerator = returnTerminateGenerator();
// console.log(terminationGenerator.next());
// console.log(terminationGenerator.next());
// console.log(terminationGenerator.next());
// console.log(terminationGenerator.next());




// function* yieldIsTwoWayStreet() {
//   const dozen = 12;
//   const bakersDozen = yield dozen;
//   console.log("Bakers dozen is :", bakersDozen);
//   return "End of generator";
// }

// const dozens = yieldIsTwoWayStreet();
// console.log(dozens.next());
// console.log(dozens.next(13));



// function* getGood(id) {
//   const goods = ["apple", "carrot", "banana", "cucumber"];
//   yield goods[id];
//   yield "returned from";
//   yield "other generator";
// }

// function* priceOfGood(id) {
//   let message =  [...getGood(id)];
//   console.log("Message >>>", message);
//   yield* getGood(id);
//   return "End of generator";
// }

// const goodGenerator = priceOfGood(1);

// console.log(goodGenerator.next());
// console.log(goodGenerator.next());
// console.log(goodGenerator.next());
// console.log(goodGenerator.next());