const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
router.post("/login", authController.login);

// REGISTER ROUTE
router.post("/register", authController.register);

module.exports = router;