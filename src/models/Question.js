const mongoose = require('../db/connection')

const QuestionSchema = new mongoose.Schema ({
    content: String,
    count: Number
})

const Question = mongoose.model("Question", QuestionSchema)

module.exports = {
    Question
}

// module.export = mongoose.model("Question", QuestionSchema)