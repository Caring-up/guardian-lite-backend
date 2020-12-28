const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {
  authenticateUser,
  validateUser,
  validateChangePassword,
} = require("../validators/users");
const db = require("../models"); // models path depend on your structure
const User = db.users;

const create = async (req, res, next) => {
  passport.authenticate("local-signup", function (error, user) {
    if (error) return next(error);
    else if (user)
      res.send({
        success: true,
        message: "User signed up successfully",
      });
    else
      res.status(400).send({ success: false, message: "email already exists" });
  })(req, res, next);
};

const get = async (req, res, next) => {
  try {
    let result = await User.findAll();

    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({
      error,
    });
  }
};

const updatePassword = async (req, res, next) => {
  const { error } = validateChangePassword(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password, newPassword } = req.body;

  const user = await User.findOne({ where: { email: email } });
  if (!user)
    return res.status(400).send({ success: false, message: error.message });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Incorrect password");

  const salt = await bcrypt.genSalt(10);

  let bcryptPassword = await bcrypt.hash(newPassword, salt, null);
  const update = { password: bcryptPassword };

  try {
    let doc = await User.update(
      { password: bcryptPassword },
      {
        where: {
          email: email,
        },
      }
    );
    return res
      .status(200)
      .send({ success: true, message: "Password updated successfully!" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error });
  }
};

const authenticate = async (req, res, next) => {
  const { error } = authenticateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = user.generateAuthToken();

  const result = {
    token,
    success: true,
  };

  res.status(200).send(result);
};

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      // eslint-disable-next-line no-undef
      process.nextTick(async () => {
        const { error } = validateUser(req.body);
        if (error) return done(error.details[0].message);

        let result = await User.findAll({
          where: {
            email: email,
          },
        });

        if (result.length) return done(null, false, "Email already exist");
        else {
          let response;
          const salt = await bcrypt.genSalt(10);
          let user = _.pick(req.body, [
            "email",
            "password",
            "roles_id",
            "care_circle_id",
          ]);

          user.salt = salt;
          user.password = await bcrypt.hash(password, salt);

          // Save User in the database
          try {
            response = await User.create(user);
            if (!response.toJSON())
              return done(null, false, "Error while creating User");

            response = response.toJSON();
          } catch (error) {
            return done(error, false, "Error while creating User");
          }

          return done(
            null,
            _.pick(response, [
              "email",
              "password",
              "salt",
              "roles_id",
              "care_circle_id",
            ])
          );
        }
      });
    }
  )
);

module.exports = {
  create,
  get,
  updatePassword,
  authenticate,
};
