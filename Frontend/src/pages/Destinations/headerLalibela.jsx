import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerLalibela.css';

export default function HeaderLalibela() {
  return (
    <div>
         <FixedHeader />
      <section className="lalibela-hero">
     
   
        <h1>About Lalibela</h1>
        <p className='discoverPara'>Discover the sacred beauty of Lalibela, Ethiopia</p>
        <p className='additionalText'>
          Explore the renowned rock-hewn churches, spiritual significance, and unique cultural experiences of Lalibela. Immerse yourself in the ancient history, vibrant traditions, and the warm hospitality of the local communities. Experience unforgettable adventures and create lifelong memories in this spiritual and historical gem of Ethiopia.
        </p>
        <BottomHeader/> 
      </section>
    </div>
  );
}
