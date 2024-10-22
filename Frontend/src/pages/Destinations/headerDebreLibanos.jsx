import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerDebreLibanos.css';

export default function HeaderDebreLibanos() {
  return (
    <div>
      <FixedHeader />
      <section className="debre-libanos-hero">
        <h1>About Debre Libanos</h1>
        <p className='discoverPara'>Discover the sacred beauty of Debre Libanos, Ethiopia</p>
        <p className='additionalText'>
          Explore the renowned monastery, spiritual significance, and unique cultural experiences of Debre Libanos. Immerse yourself in the ancient history, vibrant traditions, and the warm hospitality of the local communities. Experience unforgettable adventures and create lifelong memories in this spiritual and historical gem of Ethiopia.
        </p>
        <BottomHeader />
      </section>
    </div>
  );
}
