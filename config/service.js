const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

const { Faculty, User } = require("./models");
const ReadPreference = require("mongodb").ReadPreference;
dotenv.config({ path: "./config/config.env" });

const SECRET = process.env.SECRET;
console.log(SECRET);
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
    title: request.title,
    phone: request.phone,
    email: request.email,
    scope: request.scope,
    hobbies: request.hobbies,
  });
  console.log(faculty);
  faculty
    .save()
    .then(() => res.status(200).send({ message: "User Added" }))
    .catch((err) => res.send({ error: err.message }));
};

const updateFaculty = (req, res) => {
  const request = req.body;
  const id = req.params.id;
  console.log(request, id);
  Faculty.findOne({ _id: id })
    .then((f) => {
      f.name = request.name;
      f.dept = request.dept;
      f.loc = request.loc;
      f.rank = request.rank;
      f.bio = request.bio;
      f.img = request.img;
      f.title = request.title;
      f.phone = request.phone;
      f.email = request.email;
      f.scope = request.scope;
      f.hobbies = request.hobbies;
      f.multiImg = request.multiImg;
      f.save()
        .then(res.status(200).send(f))
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
};

const deleteFaculty = async (req, res) => {
  const id = req.params.id;
  try {
    let faculty = await Faculty.findOne({ _id: id });
    console.dir(faculty);
    if (!faculty) {
      res.status(404).send("not found");
    } else {
      await Faculty.remove({ _id: id });
      res.status(200).send("user deleted");
    }
  } catch (err) {
    console.log(dir);
    res.send(err);
  }
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password: bcrypt.hashSync(password, 8),
  });
  user
    .save()
    .then(() => {
      const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: 86400 });
      res.status(200).send({ auth: true, token });
    })
    .catch((err) => {
      console.dir(err);
      res.status(500).json(err);
    });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toString() }).exec();
    console.log(user);
    if (user === undefined) {
      res.status(404).send({ auth: false, error: "Not Found" });
    } else {
      const valid = bcrypt.compareSync(password, user.password);
      if (valid === undefined) {
        res.status(404).send({ auth: false, error: "passwords dont match" });
      } else {
        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: 86400 });
        res.status(200).send({
          auth: true,
          token,
          _user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getFaculty,
  createFaculty,
  updateFaculty,
  deleteFaculty,
  registerUser,
  loginUser,
};
