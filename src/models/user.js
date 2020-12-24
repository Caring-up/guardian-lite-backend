const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
