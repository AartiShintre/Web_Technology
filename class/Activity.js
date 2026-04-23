//pritn "Hello, World!" to the console
console.log("Hello, World!");
//declare variables of different data types and print them to the console
let name = "Srushti";
let age = 20;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

//define a function that adds two numbers and returns the result
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8

//use conditional statements
let marks = 75;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//use a loop to print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
//string to number conversion
let str = "123";

let num1 = Number(str);
let num2 = parseInt(str);
let num3 = parseFloat("12.5");

console.log(num1); // 123
console.log(num2); // 123
console.log(num3); // 12.5
//number to string conversion
let num = 456;
let str1 = String(num);
let str2 = num.toString();

console.log(str1); // "456"
console.log(str2); // "456"
//boolean conversion
Boolean(1);       // true
Boolean(0);       // false
Boolean("");      // false
Boolean("Hello"); // true
//array to string conversion
let arr = ["a", "b", "c"];

let str3 = arr.toString();
let joined = arr.join("-");

console.log(str3);     // "a,b,c"
console.log(joined);  // "a-b-c"
//string to array conversionlet str = "apple,banana,orange";

let arr1 = str.split(",");

console.log(arr1);
//object to json conversion
let student = {
  name: "Srushti",
  age: 20
};

let jsonStr = JSON.stringify(student);
console.log(jsonStr);
//jsonlet json = '{"name":"Srushti","age":20}';

let obj = JSON.parse(json);
console.log(obj.name);
//date to string conversion
let date = new Date();

console.log(date.toString());
console.log(date.toISOString());
//string to date conversion
let dateStr = "2026-01-23";

let date2 = new Date(dateStr);
console.log(date2);
//type checking
console.log(typeof "123"); // string
console.log(typeof 123);   // number
console.log(typeof true);  // boolean
//string interpolation  
let name1 = "Srushti";
let age1 = 20;

let message = `My name is ${name1} and I am ${age1} years old.`;

console.log(message);
//expression inside string 
let a = 5;
let b = 3;

console.log(`Sum of a and b is ${a + b}`);

//function inside interpolation
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Srushti"));

//object value in string
let student1 = {
  name: "Srushti",
  branch: "CS"
};

console.log(`Student ${student1.name} is from ${student1.branch} branch`);
// Equality vs Strict Equality
console.log(5 == "5");      // true  (value only)
console.log(5 === "5");     // false (value + type)

console.log(0 == false);    // true
console.log(0 === false);   // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false

// Not Equal
console.log(5 != "5");     // false
console.log(5 !== "5");    // true

// Relational Operators
console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(5 <= 3);       // false

// String Comparison
console.log("A" < "B");          // true
console.log("apple" > "bat");    // false

// Boolean Comparison
console.log(true > false);  // true (true = 1, false = 0)

// Number & String Comparison
console.log("10" > 5);      // true
console.log("2" > "10");    // true (lexicographical)

// Undefined Comparisons
console.log(undefined == 0);   // false
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false

// NaN Comparisons (IMPORTANT)
console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false
console.log(isNaN(NaN));    // true


