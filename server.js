const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require('passport')
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const MongoStore = require("connect-mongo")(session);
require('./config/auth')(passport)

const api = require("./routes/api");
const auth = require("./routes/auth");

dotenv.config({ path: "./config/config.env" });

const app = express();

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

// app.use(allowCrossDomain);
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());



// configuraiton for session store in DB. CosmosDB does not supprt default config.
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 * 1000,
      autoRemove: "interval",
      autoRemoveInterval: 10,
    }),
  })
);

app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use("/api/v1", api);
app.use("/auth", auth);

if (process.env.NODE_ENV === "prod") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
}

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
