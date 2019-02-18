const mongoose = require('./connection')
const { Question } = require('../models/Question')
const data = require('./seed-data.json')

mongoose.Promise = Promise;


Question.find({})
.remove({}).then(() => {
        Question.collection.insert(data).then(effect => {
            console.log(effect)
            process.exit()
        })
    })
    .catch(err => {
        console.log(err)
    })