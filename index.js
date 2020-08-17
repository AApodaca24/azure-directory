const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

const api = require('./routes/api')

dotenv.config({ path: './config/config.env'})

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes

app.use('/api/v1', api)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`))