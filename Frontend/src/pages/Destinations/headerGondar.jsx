import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerGondar.css';

export default function HeaderGondar() {
  return (
    <div>
          <FixedHeader />
      <section className="gondar-hero">

        <h1>About Gondar</h1>
        <p className='discoverPara'>Discover the historical splendor of Gondar, Ethiopia</p>
        <p className='additionalText'>
          Explore the rich historical heritage, majestic castles, and unique cultural experiences of Gondar. Immerse yourself in ancient history, vibrant traditions, and the warm hospitality of the local communities. Experience unforgettable adventures and create lifelong memories in this enchanting city of Ethiopia.
        </p>
       <BottomHeader/> 
      </section>
    </div>
  );
}
