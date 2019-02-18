const mongoose = require('./connection')
const { Question } = require('../models/Question')

// const Question = mongoose.model('Question')
const data = require('./seed-data.json')

mongoose.Promise = Promise;

Question.collection.insert(data).then(seededData => {
    console.log(seededData)
    mongoose.connection.close()
}).catch(err => {
    console.log(err)
})

// Question.remove({})
//   .then(() => {
//     Question.collection.insert(data)
//       .then((data) => {
//         console.log(data)
//         process.exit()
//       })
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// Question.find({}).remove({}).then(() => {
//         Question.collection.insert(data).then(effect => {
//             console.log(effect)
//             process.exit()
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })