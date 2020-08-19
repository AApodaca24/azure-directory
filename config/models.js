const mongoose = require('mongoose')
const Schema = mongoose.Schema

const facultySchema = new Schema({
    scope: String,
    title: String,
    name: String,
    phone: String,
    email: String,
    dept: String,
    loc: String,
    rank: String,
    bio: String,
    img: String,
    hobbies: Array,
    multiImg: Array
})

const Faculty = mongoose.model('Faculty', facultySchema)

module.exports =  Faculty