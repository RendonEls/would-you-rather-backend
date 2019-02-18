const mongoose = require('./connection')
const data = require('./seed-data.json')

Question.remove({})
    .then(() => {
        Question.collection.insert(data).then(effect => {
            console.log(effect)
            process.exit()
        })
    })
    .catch(err => {
        console.log(err)
    })