const express = require("express");
const router = express.Router();

const { create } = require("../controllers/roles");
//const auth = require("../middleware/auth");

router.post("/", create);

module.exports = router;
