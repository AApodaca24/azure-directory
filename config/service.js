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
    img: request.img
  });
  faculty
    .save()
    .then(() => res.status(200).send({ message: "User Added" }))
    .catch((err) => res.send(err));
};

const updateFaculty = (req, res) => {
  const id = req.params.id;
  if (req.file === undefined) {
    Faculty.findOne(id).then((f) => {
      f.name = request.name;
      f.dept = request.dept;
      f.loc = request.loc;
      f.rank = request.rank;
      f.bio = request.bio;
    });
  } else {
    const request = JSON.parse(req.body.user);
    const imgData = fs.readFileSync(
      path.join(__dirname + "/uploads/" + req.file.filename)
    );
    Faculty.findOne(id).then((f) => {
      f.name = request.name;
      f.dept = request.dept;
      f.loc = request.loc;
      f.rank = request.rank;
      f.bio = request.bio;
      f.img = {
        data: imgData,
        contentType: req.file.mimetype,
      };
      f.save()
        .then(res.json(f))
        .catch((err) => res.status(500).send(err));
    });
  }
};

module.exports = {
  getFaculty,
  createFaculty,
  updateFaculty
};
