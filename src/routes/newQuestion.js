const express = require ('express')
const router = express.Router()
const {Question} = require('../models/Question')

console.log('create question route ')

router.get("/", (req, res) =>{
    console.log("this is getting")
    res.send(console.log('hello from new question'))
})
router.post("/", (req, res) =>{
    Question.create({
        question1: req.body.question1,
        question2: req.body.question2,
        count1: 0,
        count2: 0
    })
    .then(() => {
        res.sendStatus(200)})
})


module.exports = router
