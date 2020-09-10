const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const api = require('./routes/api');

dotenv.config({ path: './config/config.env' });
require("./config/db").connect();
const app = express();



// app.use(allowCrossDomain);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configuraiton for session store in DB. CosmosDB does not supprt default config.

//Routes
app.use('/api/v1', api);

if (process.env.NODE_ENV === 'prod') {
  app.use(express.static('client/dist'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')),
  );
}

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`,
  ),
);
