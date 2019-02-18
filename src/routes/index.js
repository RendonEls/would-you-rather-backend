const express = require ('express')
const router = express.Router()

router.use('/', require('./homepage'))


module.exports = router