let str = "Hello World";
console.log(str);

console.log(str.length); 

console.log(str.toUpperCase());
console.log(str.toLowerCase()); 

console.log(str.charAt(4)); 

console.log(str.indexOf("o"));   
console.log(str.lastIndexOf("o")); 

console.log(str.slice(0, 4)); 

console.log(str.replace("World", "JavaScript")); 

console.log(str.startsWith("Hello")); 
console.log(str.endsWith("World")); 

let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(str2)); 

//string interpolation
let name = "Srushti";
let age = 20;

let message = `My name is ${name} and I am ${age} years old`;

console.log(message);