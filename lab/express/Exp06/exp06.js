const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('welcome to about page')
})

app.get('/contact', (req, res) => {
  res.send('all contacts')
})
app.get('/host', (req, res) => {
  res.send('Hello host')

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  //routing means deciding what response to send with diffrent URLs
  //  middleware is a function that  return before sending response 
   // Call the next middleware or route handler.....pass contol to the next function 
         //if we dont call next() the request will be stuck and never reach the route handler 
app.use((req, res, next) => {
  console.log('Request received at:', new Date());
  next();
})        