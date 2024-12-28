import React, { useState } from 'react';
import HeaderAwash from './headerAwash.jsx';
import "../../styles/DestinationStyles/Awash.css";
import AwashFallsImage from "../../assets/images/Awash/awashFalls.jpg";
import AwashFallsImage2 from "../../assets/images/Awash/awashFalls2.jpg";
import AwashNationalParkImage from "../../assets/images/Awash/awashNationalPark.jpg";
import ArchaeologicalMuseumImage from "../../assets/images/Awash/archaeologicalMuseum.jpg";
import MarketImage from '../../assets/images/Awash/market.jpg';
import AccommodationImage1 from '../../assets/images/Awash/accommodation4.jpg';
import AccommodationImage2 from '../../assets/images/Awash/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Awash/accommodation3.jpg';
import WeatherImage from '../../assets/images/Awash/weather.jpg';
import RestaurantImage1 from '../../assets/images/Awash/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Awash/restaurant2.jpg';
import RestaurantImage4 from '../../assets/images/Awash/restaurantFood1.jpg';
import HotelImage1 from '../../assets/images/Awash/hotel1.jpg';
import HotelImage2 from '../../assets/images/Awash/hotel2.jpg';
import HotelImage3 from '../../assets/images/Awash/hotel3.jpg';
import FaqImage from '../../assets/images/Awash/awash2.jpg';
import MapImage from '../../assets/images/Awash/map.jpg';
import SpecialImage from '../../assets/images/Awash/special.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

  const AwashPage = () => {
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
      { question: "Is Awash safe for tourists?", answer: "Yes, Awash is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings." },
      { question: "What currency is used in Awash?", answer: "The Ethiopian Birr (ETB) is the currency used in Awash. It's recommended to carry some cash, as not all establishments accept credit cards." },
      { question: "What languages are spoken in Awash?", answer: "Amharic is the official language of Ethiopia and widely spoken in Awash. English is also commonly understood, especially in tourist areas." },
      { question: "Are there guided tours available?", answer: "Yes, there are several guided tours available that offer insights into Awash's history, culture, and natural attractions." },
    ];
  
    return (
      <>
        <HeaderAwash />
        <div className="awash-container">
          <h1 className="awash-title">Awash</h1>
  
          <div className="awash-main-image-container">
          </div>
          <div className="awash-section-about">
            <h2 className="awash-section-title">About Awash</h2>
            <hr />
            <p className="awash-section-text">
              Awash is a city known for its beautiful landscapes and rich history. It is home to the Awash National Park, famous for its wildlife and stunning waterfalls. Visitors can explore the diverse flora and fauna, experience the local culture, and enjoy outdoor activities such as hiking and bird watching. The city's blend of natural beauty and cultural heritage makes it a unique destination.
            </p>
          </div>
          <div className="awash-section-history">
            <h2 className="awash-section-title">History of Awash</h2>
            <hr />
            <p className="awash-section-text">
              Awash has a significant historical background, being a major trade route in ancient times. The city's strategic location made it an important hub for commerce and culture. Today, visitors can explore historical landmarks and learn about the rich history that has shaped Awash into what it is today.
            </p>
          </div>
          <div className="awash-section-getting-there">
            <h2 className="awash-section-title">Getting There</h2>
            <hr />
            <p className="awash-section-text">
              Awash can be reached by road from Addis Ababa, offering scenic views of the Ethiopian landscape. Visitors can also take a train or bus, making it a convenient destination for travelers. Once in Awash, local transportation options are available to explore the city and its attractions.
            </p>
          </div>
          <div className="awash-section-attractions">
            <h2 className="awash-section-title">Top Attractions</h2>
            <hr />
            <p className="awash-section-text">
              Awash boasts numerous attractions, including:
              Awash Falls is a stunning waterfall located within the Awash National Park. It is a must-visit spot for nature lovers and photographers.
              Awash National Park is home to a diverse array of wildlife, including antelopes, baboons, and numerous bird species. It's an excellent place for wildlife safaris and nature walks.
            </p>
            <ul className="awash-attractions-list">
              <li className="awash-image-group flex">
                <img src={AwashFallsImage} alt="Awash Falls" className="awash-attraction-image" />
                <img src={AwashFallsImage2} alt="Awash Falls" className="awash-attraction-image" />
                <img src={AwashNationalParkImage} alt="Awash National Park" className="awash-attraction-image" />
              </li>
            </ul>
          </div>
          <h2 className="awash-section-title">Cultures and Traditions</h2>
          <hr />
  
          <div className="awash-section-culture flex">
            <img src={MarketImage} alt="Local Market" className="awash-single-image" />
            <p className="awash-section-text">
              Awash is steeped in tradition, with vibrant markets and cultural festivals. Visitors can explore the local markets, interact with locals, and experience the rich cultural heritage of the city.
            </p>
          </div>
          <div className="awash-section-accommodation">
            <h2 className="awash-section-title">Accommodation</h2><hr />
            <p className="awash-section-text">
              Awash offers a range of accommodations, from luxury hotels to budget-friendly guesthouses. Visitors can enjoy comfortable stays at places like the Awash Falls Lodge, providing excellent service and amenities.
            </p>
            <div className="awash-image-group">
              <div className="awash-image-container">
                <img src={AccommodationImage1} alt="Awash Falls Lodge" className="awash-image" />
                <div className="image-label">Awash Falls Lodge</div>
              </div>
              <div className="awash-image-container">
                <img src={AccommodationImage2} alt="Accommodation 2" className="awash-image" />
                <div className="image-label">Accommodation 2</div>
              </div>
              <div className="awash-image-container">
                <img src={AccommodationImage3} alt="Accommodation 3" className="awash-image" />
                <div className="image-label">Accommodation 3</div>
              </div>
            </div>
          </div>
          <h2 className="awash-section-title">Markets and Museums</h2>
  <hr />
          <div className="awash-section-markets-museums flex">
            <img src={ArchaeologicalMuseumImage} alt="Awash Archaeological Museum" className="awash-single-image" />
            <p className="awash-section-text">
              The Awash Archaeological Museum offers a deep dive into the city's history, showcasing artifacts from various periods. The local markets are lively spots to purchase traditional crafts and souvenirs.
            </p>
          </div>
          <div className="awash-section-restaurants">
            <h2 className="awash-section-title">Restaurants</h2>
            <hr />
            <p className="awash-section-text">
              Awash's restaurants offer a mix of traditional Ethiopian and international cuisine. Popular spots include the Awash River Restaurant, known for its delicious food and welcoming atmosphere.
            </p>
            <div className="awash-image-group">
              <div className="awash-image-container">
                <img src={RestaurantImage1} alt="Restaurant 1" className="awash-image" />
                <div className="image-label">The Great Restaurant</div>
              </div>
              <div className="awash-image-container">
                <img src={RestaurantImage4} alt="Restaurant 2" className="awash-image" />
                <div className="image-label">Restaurant 2</div>
              </div>
              <div className="awash-image-container">
                <img src={RestaurantImage2} alt="Restaurant 3" className="awash-image" />
                <div className="image-label">Restaurant 3</div>
              </div>
            </div>
          </div>
          <div className="awash-section-hotels-lodges">
            <h2 className="awash-section-title">Hotels & Lodges</h2>
            <hr />
            <p className="awash-section-text">
              Awash offers high-end hotels and lodges, such as the Awash Falls Lodge, known for excellent amenities and service. Guests can enjoy a relaxing stay with luxurious accommodations.
            </p>
            <div className="awash-image-group">
              <div className="awash-image-container">
                <img src={HotelImage1} alt="Awash Falls Lodge" className="awash-image" />
                <div className="image-label">Awash Falls Lodge</div>
              </div>
              <div className="awash-image-container">
                <img src={HotelImage2} alt="Hotel 2" className="awash-image" />
                <div className="image-label">Awash hotel</div>
              </div>
              <div className="awash-image-container">
                <img src={HotelImage3} alt="Hotel 3" className="awash-image" />
                <div className="image-label">Waliya Hotel</div>
              </div>
            </div>
          </div>
          <h2 className="awash-section-title">Best Time to Visit</h2>
  <hr />
          <div className="awash-section-best-time flex">
            <img src={WeatherImage} alt="Best Time to Visit" className="awash-single-image" />
            <p className="awash-section-text">
              The best time to visit Awash is during the dry season, from October to March, when the weather is pleasant for sightseeing. This period is ideal for exploring the city's outdoor attractions.
            </p>
          </div>
      
 

    {/* the css is on the lalibela page  */}

<h2 className="axum-section-title">Frequently Asked Questions</h2>
<hr />
<div className="faq-section">
<img src={FaqImage} alt="FAQ" className="faq-image axum-single-image" />
<div className="faq-content">
<p className="faq-intro-text">
Here are some frequently asked questions about visiting Awash:
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
          <h2 className="awash-section-title">Map of Awash</h2>
  <hr />
          <div className="awash-section-map flex">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.9462716184853!2d39.999356269515935!3d9.083333299436266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164a756356c51cf1%3A0xae9bde25595552f8!2sAwash%20National%20Park!5e0!3m2!1sen!2set!4v1717404684422!5m2!1sen!2set" width="600" height="450" allowfullscreen="" loading="lazy" ></iframe>
            <p className="awash-section-text">
              A map of Awash helps visitors navigate the city and plan their itinerary. Key attractions and points of interest are marked for convenience.
            </p>
          </div>
          <h2 className="awash-section-title">What's Special About Awash</h2>
  <hr />
          <div className="awash-section-special">
            <div className='flex'>
              <img src={SpecialImage} alt="Special" className="awash-single-image" />
              <p className="awash-section-text">
                Awash's unique blend of natural beauty, historical significance, and cultural richness makes it a special destination. The city's welcoming atmosphere and diverse attractions offer something for every traveler.
              </p>
            </div>
          </div>
          <h2 className="bale-section-title">Discover More</h2>
          <section className="watch-video-section">
            <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
            {showVideo && (
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jX_7tpFF7ug?si=g3uYp5Ij-eirLXVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )}
          </section>
        </div>
      </>
    );
  };
  
  export default AwashPage;
  
  