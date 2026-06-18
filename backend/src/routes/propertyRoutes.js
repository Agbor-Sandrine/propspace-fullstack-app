const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const propertyController = require("../controllers/propertyController");

// PUBLIC ROUTE
router.get("/", propertyController.getAllProperties);

// PROTECTED ROUTES
router.post("/", authMiddleware, propertyController.createProperty);

router.get("/my", authMiddleware, propertyController.getMyProperties);

router.put("/:id", authMiddleware, propertyController.updateProperty);

router.delete("/:id", authMiddleware, propertyController.deleteProperty);

module.exports = router;
router.get("/", propertyController.getAllProperties);
router.get("/my", authMiddleware, propertyController.getMyProperties);
router.post("/", authMiddleware, propertyController.createProperty);
router.put("/:id", authMiddleware, propertyController.updateProperty);
router.delete("/:id", authMiddleware, propertyController.deleteProperty);