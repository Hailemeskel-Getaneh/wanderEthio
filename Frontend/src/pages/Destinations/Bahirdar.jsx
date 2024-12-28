import React, { useState } from 'react';
import HeaderBahirDar from './headerBahirDar.jsx';
import "../../styles/DestinationStyles/Bahirdar.css";
import LakeTanaImage from "../../assets/images/Bahirdar/lakaTana.jpg";
import BlueNileFallsImage from "../../assets/images/Bahirdar/blueNileFall.jpg";
import MonasteryImage from "../../assets/images/Bahirdar/monastery.jpg";
import MarketImage from '../../assets/images/Bahirdar/market.jpg';
import AccommodationImage1 from '../../assets/images/Bahirdar/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/Bahirdar/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Bahirdar/accommodation3.jpg';
import WeatherImage from '../../assets/images/Bahirdar/weather.jpg';
import RestaurantImage1 from '../../assets/images/Bahirdar/restaurant.jpg';
import RestaurantImage2 from '../../assets/images/Bahirdar/restaurant2.jpg';
import RestaurantImage3 from '../../assets/images/Bahirdar/restaurant3.jpg';
import HotelImage1 from '../../assets/images/Bahirdar/hotel1.jpg';
import HotelImage2 from '../../assets/images/Bahirdar/hotel2.jpg';
import HotelImage3 from '../../assets/images/Bahirdar/hotel3.jpg';
import FaqImage from '../../assets/images/Bahirdar/lakeTana5.jpg';
// import MapImage from '../../assets/images/Bahirdar/map.jpg';
import SpecialImage from '../../assets/images/Bahirdar/city.jpg';

const BahirDarPage = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = index => {
    setFaqOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const [showVideo, setShowVideo] = useState(false);
  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  return (
    <>
      <HeaderBahirDar />
      <div className="bahirDar-container">
        <h1 className="bahirDar-title">Bahir Dar</h1>
        <div className="bahirDar-main-image-container">
        </div>
        <div className="bahirDar-section-about">
          <h2 className="bahirDar-section-title">About Bahir Dar</h2>
          <hr />
          <p className="bahirDar-section-text">
            Bahir Dar is a beautiful city in northwestern Ethiopia, known for its stunning natural landscapes and rich cultural heritage. Located on the shores of Lake Tana, the largest lake in Ethiopia, Bahir Dar offers a serene and picturesque setting for visitors. The city is also the gateway to the famous Blue Nile Falls, one of the most spectacular waterfalls in Africa. With its lush greenery, vibrant markets, and historic monasteries, Bahir Dar is a must-visit destination for anyone exploring Ethiopia.
          </p>
        </div>
        <div className="bahirDar-section-history">
          <h2 className="bahirDar-section-title">History of Bahir Dar</h2><hr />
          <p className="bahirDar-section-text">
            Bahir Dar has a rich history that dates back to ancient times. It has been a significant center for trade, religion, and education throughout its history. The city's proximity to Lake Tana and the Blue Nile River has made it an important hub for commerce and transportation. Bahir Dar is also home to several historic monasteries, some of which date back to the 14th century. These monasteries, located on the islands of Lake Tana, are renowned for their beautiful frescoes and ancient manuscripts, offering a glimpse into Ethiopia's religious and cultural heritage.
          </p>
        </div>
        <div className="bahirDar-section-getting-there">
          <h2 className="bahirDar-section-title">Getting There</h2><hr />
          <p className="bahirDar-section-text">
            Bahir Dar is accessible by domestic flights from Addis Ababa, which take about an hour. Alternatively, visitors can reach Bahir Dar by bus or car, enjoying scenic views of the Ethiopian Highlands along the way. The journey by road offers a chance to see the diverse landscapes of Ethiopia, from rolling hills to fertile plains. Once in Bahir Dar, getting around is easy with taxis and local buses available. Whether you choose to fly or drive, the journey to Bahir Dar is sure to be a memorable experience.
          </p>
        </div>
        <div className="bahirDar-section-attractions">
          <h2 className="bahirDar-section-title">Top Attractions</h2><hr />
          <p className="bahirDar-section-text">
            Bahir Dar boasts numerous attractions, including:
          </p>
          <ul className="bahirDar-attractions-list">
            <h3 className="bahirDar-attraction-title">Lake Tana</h3>
            <li className='flex'>
              <img src={LakeTanaImage} alt="Lake Tana" className="bahirDar-attraction-image" />
              <p className="bahirDar-attraction-text">
              Lake Tana is the largest lake in Ethiopia and a major source of the Blue Nile River. The lake is dotted with numerous islands, many of which are home to ancient monasteries. Visitors can take boat trips to explore these islands, where they can see beautiful frescoes and ancient manuscripts. The lake is also a great spot for bird watching, with many species of birds inhabiting its shores and waters. Lake Tana is the largest lake in Ethiopia and a major source of the Blue Nile River. The lake is dotted with numerous islands, many of which are home to ancient monasteries. Visitors can take boat trips to explore these islands, where they can see beautiful frescoes and ancient manuscripts. The lake is also a great spot for bird watching, with many species of birds inhabiting its shores and waters.

              </p>
            </li>
            <h3 className="bahirDar-attraction-title">Blue Nile Falls</h3>
            <li className='flex'>
              <img src={BlueNileFallsImage} alt="Blue Nile Falls" className="bahirDar-attraction-image" />
              <p className="bahirDar-attraction-text">
                Known locally as "Tis Issat" (Water that Smokes), the Blue Nile Falls are one of the most impressive natural spectacles in Africa. The falls are located about 30 kilometers from Bahir Dar and can be reached by car or bus. The sight of the water plunging over the cliffs into the gorge below is truly breathtaking. Visitors can hike to various viewpoints to see the falls from different angles and experience the full majesty of this natural wonder.
              </p>
            </li>
          </ul>
        </div>
        <h2 className="bahirDar-section-title">Culture & Traditions</h2>
        <hr />
        <div className="bahirDar-section-culture flex">
        <img src={MarketImage} alt="Local Market" className="bahirDar-single-image" />

          <p className="bahirDar-section-text">
            Bahir Dar is a vibrant city with a rich cultural heritage. The local markets are bustling with activity, offering everything from fresh produce to handmade crafts. Visitors can explore the markets to experience the sights, sounds, and smells of daily life in Bahir Dar. The city is also known for its traditional music and dance, which can be enjoyed at local festivals and cultural events. The blend of modernity and tradition in Bahir Dar creates a unique and captivating atmosphere for visitors.
          </p>
        </div>
               <div className="bahirDar-section-accommodation">
          <h2 className="bahirDar-section-title">Accommodation</h2><hr />
          </div>
          <p className="bahirDar-section-text">
            Bahir Dar offers a range of accommodation options to suit every budget and preference. From luxury resorts to budget guesthouses, you'll find plenty of choices for your stay in the city. Many hotels offer stunning views of Lake Tana and the surrounding landscape, providing the perfect backdrop for your visit to Bahir Dar.
          </p>
          <div className="bahirDar-image-group">
            <img src={AccommodationImage1} alt="Accommodation 1" className="bahirDar-accommodation-image" />
            <img src={AccommodationImage2} alt="Accommodation 2" className="bahirDar-accommodation-image" />
            <img src={AccommodationImage3} alt="Accommodation 3" className="bahirDar-accommodation-image" />
     
        </div>
        <h2 className="bahirDar-section-title">Weather</h2>
        <hr />

        <div className="bahirDar-section-weather flex">
          <img src={WeatherImage} alt="Weather" className="bahirDar-single-image" />
          <p className="bahirDar-section-text">
            Bahir Dar enjoys a mild climate throughout the year, with temperatures averaging around 20-25°C (68-77°F). The city experiences two distinct seasons: a dry season from October to May and a rainy season from June to September. The best time to visit Bahir Dar is during the dry season when the weather is pleasant and the skies are clear.
          </p>
        </div>
        
        <div className="bahirDar-section-restaurants">
        <h2 className="bahirDar-section-title">Restaurants in Bahirdar</h2><hr />
        <p className="bahirDar-section-text">
            Bahir Dar offers a diverse culinary scene, with restaurants serving traditional Ethiopian cuisine as well as international dishes. Whether you're craving injera and wat or pizza and pasta, you'll find plenty of options to satisfy your appetite in Bahir Dar. Many restaurants source their ingredients locally, ensuring fresh and flavorful meals for diners.
          </p>
          <div className="bahirDar-image-group">
            <img src={RestaurantImage1} alt="Restaurant 1" className="bahirDar-restaurant-image" />
            <img src={RestaurantImage2} alt="Restaurant 2" className="bahirDar-restaurant-image" />
            <img src={RestaurantImage3} alt="Restaurant 3" className="bahirDar-restaurant-image" />
          </div>
     
        </div>
        <div className="bahirDar-section-hotels">
          <h2 className="bahirDar-section-title">Hotels</h2><hr />
          <p className="bahirDar-section-text">
            Whether you're looking for luxury accommodations or budget-friendly options, Bahir Dar has a variety of hotels to choose from. Many hotels offer amenities such as swimming pools, spas, and on-site restaurants, ensuring a comfortable and enjoyable stay for guests. With its scenic beauty and warm hospitality, Bahir Dar is the perfect destination for your next getaway.
          </p>
          <div className="bahirDar-image-group">
            <img src={HotelImage1} alt="Hotel 1" className="bahirDar-hotel-image" />
            <img src={HotelImage2} alt="Hotel 2" className="bahirDar-hotel-image" />
            <img src={HotelImage3} alt="Hotel 3" className="bahirDar-hotel-image" />
          </div>
  
        </div>
        <h2 className="bahirDar-section-title">FAQ</h2>
       <hr />
        <div className="bahirDar-section-faq flex">
          <img src={FaqImage} alt="FAQ" className="bahirDar-single-image" />
          <p className="bahirDar-section-text">
            Have questions about visiting Bahir Dar? Check out our FAQ section for answers to commonly asked questions. If you don't find what you're looking for, feel free to reach out to us directly for assistance.
          </p>
        </div>
        <h2 className="bahirDar-section-title">Map</h2>
        <hr />
        <div className="bahirDar-section-map flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125074.67357494733!2d37.29802080351498!3d11.581683395750048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644d23307d78069%3A0xab0b134f632dff8!2sBahir%20Dar!5e0!3m2!1sen!2set!4v1717661296087!5m2!1sen!2set" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
          <p className="bahirDar-section-text">
            Explore the city of Bahir Dar with our interactive map. Discover attractions, restaurants, hotels, and more to help you plan your trip. Click on the markers to learn more about each location and start planning your adventure in Bahir Dar today!
          </p>
        </div>
        <h2 className="bahirDar-section-title">Special Offers</h2>
   
          <hr />
        <div className="bahirDar-section-special-offers flex">
          <img src={SpecialImage} alt="Special Offers" className="bahirDar-single-image" />
          <p className="bahirDar-section-text">
            Don't miss out on our special offers for visitors to Bahir Dar. Whether you're looking for discounted accommodations, meal deals, or tour packages, we've got you covered. Check back regularly for updated offers and start saving on your trip to Bahir Dar today!
          </p>
        </div><h2 className="bale-section-title">Discover More</h2>
        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lBPVs_EOBmA?si=zHYuOkcd2O-peGev" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </section>
      </div>

     

    </>
  );
};

export default BahirDarPage;

