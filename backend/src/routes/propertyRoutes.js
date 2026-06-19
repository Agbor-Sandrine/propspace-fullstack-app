const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const propertyController = require("../controllers/propertyController");


// =========================
// PUBLIC ROUTES
// =========================

// Get all properties
router.get("/", propertyController.getAllProperties);


// =========================
// PROTECTED ROUTES
// =========================

// Create property
router.post(
  "/",
  authMiddleware,
  propertyController.createProperty
);

// Get my properties
router.get(
  "/my",
  authMiddleware,
  propertyController.getMyProperties
);

// Update property
router.put(
  "/:id",
  authMiddleware,
  propertyController.updateProperty
);

// Delete property
router.delete(
  "/:id",
  authMiddleware,
  propertyController.deleteProperty
);

module.exports = router;