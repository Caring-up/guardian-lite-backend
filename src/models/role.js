const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  });

  return Role;
};
