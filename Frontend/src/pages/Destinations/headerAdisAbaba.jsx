import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerAddisAbaba.css';

export default function HeaderAddisAbaba() {
  return (
    <div>
      <FixedHeader />
      <section className="addis-ababa-hero">
        <h1>About Addis Ababa</h1>
        <p className="discoverPara">Discover the vibrant heart of Ethiopia</p>
        <p className="additionalText">
          Explore the bustling streets, rich history, and diverse cultural experiences of Addis Ababa. Immerse yourself in the capital city's unique blend of ancient traditions and modern influences. Enjoy the warm hospitality, visit historical landmarks, and create unforgettable memories in this dynamic metropolis.
        </p>
        <BottomHeader />
      </section>
    </div>
  );
}
