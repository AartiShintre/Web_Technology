//if statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}
//if-else statement
let Age = 16;

if (Age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
//if-else if-else statement
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
//ternary operator
let AGE = 20;

let result = (AGE >= 18) ? "Adult" : "Minor";
console.log(result);