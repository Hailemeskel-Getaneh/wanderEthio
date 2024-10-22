import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/HeaderOmo.css';

export default function HeaderOmoValley() {
  return (
    <div>
            <FixedHeader />
      <section className="omo-valley-hero">
  
   
    
        <h1>About Omo Valley</h1>
        <p className='discoverPara'>Discover the cultural richness of Omo Valley, Ethiopia</p>
        <p className='additionalText'>
          Explore the vibrant cultures, stunning landscapes, and unique traditions of Omo Valley. Immerse yourself in the daily lives of the indigenous tribes, witness their colorful festivals, and enjoy the breathtaking scenery of this remarkable region. Experience unforgettable adventures and create lifelong memories in this captivating part of Ethiopia.
        </p>
        <BottomHeader/> 
      </section>
    </div>
  );
}
