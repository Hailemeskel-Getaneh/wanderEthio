import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerBale.css'

export default function BaleMountainsHeader() {
  return (
    <div>
      <FixedHeader />

      <section className="bale-mountains-hero"> 
        <h1>About Bale Mountains</h1> 
        <p className='discoverPara'>Discover the natural beauty and rich biodiversity of Bale Mountains, Ethiopia</p>
        <p className='additionalText'>
          Explore the breathtaking landscapes, diverse flora and fauna, and unique cultural experiences of Bale Mountains. Immerse yourself in the serene beauty, vibrant traditions, and warm hospitality of the local communities. Embark on thrilling adventures and make unforgettable memories in this natural and cultural gem of Ethiopia.
        </p>
        <BottomHeader />
      </section>
    </div>
  );
}
