const Users = require('./model')
const Router = require('express').Router

const router = new Router()

router.post('/users', (req, res) => {
  const user = req.body

  Users
  .create(user)
  .then(entity => {
    res.send(entity)
  })
  .catch(err => {
    res.status(500).send({
      message: 'Something went wrong'
    })
  })
})

module.exports = router
