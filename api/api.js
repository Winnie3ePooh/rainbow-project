const HTTP = require('../config/axios.cfg')
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route

router.post('/userProfile', function (req, res) {
  console.log('POST: userProfile')
  HTTP.get(`${ req.body.nickname }?platform=${  req.body.platform }`)
    .then(function (response) {
      console.log(response.data)
      res.send(response.data)
    })
    .catch(function (error) {
      console.log('Oh, no ' + error)
      res.status('500')
      res.send(error)
    })
})

module.exports = router
