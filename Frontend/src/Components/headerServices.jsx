import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import { BottomHeader } from './Header';
import  '../styles/headerServices.css';


export default function HeaderAbout() {
  return (
    <div>
    <FixedHeader/>
    <section className="service-hero">
  
  
      <h1>Services in Ethiopian Tourism Organization</h1>
<p className='discoverPara'>Discover the beauty and diversity of Ethiopia</p>
<p className='additionalText'>Explore rich cultural heritage, breathtaking landscapes, vibrant cities, and unique wildlife encounters. Immerse yourself in ancient history, colorful traditions, and warm hospitality.</p>

<BottomHeader/> 
    </section></div>
  )
}
