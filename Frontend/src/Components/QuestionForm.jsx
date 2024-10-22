import React, { useState } from 'react';
import '../styles/QuestionForm.css'; // Import CSS for styling
import axios from 'axios';

const QuestionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'question':
        setQuestion(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/questions', {
        name,
        email,
        phone,
        question,
      });
      console.log(response.data);
      if (response.status === 201) {
        alert('Question submitted successfully!');
      } else {
        alert('Question submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(`Sorry, question submission failed. Server responded with: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        alert('Sorry, question submission failed. No response from server.');
      } else {
        alert('Sorry, question submission failed. Error setting up the request.');
      }
    }
    // Reset the form after submission
    setName('');
    setEmail('');
    setPhone('');
    setQuestion('');
  };

  return (
    <div className='mainQuestionBody'>
      <div className="topQuestionForm">
        <p>If you have any questions or inquiries, feel free to reach out to us:</p>
        <p>Email: info@ethiopiantourism.org</p>
        <p>Phone: +251 123 456 789</p>
      </div>
      <div className="question-form-container">
        <h2>Ask a Question</h2>
        <p>Please fill out the form below to ask your question:</p>
        <form onSubmit={handleSubmit} className="question-form">
          <div className="form-group">
            <label htmlFor="name"><p>Your Name:</p></label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><p>Your Email:</p></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"><p>Your Phone Number:</p></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="question"><p>Your Question:</p></label>
            <textarea
              id="question"
              name="question"
              value={question}
              onChange={handleChange}
              rows={4}
              placeholder="Type your question here..."
              required
            />
          </div>
          <button type="submit" className='submitQuestion'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
