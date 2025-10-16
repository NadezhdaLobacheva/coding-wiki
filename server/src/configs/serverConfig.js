const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(cors());

  app.use(morgan("dev"));
  app.use("/files", express.static(path.resolve(__dirname, "..", "public")));
};

module.exports = serverConfig;
