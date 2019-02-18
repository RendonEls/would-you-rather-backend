const express = require ('express')
const router = express.Router()
const {Question} = require('../models/Question')

console.log('stats route ')

router.get("/", (req, res) =>{
    Question.find().then(show => res.json(show))
    // res.send("hi from Stats page")
})

module.exports = router