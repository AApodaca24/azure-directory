const express = require("express");
const api = express.Router();
const multer = require("multer");


const service = require("../config/service");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.cwd()}/config/uploads` );
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });





api.get("/faculty", (req, res) => {
  service.getFaculty(req, res);
});

api.post("/faculty", upload.single('image'), (req, res) => {
  service.createFaculty(req, res);
});

module.exports = api;
