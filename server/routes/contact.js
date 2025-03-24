// routes/contact.js
const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/contactMessage');

// POST route to save contact messages
router.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create new message
    const newMessage = new ContactMessage({
      name,
      email,
      message
    });
    
    // Save message to database
    await newMessage.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message'
    });
  }
});

// GET route to retrieve all contact messages (for admin use)
router.get('/', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;  // Make sure this is properly exported