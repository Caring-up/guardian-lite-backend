const express = require("express");
//const users = require("../routes/users");
const roles = require("../routes/roles");
const careCircleGroups = require("../routes/careCircleGroups");
const users = require("../routes/users");
const userMeta = require("../routes/userMeta");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/roles", roles);
  app.use("/api/careCircleGroups", careCircleGroups);
  app.use("/api/users", users);
  app.use("/api/usersMeta", userMeta);
  app.use(error);
};
