const express = require("express");
const path = require("path");
const morgan = require("morgan");
const corsConfig = require('./corsConfig');
const cookieParser = require('cookie-parser');
const cors = require("cors")


const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("dev"));
  // app.use(express.static('public'));
  app.use(cors(corsConfig));
  app.use(cookieParser());
  // app.use("/files", express.static(path.resolve(__dirname, "..", "public")));
};

module.exports = serverConfig;
