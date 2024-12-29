const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  nationality: { type: String, required: true },
  passport: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  zip: { type: String, required: true },
  city: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  emergencyPhone: { type: String, required: true },
  password:{type:String, required:true},
  allergies: { type: String }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;

