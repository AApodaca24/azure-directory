const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imgSchema = new Schema({
    img: {
        data: Buffer,
        contentType: String
    }
})

const Image = new mongoose.model("Image", imgSchema)

const facultySchema = new Schema({
    fname: String,
    lname: String,
    dept: String,
    loc: String,
    rank: String,
    bio: String,
    img: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image"
    }
})

const Faculty = new mongoose.model('Faculty', facultySchema)

module.exports = {
    Image, Faculty
}