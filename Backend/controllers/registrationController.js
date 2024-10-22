const Registration = require('../models/Registration');

exports.createRegistration = async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRegistrationById = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }
    res.status(200).json(registration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

