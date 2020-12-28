const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const UserMeta = sequelize.define("user_meta", {
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    address_line_1: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    address_line_2: {
      type: DataTypes.STRING(45),
    },
    zip_code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    avatar_id: {
      type: DataTypes.INTEGER(11),
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
    },
  });

  return UserMeta;
};
