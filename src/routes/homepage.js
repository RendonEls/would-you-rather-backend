const express = require ('express')
const router = express.Router()

console.log('homepage routes ')

router.get("/", (req, res) =>{
    res.send("")
})

module.exports = router