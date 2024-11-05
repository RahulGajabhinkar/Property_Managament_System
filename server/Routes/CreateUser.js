
const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Users');
const router = express.Router();
router.post('/loginuser', async (req, res) => {
  console.log(req.body)
  const {email , password } = req.body;
  try {
    console.log("Entered into routes page")
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
 });

module.exports = router;
