const Router = require('express').Router
const Like = require('./model')

const router = new Router()

// const requireUser = (req, res, next) => {
// 	if (req.user) next()
// 	else res.status(401).send({
// 		message: 'Please login'
// 	})
// }

router.get('/likes', (req, res) => {
	Like.findAll()
	  .then(result => {
	    // do something with result
	    res.send({
	    	products: result
	    })
	  })
	  .catch(err => {
	    // there was an error, return some HTTP error code
	    res.status(500).send({error: 'Something went wrong with Postgres'})
	  })
})


module.exports = router