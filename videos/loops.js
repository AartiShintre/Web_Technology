//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
//for of loop
let arr = [1, 2, 3, 4, 5];
for (let num of arr) {
    console.log(num);
}
//for in loop
let person = {
    name: "Srushti",
    age: 20,
    city: "Sangli"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}