const express = require("express");
//const users = require("../routes/users");
const roles = require("../routes/roles");
const careCircleGroups = require("../routes/careCircleGroups");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/roles", roles);
  app.use("/api/careCircleGroups", careCircleGroups);
  //  app.use("/api/users", users);
  app.use(error);
};
