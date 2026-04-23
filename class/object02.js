//object singleton
const user = new Object()//singleton object
console.log(user)
const user2 = new Object()//non sinleton object
user2.city="Sangli",
user2.name="Srushti",
user2.age=20,
console.log(user2)
//nested object
const regular_user={
    email:"Srushti@gmail.com",
    user:{
        fullname:{
            fname:"Srushti",
            lastname:"Mirajkar"
        }

    }

}
console.log(regular_user.user.fname)