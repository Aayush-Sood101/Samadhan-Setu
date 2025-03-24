const mongoose = require('mongoose');

const requisitionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  block: { type: String, required: true },
  roomNumber: { type: String, required: true },
  category: { type: String, required: true },
  typeOfWork: { type: String, required: true },
  comments: { type: String },
  proof: { type: String },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Requisition', requisitionSchema);