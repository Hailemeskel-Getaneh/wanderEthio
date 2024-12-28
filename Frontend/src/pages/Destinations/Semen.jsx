import React, { useState } from 'react';
import HeaderSemen from '../../pages/Destinations/headerSemen.jsx'
import SemenGallery from '../../pages/Destinations/GallerySemen.jsx'
import "../../styles/DestinationStyles/Semen.css";
import Semen from "../../assets/images/semen/semen5.jpg";
import TrekkingImage from "../../assets/images/semen/trekkingSemen1.jpg";
import WildlifeImage from '../../assets/images/semen/wildLife1.jpg';
import CulturalImage from '../../assets/images/semen/cultureSemen3.jpg';
import AccommodationImage from '../../assets/images/semen/accomodateSemenL2.jpg';
import AccommodationImage1 from '../../assets/images/semen/accomodateSemenL1.jpg';
import AccommodationImage2 from '../../assets/images/semen/accomodateSemenL.jpg';
import WeatherImage from '../../assets/images/semen/weatherSemen1.jpg';
import MuseumImage from '../../assets/images/semen/specialSeme.jpg';
import RestaurantImage from '../../assets/images/semen/resturantSemen.jpg';
import RestaurantImage1 from '../../assets/images/semen/Restaurant.jpg';
import RestaurantImage2 from '../../assets/images/semen/Restaurant2.jpg';
import HotelImage from '../../assets/images/semen/hotelSemen.jpg';
import HotelImage1 from '../../assets/images/semen/limalimoLodge.jpg';
import HotelImage2 from '../../assets/images/semen/lodgeSemen2.jpg';
import FaqImage from '../../assets/images/semen/trekkingSemen3.jpg';
import MapImage from '../../assets/images/semen/mapSemen.jpg';
import SpecialImage from '../../assets/images/semen/specialSeme.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const SemenMountainsPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = index => {
    setFaqOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  const handleWatchVideo = () => {
    setShowVideo(true);
  };

const faqs = [
  { question: "Is semen safe for tourists?", answer: "Yes, semen is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings. It's important to respect local customs and dress modestly, especially when visiting religious sites. By staying informed and following basic safety guidelines, you can enjoy a safe and memorable visit to semen." },
  { question: "What currency is used in semen?", answer: "The Ethiopian Birr (ETB) is the currency used in semen. It's recommended to carry some cash, as not all establishments accept credit cards. ATMs are available in the city, but it's a good idea to have enough local currency for small purchases and tips. Currency exchange services are also available at banks and hotels. Make sure to exchange money at authorized locations to avoid counterfeit bills.           " },
  { question: " What languages are spoken in semen?", answer: "Amharic is the official language, but English is widely spoken in tourist areas.  English is taught in schools, so most young people and those working in the tourism industry can communicate effectively in English. Learning a few basic phrases in Amharic  can enhance your travel experience and help you connect with the local community." }
]

  return (
    <div className='dortumend'>
      <HeaderSemen />
      <div className="the-semen-container">
      <h1 className="semen-title">Simien Mountains</h1>

        <div className="semen-main-image-container">
          
    <SemenGallery/>
    <div className='tempofooter'></div>
        </div>
        <h2 className="semen-section-title">About Simien Mountains</h2>
        <hr />
        <div className="semen-section-about">
      
          <p className="semen-section-text">
            The Simien Mountains, located in northern Ethiopia, are part of the Ethiopian Highlands. They are a UNESCO World Heritage Site and one of Africa's most breathtaking mountain ranges. The Simiens are known for their dramatic scenery, diverse wildlife, and unique flora. The mountain range offers stunning views, wildlife encounters, and trekking adventures for visitors.
          </p>
        </div>
        <h2 className="semen-section-title">Getting There</h2>
        <hr />
        <div className="semen-section-getting-there">
         
          <p className="semen-section-text">
            The nearest major city to the Simien Mountains is Gondar, which has an airport with domestic flights from Addis Ababa. From Gondar, visitors can arrange transportation to Debark, the gateway to the national park. From Debark, guided tours and treks can be organized to explore the mountains. Visitors can choose from various transportation options, including buses, private cars, and organized tours.
          </p>
        </div>
            <h2 className="semen-section-title">Things to Do</h2>
          <hr />
        <div className="semen-section-things-to-do">
      
          <p className="semen-section-text">
            The Simien Mountains offer some of the best trekking opportunities in Africa, with trails ranging from easy walks to challenging multi-day hikes. Visitors can enjoy wildlife spotting along the trekking routes, encountering unique species such as the Gelada baboon, Ethiopian wolf, and Walia ibex. Cultural experiences, including visits to local villages and cultural sites, are also available for travelers.
          </p>
          <div className="semen-image-group">
            <img src={TrekkingImage} alt="Trekking in Simien Mountains" className="semen-image" />
            <img src={WildlifeImage} alt="Wildlife in Simien Mountains" className="semen-image" />
            <img src={CulturalImage} alt="Cultural Experiences in Simien Mountains" className="semen-image" />
          </div>
        </div>
        <h2 className="semen-section-title">Accommodation</h2>
        <hr />
        <div className="semen-section-accommodation">
   
          <p className="semen-section-text">
            Accommodation options in the Simien Mountains range from basic camping sites to luxury lodges. Visitors can choose to camp under the stars or stay in comfortable lodges with stunning views of the surrounding mountains. Some lodges offer eco-friendly accommodations, while others provide luxurious amenities for guests.
          </p>
          <div className='semen-image-group'>      <img src={AccommodationImage} alt="Accommodation in Simien Mountains" className="semen-image" />
          <img src={AccommodationImage1} alt="Accommodation in Simien Mountains" className="semen-image" />
          <img src={AccommodationImage2} alt="Accommodation in Simien Mountains" className="semen-image" /></div>
    
        </div>
        <h2 className="semen-section-title">Markets & Museums</h2>
        <hr />
              
        <div className="semen-section-markets-museums flex">
        <img src={MuseumImage} alt="Museums in Simien Mountains" className="semen-single-image" />

          <p className="semen-section-text">
            Explore the local markets in nearby towns for unique handicrafts and souvenirs. Don't miss the opportunity to visit museums showcasing the rich history and culture of the region. The markets offer a variety of traditional items, including handmade textiles, jewelry, and pottery. Museums provide insights into the history, culture, and traditions of the Simien Mountains.
          </p>
        </div>
        <h2 className="semen-section-title">Restaurants</h2>
        <hr />
        <div className="semen-section-restaurants">
       
          <p className="semen-section-text">
            Sample traditional Ethiopian cuisine and international dishes at restaurants in Gondar and nearby towns. Enjoy delicious meals made with fresh, local ingredients. Restaurants offer a variety of options, including vegetarian and vegan dishes, as well as meat and seafood specialties. Some restaurants feature live music and entertainment for guests.
          </p>
          <div className='semen-image-group'>
          <img src={RestaurantImage} alt="Restaurants in Simien Mountains" className="semen-image" />
          <img src={RestaurantImage2} alt="Restaurants in Simien Mountains" className="semen-image" />
          <img src={RestaurantImage1} alt="Restaurants in Simien Mountains" className="semen-image" />
          </div>

        </div>
        <h2 className="semen-section-title">Best Hotels & Lodges</h2>
        <hr />
        <div className="semen-section-hotels-lodges">
        
          <p className="semen-section-text">
            Experience the comfort and hospitality of the best hotels and lodges in the Simien Mountains. From eco-friendly accommodations to luxury resorts, there's something for every traveler. Many hotels and lodges offer stunning views of the mountains, as well as amenities such as spas, restaurants, and guided tours. Guests can relax and unwind in the tranquil surroundings of the Simien Mountains.
          </p>
          <div className='semen-image-group'>        
            <img src={HotelImage} alt="Hotels in Simien Mountains" className="semen-image" />
          <img src={HotelImage1} alt="Hotels in Simien Mountains" className="semen-image" />
          <img src={HotelImage2} alt="Hotels in Simien Mountains" className="semen-image" /></div>

        </div>
        <h2 className="semen-section-title">When is the Best Time to Visit</h2>
        <hr />

        <div className="semen-section-best-time flex">
        <img src={WeatherImage} alt="Weather in Simien Mountains" className="semen-single-image" />

          <p className="semen-section-text">
            The best time to visit the Simien Mountains is during the dry season from October to March, when the weather is cool and dry, and the landscapes are lush and green. Avoid the rainy season from June to September, as trails can become muddy and impassable. Travelers can enjoy clear skies and comfortable temperatures during the dry season, making it ideal for outdoor activities such as trekking and wildlife viewing.
          </p>
        </div>
     
        

  {/* the css is on the lalibela page  */}

  <h2 className="axum-section-title">Frequently Asked Questions</h2>
<hr />
<div className="faq-section">
<img src={FaqImage} alt="FAQ" className="faq-image axum-single-image" />
<div className="faq-content">
<p className="faq-intro-text">
Here are some frequently asked questions about visiting Semen  Mountains:
</p>
<ul className="faq-list">
      {faqs.map((faq, index) => (
        <li key={index} className="faq-item">
          <strong className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <div className='the'>
            <FontAwesomeIcon icon={faqOpen[index] ? faChevronUp : faChevronDown} className="faq-icon" />

            </div>
          </strong>
          {faqOpen[index] && <p className="faq-answer">{faq.answer}</p>}
          <hr className="faq-divider" />
        </li>
      ))}
    </ul>
</div>
</div>


        <h2 className="semen-section-title">Map of Popular Trips</h2>
        <hr />

        <div className="semen-section-map flex">
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1670541.8047233776!2d36.8717834813434!3d13.466849002721801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1669c1d46d16f89d%3A0x770284df7312622d!2sSimien%20Mountains%20National%20Park!5e0!3m2!1sen!2set!4v1717334175196!5m2!1sen!2set" width="600" height="450"  margintop='30px' 
        style={{ border: 0 }}
        allowfullscreen=""
         loading="lazy" ></iframe>
          <p className="semen-section-text">
            Explore popular trekking routes and scenic viewpoints on a map of the Simien Mountains. Plan your adventure and discover hidden gems along the way. The map provides valuable information for travelers, including trail difficulty, points of interest, and recommended stops.
          </p>
        
        </div>
        <h2 className="semen-section-title">What Makes it Special</h2>
<hr />
        <div className="semen-section-special flex">
        <img src={SpecialImage} alt="Special Features of Simien Mountains" className="semen-single-image" />

          <p className="semen-section-text">
            Discover what makes the Simien Mountains a unique destination, from its diverse wildlife and stunning landscapes to its rich history and cultural heritage. The mountain range offers unparalleled opportunities for adventure and exploration, making it a must-visit destination for nature lovers and outdoor enthusiasts.
          </p>
        </div>
        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9Eog20HtloI?si=-HW78MjSZaAqYLoa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </section>
      </div>
    </div>
  );
};

export default SemenMountainsPage;

