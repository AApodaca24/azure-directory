const fs = require("fs");
const path = require("path");

const Faculty = require("./models");
const ReadPreference = require("mongodb").ReadPreference;

require("./db").connect();

const getFaculty = (req, res) => {
  const docquery = Faculty.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((faculty) => res.json(faculty))
    .catch((err) => res.status(500).send(err));
};

const createFaculty = (req, res) => {
  const request = req.body;
  const faculty = new Faculty({
    name: request.name,
    dept: request.dept,
    loc: request.loc,
    rank: request.rank,
    bio: request.bio,
    img: request.img,
  });
  console.log(faculty);
  faculty
    .save()
    .then(() => res.status(200).send({ message: "User Added" }))
    .catch((err) => res.send({error: err.message}));
};

const updateFaculty = (req, res) => {
  const request = req.body
  const id = req.params.id;
  console.log(request, id)
  Faculty.findOne({ _id: id })
    .then((f) => {
      f.name = request.name;
      f.dept = request.dept;
      f.loc = request.loc;
      f.rank = request.rank;
      f.bio = request.bio;
      f.img = request.img;
      f.save().then(res.status(200).send(f)).catch(err => res.status(500).json(err))
    })
    .catch((err) => res.status(500).json(err));
};

const deleteFaculty = async (req, res) => {
  const id = req.params.id;
  try {
    let faculty = await Faculty.findOne({ _id: id })
    console.dir(faculty)
    if (!faculty) {
      res.status(404).send('not found')
    } else {
      await Faculty.remove({ _id: id })
      res.status(200).send('user deleted')
    }
  } catch (err) {
    console.log(dir)
    res.send(err)
  }
};

module.exports = {
  getFaculty,
  createFaculty,
  updateFaculty,
  deleteFaculty
};
