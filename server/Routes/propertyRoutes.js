const express = require('express');
const Admin = require('../models/Users');
const Property = require('../models/Properties'); // Assuming this is your property model
const router = express.Router();

router.get('/getUserInfo', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ name: user.name, email: user.email, contact: user.contact, address: user.address });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get('/addproperty', async (req, res) => {
  const { email } = req.query;
  try {
    const properties = await Property.find({ email: email }); 
    res.json(properties)
    console.log(properties)
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// Assuming you're in the same file as your other routes
router.post('/addproperty', async (req, res) => {
  const { email, landmark, street, city, pincode } = req.body;

  const newProperty = new Property({
    email,
    landmark,
    street,
    city,
    pincode,
  });

  try {
    await newProperty.save();
    res.status(201).json({ message: "Property added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add property", error });
  }
});

module.exports = router;
