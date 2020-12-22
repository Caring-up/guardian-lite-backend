const db = require("../models"); // models path depend on your structure
const Role = db.roles;

exports.create = async (req, res) => {
  // Validate request

  await Role.sync();

  if (!req.body.name)
    return res.status(400).send({ message: "Content can not be empty!" });

  // Create a Role
  const role = {
    name: req.body.name,
  };

  // Save Role in the database
  const result = Role.create(role);
  if (!result)
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });

  return res.status(200).send(result);
};
