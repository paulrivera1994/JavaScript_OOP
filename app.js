console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pet, residence, hobbies) {
    this.name = name;
    this.pets = pet;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobby) {
    return this.hobbies.push(hobby);
  }
  removeHobby(hobby) {
    let myIndex = this.hobbies.indexOf(hobby);
    return this.hobbies.splice(myIndex, 1);
  }
  greeting() {
    console.log("Hello fellow person!");
  }
}
const testPerson = new Person("Tyson", 12, "Australia", [
  "Cat sitting",
  "feeding cats",
  "feeding cats",
  "petting cats",
  "drink coffee",
]);
console.log(testPerson);
testPerson.removeHobby("feeding cats");
// Exercise 2
class Coder extends Person {
  constructor(name, pet, residence, hobbies) {
    super(name, pet, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log("Hello my fellow Coder!");
  }
}

//Exercise 3
const newPerson = new Person("Paul", 1, "El Paso", ["Coding", "Gym", "Sports"]);
const newCoder = new Coder("Paul", 1, "El Paso", ["Coding", "Gym", "Sports"]);
console.log(newPerson);
console.log(newCoder);
newCoder.addHobby("Walking pets");
newPerson.removeHobby("Sports");
newPerson.greeting();
newCoder.greeting();

// Exercise 4
class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a, b) {
    this.result = a + b;
    return this.result;
  }
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b) {
    this.result = a / b;
    return this.result;
  }
}
const myCalculator = new Calculator();
console.log(myCalculator.add(20, 54));
console.log(myCalculator.multiply(678, 89));
