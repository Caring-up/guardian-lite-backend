const Joi = require("joi");

function validateRole(role) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(45).required(),
  });

  return schema.validate(role);
}

module.exports = {
  validateRole,
};
