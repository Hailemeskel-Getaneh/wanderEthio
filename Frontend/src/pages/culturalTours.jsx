import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCultural from './headerCulturalTours.jsx';
import '../styles/culturalTours.css';
import AxumImage from '../assets/images/Axum/axum1.jpg';
import LalibelaImage from '../assets/images/Lalibela/lalibela1.jpg';
import HararImage from '../assets/images/Harar/harar3.jpg';
import GondarImage from '../assets/images/Gondar/gondar1.jpg';
import KonsoImage from '../assets/images/Bale/bale1.jpg';
import TimkatImage from '../assets/images/Gondar/fasilidesBath1.jpg';

const CulturalTourPage = () => {
  return (
    <div>
      <HeaderCultural />
      <div className="cultural-container">
        <section className="culture-hero-section">
          <h1 className="hero-title">Ethiopian Cultural Tour Destinations</h1>
          <hr className="hero-divider" />
          <p className="hero-text">
            Immerse yourself in the rich cultural heritage, historical landmarks, and vibrant traditions of Ethiopia.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Axum</h2>
          <img src={AxumImage} alt="Axum" className="section-image" />
          <p className="section-text">
            Axum is a city of great historical and religious significance. Known for its towering obelisks, ancient churches, and archaeological sites, it is the legendary home of the Ark of the Covenant and the Queen of Sheba.
          </p>
        </section>
<hr />
        <section className="section">
          <h2 className="section-title">Lalibela</h2>
          <img src={LalibelaImage} alt="Lalibela" className="section-image" />
          <p className="section-text">
            Lalibela is renowned for its rock-hewn churches, carved from solid rock in the 12th century. These architectural marvels are a testament to Ethiopia's deep-rooted Christian tradition and are a UNESCO World Heritage site.
          </p>
        </section>
<hr />
        <section className="section">
          <h2 className="section-title">Harar</h2>
          <img src={HararImage} alt="Harar" className="section-image" />
          <p className="section-text">
            Harar is a walled city known for its historic Islamic culture and vibrant markets. It is considered the fourth holiest city in Islam, with numerous mosques, shrines, and a unique tradition of feeding hyenas.
          </p>
        </section>
<hr />
        <section className="section">
          <h2 className="section-title">Gondar</h2>
          <img src={GondarImage} alt="Gondar" className="section-image" />
          <p className="section-text">
            Gondar, often referred to as the 'Camelot of Africa', is known for its medieval castles and churches. The city's 17th-century royal enclosure, Fasil Ghebbi, is a UNESCO World Heritage site.
          </p>
        </section>
<hr />
        <section className="section">
          <h2 className="section-title">Konso</h2>
          <img src={KonsoImage} alt="Konso" className="section-image" />
          <p className="section-text">
            The Konso Cultural Landscape is a UNESCO World Heritage site, known for its stone-walled terraces and fortified settlements. It reflects the ingenuity and resilience of the Konso people.
          </p>
        </section>
<hr />
        <section className="section">
          <h2 className="section-title">Timkat Festival</h2>
          <img src={TimkatImage} alt="Timkat" className="section-image" />
          <p className="section-text">
            Timkat, the Ethiopian Orthodox celebration of Epiphany, is one of the most vibrant and colorful festivals in Ethiopia. It involves processions, prayers, and the reenactment of the baptism of Jesus in the Jordan River.
          </p>
        </section>

        <div className="register-section">
          <button className="register-button">
            <Link to="/register">Register for a Cultural Tour</Link>
          </button>
        </div>
      </div>
      <div  className='tempofooter'></div>
    </div>
  );
};

export default CulturalTourPage;
