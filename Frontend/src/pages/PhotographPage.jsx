import React, { useState } from 'react';
import Header from '../Components/Header';
import '../styles/PhotographyPage.css';
import Landscape1 from '../assets/images/photos/landscape1.jpg';
import Landscape2 from '../assets/images/photos/landscape2.jpg';
import Landscape3 from '../assets/images/photos/landscape.jpg';
import Wildlife1 from '../assets/images/photos/wildLife.jpg';
import Wildlife2 from '../assets/images/photos/wildLife2.jpg';
import Wildlife3 from '../assets/images/photos/wildLife1.jpg';
import Culture1 from '../assets/images/photos/culture1.jpg';
import Culture2 from '../assets/images/photos/culture2.jpg';
import Culture3 from '../assets/images/photos/culture.jpg';

const PhotographyPage = () => {
  const [showLandscapes, setShowLandscapes] = useState(false);
  const [showCulturalEncounters, setShowCulturalEncounters] = useState(false);
  const [showWildlife, setShowWildlife] = useState(false);

  const toggleLandscapes = () => {
    setShowLandscapes(!showLandscapes);
  };

  const toggleCulturalEncounters = () => {
    setShowCulturalEncounters(!showCulturalEncounters);
  };

  const toggleWildlife = () => {
    setShowWildlife(!showWildlife);
  };

  return (

    <div>      <Header />
     <div className="photography-page">
      <section className="photography-section">
        <h1>Explore Ethiopia Through Photography</h1>
        <hr />
        <p className="photography-description">
          Immerse yourself in the beauty of Ethiopia and capture unforgettable moments through photography. From stunning landscapes to vibrant cultural scenes, Ethiopia offers endless opportunities for photographers to capture breathtaking images.
        </p>
        <div className="photo-opportunities">
          <div className="photo-opportunity">
            <h2 onClick={toggleLandscapes}>Breathtaking Landscapes</h2>
            <img src={Landscape1} alt="Landscape 1" className="photograph-image" />
            {showLandscapes && (
              <>
                <img src={Landscape2} alt="Landscape 2" className="photograph-image" />
                <img src={Landscape3} alt="Landscape 3" className="photograph-image" />
                <p>Discover majestic mountains, lush forests, and vast savannahs that offer stunning backdrops for your photos.</p>
              </>
            )}
            {showLandscapes ? (
              <button onClick={toggleLandscapes}>Show Less</button>
            ) : (
              <button onClick={toggleLandscapes}>Show More</button>
            )}
          </div>
          <div className="photo-opportunity">
            <h2 onClick={toggleCulturalEncounters}>Cultural Encounters</h2>
            <img src={Culture1} alt="Culture 1" className="photograph-image" />
            {showCulturalEncounters && (
              <>
                <img src={Culture2} alt="Culture 2" className="photograph-image" />
                <img src={Culture3} alt="Culture 3" className="photograph-image" />
                <p>Immerse yourself in the rich cultural heritage of Ethiopia and capture the vibrant traditions and colorful festivals.</p>
              </>
            )}
            {showCulturalEncounters ? (
              <button onClick={toggleCulturalEncounters}>Show Less</button>
            ) : (
              <button onClick={toggleCulturalEncounters}>Show More</button>
            )}
          </div>
          <div className="photo-opportunity">
            <h2 onClick={toggleWildlife}>Wildlife Photography</h2>
            <img src={Wildlife1} alt="Wildlife 1" className="photograph-image" />
            {showWildlife && (
              <>
                <img src={Wildlife2} alt="Wildlife 2" className="photograph-image" />
                <img src={Wildlife3} alt="Wildlife 3" className="photograph-image" />
                <p>Encounter diverse wildlife, from rare endemic species to majestic elephants and graceful birds, in Ethiopia's national parks and reserves.</p>
              </>
            )}
            {showWildlife ? (
              <button onClick={toggleWildlife}>Show Less</button>
            ) : (
              <button onClick={toggleWildlife}>Show More</button>
            )}
          </div>
        </div>
      </section>
      <section className="photo-tips-section">
        <h2>Photography Tips</h2>
        <ul className="photo-tips-list">
          <li>Make use of natural light for stunning outdoor shots, especially during sunrise and sunset.</li>
          <li>Experiment with different angles and perspectives to capture unique compositions.</li>
          <li>Take your time to explore and observe your surroundings to capture authentic moments.</li>
          <li>Don't forget to interact with locals and include human elements in your photos for storytelling.</li>
          <li>Carry essential photography gear, including a sturdy tripod and extra batteries, for extended photo sessions.</li>
        </ul>
      </section>
      <div className='tempofooter'></div>

    </div>
    </div>
   
  );
};

export default PhotographyPage;
