import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/GalleryPage.css';
import SteleImage from "../../assets/images/Axum/stele.jpg";
import ChurchOfStMaryImage from "../../assets/images/Axum/churchOfStMary.jpg";
import ArchaeologicalMuseumImage from "../../assets/images/Axum/archaeologicalMuseum.jpg";
import MarketImage from '../../assets/images/Axum/market.jpg';
import AccommodationImage1 from '../../assets/images/Axum/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/Axum/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Axum/accommodation3.jpg';
import WeatherImage from '../../assets/images/Axum/weather.jpg';
import RestaurantImage1 from '../../assets/images/Axum/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Axum/restaurant2.jpg';
import RestaurantFoodImage from '../../assets/images/Axum/restaurantFood1.jpg';
import HotelImage1 from '../../assets/images/Axum/hotel1.jpg';
import HotelImage2 from '../../assets/images/Axum/hotel2.jpg';
import HotelImage3 from '../../assets/images/Axum/hotel3.jpg';
import FaqImage from '../../assets/images/Axum/faq.jpg';
import SpecialImage from '../../assets/images/Axum/special.jpg';

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
    { path: SteleImage, description: 'The towering Axum Stelae, a testament to the ancient kingdom of Axum.' },
    { path: ChurchOfStMaryImage, description: 'The Church of St. Mary of Zion, believed to house the Ark of the Covenant.' },
    { path: ArchaeologicalMuseumImage, description: 'The Archaeological Museum of Axum, showcasing artifacts from the ancient civilization.' },
    { path: MarketImage, description: 'The vibrant local market in Axum, bustling with activity.' },
    { path: AccommodationImage1, description: 'Comfortable accommodation option in Axum.' },
    { path: AccommodationImage2, description: 'Another accommodation option in Axum.' },
    { path: AccommodationImage3, description: 'A third accommodation option in Axum.' },
    { path: WeatherImage, description: 'Typical weather in Axum, with a view of the clear skies.' },
    { path: RestaurantImage1, description: 'A popular restaurant in Axum offering traditional Ethiopian cuisine.' },
    { path: RestaurantImage2, description: 'Another dining option in Axum with a cozy atmosphere.' },
    { path: RestaurantFoodImage, description: 'Delicious local food served in Axum restaurants.' },
    { path: HotelImage1, description: 'A luxury hotel in Axum with modern amenities.' },
    { path: HotelImage2, description: 'Another high-end hotel in Axum for a comfortable stay.' },
    { path: HotelImage3, description: 'A third luxury hotel in Axum, known for its excellent service.' },
    { path: FaqImage, description: 'Frequently Asked Questions about visiting Axum.' },
    { path: MapImage, description: 'Map of Axum and its attractions.' },
    { path: SpecialImage, description: 'Special tips for visitors to Axum.' }
  ];

  return (
    <div className="gallery-page">
      <h1>Explore the beauty of Axum</h1>
      <hr className='gallery-hr' />
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;
