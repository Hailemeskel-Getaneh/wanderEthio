import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerBahidar.css';

export default function HeaderBahirdar() {
  return (
    <div>
        <FixedHeader />

      <section className="bahirdar-hero">
        <h1>Ethiopian Tourism Organization</h1>
  
        <h1>About Bahir Dar</h1>
        <p className='discoverPara'>Discover the stunning beauty of Bahir Dar, Ethiopia</p>
        <p className='additionalText'>
          Explore the picturesque landscapes, rich history, and cultural treasures of Bahir Dar. Visit the magnificent Blue Nile Falls, serene Lake Tana, and the ancient monasteries that dot the lake's islands. Experience the vibrant markets, local cuisine, and warm hospitality of the Bahir Dar community. Create unforgettable memories in this beautiful and historic city.
        </p>
       <BottomHeader/>
      </section>
    </div>
  );
}
