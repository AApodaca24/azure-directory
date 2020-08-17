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
  const request = JSON.parse(req.body.user);
  console.dir(req.file)
  const imgData = fs.readFileSync(
    path.join(__dirname + "/uploads/" + req.file.filename)
  )
  console.dir(imgData)
  const faculty = new Faculty({
    name: request.name,
    dept: request.dept,
    loc: request.loc,
    rank: request.rank,
    bio: request.bio,
    img: {
      data: imgData,
      contentType: req.file.mimetype,
    },
  });
  faculty
    .save()
    .then(() => res.status(200).send({ message: "User Added" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getFaculty, createFaculty
};
