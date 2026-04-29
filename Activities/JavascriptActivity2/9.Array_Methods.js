let arr = [1,2,3,4,5];

// split
let str = "a,b,c";
console.log(str.split(","));

// splice
arr.splice(2,1); // remove
console.log(arr);

// slice
console.log(arr.slice(1,3));

// toSpliced (immutable)
let newArr = arr.toSpliced(1,1);
console.log(newArr);