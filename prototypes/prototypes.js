"use strict";

// const vehicle = {
//   capacity: 2,
//   deliverFromAtoB() {
//     return "Delivering...";
//   },
//   canSwim: false,
//   canFly: false,
//   speedKmPerHour: 60,
//   fuel: "diesel",
// };

// const boat = {
//   capacity: 6,
//   canSwim: true,
// };

// const train = {
//   capacity: 500,
//   __proto__: vehicle,
// };

// const bus = Object.create(vehicle);

// Object.setPrototypeOf(boat, vehicle);

// console.log(`Bus >>>`, bus);
// console.log(`Boat >>>`, boat);
// console.log(`Train >>>`, train);

// console.log(
//   Object.getPrototypeOf(bus) === Object.getPrototypeOf(train)
//   );

// console.log(`Train >>> ${train.deliverFromAtoB()}`);
// console.log(`Boat >>> ${boat.deliverFromAtoB()}`);

// for (const property in train) {
//   console.log(`Property >>> ${property}`)
// };

// console.log("Object entries >>>", Object.entries(train));

// const error1 = {
//   name: "Error1",
//   __proto__: "",
// }

// const error2 = {
//   name: "Error2",
//   __proto__: 13,
// }

// console.log(error1, error2);

// const dictionary = Object.create(null);

// console.log(dictionary); 



// function Vehicle(name) {
//   this.name = name;
// };

// Vehicle.prototype.deliverFromTo = function() {
//   return "Delivering something...";
// };

// const boat = new Vehicle("boat");

// console.log(boat.deliverFromTo());

// Vehicle.prototype = null;

// const train = new Vehicle("train");

// console.log(train.deliverFromTo());


class Vehicle {
  constructor(name) {
    this.name = name;
  }

  deliverFromAtoB() {
    return "Delivering from A to B!";
  }

  terminateDeliver() {
    return "Delivering terminated."
  }
}

class Boat extends Vehicle {
  constructor(name, canSwim = true) {
    super(name);
    this.canSwim = canSwim;
  }

  dive() {
    return "Diving...";
  }
}

const boat = new Boat("Olympic");

console.log(Object.getPrototypeOf(boat));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(boat)));