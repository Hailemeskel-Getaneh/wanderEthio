const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscribersModel'); // Replace with your model import

router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email is already subscribed
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ success: false, message: 'Email is already subscribed.' });
    }

    // If not subscribed, create a new subscription
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    // Respond with success message
    res.status(201).json({ success: true, message: 'Subscription successful!' });
  } catch (error) {
    console.error('Subscription error:', error);
  res.status(500).json({ success: false, message: 'Subscription failed. Please try again later.' });
  }
});

module.exports = router;

router.get('/count', async (req, res) => {
  try {
    const count = await Subscription.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Failed to fetch subscriber count', error);
    res.status(500).json({ message: 'Failed to fetch subscriber count', error: error.message });
  }
});

module.exports = router;