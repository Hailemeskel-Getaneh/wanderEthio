import React from 'react';
import '../styles/Footer.css'; // Import your CSS file for styling

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section-contact">
                    <h3>Contact Us</h3>
                    <p>
                        Address: Churchill Avenue, Addis Ababa, Ethiopia <br />
                        Phone: +251 956 319 463<br />
                        Email: info@ethiopiantourism.org
                    </p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/">Destinations</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/booking">Booking Now</a></li>
                        <li><a href="/register">Register Now</a></li>
                        <li><a href="/ask">Ask Question</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                    <a href="https://www.facebook.com/ethiotourismorg" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
<a href="https://twitter.com/ethiotourismorg" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
<a href="https://www.instagram.com/ethiotourismorg" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-section payments">
                    <h3>Payment Methods</h3>
                    <div className="payment-icons">
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fab fa-cc-paypal"></i>
                    </div>
                    <p>We accept Visa, MasterCard, American Express, and PayPal.</p>
                </div>
                <div className="footer-section important-info">
                    <h3>Important Information</h3>
                    <p>
                        Please read our <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>.
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ethiopian Tourism Organization (ETO) - All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
