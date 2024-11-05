
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


console.log("Entered into models")
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true, },
  address: { type: String, required: true,},
  password: { type: String, required: true },
});

adminSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('Users', adminSchema, "Login_details");
