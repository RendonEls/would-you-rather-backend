const mongoose = require('../db/connection')

const QuestionSchema = new mongoose.Schema ({
    question1: String,
    question2: String,
    count1: Number,
    count2: Number
})

const Question = mongoose.model("Question", QuestionSchema)

module.exports = {
    Question
}

// module.export = mongoose.model("Question", QuestionSchema)

