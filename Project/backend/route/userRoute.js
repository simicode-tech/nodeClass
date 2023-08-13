const express = require("express");
const { registerCtrl, loginCtrl } = require("../controller/userController");
const router = express.Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

module.exports = router;
