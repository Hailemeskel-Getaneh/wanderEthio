import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader.jsx';
import { BottomHeader } from '../../Components/Header';
import '../../styles/DestinationStyles/headerDebreDamo.css'; // Adjust the CSS import if necessary

export default function DebreDamoHeader() {
  return (
    <div>
      <FixedHeader />
      <section className="debre-damo-hero">
        <h1>About Debre Damo</h1>
        <p className='discoverPara'>Discover the secluded monastery of Debre Damo, Ethiopia</p>
        <p className='additionalText'>
          Experience the unique monastery perched on a cliff, dating back to ancient times. Explore its historical significance, architectural marvels, and the serene environment that captivates visitors from around the world.
        </p>
        <BottomHeader />
      </section>
    </div>
  );
}
