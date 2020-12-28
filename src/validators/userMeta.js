const Joi = require("joi");

const validateUserMeta = (userMeta) => {
  const schema = Joi.object({
    // user Meta
    first_name: Joi.string().min(2).max(45).required(),
    last_name: Joi.string().min(2).max(45).required(),
    address_line_1: Joi.string().min(2).max(45).required(),
    address_line_2: Joi.string(),
    zip_code: Joi.required(),
    dob: Joi.required(),
    avatar_id: Joi.number(),
  });

  return schema.validate(userMeta);
};

module.exports = {
  validateUserMeta,
};
