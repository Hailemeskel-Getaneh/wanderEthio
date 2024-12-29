import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import { BottomHeader } from './Header';
import '../styles/headerRegistration.css';

export default function HeaderRegistration() {
  return (
    <div>
        <FixedHeader />

      <section className="registration-hero">

        <h1>Registration For More</h1>
        <p className='registration-discoverPara'>Sign up to explore Ethiopia</p>
        <p className='registration-headercontentP'>Register now to gain access to exclusive offers, trip planning tools, and personalized recommendations for your Ethiopian adventure.</p>
       {/* < BottomHeader/> */}
   
      </section>
    </div>
  );
}
