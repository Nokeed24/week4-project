const express = require('express')
const { Client } = require('pg')
const likesRouter = require('./likes/router')
const usersRouter = require('./users/router')
const User = require('./users/model')

const app = express()
app.use(bodyParser.json())

app.use(bodyParser.json())

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
})

const connectionString = 'postgresql://postgres:password@localhost:5432/postgres'
const client = new Client({ connectionString })

client.connect()

app.use(usersRouter)
app.use(likesRouter)
