const { DataTypes } = require("sequelize");
const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    care_circle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "care_circle_groups",
        key: "id",
      },
    },
  });

  User.prototype.generateAuthToken = function () {
    const options = {
      expiresIn: "1hr",
      issuer: "https://integrationxperts.com/",
    };
    const user = {
      id: this.id,
      email: this.email,
    };

    const payload = { user: user };
    const secret = config.get("jwtPrivateKey");
    const token = jwt.sign(payload, secret, options);
    return token;
  };

  return User;
};
