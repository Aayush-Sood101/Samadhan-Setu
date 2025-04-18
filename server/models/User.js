const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  regNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], required: true },
});

module.exports = mongoose.model('User', userSchema);