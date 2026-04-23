//object literals and object singleton
//object-key value pair
let user ={
    name:"srushti",
    age:"20",
    email:"srushtiii@gmail.com",
    city:"Sangli",
    loginDate:20-4-2026,
    lastlogin:['M','t','w','t','f','s'],
    "fullname":"srushti Mirajkar"//this is wrong way but you declare like this
}
console.log(user)
console.log(user.email)
console.log(user.lastlogin)
console.log(user.fullname)//this is the method to print 
console.log(user.email)
//Object.freeze(user)
user.email="abcd @gmail.com"
console.log(user.email)
//
const mysum=Symbol("js")
const myobj={
    [mysum]:"js with srushti"
}
console.log(typeof(myobj))
console.log(myobj)
//create one symbol add in obeject as key and print <--question for above
user.greeting=function(
    console.log(Hello.js)
)
console.log(user.greeting());
user.greeting02=function(
    console.log("email")
)