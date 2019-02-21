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
    console.log(req.body._id)

    Question.findOneAndUpdate({ id: req.body._id }, {
        // data: req.body.data.question1,
        // data: req.body.question2,
        // question2: req.body.data.question2,
        question1: req.body.question1,
        question2: req.body.question2
    })
    // .then(() => {

    // })
})

router.delete("/", (req, res) =>{
    console.log("Delete request sent");
    console.log(req.body._id)

    Question.findOneAndDelete({ id: req.body._id })
    .then(() => {
        res.redirect("/")
    })
})



module.exports = router