import React from 'react';
import FixedHeader from '../Components/FIxedHeader';
import { BottomHeader } from '../Components/Header';
// import '../styles/headerDressing.css';
import '../styles/DressingsPage.css';

import TraditionalDressImage from '../assets/images/Dressing/traditional-dress.jpg';
import MenDressImage from '../assets/images/Dressing/men-dress.jpg';
import WomenDressImage from '../assets/images/Dressing/women-dress.jpg';
import CulturalEventImage from '../assets/images/Dressing/cultural-event.jpg';
import ModernEthiopianImage from '../assets/images/Dressing/modern-ethiopian2.jpg';
import JewelryImage from '../assets/images/Dressing/jewelry.jpg';

const dressings = [
    { id: 1, name: 'Traditional Ethiopian Dress', description: 'Beautifully woven cotton dresses known as "Habesha Kemis" for women, and "Jano" for men, often adorned with intricate patterns and embroidery.', image: TraditionalDressImage },
    { id: 2, name: 'Men\'s Traditional Dress', description: 'Traditional attire for men, including the "Jano" and often accompanied by a "Gabi", a large shawl.', image: MenDressImage },
    { id: 3, name: 'Women\'s Traditional Dress', description: 'Elegant "Habesha Kemis" dresses, typically white with colorful embroidered borders, worn during cultural celebrations and religious events.', image: WomenDressImage },
    { id: 4, name: 'Cultural Event Dress', description: 'Special dresses worn during cultural events and festivities, showcasing the rich heritage and traditions of Ethiopia.', image: CulturalEventImage },
    { id: 5, name: 'Modern Ethiopian Fashion', description: 'A blend of traditional and contemporary styles, reflecting the evolving fashion scene in Ethiopia.', image: ModernEthiopianImage },
    { id: 6, name: 'Traditional Jewelry', description: 'Exquisite jewelry pieces that complement traditional Ethiopian attire, often made of gold and silver.', image: JewelryImage },
    // Add more dressing items as needed
];

const HeaderDressing = () => {
  return (
    <div>
        <FixedHeader />
        <section className="dressing-hero">
            <h1>Ethiopian Ways of Dressing</h1>
            <p className='discoverPara'>Discover the rich and diverse dressing traditions of Ethiopia</p>
            <p className='headercontentP'>Explore a variety of traditional and modern attire that showcase the unique cultural heritage of Ethiopia. From intricate woven dresses to contemporary fashion, immerse yourself in the beautiful world of Ethiopian dressing.</p>
        <BottomHeader/>
        </section>
    </div>
  );
};

const Dressing = () => {
    return (
        <div>
            <HeaderDressing />
            <div className="dressing-container">
                <h2>Ethiopian Dressing</h2>
                <div className="dressing-items">
                    {dressings.map(dress => (
                        <div className="dressing-item" key={dress.id}>
                            <img src={dress.image} alt={dress.name} className="dressing-image" />
                            <div className="dressing-description">
                                <h3>{dress.name}</h3>
                                <p>{dress.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='tempofooter'></div>
            </div>
        </div>
    );
}

export default Dressing;
