const { validateCareCircleGroup } = require("../validators/careCircleGroups");
const db = require("../models"); // models path depend on your structure
const CareCircleGroup = db.care_circle_group;

exports.create = async (req, res) => {
  // Validate request

  const { error } = validateCareCircleGroup(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create a careCircleGroup
  const careCircleGroup = {
    code: req.body.code,
  };

  // Save careCircleGroup in the database
  try {
    const result = await CareCircleGroup.create(careCircleGroup);
    if (!result)
      return res.status(500).send({
        message: err.message,
      });

    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({
      error,
    });
  }
};
