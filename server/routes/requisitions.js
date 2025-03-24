const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Requisition = require('../models/Requisition');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Get all requisitions (admin only)
router.get('/', auth, async (req, res) => {
    try {
      let requisitions;
      if (req.user.role === 'admin') {
        // Admins get all requisitions
        requisitions = await Requisition.find().populate('userId', 'regNo name');
      } else {
        // Students get only their own requisitions
        requisitions = await Requisition.find({ userId: req.user.id }).populate('userId', 'regNo name');
      }
      res.json(requisitions);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

// Create a new requisition (student only)
router.post('/', [auth, upload.single('proof')], async (req, res) => {
  if (req.user.role !== 'student') return res.status(403).json({ message: 'Access denied' });

  const { block, roomNumber, category, typeOfWork, comments } = req.body;
  const proof = req.file ? req.file.path : null;

  try {
    const requisition = new Requisition({
      userId: req.user.id,
      block,
      roomNumber,
      category,
      typeOfWork,
      comments,
      proof,
    });
    await requisition.save();
    res.json(requisition);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update requisition status (admin only)
router.put('/:id', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

  const { status } = req.body;
  try {
    const requisition = await Requisition.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(requisition);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;