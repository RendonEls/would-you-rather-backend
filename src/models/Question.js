const mongoose = require('../db/connection')

const Question = new mongoose.Schema ({
    content: String,
    count: Number
})


module.export = mongoose.model("Question", Question)