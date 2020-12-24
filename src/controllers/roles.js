const { validateRole } = require("../validators/roles");
const db = require("../models"); // models path depend on your structure
const Role = db.roles;

exports.create = async (req, res) => {
  // Validate request

  await Role.sync();

  const { error } = validateRole(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create a Role
  const role = {
    name: req.body.name,
  };

  // Save Role in the database
  const result = Role.create(role);
  if (!result)
    return res.status(500).send({
      message: err.message,
    });

  return res.status(200).send(result);
};
