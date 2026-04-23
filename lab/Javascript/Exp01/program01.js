//without block of scope

// let ch = "Srushti"
// ch = "Srushti Mirajkar"
// console.log(ch);

// with block of scope
// {
//     let ch = "Srushti"
//     ch = "Srushti Mirajkar"
//     console.log(ch);
    
// }

let name = "Srushti Mirajkar"
{
    let name = "Srushti"
    console.log(name);
    
}
console.log(name);


// let name = "Srushti Mirajkar"
//         let age = 20
//         document.write("name:",name,"<br>","age:",age);