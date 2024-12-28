import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { BottomHeader } from '../Components/Header';
import '../styles/headerMusics.css';

const HeaderMusic = () => {
  return (
    <div>
        <FixedHeader />
        <section className="music-hero">
            <h1>Music of Ethiopia</h1>
            <p className='discoverPara'>Discover the rich and diverse music culture of Ethiopia</p>
            <p className='headercontentP'>Explore a selection of music that showcases the history, culture, and stories of Ethiopia. From traditional melodies to contemporary beats, immerse yourself in the auditory world of Ethiopian musicians and their unique sounds.</p>
            <BottomHeader/>
        </section>
    </div>
  );
};

export default HeaderMusic;
