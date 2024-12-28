import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/GalleryPage.css';
import Semen from "../../assets/images/semen/semen5.jpg";
import TrekkingImage from "../../assets/images/semen/trekkingSemen1.jpg";
import WildlifeImage from '../../assets/images/semen/wildLife1.jpg';
import CulturalImage from '../../assets/images/semen/cultureSemen3.jpg';
import AccommodationImage from '../../assets/images/semen/accomodateSemenL2.jpg';
import WeatherImage from '../../assets/images/semen/weatherSemen1.jpg';
import MuseumImage from '../../assets/images/semen/specialSeme.jpg';
import RestaurantImage from '../../assets/images/semen/resturantSemen.jpg';
import HotelImage from '../../assets/images/semen/hotelSemen.jpg';
import FaqImage from '../../assets/images/semen/trekkingSemen3.jpg';
import MapImage from '../../assets/images/semen/mapSemen.jpg';
import SpecialImage from '../../assets/images/semen/specialSeme.jpg';

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
    { path: Semen, description: 'Semen Mountains, one of Africa\'s most breathtaking mountain ranges.' },
    { path: TrekkingImage, description: 'Trekking in the stunning landscapes of the Semien Mountains.' },
    { path: WildlifeImage, description: 'Encounter unique wildlife species like the Gelada baboon in Semien Mountains.' },
    { path: CulturalImage, description: 'Explore the rich cultural experiences of Semien Mountains.' },
    { path: AccommodationImage, description: 'Comfortable accommodation options with scenic views in Semien Mountains.' },
    { path: WeatherImage, description: 'Experience the typical weather patterns of Semien Mountains.' },
    { path: MuseumImage, description: 'Visit museums showcasing the history and heritage of Semien Mountains.' },
    { path: RestaurantImage, description: 'Sample traditional Ethiopian cuisine at restaurants in Semien Mountains.' },
    { path: HotelImage, description: 'Luxurious hotel accommodations offering comfort in Semien Mountains.' },
    { path: FaqImage, description: 'Get answers to frequently asked questions about visiting Semien Mountains.' },
    { path: MapImage, description: 'Discover popular trekking routes and scenic spots on the map of Semien Mountains.' },
    { path: SpecialImage, description: 'Explore what makes Semien Mountains a unique and special destination.' }
  ];

  return (
    <div className="gallery-page">
      <h1 >Explore the beauty of Semien Mountains</h1>
      <hr className='gallery-hr' />
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;
