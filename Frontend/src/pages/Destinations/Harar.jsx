import React, { useState } from 'react';
import HeaderHarar from './headerHarar.jsx';
import "../../styles/DestinationStyles/Harar.css";
import HararImage1 from "../../assets/images/Harar/harar6.jpg";
import HararImage2 from "../../assets/images/Harar/harar2.jpg";
import HararNationalParkImage from "../../assets/images/Harar/hararNationalPark.jpg";
import ArchaeologicalMuseumImage from "../../assets/images/Harar/archaeologicalMuseum.jpg";
import MarketImage from '../../assets/images/Harar/market.jpg';
import AccommodationImage1 from '../../assets/images/Harar/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/Harar/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Harar/accommodation3.jpg';
import WeatherImage from '../../assets/images/Harar/weather.jpg';
import RestaurantImage1 from '../../assets/images/Harar/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Harar/restaurant2.jpg';
import RestaurantImage3 from '../../assets/images/Harar/restaurant3.jpg';
import HotelImage1 from '../../assets/images/Harar/hotel1.jpg';
import HotelImage2 from '../../assets/images/Harar/hotel2.jpg';
import HotelImage3 from '../../assets/images/Harar/hotel3.jpg';
import FaqImage from '../../assets/images/Harar/hararFaq.jpg';
// import MapImage from '../../assets/images/Harar/map.jpg';
// import SpecialImage from '../../assets/images/Harar/special.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const HararPage = () => {
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
  const [showVideo, setShowVideo] = useState(false); 
  const faqs =[
    { question: "Is Harar safe for tourists?", answer: "Yes, Harar is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings." },
    { question: "What currency is used in Harar?", answer: "The Ethiopian Birr (ETB) is the currency used in Harar. It's recommended to carry some cash, as not all establishments accept credit cards." },
    { question: "What languages are spoken in Harar?", answer: "Amharic is the official language of Ethiopia and widely spoken in Harar. English is also commonly understood, especially in tourist areas." },
    { question: "Are there guided tours available?", answer: "Yes, there are several guided tours available that offer insights into Harar's history, culture, and natural attractions." },
  ];

  return (
    <>
      <HeaderHarar />
      <div className="harar-container">
        <h1 className="harar-title">Harar</h1>

        <div className="harar-main-image-container">
        </div>
        <div className="harar-section-about">
          <h2 className="harar-section-title">About Harar</h2>
          <hr />
          <p className="harar-section-text">
            Harar is a city of immense cultural and historical significance. Known as the "City of Saints," it boasts an intricate network of narrow alleyways and vibrant markets. Harar Jugol, the old walled city, is a UNESCO World Heritage site, celebrated for its unique architecture and rich heritage. The city is a melting pot of cultures, offering a unique blend of Ethiopian, Islamic, and Harari traditions. Visitors can immerse themselves in the lively atmosphere, explore historical sites, and enjoy the local cuisine.
          </p>
        </div>
        <div className="harar-section-history">
          <h2 className="harar-section-title">History of Harar</h2>
          <hr />
          <p className="harar-section-text">
            Harar has a rich historical background, dating back to the 7th century. It was a major commercial hub and center of Islamic culture and learning. The city played a crucial role in the trade routes linking the Ethiopian highlands with the Red Sea coast. Harar's old town, with its impressive walls and gates, stands as a testament to its historical importance. Today, visitors can explore ancient mosques, shrines, and traditional Harari houses, gaining insight into the city's storied past.
          </p>
        </div>
        <div className="harar-section-getting-there">
          <h2 className="harar-section-title">Getting There</h2>
          <hr />
          <p className="harar-section-text">
            Harar is accessible by road and air. The nearest airport is Dire Dawa, from where visitors can take a scenic drive to Harar. There are also bus services from Addis Ababa, offering a convenient and affordable way to reach the city. Once in Harar, local transportation options, including taxis and tuk-tuks, are available for exploring the city and its surroundings.
          </p>
        </div>
        <div className="harar-section-attractions">
          <h2 className="harar-section-title">Top Attractions</h2>
          <hr />
          <p className="harar-section-text">
            Harar is home to numerous attractions, including:
            <ul>
              <li>Harar Jugol: The old walled city with its maze of narrow streets, ancient buildings, and vibrant markets.</li>
              <li>Hyena Feeding: A unique cultural tradition where locals feed hyenas, offering visitors a thrilling experience.</li>
              <li>Rimbaud's House: A museum dedicated to the French poet Arthur Rimbaud, who lived in Harar in the 19th century.</li>
              <li>Harar Brewery: One of Ethiopia's oldest breweries, offering tours and tastings of local beer.</li>
            </ul>
          </p>
          <ul className="harar-attractions-list">
            <li className="harar-image-group flex">
              <img src={HararImage1} alt="Harar Jugol" className="harar-attraction-image" />
              <img src={HararImage2} alt="Harar Jugol" className="harar-attraction-image" />
              <img src={HararNationalParkImage} alt="Harar National Park" className="harar-attraction-image" />
            </li>
          </ul>
        </div>
        <h2 className="harar-section-title">Cultures and Traditions</h2>
        <hr />

        <div className="harar-section-culture flex">
          <img src={MarketImage} alt="Local Market" className="harar-single-image" />
          <p className="harar-section-text">
            Harar is a cultural mosaic, known for its vibrant markets and rich traditions. The city's markets are bustling with activity, offering a variety of goods, from spices and coffee to traditional crafts. Cultural festivals, such as Ashura and Eid, are celebrated with great enthusiasm, providing visitors with a chance to experience the local customs and traditions.
          </p>
        </div>
        <div className="harar-section-accommodation">
          <h2 className="harar-section-title">Accommodation</h2><hr />
          <p className="harar-section-text">
            Harar offers a range of accommodations to suit different budgets and preferences. From luxury hotels to charming guesthouses, visitors can find comfortable lodging options. Notable places include the Heritage Plaza Hotel, known for its excellent service and amenities, and traditional Harari guesthouses that offer a more authentic experience.
          </p>
          <div className="harar-image-group">
            <div className="harar-image-container">
              <img src={AccommodationImage1} alt="Heritage Plaza Hotel" className="harar-image" />
              <div className="image-label">Heritage Plaza Hotel</div>
            </div>
            <div className="harar-image-container">
              <img src={AccommodationImage2} alt="Accommodation 2" className="harar-image" />
              <div className="image-label">Accommodation 2</div>
            </div>
            <div className="harar-image-container">
              <img src={AccommodationImage3} alt="Accommodation 3" className="harar-image" />
              <div className="image-label">Accommodation 3</div>
            </div>
          </div>
        </div>
        <h2 className="harar-section-title">Markets and Museums</h2>
        <hr />
        <div className="harar-section-markets-museums flex">
          <img src={ArchaeologicalMuseumImage} alt="Harar Archaeological Museum" className="harar-single-image" />
          <p className="harar-section-text">
            The Harar Archaeological Museum offers a glimpse into the city's history through its collection of artifacts and exhibits. The local markets, such as the bustling Shoa Gate Market, are excellent places to purchase traditional crafts, textiles, and spices. Visitors can enjoy the lively atmosphere and engage with friendly locals while exploring these vibrant spots.
          </p>
        </div>
        <div className="harar-section-restaurants">
          <h2 className="harar-section-title">Restaurants</h2>
          <hr />
          <p className="harar-section-text">
            Harar's culinary scene is a delightful mix of traditional Ethiopian and Harari cuisine. Popular restaurants include Hirut Restaurant, known for its delicious injera and stews, and Tana Restaurant, offering a range of local dishes in a cozy setting. Visitors can also enjoy fresh coffee from local coffee shops, experiencing the rich coffee culture of the region.
          </p>
          <div className="harar-image-group">
            <div className="harar-image-container">
              <img src={RestaurantImage1} alt="Hirut Restaurant" className="harar-image" />
              <div className="image-label">Hirut Restaurant</div>
            </div>
            <div className="harar-image-container">
              <img src={RestaurantImage2} alt="Tana Restaurant" className="harar-image" />
              <div className="image-label">Tana Restaurant</div>
            </div>
            <div className="harar-image-container">
              <img src={RestaurantImage3} alt="Coffee Shop" className="harar-image" />
              <div className="image-label">Local Coffee Shop</div>
            </div>
          </div>
        </div>
        <div className="harar-section-hotels-lodges">
          <h2 className="harar-section-title">Hotels & Lodges</h2>
          <hr />
          <p className="harar-section-text">
            Harar offers a variety of hotels and lodges to cater to different tastes and budgets. The Ras Hotel, located in the heart of the city, is known for its comfortable rooms and excellent service. Traditional Harari guesthouses provide a unique lodging experience, allowing visitors to stay in historic homes and enjoy the hospitality of the locals.
          </p>
          <div className="harar-image-group">
            <div className="harar-image-container">
              <img src={HotelImage1} alt="Ras Hotel" className="harar-image" />
              <div className="image-label">Ras Hotel</div>
            </div>
            <div className="harar-image-container">
              <img src={HotelImage2} alt="Hotel 2" className="harar-image" />
              <div className="image-label">Hotel 2</div>
            </div>
            <div className="harar-image-container">
              <img src={HotelImage3} alt="Hotel 3" className="harar-image" />
              <div className="image-label">Hotel 3</div>
            </div>
          </div>
        </div>
        <h2 className="harar-section-title">Best Time to Visit</h2>
        <hr />
        <div className="harar-section-best-time flex">
          <img src={WeatherImage} alt="Best Time to Visit" className="harar-single-image" />
          <p className="harar-section-text">
            The best time to visit Harar is during the dry season, from October to March, when the weather is pleasant and ideal for sightseeing. This period is perfect for exploring the city's outdoor attractions and enjoying the cultural festivals that take place throughout the year.
          </p>
        </div>
        <h2 className="harar-section-title">Frequently Asked Questions</h2>
        <hr />
        <div className="faq-section">
          <img src={FaqImage} alt="FAQ" className="faq-image harar-single-image" />
          <div className="faq-content">
            <p className="faq-intro-text">
              Here are some frequently asked questions about visiting Harar:
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
        <h2 className="harar-section-title">Map of Harar</h2>
        <hr />
        <div className="harar-section-map flex">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.295941829579!2d42.12974591517757!3d9.307693993421156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16427387d16e8d23%3A0x6e6d55a71f5d4e26!2sHarar!5e0!3m2!1sen!2set!4v1717404684422!5m2!1sen!2set" width="600" height="450" allowFullScreen="" loading="lazy" ></iframe>
          <p className="harar-section-text">
            A map of Harar helps visitors navigate the city and plan their itinerary. Key attractions and points of interest are marked for convenience.
          </p>
        </div>
        <h2 className="harar-section-title">What's Special About Harar</h2>
        <hr />
        <div className="harar-section-special">
          <div className='flex'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UAI3fVieUXQ?si=65XByHsH_YgT76Wp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay> </iframe>
            <p className="harar-section-text">
              Harar's unique blend of historical significance, cultural richness, and architectural beauty makes it a special destination. The city's welcoming atmosphere and diverse attractions offer something for every traveler, from history enthusiasts to adventure seekers.
            </p>
          </div>
        </div>
        <h2 className="harar-section-title">Discover More</h2>
        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_yyjriX0xsY?si=HxX_oEHv_bNfXAVR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          )}
        </section>
      </div>
    </>
  );
};

export default HararPage;
