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

const userSchema = new Schema({
    username: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true}
})

const Faculty = mongoose.model('Faculty', facultySchema)

const User = mongoose.model('User', userSchema)

module.exports =  { Faculty, User }