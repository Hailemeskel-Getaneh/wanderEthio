import React, { useState } from 'react';
import HeaderDebreLibanos from '../../pages/Destinations/headerDebreLibanos.jsx';
import "../../styles/DestinationStyles/DebreLibanos.css";
// import GalleryDebreLibanos from './GalleryDebreLibanos.jsx';
import MonasteryImage from "../../assets/images/debreLibanos/monastery.jpg";
import PortugueseBridgeImage from "../../assets/images/debreLibanos/portugueseBridge.jpg";
import AccommodationImage1 from '../../assets/images/debreLibanos/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/debreLibanos/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/debreLibanos/accommodation3.jpg';
import WeatherImage from '../../assets/images/debreLibanos/weather.jpg';
import MuseumImage from '../../assets/images/debreLibanos/museum.jpg';
import RestaurantImage1 from '../../assets/images/debreLibanos/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/debreLibanos/restaurant2.jpg';
import RestaurantImage3 from '../../assets/images/debreLibanos/restaurant3.jpg';
import HotelImage1 from '../../assets/images/debreLibanos/hotel1.jpg';
import HotelImage2 from '../../assets/images/debreLibanos/hotel2.jpg';
import HotelImage3 from '../../assets/images/debreLibanos/hotel13.jpg';
import FaqImage from '../../assets/images/debreLibanos/faq.jpg';
import SpecialImage from '../../assets/images/debreLibanos/special.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DebreLibanosPage = () => {
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
   const faqs = [
    { question: "Is Debre Libanos safe for tourists?", answer: "Yes, Debre Libanos is generally safe for tourists. However, as with any travel destination, it's advisable to take standard precautions and be aware of your surroundings." },
    { question: "What currency is used in Debre Libanos?", answer: "The Ethiopian Birr (ETB) is the currency used in Debre Libanos. It's recommended to carry cash, as not all establishments accept credit cards." },
    { question: "What languages are spoken in Debre Libanos?", answer: "Amharic is the official language, but English is widely spoken in tourist areas." }
  ]
  return (
    <>
      <HeaderDebreLibanos />
      <div className="debre-libanos-container">
        <h1 className="debre-libanos-title">Debre Libanos</h1>
        <div className="debre-libanos-main-image-container">
          {/* {<GalleryDebreLibanos />} */}
        </div>
        <div className='tempofooter'></div>
        <div className="debre-libanos-section-about">
          <h2 className="debre-libanos-section-title">About Debre Libanos</h2>
          <hr />
          <p className="debre-libanos-section-text">
            Debre Libanos is a monastery in Ethiopia, lying northwest of Addis Ababa in the Semien Shewa Zone. Founded in the 13th century by Saint Tekle Haymanot, Debre Libanos is not only a religious center but also a historical landmark. The monastery is an important pilgrimage site, drawing visitors from all over Ethiopia and beyond who come to experience its spiritual significance and rich heritage. The site is surrounded by breathtaking natural beauty, with lush landscapes and dramatic cliffs offering stunning views.
          </p>
        </div>
        <div className="debre-libanos-section-history">
          <h2 className="debre-libanos-section-title">History of Debre Libanos</h2>
          <hr />
          <p className="debre-libanos-section-text">
            The Debre Libanos Monastery was established in the 13th century by Saint Tekle Haymanot, one of the most revered saints in Ethiopian Orthodox Christianity. Over the centuries, the monastery has played a pivotal role in the religious and cultural life of Ethiopia. It has been a center of learning, spirituality, and resistance, particularly during times of foreign invasion. The site also features the ruins of the original monastery that was destroyed during the Italian invasion in the 1930s, a poignant reminder of the resilience of the Ethiopian people.
          </p>
        </div>
        <div className="debre-libanos-section-getting-there">
          <h2 className="debre-libanos-section-title">Getting There</h2>
          <hr />
          <p className="debre-libanos-section-text">
            Debre Libanos is accessible by road from Addis Ababa. The drive takes approximately 2-3 hours, depending on traffic and road conditions. Visitors can hire a private car, take a taxi, or use public transportation. The journey offers a scenic route with beautiful views of the Ethiopian countryside, including rolling hills, valleys, and small villages that provide a glimpse into rural life in Ethiopia. It's advisable to start the trip early in the morning to make the most of your day in Debre Libanos.
          </p>
        </div>
        <div className="debre-libanos-section-attractions">
          <h2 className="debre-libanos-section-title">Top Attractions</h2>
          <hr />
          <p className="debre-libanos-section-text">
            Debre Libanos is home to several historical and natural attractions that offer a glimpse into the region's rich cultural and religious heritage. Highlights include:
          </p>
          <ul className="debre-libanos-attractions-list">
            <h3 className="debre-libanos-attraction-title">Debre Libanos Monastery</h3>
            <li className='flex'>
            <div className="debre-libanos-single-image">
                <img src={MonasteryImage} alt="Debre Libanos Monastery" className="debre-libanos-attraction-image" />
              </div>
              <p className="debre-libanos-attraction-text">
                The Debre Libanos Monastery is an important religious site founded by Saint Tekle Haymanot in the 13th century. It is a major pilgrimage site for Ethiopian Orthodox Christians and is renowned for its beautiful church, ancient manuscripts, and spiritual ambiance. The monastery complex includes a church, several chapels, and living quarters for monks. Visitors can also see the cave where Saint Tekle Haymanot is said to have prayed for many years.
              </p>
            
            </li>
            <h3 className="debre-libanos-attraction-title">Portuguese Bridge</h3>
            <li className='flex'>
              <img src={PortugueseBridgeImage} alt="Portuguese Bridge" className="debre-libanos-attraction-image" />
              <p className="debre-libanos-attraction-text debre-libanos-section-text">
                The Portuguese Bridge, built in the 16th century, is a historic stone bridge that spans a deep gorge. It is named after the Portuguese explorers and missionaries who were active in Ethiopia during that period. The bridge offers stunning views of the surrounding landscapes and the Jemma River Gorge, making it a popular spot for photography and nature walks. The area around the bridge is also known for its diverse flora and fauna, including various bird species and endemic plants.
              </p>
            </li>
          </ul>
        </div>
        <h2 className="debre-libanos-section-title">Culture & Traditions</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="debre-libanos-section-culture flex">
          <img src={MuseumImage} alt="Local Market" className="debre-libanos-single-image" />
          <p className="debre-libanos-section-text">
            Debre Libanos is a cultural hub with rich traditions and vibrant festivals. The Timkat festival, celebrating Epiphany, is one of the most significant religious events in the town. During Timkat, the streets are filled with processions, music, and dancing, providing visitors with a unique cultural experience. The festival is marked by colorful ceremonies, the sprinkling of holy water, and communal feasts. Visitors can also experience traditional Ethiopian music, dance, and cuisine during their stay in Debre Libanos.
          </p>
        </div>
        <div className="debre-libanos-section-accommodation">
          <h2 className="debre-libanos-section-title">Accommodation</h2>
          <hr />
          <p className="debre-libanos-section-text">
            Debre Libanos offers a range of accommodation options to suit different budgets and preferences. From luxury hotels to budget guesthouses, visitors can find comfortable places to stay. Some popular choices include hotels and lodges that offer stunning views of the surrounding landscape. These accommodations often provide amenities such as Wi-Fi, dining services, and guided tours. It's advisable to book in advance, especially during peak tourist seasons and festival times.
          </p>
          <div className="debre-libanos-image-group">
            <img src={AccommodationImage1} alt="Accommodation 1" className="debre-libanos-image" />
            <img src={AccommodationImage2} alt="Accommodation 2" className="debre-libanos-image" />
            <img src={AccommodationImage3} alt="Accommodation 3" className="debre-libanos-image" />
          </div>
        </div>
        <h2 className="debre-libanos-section-title">Markets & Museums</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="debre-libanos-section-markets-museums flex">
          <img src={MuseumImage} alt="Debre Libanos Cultural Centre" className="debre-libanos-single-image" />
          <p className="debre-libanos-section-text">
            Debre Libanos' markets are bustling with activity, offering a wide range of goods from fresh produce to handmade crafts. The town's museums provide insights into the region's history and culture. Visitors can learn about Debre Libanos' past and view artifacts from different periods of Ethiopian history. The markets are great places to buy local souvenirs, such as traditional clothing, jewelry, and artwork. The museums often host exhibitions and events that highlight the cultural heritage of the area.
          </p>
        </div>
        <div className="debre-libanos-section-restaurants">
          <h2 className="debre-libanos-section-title">Restaurants</h2>
          <hr />
          <p className="debre-libanos-section-text">
            Debre Libanos' culinary scene is diverse, offering a mix of traditional Ethiopian cuisine and international dishes. Visitors can enjoy meals at local restaurants known for their delicious food and welcoming atmosphere. Some must-try Ethiopian dishes include injera (a sourdough flatbread), doro wat (spicy chicken stew), and kitfo (minced raw beef). Many restaurants also offer vegetarian and vegan options, catering to different dietary preferences.
          </p>
          <div className="debre-libanos-image-group">
            <img src={RestaurantImage1} alt="Restaurant 1" className="debre-libanos-image" />
            <img src={RestaurantImage2} alt="Restaurant 2" className="debre-libanos-image" />
            <img src={RestaurantImage3} alt="Restaurant 3" className="debre-libanos-image" />
          </div>
        </div>
        <div className="debre-libanos-section-hotels">
          <h2 className="debre-libanos-section-title">Hotels</h2>
          <hr />
          <p className="debre-libanos-section-text">
            For those looking for more luxurious accommodations, Debre Libanos has several hotels that provide excellent service and amenities. These hotels offer comfortable rooms, restaurants, and often feature stunning views of the surrounding area. Guests can enjoy facilities such as spas, swimming pools, and fitness centers. The hospitality of the local staff ensures a pleasant and memorable stay.
          </p>
          <div className="debre-libanos-image-group">
            <img src={HotelImage1} alt="Hotel 1" className="debre-libanos-image" />
            <img src={HotelImage2} alt="Hotel 2" className="debre-libanos-image" />
            <img src={HotelImage3} alt="Hotel 3" className="debre-libanos-image" />
          </div>
        </div>
        <h2 className="debre-libanos-section-title">Weather</h2>
        <hr />
        <div className="debre-libanos-section-weather flex">
        <img src={WeatherImage} alt="Weather" className="debre-libanos-image debre-libanos-single-image"  />
          <p className="debre-libanos-section-text">
            The weather in Debre Libanos is generally mild, with temperatures ranging from 15°C to 25°C. The best time to visit is during the dry season, from October to February, when the weather is most pleasant for outdoor activities and sightseeing. Visitors should be prepared for cooler temperatures in the early mornings and evenings, especially in the higher altitudes. It's also advisable to carry sunscreen and a hat to protect against the sun during the day.
          </p>
     
        </div>
         {/* the css is on the lalibela page  */}

<h2 className="axum-section-title">Frequently Asked Questions</h2>
<hr />
<div className="faq-section">
<img src={FaqImage} alt="FAQ" className="faq-image axum-single-image" />
<div className="faq-content">
<p className="faq-intro-text">
Here are some frequently asked questions about visiting Debre Libanos:
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
        <h2 className="debre-libanos-section-title">Special Section</h2>
        <hr />
        <div className="debre-libanos-section-special flex">
        <img src={SpecialImage} alt="Special" className="debre-libanos-special-image debre-libanos-single-image" />
     
          <div className="debre-libanos-special-content">
            <p className="debre-libanos-section-text">
              Discover the hidden gems of Debre Libanos! Explore the less-known but equally fascinating spots that make Debre Libanos a unique travel destination. From secluded natural spots to lesser-known historical sites, there is much to uncover beyond the main tourist attractions. This special section aims to highlight some of these hidden treasures, encouraging visitors to venture off the beaten path and experience the true essence of Debre Libanos.
            </p>
          </div>
        </div>

        <h2 className="debre-libanos-section-title">Map of debre-libanos</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="debre-libanos-section-map flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.6373679005005!2d38.84493701022023!3d9.711958390339117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164947b36eafb207%3A0xfd0cd644dbbf1e42!2sDebre%20Libanos!5e0!3m2!1sen!2set!4v1718589336679!5m2!1sen!2set" width="600" height="450"  allowfullscreen="" loading="lazy" 
       ></iframe>
          <p className="debre-libanos-section-text">
            debre-libanos is located in the Amhara Region of Ethiopia. The map below shows the town's layout and highlights key attractions and landmarks.
          </p>
        </div>
        <h2 className="debre-libanos-section-title">Special Tips</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="debre-libanos-section-special flex">
          <img src={SpecialImage} alt="Special Tips" className="debre-libanos-single-image" />
          <ul className="debre-libanos-tips-list">
            <p className="debre-libanos-section-text" style={{"marginBottom":"40px"}}>
              Here are some special tips for visitors to debre-libanos:
            </p>
            <li className="debre-libanos-tip-item">Hire a local guide to enhance your experience and gain deeper insights into the history and culture of debre-libanos.</li>
            <li className="debre-libanos-tip-item">Dress modestly, especially when visiting religious sites.</li>
            <li className="debre-libanos-tip-item">Try the local cuisine, including traditional dishes like injera and doro wat.</li>
          </ul>
        </div>
        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KRgNa7nJStU?si=Nyej8vrtaBmialgy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </section>
        <div className='tempofooter'></div>
      </div>
      
    </>
  );
};

export default DebreLibanosPage;
