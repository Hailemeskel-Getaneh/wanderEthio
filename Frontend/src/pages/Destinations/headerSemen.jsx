import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../../Components/FIxedHeader';
import { BottomHeader } from '../../Components/Header';
import  '../../styles/DestinationStyles/headerSemen.css';


export default function HeaderSemen() {
  return (

    <div>
    <FixedHeader/>

    <div className="semen-hero">
   

     <h1>About Semen Mountains,</h1>
     <p className='discoverPara'>Discover the beauty and diversity of the Semen Mountains, Ethiopia</p>
<p className='additionalText'>Explore the rich cultural heritage, breathtaking landscapes, and unique wildlife encounters of the Semen Mountains. Immerse yourself in ancient history, vibrant traditions, and the warm hospitality of the local communities. Experience unforgettable adventures and create lifelong memories in this stunning region of Ethiopia.</p>

<BottomHeader/>

   </div>
    </div>
    
  )
}
