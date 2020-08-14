const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env'})

const connect = () => {
    return mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
    connect
}