let arr = [10, 20, 30, 20, 40, 50];

// 1. for loop
console.log("\nUsing for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}



// 2. while loop
console.log("\nUsing while loop:");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}



// 3. do-while loop
console.log("\nUsing do-while loop:");
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);



// 4. for-of loop
console.log("\nUsing for-of loop:");
for (let value of arr) {
  console.log(value);
}



// 5. forEach loop
console.log("\nUsing forEach loop:");
arr.forEach(function(value) {
  console.log(value);
});

// Arrow function to print array
const printArray = () => {
  console.log("Array:", arr);
};

printArray();


// push - add at end
arr.push(60);
printArray();


// pop - remove last element
arr.pop();
printArray();


// unshift - add at beginning
arr.unshift(5);
printArray();


// shift - remove first element
arr.shift();
printArray();


// indexOf - first occurrence
console.log("Index of 20:", arr.indexOf(20));


// lastIndexOf - last occurrence
console.log("Last index of 20:", arr.lastIndexOf(20));


// map - multiply each element by 2
let mapped = arr.map(function(num) {
  return num * 2;
});
console.log("Mapped (x2):", mapped);


// filter - numbers greater than 25
let filtered = arr.filter(function(num) {
  return num > 25;
});
console.log("Filtered (>25):", filtered);


// sort - ascending order
let sorted = arr.sort(function(a, b) {
  return a - b;
});
console.log("Sorted:", sorted);