const winston = require("winston");
const express = require("express");
const config = require("config");
const db = require("./models");

const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
//require("./startup/config")();

const port = process.env.PORT || config.get("port");
const server = db.sequelize.sync().then((req) => {
  app.listen(port, () => winston.info(`Listening on port ${port}...`));
});

module.exports = server;
