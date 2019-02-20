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
    console.log("Delete request sent");
    console.log(req.body._id)
    // Question.find({_id: req.params.id}).then()

    // Question.find({ the target's id by which button was pressed on the frontend (each question has its own button )})

    Question.findOneAndDelete({ id: req.body._id })
    .then(() => {
        res.redirect("/")
    })
})



module.exports = router