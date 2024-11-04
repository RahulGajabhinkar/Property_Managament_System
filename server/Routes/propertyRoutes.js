// routes/propertyRoutes.js
const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const Property = require("../models/Properties");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "properties",
    allowed_formats: ["jpg", "png"],
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post("/addproperty", upload.single("images"), async (req, res) => {
  try {
    const { landmark, street, city, pincode } = req.body;
    const imageUrl = req.file.path; // Image URL from Cloudinary

    const property = new Property({
      landmark,
      street,
      city,
      pincode,
      imageUrl,
    });

    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding property" });
  }
});

module.exports = router;
