const express = require('express');
const router = express.Router();
const Registration = require('../models/RegistrationModel');

// Route to add a new registration
router.post('/registration', async (req, res) => {
  const {
    fullName, email, phone, nationality, passport, dob, gender,
    country, address, zip, city, emergencyContact, emergencyPhone,password, allergies
  } = req.body;

  const newRegistration = new Registration({
    fullName, email, phone, nationality, passport, dob, gender,
    country, address, zip, city, emergencyContact, emergencyPhone,password, allergies
  });

  try {
    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving registration', error: error.message });
  }
});

// Route to check if a user is registered
router.post('/check', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Registration.findOne({ email });
    if (user) {
      res.json({ registered: true, discount: 0.1 });
    } else {
      res.json({ registered: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking registration', error: error.message });
  }
});

module.exports = router;


// Route to check if a user is registered for subscribetion 
router.post('/checker', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Registration.findOne({ email });
    if (user) {
      res.json({ registered: true });
    } else {
      res.json({ registered: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking registration', error: error.message });
  }
});

module.exports = router;


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await Registration.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }


    if (password != user.password) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    res.status(200).json({ message: 'Login successful!' });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});




