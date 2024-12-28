import React, { useState } from 'react';
import HeaderAxum from './headerAxum.jsx';
import "../../styles/DestinationStyles/Axum.css";
import GalleryAxum from './GalleryAxum.jsx';
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
import RestaurantImage4 from '../../assets/images/Axum/restaurantFood1.jpg';
import HotelImage1 from '../../assets/images/Axum/hotel1.jpg';
import HotelImage2 from '../../assets/images/Axum/hotel2.jpg';
import HotelImage3 from '../../assets/images/Axum/hotel3.jpg';
import FaqImage from '../../assets/images/Axum/faq.jpg';
// import MapImage from '../../assets/images/Axum/map.jpg';
import SpecialImage from '../../assets/images/Axum/special.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

const AxumPage = () => {
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

  const faqs = [
    { question: "Is Axum safe for tourists?", answer: "Yes, Axum is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings. Crime rates are low, and the local people are known for their hospitality and friendliness. It's important to respect local customs and dress modestly, especially when visiting religious sites. By staying informed and following basic safety guidelines, you can enjoy a safe and memorable visit to Axum." },
    { question: "What currency is used in Axum?", answer: "The Ethiopian Birr (ETB) is the currency used in Axum. It's recommended to carry some cash, as not all establishments accept credit cards. ATMs are available in the city, but it's a good idea to have enough local currency for small purchases and tips. Currency exchange services are also available at banks and hotels. Make sure to exchange money at authorized locations to avoid counterfeit bills." },
    { question: "What languages are spoken in Axum?", answer: "Amharic is the official language, but English is widely spoken in tourist areas. In addition to Amharic, many locals speak Tigrinya, the language of the Tigray Region. English is taught in schools, so most young people and those working in the tourism industry can communicate effectively in English. Learning a few basic phrases in Amharic or Tigrinya can enhance your travel experience and help you connect with the local community." }
  ]
  return (
    <>
      <HeaderAxum />
      <div className="axum-container">
        <h1 className="axum-title">Axum </h1>
        <div className="axum-main-image-container">
          <GalleryAxum />
        </div>
        <div className="axum-section-about">
          <h2 className="axum-section-title">About Axum</h2>
          <hr/>
          <p className="axum-section-text">
            Axum is a city in northern Ethiopia known for its ancient history and impressive archaeological sites. As the capital of the Aksumite Empire, it was a powerful trading nation and a center of early Christianity in Africa. The city is home to several significant historical landmarks, including towering stelae, ancient churches, and ruins that offer a glimpse into the past. Today, Axum is a vibrant city that attracts tourists from around the world who come to explore its rich heritage and unique cultural traditions. The city's blend of ancient history and modern life creates a fascinating contrast that is sure to captivate any visitor.
          </p>
        </div>
        <div className="axum-section-history">
          <h2 className="axum-section-title">History of Axum</h2>  <hr/>
          <p className="axum-section-text">
            Axum was once the heart of the Aksumite Empire, which flourished from around 400 BCE to the 10th century CE. It is renowned for its tall stelae, or obelisks, which mark the graves of ancient kings, and for being one of the earliest centers of Christianity in Ethiopia. The city played a crucial role in the development of trade routes that connected the Roman Empire and India, making it a vital hub for commerce and culture. The legacy of Axum's powerful kings is evident in the impressive archaeological sites that dot the landscape. These include the ruins of ancient palaces, royal tombs, and the famous obelisks that have stood the test of time. The city's rich history is a testament to its importance in the ancient world, and it continues to be a source of pride for Ethiopians today.
          </p>
        </div>
        <div className="axum-section-getting-there">
          <h2 className="axum-section-title">Getting There</h2>  <hr/>
          <p className="axum-section-text">
            Axum can be reached via domestic flights from Addis Ababa to Axum Airport, which takes about two hours. Alternatively, visitors can travel by bus or car, enjoying scenic views of the Ethiopian Highlands along the way. The journey by road offers a unique opportunity to see the diverse landscapes of northern Ethiopia, from lush valleys to rugged mountains. For those who prefer to fly, several airlines operate regular flights to Axum, making it a convenient destination for travelers. Once in Axum, getting around is relatively easy, with taxis and local buses available to take visitors to the main attractions. Whether you choose to fly or drive, the journey to Axum is sure to be an unforgettable experience.
          </p>
        </div>
        <div className="axum-section-attractions">
          <h2 className="axum-section-title">Top Attractions</h2>
          <hr />
          <p className="axum-section-text">
            Axum boasts numerous historical and cultural attractions. Highlights include:
          </p>
          <ul className="axum-attractions-list">
          <h3 className="axum-attraction-title">Stele Park</h3>
            <li className='flex'>
            <img src={SteleImage} alt="Stele Park" className="axum-attraction-image" />
             
              <p className="axum-attraction-text">
                The Stele Park features towering stone obelisks that are remnants of the ancient Aksumite civilization. The largest of these, the Great Stele, would have stood over 33 meters tall. The park is a UNESCO World Heritage site and offers a fascinating glimpse into the engineering prowess of the ancient Aksumites. Visitors can explore the park and marvel at the intricately carved stones, each of which tells a story of the past. The Stele Park is not only a testament to the city's rich history but also a symbol of its enduring legacy.
              </p>
            </li>
            <h3 className="axum-attraction-title">Church of St. Mary of Zion</h3>

            <li className='flex'>
            <img src={ChurchOfStMaryImage} alt="Church of St. Mary of Zion" className="axum-attraction-image" />
              <p className="axum-attraction-text">
                This church is believed to house the Ark of the Covenant, a sacred biblical relic. The original church was built in the 4th century by King Ezana, who converted to Christianity. Today, the church is one of the most important religious sites in Ethiopia and attracts pilgrims from all over the country. The Church of St. Mary of Zion is known for its beautiful architecture and serene atmosphere. Visitors can attend a service or simply take in the peaceful surroundings. The church complex also includes a museum that showcases religious artifacts and provides insights into the history of Christianity in Ethiopia.
              </p>
            </li>
          </ul>
        </div>
        <h2 className="axum-section-title">Culture & Traditions</h2>
        <hr />

        <div className="axum-section-culture flex">
          <img src={MarketImage} alt="Local Market" className="axum-single-image" />

          <p className="axum-section-text">
            Axum is steeped in tradition, with numerous festivals and ceremonies. The annual Festival of Tsion Maryam is a significant religious event, attracting pilgrims from all over Ethiopia. The festival is celebrated with processions, prayers, and traditional music, providing a unique insight into the religious life of the city. The local markets offer a glimpse into daily life, with vibrant stalls selling everything from spices to textiles. Visitors can explore the markets, interact with the friendly locals, and sample traditional Ethiopian foods. Axum's rich cultural heritage is evident in its arts and crafts, which include intricate pottery, weaving, and jewelry. The city's cultural traditions are an integral part of its identity, and they continue to thrive in the modern era.
          </p>
        </div>
        <div className="axum-section-accommodation">
          <h2 className="axum-section-title">Accommodation</h2>
          <hr />
          <p className="axum-section-text">
            Axum offers a range of accommodations, from luxury hotels to budget-friendly guesthouses. Visitors can enjoy comfortable stays at places like the Sabean International Hotel or the Yared Zema International Hotel. These hotels provide modern amenities and excellent service, ensuring a pleasant stay for all guests. For those looking for a more authentic experience, there are several guesthouses and lodges that offer a glimpse into local life. Many of these accommodations are conveniently located near the main attractions, making it easy to explore the city. Whether you're looking for luxury or budget options, Axum has something to suit every traveler's needs.
          </p>
          <div className="axum-image-group">
            <img src={AccommodationImage1} alt="Accommodation 1" className="axum-image" />
            <img src={AccommodationImage2} alt="Accommodation 2" className="axum-image" />
            <img src={AccommodationImage3} alt="Accommodation 3" className="axum-image" />
          </div>
        </div>
        <h2 className="axum-section-title ">Markets & Museums</h2>
        <hr />

        <div className="axum-section-markets-museums flex">
          <img src={ArchaeologicalMuseumImage} alt="Axum Archaeological Museum" className="axum-single-image" />
          <p className="axum-section-text">
            The Axum Archaeological Museum provides a deep dive into the city's past, showcasing artifacts from the Aksumite period. The museum's exhibits include ancient coins, pottery, and tools that offer insights into the daily life of the Aksumite people. The local markets are lively spots where visitors can purchase traditional crafts and souvenirs. From handmade jewelry to colorful textiles, the markets are a treasure trove of unique items that reflect the rich cultural heritage of Axum. Exploring the museums and markets is a great way to learn more about the city's history and culture, and to support local artisans.
          </p>
      
        </div>
        <div className="axum-section-restaurants">
          <h2 className="axum-section-title">Restaurants</h2>
          <hr />
          <p className="axum-section-text">
            Axum's restaurants offer a delightful mix of traditional Ethiopian and international cuisine. Popular spots include the Africa Hotel Restaurant and the Remhai Hotel Restaurant, both known for their delicious food and welcoming atmosphere. These restaurants serve a variety of dishes, from classic Ethiopian staples like injera and doro wat to international favorites. Dining in Axum is not just about the food, but also about the experience. Many restaurants feature traditional decor and live music, creating a vibrant and enjoyable dining environment. Whether you're looking for a quick bite or a leisurely meal, Axum's culinary scene has something for everyone.
          </p>
          <div className="axum-image-group">
            <img src={RestaurantImage1} alt="Restaurant 1" className="axum-image" />
            <img src={RestaurantImage4} alt="Restaurant 2" className="axum-image" />

            <img src={RestaurantImage2} alt="Restaurant 2" className="axum-image" />
          </div>
        </div>
        <div className="axum-section-hotels-lodges">
          <h2 className="axum-section-title">Hotels & Lodges</h2>
          <hr />

          <p className="axum-section-text">
            For luxurious stays, Axum offers several high-end hotels and lodges. The Yared Zema International Hotel and the Sabean International Hotel are known for their excellent amenities and service. These hotels offer spacious rooms, fine dining restaurants, and recreational facilities such as swimming pools and fitness centers. Guests can enjoy a relaxing stay while being pampered with top-notch hospitality. The lodges, on the other hand, provide a more intimate and rustic experience, with cozy accommodations set in picturesque surroundings. Whether you prefer the luxury of a five-star hotel or the charm of a lodge, Axum's accommodations cater to all tastes and preferences.
          </p>
          <div className="axum-image-group">
            <img src={HotelImage1} alt="Hotel 1" className="axum-image" />
            <img src={HotelImage2} alt="Hotel 2" className="axum-image" />
            <img src={HotelImage3} alt="Hotel 3" className="axum-image" />
          </div>
        </div>
        <h2 className="axum-section-title">Best Time to Visit</h2>
        <hr />

        <div className="axum-section-best-time flex">
          <img src={WeatherImage} alt="Best Time to Visit" className="axum-single-image" />

          <p className="axum-section-text">
            The best time to visit Axum is during the dry season, from October to March, when the weather is pleasant for sightseeing. This period also includes major festivals, offering a chance to experience the local culture and traditions. The dry season is ideal for exploring the city's outdoor attractions, as the weather is warm and sunny with little chance of rain. During this time, visitors can take part in various cultural events and festivals that showcase the vibrant traditions of Axum. From religious ceremonies to music and dance performances, there is always something happening in the city. Whether you're interested in history, culture, or simply enjoying the beautiful weather, the dry season is the perfect time to visit Axum.
          </p>
        </div>

{/* the css is on the lalibela page */}

        <h2 className="axum-section-title">Frequently Asked Questions</h2>
        <hr />
        <div className="faq-section">
  <img src={FaqImage} alt="FAQ" className="faq-image axum-single-image" />
  <div className="faq-content">
    <p className="faq-intro-text">
      Here are some frequently asked questions about visiting Axum:
    </p>
    <ul className="faq-list">
      {faqs.map((faq, index) => (
        <li key={index} className="faq-item">
          <strong className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <FontAwesomeIcon icon={faqOpen[index] ? faChevronUp : faChevronDown} className="faq-icon" />
          </strong>
          {faqOpen[index] && <p className="faq-answer">{faq.answer}</p>}
          <hr className="faq-divider" />
        </li>
      ))}
    </ul>
  </div>
</div>

          <h2 className="axum-section-title">Map of Axum</h2>
          <hr />

        <div className="axum-section-map flex">
          {/* <img src={MapImage} alt="Map of Axum" className="axum-single-image" /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52715.95074382337!2d38.705390477226814!3d14.13253349264758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166bfcbea0c26cfb%3A0x74d0dc83a015ace1!2sAksum!5e1!3m2!1sen!2set!4v1717617866640!5m2!1sen!2set" width="600" height="450" allowfullscreen="" loading="lazy" ></iframe>
          <p className="axum-section-text">
            Axum is located in the Tigray Region of Ethiopia. The map below shows the city's layout and highlights key attractions and landmarks. Understanding the city's geography can help you plan your visit and navigate the area more easily. The map includes important sites such as the Stele Park, the Church of St. Mary of Zion, and the Axum Archaeological Museum. By familiarizing yourself with the map, you can make the most of your time in Axum and ensure you don't miss any of the must-see attractions.
          </p>
        </div>
        <h2 className="axum-section-title">Special Tips</h2>
          <hr />
        <div className="axum-section-special flex">
        
          <img src={SpecialImage} alt="Special Tips" className="axum-single-image" />

          <ul className="axum-tips-list">
          <p className="axum-section-text">Here are some special tips for visitors to Axum:</p>

            <li className="axum-tip-item">Hire a local guide to enhance your experience and gain deeper insights into the history and culture of Axum. A knowledgeable guide can provide valuable context and interesting stories about the sites you visit. Dress modestly, especially when visiting religious sites. Modest dress is a sign of respect for local customs and religious traditions. When visiting churches and other religious sites, it is advisable to cover your shoulders and knees.Try the local cuisine, including traditional dishes like injera and doro wat. Ethiopian food is known for its rich flavors and unique ingredients. Injera, a sourdough flatbread, is a staple of Ethiopian cuisine and is typically served with various stews and vegetables. Exploring the local cuisine is a great way to immerse yourself in the culture and enjoy the hospitality of Axum.</li>
          </ul>
        </div><h2 className="bale-section-title">Discover More</h2>
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

export default AxumPage;
