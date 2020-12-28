const express = require("express");
const router = express.Router();

const {
  create,
  get,
  updatePassword,
  authenticate,
} = require("../controllers/users");

router.post("/", create);
router.post("/Login", authenticate);
router.get("/", get);
router.post("/updatePassword", updatePassword);

module.exports = router;
