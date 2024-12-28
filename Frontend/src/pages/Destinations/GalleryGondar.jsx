import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/GalleryPage.css';
import GondarMainImage from "../../assets/images/Gondar/gondar1.jpg";
import CastlesImage from "../../assets/images/Gondar/castles.jpg";
import DebreBerhanSelassieImage from '../../assets/images/Gondar/slassie.jpg';
import FasilidesBathImage from '../../assets/images/Gondar/fasilidesBath.jpg';
import MarketImage from '../../assets/images/Gondar/market.jpg';
import AirPort from '../../assets/images/Gondar/airport.jpg';
import AccommodationImage2 from '../../assets/images/Gondar/accommodation2.jpg';
import WeatherImage from '../../assets/images/Gondar/weather.jpg';
import MuseumImage from '../../assets/images/Gondar/museum.jpg';
import RestaurantImage1 from '../../assets/images/Gondar/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Gondar/restaurant6.jpg';
import HotelImage1 from '../../assets/images/Gondar/hotel1.jpg';
import HotelImage2 from '../../assets/images/Gondar/hotel2.jpg';
import HotelImage3 from '../../assets/images/Gondar/hotel3.jpg';
import KuskuamMariam from '../../assets/images/Gondar/kuskuamMariam.jpg';
import GondarImage1 from '../../assets/images/Gondar/gondar4.jpg';
import GondarImage2 from '../../assets/images/Gondar/gondar2.jpg';
import GondarImage3 from '../../assets/images/Gondar/gondar5.jpg';
import GondarImage4 from '../../assets/images/Gondar/gondar7.jpg';
import MapImage from '../../assets/images/Gondar/map.jpg';
import SpecialImage from '../../assets/images/Gondar/special.jpg';

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

const GondarGalleryPage = () => {
  const images = [
    { path: GondarMainImage, description: 'The historic city of Gondar, known for its rich cultural heritage.' },
    { path: CastlesImage, description: 'The famous castles of Gondar, often referred to as the "Camelot of Africa".' },
    { path: DebreBerhanSelassieImage, description: 'The Debre Berhan Selassie Church, renowned for its beautiful ceiling art.' },
    { path: FasilidesBathImage, description: 'Fasilides Bath, a historical site used for religious ceremonies.' },
    { path: MarketImage, description: 'The vibrant market in Gondar, full of local produce and crafts.' },
    { path: AirPort, description: 'The airport in Gondar, a gateway for visitors.' },
    { path: AccommodationImage2, description: 'A comfortable accommodation option in Gondar.' },
    { path: WeatherImage, description: 'Typical weather in Gondar, often sunny and warm.' },
    { path: MuseumImage, description: 'The museum in Gondar, showcasing local artifacts and history.' },
    { path: RestaurantImage1, description: 'A popular restaurant in Gondar serving traditional Ethiopian cuisine.' },
    { path: RestaurantImage2, description: 'Another dining option in Gondar, offering a variety of dishes.' },
    { path: HotelImage1, description: 'A luxury hotel in Gondar with modern amenities.' },
    { path: HotelImage2, description: 'Another high-end hotel in Gondar, known for its excellent service.' },
    { path: HotelImage3, description: 'A third luxury hotel in Gondar, providing top-notch accommodation.' },
    { path: KuskuamMariam, description: 'The Kuskuam Mariam Church, an important religious site in Gondar.' },
    { path: GondarImage1, description: 'A scenic view of Gondar, capturing its unique architecture.' },
    { path: GondarImage2, description: 'Another beautiful view of Gondar, highlighting its historical buildings.' },
    { path: GondarImage3, description: 'Gondar’s landscape, a blend of natural beauty and historical sites.' },
    { path: GondarImage4, description: 'Yet another captivating view of Gondar, emphasizing its rich history.' },
    { path: MapImage, description: 'Map of Gondar and its various attractions.' },
    { path: SpecialImage, description: 'Special tips and highlights for visitors to Gondar.' }
  ];

  return (
    <div className="gallery-page">
      <h1>Explore the Beauty and History of Gondar</h1>
      <hr className='gallery-hr' />
      <ImageGallery images={images} />
    </div>
  );
};

export default GondarGalleryPage;
