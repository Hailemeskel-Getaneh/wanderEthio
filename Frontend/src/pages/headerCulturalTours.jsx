import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { BottomHeader } from '../Components/Header';
import '../styles/headerCulturalTours.css';

const HeaderHiking = () => {
  return (
    <div>
        <FixedHeader />
      <section className="cultural-tours-hero">
  
        <h1>About Cultural Tours in Ethiopia</h1> 
        <p className='discoverPara'>Discover the beauty and adventure of cultural tours in Ethiopia</p> 
        <p className='headercontentP'>Explore breathtaking trails, diverse landscapes, and unique wildlife encounters. Immerse yourself in the natural beauty of Ethiopia's mountains, forests, and valleys. Experience the thrill of adventure and create unforgettable memories while hiking in Ethiopia.</p>
          
      <BottomHeader/>
      </section>
    </div>
  );
};

export default HeaderHiking;
