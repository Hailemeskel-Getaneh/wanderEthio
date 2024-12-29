import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import { BottomHeader } from './Header';
import  '../styles/headerContact.css';


export default function HeaderAbout() {
  return (
    <div>
      <FixedHeader/>
      <section className="contact-hero">
   


      <h1 >Contact us For more Informations</h1>
<p className='discoverPara'>Discover the beauty and diversity of Ethiopia</p>
<p className='headercontent'>Explore rich cultural heritage, breathtaking landscapes, vibrant cities, and unique wildlife encounters. Immerse yourself in ancient history, colorful traditions, and warm hospitality. Experience unforgettable adventures and create lifelong memories in Ethiopia.</p>
<BottomHeader/>
    </section></div>
  )
}
