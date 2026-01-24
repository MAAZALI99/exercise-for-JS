// VARIABLES/CONSTANT
// Create a VARIABLE
let myage = 15;

console.log(myage);

// Country name
const country = "pakistan";

console.log(country);

// Change variable value
let value = 10;
value = 20; 

console.log(value);

// Addition of two numbers
let addition = 50;
addition = 50 + 10;
console.log(addition);

// String Combination
let firstname = "Maaz";
let lastname = "Ali";

console.log(firstname + lastname);

// Temperature Converter

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`temperature in celsius ${celsius}`);
console.log(`temperature in fahrenheit ${fahrenheit}`);


// Try changing const
const val = 10;
// val = 20;

console.log(val);

// DATA TYPES
// Booolean Practise
let isRaining = true;
isRaining = false;
console.log(isRaining);

// Number Operation
let num = 50;
let num1 = 40;
console.log(num * num1);

// Template Literals 
let age1 = 15;
let city = "Lahore";
console.log("I am " + ["age"] + " Years old and I live in " +[city]);

// Type conversion
let string = "25";
string = "25" * 5;
console.log(string);

// Arrays
let myarray = [ "Watermelon" , "Strawberry" , "Apple" , "Orange" , "Pineapple"];
console.log(myarray);

// Access First Element

console.log(myarray[0]);

// Access Last Element

console.log(myarray[4]);

// replace an element

myarray[2] = "Kiwi"

// Add a six fruit

myarray[6] = "Banana"

// Mixed Data Array

let newarray = ["SYED MAAZ ALI" , 15 , undefined , true];
console.log(newarray);

// Access Middle Item 

console.log(newarray[1]);

// Numbers Array

let numarray = [10 , 20 , 30 , 40 , 50];
console.log(numarray[0]);
console.log(numarray[2]);

// Update Two Elements

let colarray = ["Red" , "blue" , "Grey" , "Yellow" , "Brown"];
colarray[0] = "Aqua"
colarray[3] = "Green"
console.log(colarray);

// Array of Names

let namearray = ["Maaz" , "Abu Huraira" , "Dawood"];
console.log(namearray[1]);

// Functions
// Simple Functions

function printHello() {
  console.log("Hello World");
}

// Call the function
printHello();

// Function ---------------

// 1. Function with Parameter

function greet(name) {
  console.log("Hello " + name + "!");
}

greet("Maaz");
  
// Return a Value

function double(num) {
  return num * 2;
}

let answer = double(6);
console.log(answer);

// 3. Add Two Numbers

function add(a, b) {
  return a + b;
}

console.log(add(5, 7));
console.log(add(10, 20));
 
// Check Pass or Fail

function checkResult(marks) {
  if (marks >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log(checkResult(75));
console.log(checkResult(45));

// Obejects ---------------------

// 1. Create a Student Object
let Student = {
 name: "SYED MAAZ Ali",
 age: 15,
 Grade: 9
}
// 2. Access Object Property 

console.log(Student.name);

// 3. Update Object Property 

Student.age = 16;
console.log(Student.age);

// 4. Book Object

let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  pages: 223
};

console.log(book);

// 5. Phone Object

let Phone = {
  brand: "samsung",
  color: "Grey",
  model: "s26", 
}
console.log(Phone);

// if...else Statements----------------------------------------

// 1. Simple if

let age = 16;

if (age > 18){
  console.log("adult"); 
} else {
  console.log("not an adult");
}

// 2. Even or Odd 

let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 5.Temperature Check
let temp = 25;

if (temp >= 30) {
  console.log("Hot");
} else {
  console.log("cold");
}

// 4. Grade Check

let marks = 85;

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

// 5. Positive or Negative

let numb ;

if (numb <= 0) {
  console.log("positive");
} else {
  console.log("negative");
}

// Ternary Operator ----------------

// 1. Big or Small

let numbe = 12;
let result = numbe > 10 ? "Big" : "Small";
console.log(result);

// 2. Pass / Fail

let marks1 = 45;
let status3 = marks >= 50 ? "Pass" : "Fail";
console.log(status3);

// 3. Adult / Minor

let age2 = 16;
let status2 = age >= 18 ? "Adult" : "Minor";
console.log(status2);

// 4. Even / Odd

let number1 = 7;
let check = number1 % 2 === 0 ? "Even" : "Odd";
console.log(check);

// For Loop -------------

// 1. Count to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Count Backwards

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3. Even Numbers

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 4. Loop Through Array

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// 5. Array Sum

let numbers = [2, 4, 6, 8];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// while Loop -----------------------------

// 1. Count to 5

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 2. Countdown

let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}
console.log("Done!");

// 3. User Attempts

let attempts = 3;
while (attempts > 0) {
  console.log("Try again");
  attempts--;
}

// do...while Loop ------------------------------------------------

// 1. Print Hello 3 times

let k = 1;
do {
  console.log("Hello");
  k++;
} while (k <= 3);

// 2. False condition but runs once

let x = 10;
do {
  console.log("Runs once");
} while (x < 5);

// forEach Loop ------------------------------

// 1. Colors

let colors = ["Red", "Blue", "Green", "Yellow"];
colors.forEach(color => console.log(color));

// 2. Names with Index

let names = ["Ali", "Ahmed", "Sara"];
names.forEach((name, index) => {
  console.log(index, name);
});

// 3. Sum with forEach

let nums = [1, 2, 3, 4];
let total = 0;

nums.forEach(n => total += n);
console.log(total);

// for...of Loop -----------------------------------------------

// 1. Fruits

let fruits2 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let fruit of fruits2) {
  console.log(fruit);
}

// 2. Multiply by 2

let nums2 = [2, 4, 6];

for (let n of nums2) {
  console.log(n * 2);
}
