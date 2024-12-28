import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerAwash.css';

export default function AwashHeader() {
  return (
    <div>
        <FixedHeader />

      <section className="awash-hero">

        <h1>About Awash</h1>
        <p className='discoverPara'>Discover the natural beauty and rich history of Awash, Ethiopia</p>
        <p className='additionalText'>
          Explore the stunning landscapes, diverse wildlife, and unique cultural heritage of Awash. Immerse yourself in the scenic beauty, vibrant traditions, and the welcoming spirit of the local communities. Experience unforgettable adventures and create lifelong memories in this natural and cultural treasure of Ethiopia.
        </p>
      <BottomHeader/>
      </section>
    </div>
  );
}
