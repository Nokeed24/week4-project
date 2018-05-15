const Router = require('express').Router
const Like = require('./model')

const router = new Router()

// const requireUser = (req, res, next) => {
//     if (req.user) next()
//     else res.status(401).send({
//         message: 'Please login'
//     })
// }

router.get('/likes', (req, res) => {
    Like.findAll({
        attributes: ['id', 'breed']
    })
      .then(result => {
        // do something with result

        res.send({
            likes: result
        })
      })
      .catch(err => {
        // there was an error, return some HTTP error code
        res.status(500).send({error: 'Something went wrong with Postgres'})
      })
})

router.get('/likes/:id', (req, res) => {
  const id = req.params.id
  Like.findAll({
    where: {
      id: id
    }
  })
	  .then(result => {
	  	if (!result) {
	  		res.status(404).send({error: 'Does not exist'})
	  	}
	  	else {
	  		res.send(result)
	  	}
	  })
	  .catch(err => {
	    res.status(500).send({error: 'Something went wrong with Postgres'})
	  })
})

//router.post('/likes', requireUser, (req, res) => {
router.post('/likes', (req, res) => {
  const like = req.body

  Like.create(like).then(entity => {
    res.status(201).send(entity)
  })
})


module.exports = router