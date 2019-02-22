const express = require("express");
const router = express.Router();
const { Question } = require("../models/Question");

console.log("edit question routes ");

router.get("/", (req, res) => {
    Question.find().then(show => res.json(show));
});

router.put("/", (req, res) => {
    // console.log(`Q1: ${req.body.data.question1} and Q2: ${req.body.data.question2}`)
    Question.findOneAndUpdate(
        { id: req.body.data._id },
        {
            question1: req.body.data.question1,
            question2: req.body.data.question2
        }
    ).then(() => {
        res.sendStatus(200);
    });
});

router.delete("/", (req, res) => {
    Question.findOneAndDelete({ id: req.body._id }).then(() => {
        res.redirect("/");
    });
});

module.exports = router;
