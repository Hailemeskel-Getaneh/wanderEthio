import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import { BottomHeader } from './Header';
import '../styles/headerRegistration.css';

export default function HeaderLogin() {
  return (
    <div>
        <FixedHeader />

      <section className="registration-hero">

        <h1>Registration For More</h1>
        <p className='registration-discoverPara'>Login and Book Now to explore Ethiopia</p>
        <p className='registration-headercontentP'>Login now to gain access to exclusive offers, trip planning tools, and personalized recommendations for your Ethiopian adventure.</p>
       < BottomHeader/>
   
      </section>
    </div>
  );
}
