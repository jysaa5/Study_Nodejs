const express = require('express')
const logger = require('morgan')
const app = express()
// users 객체
const users =[{name:'Alice'}]
// route
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res)=> res.json(users))
//app.listen(3000, () => console.log('running'))

// module로 만들어 준다.
module.exports = app