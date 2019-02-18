const express = require ('express')
const router = express.Router()
const {Question} = require('../models/Question')

console.log('play page ')

router.get("/", (req, res) =>{
    Question.find().then(show => res.json(show))
    // res.send("Hello from play page")
})
router.post("/", (req, res) =>{
    res.send("POST ON PLAY page")
})


module.exports = router