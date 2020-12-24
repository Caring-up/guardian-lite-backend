const winston = require("winston");
const db = require("../models");

module.exports = async function () {
  try {
    await db.sequelize.authenticate();
    winston.info("Connection has been established successfully.");
  } catch (error) {
    winston.error("Unable to connect to the database:", error);
  }
};
