import React from 'react';
import HeaderAbout from '../Components/headerAbout.jsx';
import "../styles/About.css";
import AboutImage from '../assets/images/backgrounds/newBakcgrounds/locatoinOfETO.jpg';
import MissionImage from '../assets/images/team/addisEthio.jpg';
import TeamImage from '../assets/images/backgrounds/makeTrip.jpg';
import ServiceImage from '../assets/images/backgrounds/Flight.jpg';
import HistoryImage from '../assets/images/backgrounds/naturebg1.jpg';
import ValuesImage from '../assets/images/backgrounds/hiking3.jpg';
import AwardsImage from '../assets/images/backgrounds/Geter.jpg';
import PartnersImage from '../assets/images/backgrounds/helping2.jpg';
import ContactImage from '../assets/images/backgrounds/bg4.jpg';

const AboutPage = () => {
  return (
    <div>
      <HeaderAbout />
  
      <div className="about-page">
        <div className="about-section">
          <h2 className="section-title">About Us</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={AboutImage} alt="About Us" />
            </div>
            <div className="section-text">
              <p>We are a team passionate about promoting sustainable tourism in Ethiopia. Our mission is to showcase the beauty and diversity of Ethiopian destinations while preserving their natural and cultural heritage.</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={MissionImage} alt="Our Mission" />
            </div>
            <div className="section-text">
              <p>Our mission is to promote responsible and sustainable tourism practices in Ethiopia by highlighting eco-friendly travel options, supporting local communities, and preserving the country's natural and cultural treasures.</p>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={ServiceImage} alt="Our Services" />
            </div>
            <div className="section-text">
              <p>We offer a range of services including guided tours, trekking expeditions, cultural experiences, and eco-friendly accommodations. Our team of experienced guides and travel experts ensures a memorable and sustainable travel experience for our clients.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2 className="section-title">Our Team</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={TeamImage} alt="Our Team" />
            </div>
            <div className="section-text">
              <p>Meet our dedicated team of travel enthusiasts, environmentalists, and cultural experts who are committed to promoting responsible tourism and showcasing the best of Ethiopia to the world.</p>
            </div>
          </div>
        </div>

        <div className="history-section">
          <h2 className="section-title">Our History</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={HistoryImage} alt="Our History" />
            </div>
            <div className="section-text">
              <p>The Ethiopian Tourism Organization was founded in [Year] with the aim of promoting Ethiopia as a top travel destination. Over the years, we have grown and evolved, always staying true to our mission of sustainable and responsible tourism. Our efforts have helped put Ethiopia on the map as a unique and culturally rich destination.</p>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={ValuesImage} alt="Our Values" />
            </div>
            <div className="section-text">
              <p>We are guided by values of sustainability, respect for local cultures, and dedication to providing high-quality travel experiences. We believe in protecting the environment, supporting local communities, and ensuring that tourism has a positive impact on the destinations we promote.</p>
            </div>
          </div>
        </div>

        <div className="awards-section">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={AwardsImage} alt="Awards & Recognition" />
            </div>
            <div className="section-text">
              <p>Our commitment to excellence has been recognized with numerous awards, including [List of Awards]. These accolades are a testament to our dedication to promoting Ethiopia as a premier travel destination while adhering to the highest standards of sustainability and customer service.</p>
            </div>
          </div>
        </div>

        <div className="partners-section">
          <h2 className="section-title">Our Partners</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={PartnersImage} alt="Our Partners" />
            </div>
            <div className="section-text">
              <p>We collaborate with a wide range of partners, including local businesses, international travel agencies, and conservation organizations. These partnerships are crucial to our success and help us provide comprehensive and sustainable travel experiences to our clients.</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-content">
            <div className="section-image">
              <img src={ContactImage} alt="Contact Us" />
            </div>
            <div className="section-text">
              <p>If you have any questions or would like to learn more about our services, please don't hesitate to contact us at [Contact Information]. Our team is here to assist you and ensure that your experience in Ethiopia is unforgettable.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='tempofooter'></div>
    </div>
  );
};

export default AboutPage;
