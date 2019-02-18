const express = require ('express')
const router = express.Router()

router.use('/play', require('./play'))

router.use('/', require('./homepage'))


module.exports = router