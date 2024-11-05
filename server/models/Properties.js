const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  // Additional fields can be added as needed
  // images: {
  //   type: [String], // Array to store image URLs if you use Cloudinary or other storage
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model('Properties', propertySchema, "properties");
