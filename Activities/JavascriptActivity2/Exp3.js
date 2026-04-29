// Arrow function
const add = (a,b)=>a+b;
console.log(add(2,3));

// Switch
let day=1;
switch(day){
  case 1: console.log("Mon"); break;
}

// Truthy/Falsy
console.log(Boolean(0)); // false

// Ternary
let age=18;
console.log(age>=18?"Adult":"Minor");

// Loops
for(let i=0;i<3;i++) console.log(i);

// Map & Filter
let nums=[1,2,3,4];
console.log(nums.map(x=>x*2));
console.log(nums.filter(x=>x%2==0));