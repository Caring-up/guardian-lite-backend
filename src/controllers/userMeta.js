const _ = require("lodash");
const { validateUserMeta } = require("../validators/userMeta");
const db = require("../models"); // models path depend on your structure
const User = db.users;
const UserMeta = db.user_meta;

const create = async (req, res, next) => {
  const { error } = validateUserMeta(req.body);
  if (error) return done(error.details[0].message);

  let result = await User.findOne({
    where: {
      email: req.user.user.email,
    },
  });

  let responseMeta;

  let userMeta = _.pick(req.body, [
    "first_name",
    "last_name",
    "address_line_1",
    "address_line_2",
    "zip_code",
    "dob",
    "avatar_id",
  ]);

  try {
    userMeta.user_id = result.id;

    responseMeta = await UserMeta.create(userMeta);
    if (!responseMeta.toJSON())
      return res.status(400).send({ success: false, message: error });

    responseMeta = responseMeta.toJSON();
    return res.send({
      success: true,
      message: responseMeta,
    });
  } catch (error) {
    return res.status(400).send({ success: false, message: error });
  }
};

const get = async (req, res, next) => {
  let result = await UserMeta.findOne({
    where: {
      user_id: req.user.user.id,
    },
  });

  return res.status(200).send({ success: true, message: result });
};

module.exports = {
  create,
  get,
};
