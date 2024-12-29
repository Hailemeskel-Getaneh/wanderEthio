// bookingModel.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  tickets: { type: Number, required: true },
  destination: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  tx_ref: { type: String, required: true },
  paymentStatus: { type: String, default: 'Pending' } 
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
