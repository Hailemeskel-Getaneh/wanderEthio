import React from 'react';
import HeaderHiking from './headerHiking.jsx';
import '../styles/hinkngPage.css';
import SimienMountainsImage from '../assets/images/semen/semen1.jpg';
import BaleMountainsImage from '../assets/images/Bale/bale1.jpg';
import DanakilDepressionImage from '../assets/images/Denakil/denakil2.jpg';
import OmoValleyImage from '../assets/images/omo/omo10.jpg';
import BlueNileFallsImage from '../assets/images/BlueNile/The-Blue-Nile-Falls.jpg';

const HikingPage = () => {
  return (
    <div>

<HeaderHiking/>
    <div className="hiking-container">
      <section className="hero-section-hiking">
        <h1 className='hiking-h1'>Ethiopian Hiking Destinations</h1>
        <hr className='hiking-hr'/>
        <h2 className="hiking-hero-text">
          Discover the breathtaking hiking trails, diverse landscapes, and unique wildlife of Ethiopia.
        </h2>
      </section>
      <h2>Simien Mountains National Park</h2>
      <section className="section flex ">
      
        <img src={SimienMountainsImage} alt="Simien Mountains" className="hiking-section-image " />
        <p className="section-text-p">
          The Simien Mountains offer some of the most spectacular trekking routes in Africa. Known for its jagged mountain peaks, deep valleys, and unique wildlife such as the Gelada baboon, this UNESCO World Heritage site is a hiker's paradise.
        </p>
      </section>
      <h2>Bale Mountains National Park</h2>

      <section className="section flex">
        <img src={BaleMountainsImage} alt="Bale Mountains" className="hiking-section-image" />
        <p className="section-text-p">
          The Bale Mountains are renowned for their beautiful landscapes and diverse ecosystems. Hikers can explore the Harenna Forest, the Sanetti Plateau, and encounter endemic species like the Ethiopian wolf and the mountain nyala.
        </p>
      </section>
      <h2>Danakil Depression</h2>

      <section className="section flex">
        <img src={DanakilDepressionImage} alt="Danakil Depression" className="hiking-section-image" />
        <p className="section-text-p">
          One of the hottest and most inhospitable places on Earth, the Danakil Depression offers a surreal and adventurous hiking experience. The colorful sulfur springs, salt flats, and the Erta Ale volcano make it a unique destination for intrepid travelers.
        </p>
      </section>
      <h2>Omo Valley</h2>
 
      <section className="section flex">
        <img src={OmoValleyImage} alt="Omo Valley" className="hiking-section-image" />
        <p className="section-text-p">
          The Omo Valley is not only a hiking destination but also a cultural journey. Home to many indigenous tribes, it offers a unique blend of scenic beauty and cultural encounters, making your hiking experience truly unforgettable.
        </p>
      </section>
      <h2>Blue Nile Falls</h2>

      <section className="section flex">
        <img src={BlueNileFallsImage} alt="Blue Nile Falls" className="hiking-section-image" />
        <p className="section-text-p">
          Also known as "Tis Issat" (Smoking Water), the Blue Nile Falls is a stunning waterfall on the Blue Nile River. The short hike to the falls provides spectacular views and a refreshing experience in the midst of nature.
        </p>
      </section>
      <div className='tempofooter'></div>
    </div>
    </div>
   
  );
};

export default HikingPage;
