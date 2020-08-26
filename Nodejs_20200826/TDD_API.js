const express = require('express')
const logger = require('morgan')
const app = express()
// users 객체
const users =[
    {id: 1, name:'Alice'}, 
    {id: 2, name:'Bak'}, 
    {id: 3, name:'Chris'}
]
// route
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res)=> res.json(users))

module.exports = app