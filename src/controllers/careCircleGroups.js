const db = require("../models"); // models path depend on your structure
const CareCircleGroup = db.care_circle_group;

exports.create = async (req, res) => {
  // Validate request

  await CareCircleGroup.sync();

  if (!req.body.code)
    return res.status(400).send({ message: "Content can not be empty!" });

  // Create a careCircleGroup
  const careCircleGroup = {
    code: req.body.code,
  };

  // Save careCircleGroup in the database
  const result = CareCircleGroup.create(careCircleGroup);
  if (!result)
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });

  return res.status(200).send(result);
};
