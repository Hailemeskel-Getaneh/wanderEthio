const ContactMessage = require('../models/contactModel');

// Create a new contact message
exports.createContactMessage = async (req, res) => {
  const contactMessage = new ContactMessage(req.body);

  try {
    await contactMessage.save();
    res.status(201).send({ message: 'Message submitted successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Message submission failed', error: error.message });
  }
};

// Get all contact messages (for administrative purposes)
exports.getAllContactMessages = async (req, res) => {
  try {
    const contactMessages = await ContactMessage.find();
    res.status(200).send(contactMessages);
  } catch (error) {
    res.status(400).send({ message: 'Failed to fetch messages', error: error.message });
  }
};
