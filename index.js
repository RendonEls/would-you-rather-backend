const express = require('express')
const parser = require('body-parser')
const mongoose = require('./src/db/connection')
const routes = require('./src/routes/index')
const cors = require('cors')


const app = express()
app.use(cors())

app.set('port', process.env.PORT || 3001)
app.use(parser.json())

app.use('/', routes)


app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
  })
  