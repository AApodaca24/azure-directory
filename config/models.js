const mongoose = require('mongoose')
const Schema = mongoose.Schema

const facultySchema = new Schema({
    name: String,
    dept: String,
    loc: String,
    rank: String,
    bio: String,
    img: String
})

const Faculty = mongoose.model('Faculty', facultySchema)

module.exports =  Faculty