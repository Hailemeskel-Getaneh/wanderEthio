// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const nodemailer = require('nodemailer');
const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ticketBooking', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Booking Schema
const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String,
    tickets: Number,
    destination: String,
    totalAmount: Number
});

const Booking = mongoose.model('Booking', bookingSchema);

// Transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'hailegetaneh1221@gmail.com',
        pass: 'Haile1221.com'
    }
});

// Routes
app.post('/api/bookings', async (req, res) => {
    const { name, email, date, tickets, destination, totalAmount } = req.body;

    const newBooking = new Booking({
        name,
        email,
        date,
        tickets,
        destination,
        totalAmount
    });

    try {
        const savedBooking = await newBooking.save();
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount * 100, 
            currency: 'usd',
            metadata: { bookingId: savedBooking._id.toString() },
        });

        // Send confirmation email
        const mailOptions = {
            from: 'hailegetaneh1221@gmail.com',
            to: email,
            subject: 'Booking Confirmation',
            text: `Hello ${name},\n\nYour booking is confirmed! Your ticket ID is ${savedBooking._id}.\n\nThank you for booking with us!`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ ticketId: savedBooking._id, clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(400).json({ message: 'Error saving booking', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
