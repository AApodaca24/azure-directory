const express = require("express");
const api = express.Router();

const service = require("../config/service");

api.get("/faculty", (req, res) => {
  service.getFaculty(req, res);
});

api.post("/faculty", (req, res) => {
  service.createFaculty(req, res);
});

module.exports = api;
