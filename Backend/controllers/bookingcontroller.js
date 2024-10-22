const Booking = require('../models/bookingModel');

exports.createBooking = async (req, res) => {
    const { first_name, last_name, email, date, tickets, destination, amount } = req.body;
    
    try {
        // Create a new booking instance
        const booking = new Booking({
            first_name,
            last_name,
            email,
            date,
            tickets,
            destination,
            amount,
            paymentIntentId: '' // This field is not used for now
        });

        // Save the booking to the database
        await booking.save();

        // Respond with a success message and the booking ID
        res.status(200).send({
            message: 'Booking created successfully!',
            ticketId: booking._id
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).send('Server error');
    }
};
