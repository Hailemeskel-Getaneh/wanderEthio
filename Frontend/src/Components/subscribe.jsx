import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial subscriber count when the component mounts

   
      const fetchSubscriberCount = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/subscribers/count');
          setSubscriberCount(response.data.count);
        } catch (err) {
          console.error('Failed to fetch subscriber count', err);
        }
      };
  
     
    fetchSubscriberCount();
  }, []);

const handleSubscribe = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await axios.post('http://localhost:4000/api/register/checker', { email });
    console.log('Checker response:', response.data); // Log the response data to inspect

    if (response.data.registered) {
      const subscribeResponse = await axios.post('http://localhost:4000/api/subscribers', { email });
      console.log('Subscribe response:', subscribeResponse.data); 

      if (subscribeResponse.data.success) {
        setSubscribed(true);
        setSubscriberCount(prevCount => prevCount + 1);
        setEmail('');
        setError('');
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        setError('Subscription failed. Please try again.');
        setTimeout(() => setError(''), 3000); 
      }
    } else {
      setError('You need to be registered to subscribe.');
      setTimeout(() => setError(''), 3000); 

    }
  } catch (err) {
    console.error('Subscription error:', err); 
    setError('Already subscribed!!');
    // setError('An error occurred. Please try again.');
    setTimeout(() => setError(''), 3000); 
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="newsletter-signup">
      <h2 className="stayed">Stay Updated</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
        {subscribed && <p>Subscribed successfully!</p>}
        {error && <p>{error}</p>}
      </form>
      <p>Subscribers: {subscriberCount}</p>
    </section>
  );
};

export default NewsletterSignup;
