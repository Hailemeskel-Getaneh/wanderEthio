import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/GalleryPage.css'; 

import Axum1 from '../assets/images/Axum/axum1.jpg';
import Bahirdar1 from '../assets/images/Bahirdar/bahirdar1.jpg';
import Denakil1 from '../assets/images/Denakil/denakil1.jpg';
import Gondar7 from '../assets/images/Gondar/castles.jpg';
import Harar4 from '../assets/images/Harar/harar4.jpg';
import Lalibela2 from '../assets/images/Lalibela/lalibela2.jpg';
import Omo6 from '../assets/images/omo/omo6.jpg';
import FasilidesBathImage from '../assets/images/Gondar/fasilidesBath.jpg';
import TrekkingImage from '../assets/images/semen/trekkingSemen2.jpg';
import BeteGiyorgis from '../assets/images/Lalibela/headerImage1.jpg';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-gallery">
      <button className="arrow-btn prev-btn" onClick={handlePrev}>{'<'}</button>
      <div className="image-container">
        <img className="gallery-image" src={images[currentImageIndex].path} alt={`Image ${currentImageIndex}`} />
        <p className="image-description">{images[currentImageIndex].description}</p>
      </div>
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
      { path: FasilidesBathImage, description: "The Fasilides Bath in Gondar" },
      { path: Axum1, description: 'The monument of Axum, a historical city in Ethiopia known for its ancient ruins and obelisks.' },
    { path: Bahirdar1, description: 'The Beautiful Blue Nile Falls.' },
    { path: Denakil1, description: 'Danakil Depression, one of the hottest and lowest places on Earth, known for its colorful landscapes and unique geological formations.' },
    { path: Gondar7, description: 'The amazing and ancient, Fassilades Castles in Gondar city, northern Ethiopia known for its medieval castles and churches.' },
    { path: Harar4, description: 'Harar, a historic city in eastern Ethiopia known for its ancient walls and narrow alleyways.' },
    { path: Lalibela2, description: 'Lalibela, a town in northern Ethiopia known for its rock-cut churches dating back to the 12th and 13th centuries.' },
    { path: Omo6, description: 'Omo Valley, a region in southern Ethiopia known for its diverse ethnic groups and traditional cultures.' },
  
    { path: TrekkingImage, description: "The Semien Mountains, The places of trekking with beautiful nature and wild life" },
    { path: BeteGiyorgis, description: "Bete-Giyorgis, the finest rock hewn church in Lalibela" }
  ];

  return (
    <div className="gallery-page">
      <div className='galleryRowUp' />
      <h1 className='typing'>Explore Ethiopian Tourist Destinations</h1>
      <div className='galleryRowBottom' />
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;
