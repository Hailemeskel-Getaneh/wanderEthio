import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { BottomHeader } from '../Components/Header';
import '../styles/headerFilms.css';

const HeaderFilms = () => {
  return (
    <div>
        <FixedHeader />
        <section className="films-hero">
            <h1>Films of Ethiopia</h1>
            <p className='discoverPara'>Discover the rich and diverse film culture of Ethiopia</p>
            <p className='headercontent'>Explore a selection of films that showcase the history, culture, and stories of Ethiopia. From powerful dramas to engaging documentaries, immerse yourself in the cinematic world of Ethiopian filmmakers and their unique perspectives.</p>
            <BottomHeader/>
        </section>
    </div>
  );
};

export default HeaderFilms;
