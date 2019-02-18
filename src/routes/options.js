const express = require ('express')
const router = express.Router()

console.log('homepage routes ')

router.get("/", (req, res) =>{
    res.send("Hello from Options")
})

module.exports = router