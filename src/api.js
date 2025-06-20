const express = require('express')
const serveless = require('serverless-http')

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.send('app is running..')
})

app.use('/api', router)

module.exports.handler = serveless(app)
