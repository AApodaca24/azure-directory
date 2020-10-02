const express = require('express');
const api = express.Router();
const multer = require('multer');

const service = require('../config/service');
const azure = require('../config/azure');

const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `${process.cwd()}/config/uploads` );
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// const upload = multer({ storage: storage });

api.get('/faculty', (req, res) => {
  service.getFaculty(req, res);
});

api.get('/faculty/:id', (req, res) => {
  service.getFacultyId(req, res);
});

api.get('/faculty/dept/:dept', (req, res) => {
  service.getFacultyDept(req, res);
});

api.post('/faculty', (req, res) => {
  service.createFaculty(req, res);
});

api.delete('/faculty/:id', (req, res) => {
  service.deleteFaculty(req, res);
});

api.put('/faculty/:id', (req, res) => {
  service.updateFaculty(req, res);
});

api.post('/register', (req, res) => {
  service.registerUser(req, res);
});
api.post('/login', (req, res) => {
  service.loginUser(req, res);
});

api.post('/azure-repo', uploadStrategy, (req, res) => {
  azure.uploadFile(req, res);
});

module.exports = api;
