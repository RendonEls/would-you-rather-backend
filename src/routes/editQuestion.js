const express = require ('express')
const router = express.Router()
const {Question} = require('../models/Question')

console.log('edit question routes ')

router.get("/", (req, res) =>{
    Question.find().then(show => res.json(show))
    // res.send("This is a edit question page")
})

router.put("/", (req, res) =>{
    // res.send("This is PUT question route")
    console.log("PUT request sent")
    // console.log(req.body._id)
    // console.log(req.body.question1)
    console.log(req.body.data)
    console.log(`Q1: ${req.body.data.question1} and Q2: ${req.body.data.question2}`)
    // console.log(req.body.data.id)

    Question.findOneAndUpdate({ id: req.body.data._id }, {

        // data: req.body.data.question1,
        // data: req.body.question2,
        // question2: req.body.data.question2,
        question1: req.body.data.question1,
        question2: req.body.data.question2
    })
    .then(() => {
        res.sendStatus(200)
    })
})

router.delete("/", (req, res) =>{
    console.log("Delete request sent");
    console.log(req.body)

    Question.findOneAndDelete({ id: req.body._id })
    .then(() => {
        res.redirect("/")
    })
})



module.exports = router