const express = require ('express')
const router = express.Router()

console.log('stats route ')

router.get("/", (req, res) =>{
    res.send("hi from Stats page")
})

module.exports = router