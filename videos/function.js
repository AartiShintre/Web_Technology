
function showMessage() {
    console.log("Welcome to JavaScript");
}
showMessage();



function printName(name) {
    console.log("Hello " + name);
}
printName("Srushti");



function Square(num) {
    return num * num;
}
let result = Square(6);
console.log(result);


// Arrow function
let add = (a, b) => a + b;
console.log(add(5, 7));