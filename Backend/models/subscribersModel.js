// models/Subscription.js

const mongoose = require('mongoose');

// Define the subscription schema
const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
    trim: true,
    lowercase: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model using the schema
const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
