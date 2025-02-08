// Q1: Declare a variable name and assign your name to it. Print it to the console.

let name = "Shreyansh"
console.log(name);

// Q2: Create a variable age with a number and a isStudent boolean variable. Log them to the console.
let age=22;
let isStudent=true;
console.log(age , isStudent);

// Q3: Convert a string "123" to a number and check its type.
let str="123";
let num=Number(str);
console.log(num,typeof num);

// Q4: Write a program that checks if a given number is even or odd.
function eve(num){
    if(num%2==0){
        console.log("Number is even");
        
    }else{
        console.log("Number is odd");
        
    }
}
eve(4);

// Q5: Create a program that takes two numbers and prints the larger one.
function Large(num1 , num2){
  if(num1 > num2){
    console.log(num1);
    
  }else{
    console.log(num2);
    
  }
}
Large(5,10)

// Q6: Write a program that checks if a number is positive, negative, or zero.
function number(num){
 if(num > 0 ){
    console.log("Number is Positive");
    } else if(num<0){
     console.log("Number is Negative");
     }else{
        console.log("Number is Zero");
    }
}
number(5)

// Q7: Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
//   Q8: Print all even numbers between 1 and 20 using a while loop.
let n=2
while(n<=20){
console.log(n);
n +=2;
}

// Q9: Use a do-while loop to prompt the user until they enter a number greater than 10.

let numbers;

do {
  numbers = prompt("Please enter a number greater than 10:");
  numbers = parseInt(numbers);  // Convert the input to a number
} while (isNaN(numbers) || numbers <= 10);  // Continue until a valid number greater than 10 is entered

console.log("You entered: " + numbers);

// Q10: Write a function add(a, b) that returns the sum of two numbers.
function add(a, b) {
  return a + b;
}
// Q11: Write a function factorial(n) that returns the factorial of n.
function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorial(n - 1);
}


// Q12: Create a function isPrime(n) that returns true if n is prime, else false.
function isPrime(n) {
  if (n <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}

// Q13: Create an array of five fruits and print each one using a loop.
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Q14: Write a function to find the largest number in an array.
function findLargestNumber(arr) {
  return Math.max(...arr);
}

// Q15: Create an object person with properties name, age, and city. Print each property.
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log('Name: ' + person.name);
console.log('Age: ' + person.age);
console.log('City: ' + person.city);
