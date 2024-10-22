import React from 'react';
import  FixedHeader  from '../Components/FIxedHeader';
import { BottomHeader } from './Header';
import '../styles/headerAskQuestion.css';  

export default function HeaderAskQuestion() {
  return (
    <div>
      <FixedHeader/>
      <section className="ask-question-hero"> 


        <h1>Ask a Question</h1>  
        <p className='discoverPara'>Get answers to plan your trip</p>  
        <p className='headercontentP'>Have questions about visiting Ethiopia? Our team is here to help. Ask us anything related to travel, accommodations, attractions, and more!</p>  
     <BottomHeader/>
      </section>
    </div>
  );
}
