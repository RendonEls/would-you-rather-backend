const express = require ('express')
const router = express.Router()

console.log('about routes ')

router.get("/", (req, res) =>{
    res.send("this is the about page broooo")
})

module.exports = router