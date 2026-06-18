const Property = require("../models/Property");

// CREATE PROPERTY
exports.createProperty = async (req, res) => {
  try {
    const { title, description, price, city, country, propertyType, images } = req.body;

    const property = new Property({
      title,
      description,
      price,
      city,
      country,
      propertyType,
      images,
      owner: req.user.id
    });

    await property.save();

    res.status(201).json({
      message: "Property created successfully",
      property
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL PROPERTIES (WITH FILTERS)
exports.getAllProperties = async (req, res) => {
  try {
    const { city, minPrice, maxPrice, type } = req.query;

    let filter = {};

    if (city) filter.city = city;
    if (type) filter.propertyType = type;

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const properties = await Property.find(filter).populate("owner", "username email");

    res.status(200).json(properties);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET MY PROPERTIES
exports.getMyProperties = async (req, res) => {
  try {
    const properties = await Property.find({ owner: req.user.id });

    res.status(200).json(properties);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE PROPERTY (OWNER ONLY)
exports.updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Property updated successfully",
      updatedProperty
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE PROPERTY (OWNER ONLY)
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await property.deleteOne();

    res.status(200).json({
      message: "Property deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};