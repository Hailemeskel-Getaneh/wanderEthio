import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader.jsx';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerHarar.css';

export default function HararHeader() {
  return (
    <div>
      <FixedHeader />

      <section className="harar-hero">
        <h1>About Harar</h1>
        <p className='discoverPara'>Discover the cultural heritage and vibrant history of Harar, Ethiopia</p>
        <p className='additionalText'>
          Explore the ancient walled city, colorful markets, and rich traditions of Harar. Immerse yourself in the historical significance, diverse culture, and the warm hospitality of the local communities. Experience the unique blend of old and new in this historical and cultural gem of Ethiopia.
        </p>
        <BottomHeader />
      </section>
    </div>
  );
}
