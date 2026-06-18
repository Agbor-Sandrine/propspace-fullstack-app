const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
router.post("/login", authController.login);
const authMiddleware = require("../middleware/authMiddleware");
// REGISTER ROUTE
router.post("/register", authController.register);

module.exports = router;

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});