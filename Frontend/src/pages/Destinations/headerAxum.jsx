import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerAxum.css';

export default function AxumHeader() {
  return (
    <div>
        <FixedHeader />

      <section className="axum-hero">

        <h1>About Axum</h1>
        <p className='discoverPara'>Discover the ancient wonders of Axum, Ethiopia</p>
        <p className='additionalText'>
          Explore the historic ruins, ancient obelisks, and rich cultural heritage of Axum. Immerse yourself in the profound history, vibrant traditions, and the welcoming spirit of the local communities.
        </p>
        <BottomHeader/>
      </section>
    </div>
  );
}
