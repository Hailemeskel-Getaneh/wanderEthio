import React from 'react';
import HeaderLalibela from './headerLalibela.jsx';
import "../../styles/DestinationStyles/Lalibela.css";
import GalleryLalibela from './GalleryLalibela.jsx';
import RockHewnChurchesImage from "../../assets/images/Lalibela/rochHewnChurch1.jpg";
import RockHewnChurchesImage1 from "../../assets/images/Lalibela/rochHewnChurch3.jpg";
import RockHewnChurchesImage2 from "../../assets/images/Lalibela/rochHewnChurches.jpg";
import BetGiyorgisImage from '../../assets/images/Lalibela/beteGiyorgis.jpg';
import MarketImage from '../../assets/images/Lalibela/market.jpg';
import AccommodationImage1 from '../../assets/images/Lalibela/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/Lalibela/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Lalibela/accommodation3.jpg';
import WeatherImage from '../../assets/images/Lalibela/weather.jpg';
import MuseumImage from '../../assets/images/Lalibela/museum.jpg';
import RestaurantImage1 from '../../assets/images/Lalibela/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Lalibela/restaurant2.jpg';
import RestaurantImage3 from '../../assets/images/Lalibela/restaurant3.jpg';
import HotelImage1 from '../../assets/images/Lalibela/hotel1.jpg';
import HotelImage2 from '../../assets/images/Lalibela/hotel2.jpg';
import HotelImage3 from '../../assets/images/Lalibela/hotel3.jpg';
import FaqImage from '../../assets/images/Lalibela/faq.jpg';
import SpecialImage from '../../assets/images/Lalibela/special.jpg';
import { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const LalibelaPage = () => {
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
    { question: "Is Lalibela safe for tourists?", answer: "Yes, Lalibela is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings. It's important to respect local customs and dress modestly, especially when visiting religious sites. By staying informed and following basic safety guidelines, you can enjoy a safe and memorable visit to Lalibela." },
    { question: "What currency is used in Lalibela?", answer: "The Ethiopian Birr (ETB) is the currency used in Lalibela. It's recommended to carry some cash, as not all establishments accept credit cards. ATMs are available in the city, but it's a good idea to have enough local currency for small purchases and tips. Currency exchange services are also available at banks and hotels. Make sure to exchange money at authorized locations to avoid counterfeit bills.           " },
    { question: " What languages are spoken in Lalibela?", answer: "Amharic is the official language, but English is widely spoken in tourist areas.  English is taught in schools, so most young people and those working in the tourism industry can communicate effectively in English. Learning a few basic phrases in Amharic  can enhance your travel experience and help you connect with the local community." }
  ]
  return (
    <>
      <HeaderLalibela />
      <div className="lalibela-container">
        <h1 className="lalibela-title">Lalibela</h1>
        <div className="lalibela-main-image-container">
          {<GalleryLalibela />}
        </div>
        <div className='tempofooter'></div>
        <div className="lalibela-section-about">
          <h2 className="lalibela-section-title">About Lalibela</h2>
          <hr />
          <p className="lalibela-section-text">
            Lalibela is a town in northern Ethiopia famous for its monolithic rock-cut churches. It is one of Ethiopia's holiest cities and a center of pilgrimage for much of the country. Known as the "New Jerusalem," Lalibela is renowned for its medieval churches carved out of rock, which are still in use today and attract visitors from around the world.
          </p>
        </div>
        <div className="lalibela-section-history">
          <h2 className="lalibela-section-title">History of Lalibela</h2>
          <hr />
          <p className="lalibela-section-text">
            Lalibela was named after King Lalibela who ruled Ethiopia in the late 12th and early 13th centuries. According to tradition, he set out to create a "New Jerusalem" as a pilgrimage alternative to the Holy Land. The town's eleven medieval churches were hewn out of solid rock, with the help of angels according to local legend, making them a marvel of engineering and religious devotion.
          </p>
        </div>
        <div className="lalibela-section-getting-there">
          <h2 className="lalibela-section-title">Getting There</h2>
          <hr />
          <p className="lalibela-section-text">
            Lalibela is accessible via domestic flights from Addis Ababa to the Lalibela Airport. The flight takes about an hour. Alternatively, visitors can take long-distance buses or private cars. The road trip from Addis Ababa offers scenic views of the Ethiopian Highlands and takes approximately two days. Car rentals and guided tours are also available, providing a comfortable journey to the town.
          </p>
        </div>
        <div className="lalibela-section-attractions">
          <h2 className="lalibela-section-title">Top Attractions</h2>
          <hr />
          <p className="lalibela-section-text">
            Lalibela is home to numerous historical and cultural attractions. Highlights include:
          </p>
          <ul className="lalibela-attractions-list">
            <h3 className="lalibela-attraction-title">Rock-Hewn Churches</h3>
            <li>
              <p className="lalibela-attraction-text">
                The UNESCO World Heritage Site of Lalibela consists of eleven medieval monolithic cave churches carved out of rock. The churches are still in use today and are considered one of the wonders of the world.
              </p>
              <div className="lalibela-image-group">
                <img src={RockHewnChurchesImage} alt="Rock-Hewn Churches" className="lalibela-attraction-image" />
                <img src={RockHewnChurchesImage1} alt="Rock-Hewn Churches 3" className="lalibela-attraction-image" />
                <img src={RockHewnChurchesImage2} alt="Rock-Hewn Churches 1" />
              </div>
            </li>
            <h3 className="lalibela-attraction-title">Bet Giyorgis (Church of Saint George)</h3>
            <li className='flex'>
              <img src={BetGiyorgisImage} alt="Bet Giyorgis" className="lalibela-attraction-image" />
              <p className="lalibela-attraction-text lalibela-section-text">
                Perhaps the most well-known and visually striking of all the churches, Bet Giyorgis is carved in the shape of a cross and stands as a testament to Ethiopia's rich cultural and religious history. It is well built and amazing for every one . No one can built in any time in the world like that and the finest on all things in the world.
              </p>
            </li>
          </ul>
        </div>
        <h2 className="lalibela-section-title">Culture & Traditions</h2>
        <div className="div-out-hr">
          <hr  />
        </div>
        <div className="lalibela-section-culture flex">
          <img src={MarketImage} alt="Local Market" className="lalibela-single-image" />
          <p className="lalibela-section-text">
            Lalibela is a cultural hub with rich traditions and vibrant festivals. The Timkat festival, celebrating Epiphany, is one of the most significant religious events in the town. During Timkat, the streets are filled with processions, music, and dancing, providing visitors with a unique cultural experience. Lalibela's local markets are also worth exploring, offering a variety of traditional handicrafts, textiles, and spices.
          </p>
        </div>
        <div className="lalibela-section-accommodation">
          <h2 className="lalibela-section-title">Accommodation</h2>
          <hr />
          <p className="lalibela-section-text">
            Lalibela offers a range of accommodation options to suit different budgets and preferences. From luxury hotels to budget guesthouses, visitors can find comfortable places to stay. Some popular choices include the Maribela Hotel, which offers stunning views of the surrounding landscape, and the Lal Hotel, known for its excellent service and amenities.
          </p>
          <div className="lalibela-image-group">
            <img src={AccommodationImage1} alt="Accommodation 1" className="lalibela-image" />
            <img src={AccommodationImage2} alt="Accommodation 2" className="lalibela-image" />
            <img src={AccommodationImage3} alt="Accommodation 3" className="lalibela-image" />
          </div>
        </div>
        <h2 className="lalibela-section-title">Markets & Museums</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="lalibela-section-markets-museums flex">
          <img src={MuseumImage} alt="Lalibela Cultural Centre" className="lalibela-single-image" />
          <p className="lalibela-section-text">
            Lalibela's markets are bustling with activity, offering a wide range of goods from fresh produce to handmade crafts. The town's museums, such as the Lalibela Cultural Centre, provide insights into the region's history and culture. Visitors can learn about Lalibela's royal past and view artifacts from different periods of Ethiopian history.
          </p>
        </div>
        <div className="lalibela-section-restaurants">
          <h2 className="lalibela-section-title">Restaurants</h2>
          <hr />
          <p className="lalibela-section-text">
            Lalibela's culinary scene is diverse, offering a mix of traditional Ethiopian cuisine and international dishes. Visitors can enjoy meals at local restaurants such as Ben Abeba, known for its innovative architecture and delicious food, or Seven Olives Hotel, which offers a variety of international cuisines. Both provide a delightful dining experience with a warm and welcoming atmosphere.
          </p>
          <div className="lalibela-image-group">
            <img src={RestaurantImage1} alt="Restaurant 1" className="lalibela-image" />
            <img src={RestaurantImage2} alt="Restaurant 2" className="lalibela-image" />
            <img src={RestaurantImage3} alt="Restaurant 2" className="lalibela-image" />
          </div>
        </div>
        <div className="lalibela-section-hotels-lodges">
          <h2 className="lalibela-section-title">Hotels & Lodges</h2>
          <hr />
          <p className="lalibela-section-text">
            For those seeking luxurious accommodation, Lalibela has several high-end hotels and lodges. The Maribela Hotel offers panoramic views of the town, while the Mountain View Hotel is known for its modern amenities and excellent service. These hotels provide comfortable and memorable stays for visitors.
          </p>
          <div className="lalibela-image-group">
            <img src={HotelImage1} alt="Hotel 1" className="lalibela-image" />
            <img src={HotelImage2} alt="Hotel 2" className="lalibela-image" />
            <img src={HotelImage3} alt="Hotel 3" className="lalibela-image" />
          </div>
        </div>
        <h2 className="lalibela-section-title">Best Time to Visit</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="lalibela-section-best-time flex">
          <img src={WeatherImage} alt="Best Time to Visit" className="lalibela-single-image" />
          <p className="lalibela-section-text">
            The best time to visit Lalibela is during the dry season, from October to March, when the weather is pleasant and suitable for sightseeing. This period also coincides with several cultural festivals, providing an opportunity to experience the local traditions and festivities.
          </p>
        </div>
       
       
       
        <h2 className="lalibela-section-title">Frequently Asked Questions</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        

        <div className="faq-section">
  <img src={FaqImage} alt="FAQ" className="faq-image" />
  <div className="faq-content">
    <p className="faq-intro-text">
      Here are some frequently asked questions about visiting Lalibela. Click the questions to get the answers:
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

        <h2 className="lalibela-section-title">Map of Lalibela</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="lalibela-section-map flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968.779343521505!2d39.03003306977541!3d12.0306891349999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1643e93b5a8b8353%3A0x80e4de2c9eae9b77!2sLalibela%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1620477162981!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p className="lalibela-section-text">
            Lalibela is located in the Amhara Region of Ethiopia. The map below shows the town's layout and highlights key attractions and landmarks.
          </p>
        </div>
        <h2 className="lalibela-section-title">Special Tips</h2>
        <div className="div-out-hr">
          <hr />
        </div>
        <div className="lalibela-section-special flex">
          <img src={SpecialImage} alt="Special Tips" className="lalibela-single-image" />
          <ul className="lalibela-tips-list">
            <p className="lalibela-section-text" style={{"marginBottom":"40px"}}>
              Here are some special tips for visitors to Lalibela:
            </p>
            <li className="lalibela-tip-item">Hire a local guide to enhance your experience and gain deeper insights into the history and culture of Lalibela.</li>
            <li className="lalibela-tip-item">Dress modestly, especially when visiting religious sites.</li>
            <li className="lalibela-tip-item">Try the local cuisine, including traditional dishes like injera and doro wat.</li>
          </ul>
        </div>
        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HBq_zOzhTqw?si=cTXgSnA2fpMHfkHc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </section>
        <div className='tempofooter'></div>
      </div>
    </>
  );
};

export default LalibelaPage;
