const express = require('express')
const app = express()
var cors = require('cors')

 
app.use(cors())

app.get('/', function (req , res) {
  res.send('Hello World')
})
app.get('/students', function (req , res) {
    let students=[{id:20,name:'ghadi'},{id:12,name:'emile'}];
    res.send(students)
  })
app.listen(3000)