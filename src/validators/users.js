const Joi = require("joi");

const validateUser = (userMeta) => {
  const schema = Joi.object({
    //user
    email: Joi.string().min(2).max(45).required().email(),
    password: Joi.string().required(),
    roles_id: Joi.required(),
    care_circle_id: Joi.required(),
  });

  return schema.validate(userMeta);
};

function authenticateUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

function validateChangePassword(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    newPassword: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

module.exports = {
  validateUser,
  authenticateUser,
  validateChangePassword,
};
