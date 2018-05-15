const User = require('./model')
const Router = require('express').Router
const bcrypt = require('bcrypt')
const sign = require('../jwt').sign

const router = new Router()

router.post('/users', (req, res) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    likes: 0
  }
  console.log(user, "USER"),

  User
  .create(user)
  .then(entity => {
    res.send({
      id: entity.id,
      email: entity.email,
      likes: entity.likes
    })
  })
  .catch(err => {
    res.status(500).send({
      message: 'Something went wrong'
    })
  })
})

router.post('/login', (req, res) => {
  console.log('MESSAGE', req.body)
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(entity => {
    console.log('ENTITY', entity.id)
    if (bcrypt.compareSync(req.body.password, entity.password)) {
      console.log('PASSWORD', entity.password)
      res.send({
        jwt: sign(entity.id)
      })
    }
    else {
      res.status(400).send({
        message: 'Password was incorrect'
      })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({
      message: 'Something went wrong'
    })
  })
})

router.get('/secret', (req, res) => {
  console.log('JWTJWT', req.user)
  if (req.user) {
	   res.send({
       message: 'Welcome in the secret corner of this API'
     })
   }
   else {
     res.status(401).send({
       message: 'Please login!'
     })
   }
})



module.exports = router
