
// BookingPage.js
import React from 'react';
import PaymentForm from '../Components/paymentForm.jsx';

const BookingPage = () => {
  return (
    <div>
      <h1>Booking Page</h1>
      <PaymentForm />
    </div>
  );
};

export default BookingPage;
















// import React, { useState, useEffect } from 'react';
// import  {Link} from 'react-router-dom'
// import axios from 'axios';
// import BookingHeader from '../Components/headerBooking.jsx';
// import { loadStripe } from '@stripe/stripe-js';
// import '../styles/BookingPage.css';

// const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         date: '',
//         tickets: 1,
//         destination: 'Addis Ababa',
//         cardNumber: '',
//         expiryDate: '',
//         cvc: ''
//     });

//     const [totalAmount, setTotalAmount] = useState(0);
//     const [discount, setDiscount] = useState(0);
//     const [error, setError] = useState('');

//     const ticketPrices = {
//         'Addis Ababa': 8000,
//         'Lalibela': 15530,
//         'Gondar': 12335,
//         'Axum': 10003,
//         'Semen Mountains': 10822,
//         'Bahidar': 13593,
//         'Awash NP': 8643,
//         'Omo': 8653,
//         'Bale': 8434,
//         'Harar': 4000,
//         'Debre Libanos': 1000,
//         'Debre Damo': 1000,
//     };

//     useEffect(() => {
//         calculateTotal();
//     }, [formData.tickets, formData.destination, discount]);

//     const handleChange = async (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });

//         if (name === 'email') {
//             await checkRegistration(value);
//         }
//     };

//     const checkRegistration = async (email) => {
//         try {
//             const response = await axios.post('http://localhost:4000/api/register/check', { email });
//             if (response.data.registered) {
//                 setDiscount(response.data.discount);
//             } else {
//                 setDiscount(0);
//             }
//         } catch (error) {
//             console.error('Error checking registration:', error);
//             setError('Error checking registration status. Please try again.');
//         }
//     };
    

//     const calculateTotal = () => {
//         const price = ticketPrices[formData.destination] || 0;
//         const discountedPrice = price * (1 - discount);
//         setTotalAmount(discountedPrice * formData.tickets);
//     };

//     const validateForm = () => {
//         const { name, email, date, tickets, cardNumber, expiryDate, cvc } = formData;
//         const today = new Date().toISOString().split('T')[0];
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!name || !email || !date || !tickets || !cardNumber || !expiryDate || !cvc) {
//             setError('All fields are required.');
//             return false;
//         }
//         if (!emailPattern.test(email)) {
//             setError('Invalid email format.');
//             return false;
//         }
//         if (date < today) {
//             setError('The date cannot be in the past.');
//             return false;
//         }
//         if (tickets < 1 || tickets > 10) {
//             setError('You can book between 1 and 10 tickets.');
//             return false;
//         }
//         if (!/^\d{16}$/.test(cardNumber)) {
//             setError('Invalid card number. It should be 16 digits.');
//             return false;
//         }
//         if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
//             setError('Invalid expiry date format. Use MM/YY.');
//             return false;
//         }
//         if (!/^\d{3,4}$/.test(cvc)) {
//             setError('Invalid CVC. It should be 3 or 4 digits.');
//             return false;
//         }
//         setError('');
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             return;
//         }

//         const stripe = await stripePromise;
//         const { name, email, date, tickets, destination } = formData;
//         const paymentData = { name, email, date, tickets, destination, totalAmount };

//         try {
//             const response = await axios.post('http://localhost:4000/api/bookings', paymentData);
//             const clientSecret = response.data.clientSecret;

//             const result = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: {
//                         number: formData.cardNumber,
//                         exp_month: formData.expiryDate.split('/')[0],
//                         exp_year: formData.expiryDate.split('/')[1],
//                         cvc: formData.cvc,
//                     },
//                     billing_details: {
//                         name: formData.name,
//                     },
//                 },
//             });

//             if (result.error) {
//                 setError(result.error.message);
//             } else if (result.paymentIntent.status === 'succeeded') {
//                 alert(`Booking confirmed! Your ticket ID is ${response.data.ticketId}`);
//             }
//         } catch (error) {
//             console.error('There was an error processing your request!', error);
//             setError('An error occurred during booking. Please try again.');
//         }
//     };

//     return (
//         <div>  
//             <BookingHeader/>
//             <div className='body-booking'>
//                 <div className="container-booking">
//                     <h1 className="heading-booking">Online Ticket Booking</h1>
//                     {error && <p className="error-booking">{error}</p>}
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group-booking">
//                             <label htmlFor="name">Name</label>
//                             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//                         </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//                             </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="date">Date</label>
//                             <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
//                         </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="tickets">Number of Tickets</label>
//                             <input type="number" id="tickets" name="tickets" value={formData.tickets} onChange={handleChange} min="1" max="10" required />
//                         </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="destination">Destination</label>
//                             <select id="destination" name="destination" value={formData.destination} onChange={handleChange} required>
//                                 <option value="Addis Ababa">Addis Ababa</option>
//                                 <option value="Lalibela">Lalibela</option>
//                                 <option value="Gondar">Gondar</option>
//                                 <option value="Axum">Axum</option>
//                                 <option value="Semen Mountains">Semen Mountains</option>
//                                 <option value="Bahidar">Bahidar</option>
//                                 <option value="Harar">Harar</option>
//                                 <option value="Awash NP">Awash NP</option>
//                                 <option value="Bale">Bale</option><option value="Bale">Bale</option>
//                             </select>
//                         </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="totalAmount">Total Amount</label>
//                             <input type="text" id="totalAmount" name="totalAmount" value={`$${totalAmount}`} readOnly />
//                         </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="cardNumber">Card Number</label>
//                             <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
//                         </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
//                             <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
//                         </div>
//                         <div className="form-group-booking">
//                             <label htmlFor="cvc">CVC</label>
//                             <input type="text" id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} required />
//                         </div>
//                         <button type="submit" className="button-booking">Book Now</button>
//                     </form>
                   
//                 </div>
//             </div>
//             <div className='tempofooter'></div>
//         </div>
//     );
// };

// export default BookingForm;



