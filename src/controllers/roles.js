const { validateRole } = require("../validators/roles");
const db = require("../models"); // models path depend on your structure
const Role = db.roles;
const User = db.users;

exports.create = async (req, res) => {
  // Validate request

  const { error } = validateRole(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create a Role
  const role = {
    name: req.body.name,
  };

  // Save Role in the database
  try {
    const result = await Role.create(role);
    if (!result.toJSON())
      return res.status(500).send({
        message: err.message,
      });

    return res.status(200).send(result.toJSON());
  } catch (error) {
    return res.status(400).send({
      error,
    });
  }
};
