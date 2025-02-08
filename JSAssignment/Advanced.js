// 1. Higher-Order Functions and Callbacks
// Q16: Write a function that takes an array and a callback function, then applies the callback to each element.

function applyCallback(arr, callback) {
    return arr.map(callback);
}

// Q17: Use .map() to create a new array that contains the square of each number in [2, 4, 6, 8].
let numbers = [2, 4, 6, 8];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [4, 16, 36, 64]

// Q18: Use .filter() to return only numbers greater than 10 from [5, 12, 8, 130, 44].
let num = [5, 12, 8, 130, 44];
let greaterThanTen = num.filter(num => num > 10);
console.log(greaterThanTen); 

// 2. Asynchronous JavaScript
// Q19: Write a function that returns a promise which resolves after 2 seconds.
function resolveAfterTwoSeconds() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Resolved after 2 seconds!"), 2000);
    });
}

// Q20: Fetch data from https://jsonplaceholder.typicode.com/posts using fetch() and async/await.
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchPosts();

// 3. ES6+ Features
// Q21: Use the spread operator to merge two arrays [1, 2, 3] and [4, 5, 6].
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// Q22: Write a function that uses destructuring to extract properties from an object.
function extractProperties(obj) {
    const { name, age, city } = obj;
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const person = { name: 'Alice', age: 25, city: 'London' };
extractProperties(person);

// Q23: Use template literals to print "Hello, my name is [name] and I am [age] years old."
let name = "John";
let age = 30;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// 4. Closures and Scope
// Q24: Write a function that returns another function that increments a counter.
function createCounter() {
    let count = 0;
    return function increment() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Q25: Demonstrate block scope using let and const.
if (true) {
    let blockScoped = "I am block scoped";
    const anotherBlockScoped = "I am also block scoped";
    console.log(blockScoped); // "I am block scoped"
    console.log(anotherBlockScoped); // "I am also block scoped"
}

console.log(blockScoped); // Error: blockScoped is not defined
console.log(anotherBlockScoped); // Error: anotherBlockScoped is not defined

// 5. Prototypes and Classes
// Q26: Create a constructor function Car with properties make and year.
function Car(make, year) {
    this.make = make;
    this.year = year;
}

let myCar1 = new Car("Toyota", 2020);
console.log(myCar.make); 
console.log(myCar.year); 

// Q27: Convert the above Car function into a class and add a method getAge().
class Car {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }
}

let myCar = new Car("Toyota", 2020);
console.log(myCar.getAge()); // Will print the age of the car

// Q28: Create a subclass ElectricCar that extends Car and adds a property batteryLife.
class ElectricCar extends Car {
    constructor(make, year, batteryLife) {
        super(make, year);
        this.batteryLife = batteryLife;
    }

    getBatteryLife() {
        return `Battery life is ${this.batteryLife} hours.`;
    }
}

let myElectricCar = new ElectricCar("Tesla", 2021, 24);
console.log(myElectricCar.getBatteryLife()); // "Battery life is 24 hours."

