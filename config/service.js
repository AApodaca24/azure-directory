const fs = require("fs");
const path = require("path");
const multer = require("multer");
const Faculty = require("./models");
const ReadPreference = require("mongodb").ReadPreference;

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

require("./db").connect();

const getFaculty = (req, res) => {
  const docquery = Faculty.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((faculty) => res.json(faculty))
    .catch((err) => res.status(500).send(err));
};

const createFaculty = (req, res) => {
  const { fname, lname, dept, loc, rank, bio } = req.body.user;
  const image = new Image({
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: req.file.contentType,
    },
  });
  const faculty = new Faculty({
    fname,
    lname,
    dept,
    loc,
    rank,
    bio,
    img: image,
  });
  faculty
    .save()
    .then(() => res.json(Faculty))
    .catch((err) => res.send(err));
};

module.exports = {
  getFaculty, createFaculty
};
