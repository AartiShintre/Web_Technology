// Array
let arr = [1,2,3];

// Reverse Number
let num = 123;
console.log(Number(String(num).split("").reverse().join("")));

// Palindrome
let str = "madam";
console.log(str === str.split("").reverse().join(""));

// Fibonacci
let a=0,b=1;
for(let i=0;i<5;i++){
  console.log(a);
  [a,b] = [b,a+b];
}

// Count vowels
let s="hello";
console.log((s.match(/[aeiou]/gi)||[]).length);

// Largest
console.log(Math.max(...arr));

// Remove duplicates
console.log([...new Set(arr)]);

// Missing number
let arr2=[1,2,4,5];
for(let i=1;i<=5;i++){
  if(!arr2.includes(i)) console.log(i);
}

// Sum
console.log(arr.reduce((a,b)=>a+b,0));