// models/Property.js
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  landmark: String,
  street: String,
  city: String,
  pincode: String,
  imageUrl: String,
});

module.exports = mongoose.model("Property", propertySchema);
