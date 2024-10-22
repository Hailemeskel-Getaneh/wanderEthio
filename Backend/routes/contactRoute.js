const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/contactModel'); // Ensure the correct path to the model

// Create a new contact message
router.post('/', async (req, res) => {
  const contactMessage = new ContactMessage(req.body);

  try {
    await contactMessage.save();
    res.status(201).send({ message: 'Message submitted successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Message submission failed', error: error.message });
  }
});

// Get all contact messages (for administrative purposes)
router.get('/', async (req, res) => {
  try {
    const contactMessages = await ContactMessage.find();
    res.status(200).send(contactMessages);
  } catch (error) {
    res.status(400).send({ message: 'Failed to fetch messages', error: error.message });
  }
});

module.exports = router;
