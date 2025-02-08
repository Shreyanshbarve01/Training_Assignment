// Q1: Declare a variable userName of type string and assign it a value.
let userName: string = "John Doe";

// Q2: Create a variable age of type number and a variable isStudent of type boolean.
let age1: number = 25;
let isStudent1: boolean = true;

// Q3: Write a function add(a: number, b: number): number that returns the sum of two numbers.
function add1(a: number, b: number): number {
    return a + b;
}

// 2. Arrays and Tuples
// Q4: Create an array numbers that can only contain numbers and add three values.
let numbers1: number[] = [1, 2, 3];

// Q5: Define a tuple [string, number] representing a person's name and age.
let person1: [string, number] = ["John", 30];

// Q6: Write a function that takes a tuple [string, number] and logs a message like: "John is 30 years old."
function printPersonInfo(person: [string, number]): void {
    const [name, age] = person;
    console.log(`${name} is ${age} years old.`);
}

let person2: [string, number] = ["John", 30];
printPersonInfo(person2);

// 3. Enums and Interfaces
// Q7: Define an enum called Role with values "Admin", "User", and "Guest".
enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

// Q8: Create an interface Person with properties name: string, age: number, and city?: string.
interface Person {
    name: string;
    age: number;
    city?: string;
}

// Q9: Implement a function printPerson(person: Person) that logs the person's details.
function printPerson(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city ? person.city : 'Not provided'}`);
}

const person3: Person = { name: "John", age: 30 };
printPerson(person3); // Corrected from `printPerson(person)` to `printPerson(person3)`

// 4. Functions and Generics
// Q10: Write a generic function reverseArray<T>(arr: T[]): T[] that returns the reversed array.
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

let reversedNumbers = reverseArray([1, 2, 3]);
console.log(reversedNumbers); // [3, 2, 1]

// Q11: Create a function getFirstElement<T>(arr: T[]): T that returns the first element of an array.
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let firstElement = getFirstElement([10, 20, 30]);
console.log(firstElement); // 10

// Q12: Write an arrow function that takes a string and returns its length.
const getLength = (str: string): number => str.length;

console.log(getLength("Hello")); // 5

// 5. Classes and Object-Oriented Programming
// Q13: Create a class Car with properties brand and year. Add a method getCarInfo().
class Car1 {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    getCarInfo(): string {
        return `This car is a ${this.year} ${this.brand}.`;
    }
}

let myCar1 = new Car1("Toyota", 2020);
console.log(myCar1.getCarInfo()); // "This car is a 2020 Toyota."

// Q14: Extend Car with a class ElectricCar that has an extra property batteryLife.
class ElectricCar extends Car1 {
    batteryLife: number;

    constructor(brand: string, year: number, batteryLife: number) {
        super(brand, year);
        this.batteryLife = batteryLife;
    }

    getElectricCarInfo(): string {
        return `${this.getCarInfo()} It has a battery life of ${this.batteryLife} hours.`;
    }
}

let myElectricCar = new ElectricCar("Tesla", 2021, 24);
console.log(myElectricCar.getElectricCarInfo()); 
// "This car is a 2021 Tesla. It has a battery life of 24 hours."

// Q15: Create a private property engineNumber inside Car and add a method to retrieve it.
class Car2 {
    brand: string;
    year: number;
    private engineNumber: string;

    constructor(brand: string, year: number, engineNumber: string) {
        this.brand = brand;
        this.year = year;
        this.engineNumber = engineNumber;
    }

    getEngineNumber(): string {
        return this.engineNumber;
    }
}

let myCar2 = new Car2("Toyota", 2020, "12345XYZ");
console.log(myCar2.getEngineNumber()); // "12345XYZ"
