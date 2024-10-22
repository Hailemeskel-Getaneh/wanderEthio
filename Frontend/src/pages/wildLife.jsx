import React from 'react';
import '../styles/wildLife.css';
import SemenWildlife from "../assets/images/semen/wildLife.jpg";
import BaleWildLife from '../assets/images/Bale/wildLife.jpg';
import OmoWildLife from "../assets/images/omo/OmoWildLife.jpg"
import HeaderWildlifeSafari from './headerWildLife';

const EthiopianWildlifeSafarisPage = () => {
  return (
<div>
  <HeaderWildlifeSafari/>
<div className="ethiopian-wildlife-safaris-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the Wonders of Ethiopian Wildlife</h1>
          <p>Embark on an unforgettable journey through the diverse landscapes of Ethiopia and encounter its rich wildlife.</p>
          <a href="/" className="explore-button">Explore Destinations </a>
        </div>
      </section>
     <hr className='wildLife-hr'/>
      <section id="highlights" className="highlighted-destinations">
        <div className="destination">
          <img src={SemenWildlife} alt="Simien Mountains National Park" />
          <div className="destination-info">
            <h2>Simien Mountains National Park</h2>
            <p>Explore the breathtaking beauty of the Simien Mountains, home to rare wildlife species such as the Ethiopian wolf and Gelada baboon.</p>
          </div>
        </div>
        <div className="destination">
          <img src={BaleWildLife} alt="Bale Mountains National Park" />
          <div className="destination-info">
            <h2>Bale Mountains National Park</h2>
            <p>Discover the stunning landscapes and unique ecosystems of Bale Mountains, where you can spot endemic species like the Ethiopian mountain nyala.</p>
          </div>
        </div>
        <div className="destination">
          <img src={OmoWildLife} alt="Omo National Park" />
          <div className="destination-info">
            <h2>Omo National Park</h2>
            <p>Experience the wildlife-rich savannas and riverine forests of Omo National Park, home to diverse birdlife and large mammal populations.</p>
          </div>
        </div>
      </section>
     <hr className='wildLife-hr'/>
      <section className="feature-section">
        <div className="feature">
          <i className="fas fa-compass"></i>
          <h3>Guided Tours</h3>
          <p>Join expert guides on immersive wildlife safaris and gain insights into the unique ecosystems and conservation efforts in Ethiopia.</p>
        </div>
        <div className="feature">
          <i className="fas fa-camera"></i>
          <h3>Photography Expeditions</h3>
          <p>Capture stunning wildlife moments with specialized photography expeditions led by professional photographers.</p>
        </div>
        <div className="feature">
          <i className="fas fa-hiking"></i>
          <h3>Hiking Adventures</h3>
          <p>Embark on thrilling hiking adventures through Ethiopia's national parks and witness wildlife in its natural habitat.</p>
        </div>
      </section>
     <hr className='wildLife-hr'/>
      <section className="cta-section">
        <div className="cta-content">
          <h2>Book Your Ethiopian Wildlife Safari Today</h2>
          <p>Plan your dream wildlife safari in Ethiopia and experience the wonders of its natural world.</p>
          <a href="/booking" className="book-now-button">Book Now</a>
        </div>
      </section>
    </div>
</div>
    
  );
};

export default EthiopianWildlifeSafarisPage;
