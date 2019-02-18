const express = require ('express')
const router = express.Router()
const {Question} = require('../models/Question')

console.log('edit question routes ')

router.get("/", (req, res) =>{
    Question.find().then(show => res.json(show))
    // res.send("This is a edit question page")
})
router.put("/", (req, res) =>{
    res.send("This is PUT question route")
})
router.delete("/", (req, res) =>{
    res.send("This is a Delete question route")
})



module.exports = router