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

router.get('/users', (req, res) => {
	User.findAll({
	  attributes: ['id', 'email', 'likes']
	})
	  .then(result => {
	    // do something with result
	    res.send({
	    	users: result
	    })
	  })
	  .catch(err => {
	    // there was an error, return some HTTP error code
	    res.status(500).send({error: 'Something went wrong with Postgres'})
	  })
})

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(entity => {
    if (bcrypt.compareSync(req.body.password, entity.password)) {
      res.send({
        jwt: sign(entity.id),
        id: entity.id,
        isAdmin: entity.isadmin,
        likes: entity.likes
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

router.put('/users/:id', (req, res) => {
  const userId = Number(req.params.id)
  const updates = req.body
  User.findById(req.params.id)
    .then(entity => {
      entity.update(updates)
    })
    .then(final => {
      res.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })

})

module.exports = router
