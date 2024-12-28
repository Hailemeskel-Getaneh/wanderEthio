import React, { useState } from 'react';
import "../styles/Contact.css";
import axios from 'axios';
import HeaderContact from '../Components/headerContact';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/contact', {
        name,
        email,
        message,
      });
      console.log(response.data);
      if (response.status === 201) {
        alert('Message submitted successfully!');
      } else {
        alert('Message submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(`Sorry, message submission failed. Server responded with: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        alert('Sorry, message submission failed. No response from server.');
      } else {
        alert('Sorry, message submission failed. Error setting up the request.');
      }
    }
    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };
  

  return (
    <div>
      <HeaderContact />
      <div className='wholeContactBody'>
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to contact us:</p>
        <ul>
          <li>Email: info@ethiopiantourism.org</li>
          <li>Phone: +251-956-319-463</li>
          <li>Address: Churchill Ave, Addis Ababa, Ethiopia</li>
        </ul>
        <div className="contact-page">
          <div className="contact-info">
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div className='tempofooter'></div>
    </div>
  );
}

export default ContactPage;
