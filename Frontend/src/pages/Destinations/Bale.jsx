import React, { useState } from 'react';
import HeaderBale from './headerBale.jsx';
import "../../styles/DestinationStyles/Bale.css";
// import GalleryBale from './GalleryBale.jsx';
import HarennaForestImage from "../../assets/images/Bale/harennaForest.jpg";
import SanettiPlateauImage from "../../assets/images/Bale/sanettiPlateau.jpg";
import SofOmarCaveImage from "../../assets/images/Bale/sofOmarCave.jpg";
import MarketImage from '../../assets/images/Bale/market.jpg';
import AccommodationImage1 from '../../assets/images/Bale/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/Bale/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Bale/accommodation3.jpg';
import WeatherImage from '../../assets/images/Bale/weather.jpg';
import WeatherImage2 from '../../assets/images/Bale/weather2.jpg'
import RestaurantImage1 from '../../assets/images/Bale/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Bale/restaurant2.jpg';
// import RestaurantFoodImage from '../../assets/images/Bale/restaurantFood1.jpg';
import HotelImage1 from '../../assets/images/Bale/hotel1.jpg';
import HotelImage2 from '../../assets/images/Bale/hotel2.jpg';
import HotelImage3 from '../../assets/images/Bale/hotel3.jpg';
import FaqImage from '../../assets/images/Bale/harennaForest2.jpg';
import MapImage from '../../assets/images/Bale/sanettiPlateau3.jpg';
import SpecialImage from '../../assets/images/Bale/sofOmarCave2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BaleMountainsPage = () => {
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
    { question: "Is Bale Mountains National Park safe for tourists?", answer: "Yes, Bale Mountains National Park is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings. The park is well-patrolled, and guided tours are available for added safety. By following basic safety guidelines and staying informed, you can enjoy a safe and memorable visit to the park." },
    { question: "What currency is used in the Bale Mountains?", answer: "The Ethiopian Birr (ETB) is the currency used in the Bale Mountains area. It's recommended to carry some cash, as not all establishments accept credit cards. ATMs may not be readily available in remote areas, so it's a good idea to have enough local currency for small purchases and tips." },
    { question: "What languages are spoken in the Bale Mountains area?", answer: "Amharic is the official language, but English is widely spoken in tourist areas. The local language in the Bale Mountains region is Oromo. Many guides and service providers can communicate in English, making it easier for tourists to navigate and enjoy their visit." }
  ];

  return (
    <>
      <HeaderBale />
      <div className="bale-container">
        <h1 className="bale-title">Bale Mountains National Park</h1>
        <div className="bale-main-image-container">
          {/* <GalleryBale /> */}
        </div>
        <div className="bale-section-about">
          <h2 className="bale-section-title">About Bale Mountains</h2>
          <hr />
          <p className="bale-section-text">
            Bale Mountains National Park is located in southeastern Ethiopia and is renowned for its stunning landscapes, diverse wildlife, and unique ecosystems. The park covers an area of approximately 2,200 square kilometers and features a range of habitats, including alpine meadows, lush forests, and high-altitude plateaus. It is home to several endemic species, such as the Ethiopian wolf and the mountain nyala. Visitors to the park can enjoy a variety of outdoor activities, including hiking, wildlife watching, and exploring the beautiful scenery. The Bale Mountains offer a perfect blend of adventure and natural beauty, making it a must-visit destination for nature enthusiasts.
          </p>
        </div>
        <div className="bale-section-history">
          <h2 className="bale-section-title">History of Bale Mountains</h2>
          <hr />
          <p className="bale-section-text">
            Bale Mountains National Park was established in 1970 to protect the unique flora and fauna of the region. The park's diverse ecosystems have been shaped by millions of years of geological activity, resulting in a landscape that is both beautiful and ecologically significant. The area has been inhabited by various ethnic groups for centuries, and their traditional practices have helped preserve the natural environment. The park is a testament to the importance of conservation and the need to protect our planet's natural heritage. Today, it continues to be a vital sanctuary for wildlife and a source of pride for Ethiopians.
          </p>
        </div>
        <div className="bale-section-getting-there">
          <h2 className="bale-section-title">Getting There</h2>
          <hr />
          <p className="bale-section-text">
            Bale Mountains National Park can be accessed by road from Addis Ababa, which is approximately 400 kilometers away. The journey takes about 8-10 hours by car or bus, passing through scenic landscapes and charming towns. For those who prefer to fly, there are domestic flights from Addis Ababa to the nearby town of Goba, followed by a short drive to the park. Once in the area, visitors can hire local guides and vehicles to explore the park's attractions. The journey to Bale Mountains is an adventure in itself, offering a chance to see the diverse beauty of Ethiopia.
          </p>
        </div>
        <div className="bale-section-attractions">
          <h2 className="bale-section-title">Top Attractions</h2>
          <hr />
          <p className="bale-section-text">
            Bale Mountains National Park is home to numerous attractions that showcase its natural beauty and biodiversity. Highlights include:
          </p>
          <ul className="bale-attractions-list">
            <h3 className="bale-attraction-title">Harenna Forest</h3>
            <li className='flex'>
              <img src={HarennaForestImage} alt="Harenna Forest" className="bale-attraction-image" />
              <p className="bale-attraction-text">
                The Harenna Forest is one of the few remaining tropical cloud forests in Ethiopia. It is a biodiversity hotspot, home to many endemic species of plants and animals. Visitors can explore the forest's lush vegetation, spot rare wildlife, and enjoy the serene atmosphere. The Harenna Forest is a must-visit for nature lovers and offers a unique opportunity to experience one of Ethiopia's most pristine natural environments.
              </p>
            </li>
            <h3 className="bale-attraction-title">Sanetti Plateau</h3>
            <li className='flex'>
              <img src={SanettiPlateauImage} alt="Sanetti Plateau" className="bale-attraction-image" />
              <p className="bale-attraction-text">
                The Sanetti Plateau is a high-altitude area that offers stunning views and unique wildlife sightings. It is the best place to see the Ethiopian wolf, the world's rarest canid. The plateau is also home to many bird species, making it a popular destination for birdwatchers. Hiking on the Sanetti Plateau provides breathtaking vistas and a chance to experience the rugged beauty of the Ethiopian highlands.
              </p>
            </li>
            <h3 className="bale-attraction-title">Sof Omar Cave</h3>
            <li className='flex'>
              <img src={SofOmarCaveImage} alt="Sof Omar Cave" className="bale-attraction-image" />
              <p className="bale-attraction-text">
                Sof Omar Cave is one of the largest and most spectacular cave systems in Africa. It features an extensive network of underground passages and chambers carved by the Web River. The cave is named after Sheikh Sof Omar, a Muslim holy man who used it as a place of refuge. Visitors can explore the cave's impressive formations, learn about its geological history, and appreciate its cultural significance.
              </p>
            </li>
          </ul>
        </div>
        <h2 className="bale-section-title">Culture & Traditions</h2>
        <hr />
        <div className="bale-section-culture flex">
          <img src={MarketImage} alt="Local Market" className="bale-single-image" />
          <p className="bale-section-text">
            The Bale Mountains region is rich in culture and traditions, with numerous ethnic groups living in the area. The Oromo people, who are the predominant ethnic group, have a rich cultural heritage that includes traditional music, dance, and crafts. Visitors can experience the local culture by attending festivals, visiting markets, and interacting with the friendly locals. The annual Gada System ceremonies are a significant cultural event, showcasing the Oromo people's unique social and political system. Exploring the culture and traditions of the Bale Mountains adds depth and meaning to any visit, offering a deeper understanding of Ethiopia's diverse heritage.
          </p>
        </div>
        <div className="bale-section-accommodation">
          <h2 className="bale-section-title">Accommodation</h2>
          <hr />
          <p className="bale-section-text">
            There are several accommodation options available for visitors to Bale Mountains National Park, ranging from lodges to campsites. Popular choices include:
          </p>
          <ul className="bale-accommodation-list">
          <h3 className="bale-accommodation-title">Bale Mountain Lodge</h3>

            <li className="bale-accommodation-item flex">
              <img src={AccommodationImage1} alt="Accommodation 1" className="bale-accommodation-image bale-single-image" />
              <div className="bale-accommodation-info">
                <p className="bale-accommodation-text">
                  Bale Mountain Lodge offers comfortable and eco-friendly accommodation within the park. It provides stunning views, guided tours, and a chance to experience the natural beauty of the Bale Mountains up close.
                </p>
              </div>
            </li>
            <h3 className="bale-accommodation-title">Wabe Shebelle Hotel</h3>

            <li className="bale-accommodation-item flex">
              <img src={AccommodationImage2} alt="Accommodation 2" className="bale-accommodation-image bale-single-image" />
              <div className="bale-accommodation-info">
                <p className="bale-accommodation-text">
                  Located in Goba, Wabe Shebelle Hotel offers modern amenities and easy access to the park. It is a convenient option for visitors looking for comfortable lodging and proximity to local attractions.
                </p>
              </div>
            </li>
            <h3 className="bale-accommodation-title">Community Campsites</h3>

            <li className="bale-accommodation-item flex">
              <img src={AccommodationImage3} alt="Accommodation 3" className="bale-accommodation-image bale-single-image" />
              <div className="bale-accommodation-info">
                <p className="bale-accommodation-text">
                  For a more adventurous experience, several community-run campsites are available within the park. These campsites offer basic facilities and an opportunity to connect with nature and local communities.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bale-section-hotels">
          <h2 className="bale-section-title">Hotels</h2>
          <hr />
          <p className="bale-section-text">
            In addition to the accommodations within the park, there are several hotels in nearby towns that offer comfortable stays and convenient access to the park. Recommended hotels include:
          </p>
          <ul className="bale-hotels-list">
          <h3 className="bale-hotel-title">Goba Wabe Shebelle Hotel</h3>

            <li className="bale-hotel-item flex" >
              <img src={HotelImage1} alt="Hotel 1" className="bale-hotel-image bale-single-image" />
              <div className="bale-hotel-info">
                <p className="bale-hotel-text">
                  A well-known hotel in Goba, offering modern amenities, spacious rooms, and a restaurant serving local and international cuisine. It is a popular choice for visitors looking for a comfortable and convenient stay near Bale Mountains National Park.
                </p>
              </div>
            </li>
            <h3 className="bale-hotel-title">Dinsho Lodge</h3>

            <li className="bale-hotel-item flex">

              <img src={HotelImage2} alt="Hotel 2" className="bale-hotel-image bale-single-image" />
              <div className="bale-hotel-info">
                <p className="bale-hotel-text">
                  Located close to the park's entrance, Dinsho Lodge offers a cozy and rustic experience. The lodge provides basic amenities and easy access to the park's hiking trails and wildlife viewing areas.
                </p>
              </div>
            </li>
            <h3 className="bale-hotel-title">Robinson Hotel</h3>

            <li className="bale-hotel-item flex">
              <img src={HotelImage3} alt="Hotel 3" className="bale-hotel-image bale-single-image" />
              <div className="bale-hotel-info">
                <p className="bale-hotel-text">
                  A budget-friendly option in Goba, Robinson Hotel offers clean and comfortable rooms, friendly service, and a convenient location for exploring the Bale Mountains and surrounding attractions.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bale-section-restaurants">
          <h2 className="bale-section-title">Restaurants & Dining</h2>
          <hr />
          <p className="bale-section-text">
            Dining options in the Bale Mountains area are limited but offer a taste of local cuisine. Some recommended places include:
          </p>
          <ul className="bale-restaurants-list">
          <h3 className="bale-restaurant-title">Goba Restaurant</h3>

            <li className="bale-restaurant-item flex">
              <img src={RestaurantImage1} alt="Restaurant 1" className="bale-restaurant-image       bale-single-image" />
              <div className="bale-restaurant-info">
                <p className="bale-restaurant-text">
                  Located in Goba, this restaurant offers a variety of Ethiopian dishes, including injera with different stews. It is a great place to try local flavors and enjoy a hearty meal after a day of exploring.
                </p>
              </div>
            </li>
            <h3 className="bale-restaurant-title">Bale Mountain Lodge Dining</h3>

            <li className="bale-restaurant-item flex">
              <img src={RestaurantImage2} alt="Restaurant 2" className="bale-restaurant-image      bale-single-image" />
              <div className="bale-restaurant-info">
                <p className="bale-restaurant-text">
                  The dining area at Bale Mountain Lodge offers delicious meals made from locally sourced ingredients. Guests can enjoy a variety of dishes while taking in the stunning views of the surrounding landscape.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <h2 className="bale-section-title">Weather</h2>
        <hr />
        <div className="bale-section-weather flex">

          <img src={WeatherImage} alt="Weather in Bale Mountains" className="bale-weather-image bale-single-image" />
          <p className="bale-section-text">
            The weather in Bale Mountains National Park varies depending on the altitude. The highlands can be cool and wet, while the lower areas are warmer and drier. The best time to visit is during the dry season, from November to February, when the weather is more predictable and ideal for outdoor activities. Visitors should be prepared for varying temperatures and pack accordingly. Layered clothing, waterproof gear, and sturdy footwear are recommended for a comfortable and enjoyable visit.
          </p>
        </div>
        <h2 className="bale-section-title">Best Time to Visit</h2>
        <hr /> 
        <div className="bale-section-best-time flex">
         <img src={WeatherImage2} alt="Weather in Bale Mountains" className="bale-weather-image bale-single-image" />
          <p className="bale-section-text">
            The best time to visit Bale Mountains National Park is during the dry season, which runs from November to February. During this period, the weather is more predictable, and outdoor activities such as hiking and wildlife watching are more enjoyable. The dry season also offers clearer skies and better visibility for taking in the park's stunning landscapes. However, the park can be visited year-round, with each season offering its unique charm and opportunities to experience the diverse ecosystems and wildlife of the Bale Mountains.
          </p>
        </div>
       {/* the css is on the lalibela page  */}

<h2 className="axum-section-title">Frequently Asked Questions</h2>
<hr />
<div className="faq-section">
<img src={FaqImage} alt="FAQ" className="faq-image bale-single-image" />
<div className="faq-content">
<p className="faq-intro-text">
Here are some frequently asked questions about visiting Bale Mountains:
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

        <h2 className="bale-section-title">Map</h2>
        <hr />
        <div className="bale-section-map flex">
       
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4710.497722094884!2d39.73208961007989!3d6.885734649217627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b638c226fa3a17%3A0x398e4e107fc41cec!2sBale%20Mountains%20National%20Park!5e0!3m2!1sen!2set!4v1718535528067!5m2!1sen!2set" width="550" height="450" allowfullscreen="" loading="lazy" ></iframe>
          <p className="bale-section-text">Bale Mountains National Park is located in the southeastern part of Ethiopia, within the Oromia Region. The park is situated in the Bale Zone of the Ethiopian Highlands, approximately 400 kilometers southeast of Addis Ababa, the capital city of Ethiopia. The park encompasses a variety of landscapes, including high-altitude plateaus, alpine meadows, dense forests, and deep gorges. It is renowned for its rich biodiversity and unique ecosystems, home to several endemic species of plants and animals. The nearest major town to Bale Mountains National Park is Goba, which serves as a gateway for visitors to the park.</p>
        </div>


        <div className="bale-section-special">
          <h2 className="bale-section-title">Special Experiences</h2>
          <hr />
          <div className="bale-special-container flex">
            <img src={SpecialImage} alt="Special" className="bale-special-image  bale-single-image" />
            <p className="bale-section-text">
              Visitors can enjoy a range of special experiences in the Bale Mountains, including guided treks, bird watching tours, and cultural interactions with local communities. These experiences offer a deeper connection with the natural and cultural heritage of the region, making for a truly memorable trip.
            </p>
          </div>
        </div> 
        <div className="bale-section-video">
          <h2 className="bale-section-title">Discover More</h2>
          {/* <hr /> */}
          <div className="bale-video-container">
            {showVideo ? (
              <iframe width="560" height="315" src="https://www.youtube.com/embed/B5ih-cLSk4U?si=z_tGbuxZeuM1FAIW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            ) : (
              <button onClick={handleWatchVideo} className="watchVideoBtn">
                Watch Video
              </button>
            )}
          </div>
        </div>
        <div className="tempofooter"></div>
      </div>
    </>
  );
};

export default BaleMountainsPage;
