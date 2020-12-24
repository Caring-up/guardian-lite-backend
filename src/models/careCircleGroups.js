const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CareCircleGroup = sequelize.define("care_circle_group", {
    code: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });

  return CareCircleGroup;
};
