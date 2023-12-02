/** 
 * Filename: sophisticated_code.js
 * Description: A sophisticated and complex JavaScript code
 * 
 * Author: Your Name
 * Date: May 20, 2022
 */

// Define a complex class representing a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  getAgeInMonths() {
    return this.age * 12;
  }
}

// Create some instances of Person
const john = new Person("John Doe", 25, "male");
const jane = new Person("Jane Smith", 30, "female");

john.sayHello(); // Output: Hello, my name is John Doe
console.log(jane.getAgeInMonths()); // Output: 360

// Define a complex function to calculate factorial recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// Perform complex mathematical operations using arrays
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
const sum = squares.reduce((total, num) => total + num, 0);

console.log(squares); // Output: [1, 4, 9, 16, 25]
console.log(sum); // Output: 55

// Implement a complex sorting algorithm
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const unsortedArray = [5, 2, 8, 1, 9];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray); // Output: [1, 2, 5, 8, 9]

// Implement a complex data structure using a class
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }
}

const queue = new Queue();
queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("cherry");

console.log(queue.size()); // Output: 3
console.log(queue.dequeue()); // Output: "apple"
console.log(queue.size()); // Output: 2

// Implement a complex asynchronous operation using Promises
function asyncOperation(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation completed");
    }, ms);
  });
}

asyncOperation(2000)
  .then((result) => console.log(result)) // Output after 2 seconds: "Operation completed"
  .catch((error) => console.error(error));