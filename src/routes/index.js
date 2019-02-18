const express = require ('express')
const router = express.Router()


router.use('/play', require('./play'))
router.use('/create', require('./createQuestion'))

router.use('/options', require('./options'))
router.use('/stats', require('./stats'))
router.use('/edit', require('./editQuestion'))


router.use('/about', require('./about'))

router.use('/', require('./homepage'))


module.exports = router