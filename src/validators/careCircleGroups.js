const Joi = require("joi");

function validateCareCircleGroup(CareCircleGroup) {
  const schema = Joi.object({
    code: Joi.string().min(2).max(45).required(),
  });

  return schema.validate(CareCircleGroup);
}

module.exports = {
  validateCareCircleGroup,
};
