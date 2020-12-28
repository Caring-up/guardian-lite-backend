const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CareCircleGroup = sequelize.define("care_circle_group", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });

  return CareCircleGroup;
};
