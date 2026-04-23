const express = require('express')//import statement for express module
const app = express()
const port = 3000

app.get('/', (req, res) => {// ("/")route 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//package.json and package-lock.json difference
//dev dependency and dependency difference
//http requests

