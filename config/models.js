const mongoose = require('mongoose')
const Schema = mongoose.Schema

const facultySchema = new Schema({
    name: String,
    dept: String,
    loc: String,
    rank: String,
    bio: String,
    img: {
        data: Buffer,
        contentType: String
    }
})

const Faculty = mongoose.model('Faculty', facultySchema)

module.exports =  Faculty