import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/GalleryPage.css'
import LalibelaMainImage from "../../assets/images/Lalibela/lalibela1.jpg";
import RockHewnChurchesImage from "../../assets/images/Lalibela/rochHewnChurch1.jpg";
import RockHewnChurchesImage1 from "../../assets/images/Lalibela/rochHewnChurch3.jpg";
import RockHewnChurchesImage2 from "../../assets/images/Lalibela/rochHewnChurches.jpg";
import BetGiyorgisImage from '../../assets/images/Lalibela/beteGiyorgis.jpg';
import MarketImage from '../../assets/images/Lalibela/market.jpg';
import AccommodationImage1 from '../../assets/images/Lalibela/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/Lalibela/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Lalibela/accommodation3.jpg';
import WeatherImage from '../../assets/images/Lalibela/weather.jpg';
import MuseumImage from '../../assets/images/Lalibela/museum.jpg';
import RestaurantImage1 from '../../assets/images/Lalibela/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Lalibela/restaurant2.jpg';
import RestaurantImage3 from '../../assets/images/Lalibela/restaurant3.jpg';
import HotelImage1 from '../../assets/images/Lalibela/hotel1.jpg';
import HotelImage2 from '../../assets/images/Lalibela/hotel2.jpg';
import HotelImage3 from '../../assets/images/Lalibela/hotel3.jpg';
import FaqImage from '../../assets/images/Lalibela/faq.jpg';
import MapImage from '../../assets/images/Lalibela/map.jpg';
import SpecialImage from '../../assets/images/Lalibela/special.jpg';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-gallery">
      <button className="arrow-btn prev-btn" onClick={handlePrev}>{'<'}</button>
      <img className="gallery-image" src={images[currentImageIndex].path} alt={`Image ${currentImageIndex}`} />
      <p className="image-description">{images[currentImageIndex].description}</p>
      <button className="arrow-btn next-btn" onClick={handleNext}>{'>'}</button>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
};

const GalleryPage = () => {
  const images = [
    { path: LalibelaMainImage, description: 'The beautiful rock-hewn church in Lalibela.' },
    { path: RockHewnChurchesImage, description: 'Rock-Hewn Church in Lalibela.' },
    { path: RockHewnChurchesImage1, description: 'Another view of the Rock-Hewn Churches in Lalibela.' },
    { path: RockHewnChurchesImage2, description: 'More of the Rock-Hewn Churches in Lalibela.' },
    { path: BetGiyorgisImage, description: 'Bet Giyorgis, the finest rock-hewn church in Lalibela.' },
    { path: MarketImage, description: 'The vibrant market in Lalibela.' },
    { path: AccommodationImage1, description: 'Comfortable accommodation option in Lalibela.' },
    { path: AccommodationImage2, description: 'Another accommodation option in Lalibela.' },
    { path: AccommodationImage3, description: 'A third accommodation option in Lalibela.' },
    { path: WeatherImage, description: 'Typical weather in Lalibela.' },
    { path: MuseumImage, description: 'Museum in Lalibela showcasing local artifacts.' },
    { path: RestaurantImage1, description: 'A popular restaurant in Lalibela.' },
    { path: RestaurantImage2, description: 'Another dining option in Lalibela.' },
    { path: RestaurantImage3, description: 'Yet another place to eat in Lalibela.' },
    { path: HotelImage1, description: 'A luxury hotel in Lalibela.' },
    { path: HotelImage2, description: 'Another high-end hotel in Lalibela.' },
    { path: HotelImage3, description: 'A third luxury hotel in Lalibela.' },
    { path: FaqImage, description: 'Frequently Asked Questions about visiting Lalibela.' },
    { path: MapImage, description: 'Map of Lalibela and its attractions.' },
    { path: SpecialImage, description: 'Special tips for visitors to Lalibela.' }
  ];

  return (
    <div className="gallery-page">
      <h1 >Explore the beauty of Lalibela</h1>
      <hr className='gallery-hr' />
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;
