// Complete Array Methods Program

let arr = [10, 20, 30, 40, 50];
let arr2 = [60, 70, 80];

console.log(" Array:", arr);
console.log("Length:", arr.length);

arr.push(60);
console.log("by pushing:", arr);


arr.pop();
console.log("by popping:", arr);

arr.unshift(5);
console.log("After unshift:", arr);

arr.shift();
console.log("After shift:", arr);

let concat = arr.concat(arr2);
console.log("Concat:", concat);

// FOR LOOP
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// FOR...OF LOOP
for (let value of arr) {
    console.log(value);
}

// FOR...IN LOOP
for (let index in arr) {
    console.log(arr[index]);
}

// forEach LOOP
arr.forEach(function(value) {
    console.log(value);
});