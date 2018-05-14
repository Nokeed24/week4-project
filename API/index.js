const express = require('express')
const app = express()
const { Client } = require('pg')

const connectionString = 'postgresql://postgres:password@localhost:5432/postgres'
const client = new Client({ connectionString })

client.connect()
app.listen(4001, () => console.log('Express API listening on port 4001'))

app.get('/likes/:id', (request, response) => {
    const id = request.params.id
  
    client.query('SELECT * FROM likes WHERE id = $1', [id], (error, result) => {
      if (error) {
        // HTTP 500 = Internal Server Error
        response.status(500).send({
          message: 'Something went wrong with Postgres!',
          details: error.message
        })
      } else {
        response.send(result.rows[0])
      }
    })
  })