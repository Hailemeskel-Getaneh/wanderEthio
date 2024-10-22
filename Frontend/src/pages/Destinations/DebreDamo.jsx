import React, { useState } from 'react';
import HeaderDebreDamo from '../../pages/Destinations/headerDebreDamo.jsx'; 
import "../../styles/DestinationStyles/DebreDamo.css"; // Update with your CSS file
// import GalleryDebreDamo from './GalleryDebreDamo.jsx';
import MountainImage from "../../assets/images/DebreDamo/mountain.jpg";
import MonasteryImage from "../../assets/images/DebreDamo/monastery.jpg";
import ViewPointImage from "../../assets/images/DebreDamo/viewPoint.jpg";
import AncientBooksImage from '../../assets/images/DebreDamo/ancientbooks.jpg';
import LodgingImage1 from '../../assets/images/DebreDamo/lodging1.jpg';
import LodgingImage2 from '../../assets/images/DebreDamo/lodging2.jpg';
import LodgingImage3 from '../../assets/images/DebreDamo/lodging3.jpg';
import WeatherImage from '../../assets/images/DebreDamo/weather.jpg';
import RestaurantImage1 from '../../assets/images/DebreDamo/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/DebreDamo/restaurant2.jpg';
import RestaurantImage3 from '../../assets/images/DebreDamo/restaurant3.jpg';
import HotelImage1 from '../../assets/images/DebreDamo/hotel1.jpg';
import HotelImage2 from '../../assets/images/DebreDamo/hotel2.jpg';
import HotelImage3 from '../../assets/images/DebreDamo/hotel3.jpg';
import FaqImage from '../../assets/images/DebreDamo/faq.jpg';
import MapImage from '../../assets/images/DebreDamo/map.jpg';
import SpecialImage from '../../assets/images/DebreDamo/special.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DebreDamoPage = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = index => {
    setFaqOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const [showVideo, setShowVideo] = useState(false); 

  const faqs = [
    { question: "Is Debre Damo accessible for all visitors?", answer: "Debre Damo is accessible to most visitors, but it requires a climb up a steep mountain path. The monastery is located atop a flat-topped mountain, and reaching it involves a challenging hike. Visitors should be prepared for a strenuous climb, including using ropes for assistance at certain points. Once at the monastery, the breathtaking views and ancient artifacts make the journey worthwhile." },
    { question: "What are the accommodations like in Debre Damo?", answer: "Accommodations near Debre Damo range from guesthouses to simple lodges. These accommodations offer basic amenities and a chance to experience traditional Ethiopian hospitality. Some lodgings provide stunning views of the surrounding mountains and valleys, enhancing the overall experience of staying near this historic site." },
    { question: "What is the best time to visit Debre Damo?", answer: "The best time to visit Debre Damo is during the dry season, from October to March. During this period, the weather is mild, and the skies are clear, providing excellent conditions for hiking and exploring the monastery. It's also a good idea to check local weather forecasts and road conditions before planning your visit, as weather patterns can vary." }
  ];

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  return (
    <>
      <HeaderDebreDamo />
      <div className="debre-damo-container">
        <h1 className="debre-damo-title">Debre Damo</h1>
        <div className="debre-damo-main-image-container">
          {/* <GalleryDebreDamo /> */}
        </div>
        <div className="debre-damo-section-about">
          <h2 className="debre-damo-section-title">About Debre Damo</h2>
          <hr/>
          <p className="debre-damo-section-text">
            Debre Damo is a monastery located in northern Ethiopia, known for its ancient history and breathtaking views. Perched atop a steep cliff, Debre Damo is believed to have been founded in the 6th century and is one of the oldest monasteries in the region. The monastery is renowned for its impressive architecture and rich religious significance, attracting pilgrims and tourists alike. Visiting Debre Damo offers a unique opportunity to explore a sacred site steeped in tradition and surrounded by stunning natural beauty.
          </p>
        </div>
        <div className="debre-damo-section-history">
          <h2 className="debre-damo-section-title">History of Debre Damo</h2>
          <hr/>
          <p className="debre-damo-section-text">
            Debre Damo has a long and storied history, dating back to the 6th century CE. The monastery is said to have been founded by Saint Abuna Aregawi, one of the Nine Saints who played a crucial role in spreading Christianity throughout Ethiopia. Over the centuries, Debre Damo has served as a center of religious learning and spiritual retreat, attracting monks and scholars seeking solace and enlightenment. The monastery's remote location atop a cliff has helped preserve its ancient traditions and cultural heritage, making it a cherished symbol of Ethiopia's Christian faith.
          </p>
        </div>
        <div className="debre-damo-section-getting-there">
          <h2 className="debre-damo-section-title">Getting There</h2>
          <hr/>
          <p className="debre-damo-section-text">
            Debre Damo is located near the town of Adigrat in the Tigray Region of Ethiopia. To reach the monastery, visitors must first travel to Adigrat, either by car or bus from major cities like Addis Ababa or Mekelle. From Adigrat, it is approximately a one-hour drive to the village at the base of the mountain where the ascent to Debre Damo begins. The climb to the monastery involves navigating a steep and narrow path, which can be challenging but rewarding for those who reach the top. Visitors should wear sturdy shoes and be prepared for a moderate hike to experience the tranquility and spiritual significance of Debre Damo.
          </p>
        </div>
        <div className="debre-damo-section-attractions">
          <h2 className="debre-damo-section-title">Top Attractions</h2>
          <hr/>
          <p className="debre-damo-section-text">
            Debre Damo offers several attractions and points of interest for visitors to explore:
          </p>
          <ul className="debre-damo-attractions-list">
            <li className="flex">
              <img src={MonasteryImage} alt="Monastery of Debre Damo" className="debre-damo-attraction-image" />
              <div>
                <h3 className="debre-damo-attraction-title">Monastery of Debre Damo</h3>
                <p className="debre-damo-attraction-text">
                  The Monastery of Debre Damo is the main attraction, perched atop a sheer cliff that offers panoramic views of the surrounding landscape. The monastery itself is a marvel of ancient architecture, with intricate carvings and vibrant frescoes that depict scenes from religious texts and Ethiopian history.
                </p>
              </div>
            </li>
            <li className="flex">
              <img src={AncientBooksImage} alt="Ancient Books of Debre Damo" className="debre-damo-attraction-image" />
              <div>
                <h3 className="debre-damo-attraction-title">Ancient Books</h3>
                <p className="debre-damo-attraction-text">
                  Debre Damo is known for its collection of ancient religious manuscripts and books, some of which date back centuries. These manuscripts provide valuable insights into Ethiopian Christianity and the cultural heritage of the monastery.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="debre-damo-section-lodging">
          <h2 className="debre-damo-section-title">Lodging Options</h2>
          <hr/>
          <p className="debre-damo-section-text">
            Lodging near Debre Damo ranges from simple guesthouses to traditional Ethiopian lodges. These accommodations offer basic amenities and a chance to experience local hospitality in a serene setting. Many lodgings provide views of the monastery and surrounding mountains, making them ideal for visitors seeking a peaceful retreat.
          </p>
          <div className="debre-damo-image-group">
            <img src={LodgingImage1} alt="Lodging 1 near Debre Damo" className="debre-damo-image" />
            <img src={LodgingImage2} alt="Lodging 2 near Debre Damo" className="debre-damo-image" />
            <img src={LodgingImage3  } alt="Lodging 2 near Debre Damo" className="debre-damo-image" />
          </div>
        </div>
        <h2 className="debre-damo-section-title">Restaurants & Dining</h2>
        <hr/>
        <div className="debre-damo-section-restaurants">
          <p className="debre-damo-section-text">
            Dining options near Debre Damo offer a taste of traditional Ethiopian cuisine and local delicacies. Visitors can enjoy meals at nearby restaurants and cafes, which often feature fresh ingredients and flavorful dishes. Dining in this region is not just about food but also about experiencing the rich culinary traditions of Ethiopia.
          </p>
          <div className="debre-damo-image-group">
            <img src={RestaurantImage1} alt="Restaurant 1 near Debre Damo" className="debre-damo-image" />
            <img src={RestaurantImage2} alt="Restaurant 2 near Debre Damo" className="debre-damo-image" />
            <img src={RestaurantImage3} alt="Restaurant 3 near Debre Damo" className="debre-damo-image" />
          </div>
        </div>
        <h2 className="debre-damo-section-title">Hotels & Accommodations</h2>
        <hr/>
        <div className="debre-damo-section-hotels">
          <p className="debre-damo-section-text">
            Hotels near Debre Damo offer comfortable accommodations with modern amenities. Whether you're looking for a luxury stay or budget-friendly options, there are hotels to suit every traveler's needs. Many hotels provide convenient access to nearby attractions and offer services such as guided tours and transportation.
          </p>
          <div className="debre-damo-image-group">
            <img src={HotelImage1} alt="Hotel 1 near Debre Damo" className="debre-damo-image" />
            <img src={HotelImage2} alt="Hotel 2 near Debre Damo" className="debre-damo-image" />
            <img src={HotelImage3} alt="Hotel 3 near Debre Damo" className="debre-damo-image" />
          </div>
        </div>
         {/* the css is on the lalibela page  */}

            <h2 className="bale-section-title">Frequently Asked Questions</h2>
            <hr />
            <div className="faq-section">
            <img src={FaqImage} alt="FAQ" className="faq-image bale-single-image" />
            <div className="faq-content">
            <p className="faq-intro-text">
            Here are some frequently asked questions about visiting Debre Damo:
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
        
        <h2 className="debre-damo-section-title">Special Events</h2>
        <hr/>
        <div className="debre-damo-section-special flex">
        <img src={SpecialImage} alt="Special Events at Debre Damo" className="debre-damo-special-image debre-damo-single-image" />
  
          <p className="debre-damo-section-text ">

            Discover special events and cultural celebrations held at Debre Damo throughout the year. These events offer a unique opportunity to experience traditional Ethiopian customs and festivities.
          </p>
        </div>
        <h2 className="debre-damo-section-title">Map of Debre</h2>
          <hr />
         
        <div className="debre-damo-section-map flex">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177236.5622014236!2d38.85120238542523!3d14.2573217054686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166c6373483862f7%3A0xb78a054791dd8e94!2z4YyI4Yuz4YidIOGLsOGJpeGIqOGLs-GIniAvIERlYnJlIERhbW8gTW9uYXN0ZXJ5!5e0!3m2!1sen!2set!4v1718629104569!5m2!1sen!2set" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
          <p className="debre-damo-section-text">
            debre-damo is located in the Tigray Region of Ethiopia. The map below shows the city's layout and highlights key attractions and landmarks. Understanding the city's geography can help you plan your visit and navigate the area more easily. The map includes important sites such as the Stele Park, the Church of St. Mary of Zion, and the debre-damo Archaeological Museum. By familiarizing yourself with the map, you can make the most of your time in debre-damo and ensure you don't miss any of the must-see attractions.
          </p>
        </div>
       <h2 className="bale-section-title">Discover More</h2>
        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oR7-17eMsL4?si=Oy3lCpS-9eTtq5zS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </section>
      </div>
    </>
  );
};

export default DebreDamoPage;
