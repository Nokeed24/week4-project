const Router = require('express').Router
const Like = require('./model')

const router = new Router()

router.get('/likes', (request, response) => {
    Like.findAll().then(likes => {
    console.log(`I found these likes: ${houses}`)
  })
})


module.exports = router