const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./src/db/connection')
const routes = require('./src/routes/index')


const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.use('/', routes)


app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
  })
  