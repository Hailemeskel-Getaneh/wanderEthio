import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 
import '../styles/FIxedheader.css';
import FixedHeader from './FIxedHeader';

export function BottomHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = mockSearch(searchQuery);
    setSearchResult(results);
    setSearchQuery('');
  };

  const mockSearch = (query) => {
    const destinations = [
      'Addis Ababa',
      'Lalibela',
      'Gondar',
      'Axum',
      'Semen Mountains',
      'Bahirdar',
      'Awash NP',
      'Omo',
      'Bale',
      'Harar',
      'Debre Libanos',
      'Debre Damo',
      'Cultural Tours',
      'Wildlife Safaris',
      'Photography',
      'Films',
      'Foods',
      'Dressings',
      'Music'
    ];
    return destinations.filter(destination => destination.toLowerCase().includes(query.toLowerCase()));
  };

  const getLink = (destination) => {
    const routes = {
      'cultural tours': '/todo/Cultural-Tours',
      'wildlife safaris': '/todo/Wildlife',
      'photography': '/todo/Photography',
      'films': '/additionals/films',
      'foods': '/additionals/foods',
      'dressings': '/additionals/dressings',
      'music': '/additionals/musics',
    };
    const key = destination.toLowerCase().replace(/\s+/g, '-');
    return routes[key] || `/destination/${key}`;
  };

  return (
    <div className='topHeader'>
      <div>
        <section className="search-bar flex">
          <form onSubmit={handleSearch} className='flex'>
            <input
              type="text"
              placeholder="Search destinations, activities, tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </section>
        {searchResult.length > 0 && (
          <div className="search-results">
            <h4 style={{"color":"black"}}>Search Results:</h4>
            <div className="result-buttons">
              {searchResult.map((result, index) => (
                <Link to={getLink(result)} key={index}>
                  <button className="result-button">{result}</button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className='registerBtnDiv'>
        <button className='RegisterButton'>
          <Link to="/register">Register Now</Link>
        </button> 
      </div> 
    </div>
  );
}

export default function Header() {
  return (
    <div>    
      <FixedHeader/>
      <div className="home-hero">
        <h1>Welcome to Ethiopian Tourism Organization</h1>
        <p className='discoverPara'>Discover the beauty and diversity of Ethiopia</p>
        <p className='additionalText'>
          Explore rich cultural heritage, breathtaking landscapes, vibrant cities, and unique wildlife encounters. 
          Immerse yourself in ancient history, colorful traditions, and warm hospitality. 
          Experience unforgettable adventures and create lifelong memories in Ethiopia.
        </p>
        <BottomHeader />
      </div>
    </div>
  );
}
