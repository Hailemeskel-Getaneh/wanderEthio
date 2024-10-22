import React, { useState } from 'react';
import HeaderGondar from './headerGondar.jsx';
import GondarGalleryPage from '../Destinations/GalleryGondar.jsx';
import "../../styles/DestinationStyles/Gondar.css";
import GondarMainImage from "../../assets/images/Gondar/gondar1.jpg";
import KuskuamMariam from '../../assets/images/Gondar/kuskuamMariam.jpg';
import CastlesImage from "../../assets/images/Gondar/castles.jpg";
import DebreBerhanSelassieImage from '../../assets/images/Gondar/slassie.jpg';
import FasilidesBathImage from '../../assets/images/Gondar/fasilidesBath.jpg';
import MarketImage from '../../assets/images/Gondar/market.jpg';
import AccommodationImage1 from '../../assets/images/Gondar/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/Gondar/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/Gondar/accommodation3.jpg';
import WeatherImage from '../../assets/images/Gondar/weather1.jpg';
import MuseumImage from '../../assets/images/Gondar/museum.jpg';
import RestaurantImage1 from '../../assets/images/Gondar/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/Gondar/restaurant6.jpg';
import RestaurantImage3 from '../../assets/images/Gondar/restaurant5.jpg';
import HotelImage1 from '../../assets/images/Gondar/hotel1.jpg';
import HotelImage2 from '../../assets/images/Gondar/hotel2.jpg';
import HotelImage3 from '../../assets/images/Gondar/hotel3.jpg';
import FaqImage from '../../assets/images/Gondar/faq.jpg';
import MapImage from '../../assets/images/Gondar/map.jpg';
import SpecialImage from '../../assets/images/Gondar/special.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const GondarPage = () => {
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
    { question: "Is Gondar safe for tourists?", answer: "Yes, Gondar is generally safe for tourists. However, it is always advisable to take standard precautions and stay aware of your surroundings. However, it is always advisable to take standard precautions and stay aware of your surroundings. Crime rates are low, and the local people are known for their hospitality and friendliness. It's important to respect local customs and dress modestly, especially when visiting religious sites. " },
    { question: " What currency is used in Gondar?", answer: " The Ethiopian Birr (ETB) is the currency used in Gondar. It's recommended to carry some cash, as not all establishments accept credit cards. ATMs are available in the city, but it's a good idea to have enough local currency for small purchases and tips. Currency exchange services are also available at banks and hotels. Make sure to exchange money at authorized locations to avoid counterfeit bills." },
    { question: "What languages are spoken in Gondar?", answer: "Amharic is the official language, but English is widely spoken in tourist areas. English is taught in schools, so most young people and those working in the tourism industry can communicate effectively in English. Learning a few basic phrases in Amharic can enhance your travel experience and help you connect with the local community." },
    { question: "What should I wear when visiting Gondar?", answer: "Modest clothing is recommended, especially when visiting religious sites. Comfortable walking shoes are also advisable for exploring the city's attractions." },
    { question: "Are there any health precautions I should take?", answer: "It's advisable to drink bottled water and ensure your vaccinations are up to date. Consult your healthcare provider before traveling." }
  ]

  return (
    <>
      <HeaderGondar />
      <div className="gondar-container">
        <h1 className="gondar-title">Gondar</h1>
        <div className="gondar-main-image-container">
          <GondarGalleryPage />
        </div>
        <div className="tempofooter"></div>
        <div className="gondar-section-about">
          <h2 className="gondar-section-title">About Gondar</h2>
          <hr />
          <p className="gondar-section-text">
            Gondar, often referred to as the "Camelot of Africa," is a historic city in northern Ethiopia. Known for its medieval castles and churches, Gondar served as the capital of Ethiopia from the 17th to the 19th century. The city's rich history and cultural heritage make it a fascinating destination for visitors. Gondar is situated at an elevation of 2133 meters, offering a mild climate and breathtaking views of the surrounding landscape.
          </p>
        </div>
        <div className="gondar-section-history">
          <h2 className="gondar-section-title">History of Gondar</h2>
          <hr />
          <p className="gondar-section-text">
            Founded by Emperor Fasilides in 1636, Gondar became the center of Ethiopian art, culture, and architecture. The city's most famous landmarks, the castles in the Royal Enclosure, were built during this time and showcase a blend of Ethiopian, Portuguese, and Indian influences. Gondar remained a prominent city until the rise of Addis Ababa in the 19th century. The city's decline began after the royal court moved to the new capital, but Gondar retained its significance as a cultural and religious center.
          
            In addition to its architectural marvels, Gondar played a significant role in the religious history of Ethiopia. The establishment of numerous churches and monasteries during its golden age cemented its status as a spiritual hub. The city's contributions to Ethiopian literature and manuscript production are also noteworthy, with several ancient texts originating from this period.
          </p>
        </div>
        <div className="gondar-section-getting-there">
          <h2 className="gondar-section-title">Getting There</h2>
          <hr />
          <p className="gondar-section-text">
            Gondar is accessible via domestic flights from Addis Ababa to the Gondar Airport. The flight takes about an hour. Alternatively, visitors can take long-distance buses or private cars. The road trip from Addis Ababa offers scenic views of the Ethiopian Highlands and takes approximately 12 hours. Car rentals and guided tours are also available, providing a comfortable journey to the city.
 
            For those who enjoy adventure, traveling by bus provides an opportunity to interact with locals and experience the Ethiopian countryside up close. Several tour operators offer package deals that include transportation, accommodation, and guided tours of Gondar's attractions, making it convenient for tourists.
          </p>
        </div>
        <div className="gondar-section-attractions">
          <h2 className="gondar-section-title">Top Attractions</h2>
          <hr />
          <p className="gondar-section-text">
            Gondar is home to numerous historical and cultural attractions. Highlights include:
          </p>
          <ul className="gondar-attractions-list">
          <h3 className="gondar-attraction-title">The Royal Enclosure (Fasil Ghebbi)</h3>

            <li className='flex'>
              <img src={CastlesImage} alt="Royal Enclosure" className="gondar-attraction-image" />

              <p className="gondar-attraction-text">
                A UNESCO World Heritage Site, this complex of castles and palaces offers a glimpse into Gondar's royal past. The site includes several well-preserved structures such as Fasilides' Castle, Iyasu's Palace, Dawit's Hall, and a chancellery. Visitors can explore the royal quarters, banquet halls, and courtyards, which reflect the grandeur of the Ethiopian Empire during its peak.
              </p>
            </li>
            
            <h3 className="gondar-attraction-title">Debre Berhan Selassie Church</h3>
            <li className='flex'>
            <img src={DebreBerhanSelassieImage} alt="Debre Berhan Selassie Church" className="gondar-attraction-image" />
              <p className="gondar-attraction-text">
                Famous for its beautiful ceiling murals of angels, this 17th-century church is a must-see for art and history enthusiasts. The church's interior is adorned with vibrant frescoes depicting biblical scenes and Ethiopian saints. The intricately painted angels on the ceiling are particularly renowned, making it one of the most iconic religious sites in Ethiopia.
              </p>
       
            </li>
            <h3 className="gondar-attraction-title">Fasilides Bath</h3>

            <li className='flex'>
              <img src={FasilidesBathImage} alt="Fasilides Bath" className="gondar-attraction-image"    />
              <p className="gondar-attraction-text">
                This historic site is used for the annual Timkat (Epiphany) celebrations, where the pool is filled for a ceremonial reenactment of Christ's baptism. The bath is surrounded by lush gardens and features a central pavilion that was once used by the emperor. During Timkat, thousands of pilgrims gather here, making it a lively and colorful event.
              </p>
      
            </li>
            <h3 className="gondar-attraction-title">Kuskuam Complex</h3>

            <li className='flex'>
            <img src={KuskuamMariam} alt="Kuskuam Complex" className="gondar-attraction-image" />
              <p className="gondar-attraction-text">
                The Kuskuam Complex, built by Empress Mentewab in the 18th century, is another notable site. This complex includes a church, palace, and other structures, offering insight into the life of one of Ethiopia's most influential women. The ruins and the surrounding area provide a tranquil setting for exploration.
              </p>

            </li>
            <h3 className="gondar-attraction-title">The Palace of Ras Beite</h3>

            <li className='flex'>
              <img src={GondarMainImage} alt="Palace of Ras Beite" className="gondar-attraction-image" />
              <p className="gondar-attraction-text">
                The Palace of Ras Beite is a lesser-known gem that showcases the grandeur of Gondar's architectural heritage. The palace, with its impressive facade and historical significance, offers a glimpse into the lifestyle of Ethiopian nobility.
              </p>
            </li>
          </ul>
        </div>
        <h2 className="gondar-section-title">Culture & Traditions</h2>
        <hr />

        <div className="gondar-section-culture flex">
          <img src={MarketImage} alt="Local Market" className="gondar-single-image" />
          <p className="gondar-section-text">
            Gondar is a cultural hub with rich traditions and vibrant festivals. The Timkat festival, celebrating Epiphany, is one of the most significant religious events in the city. During Timkat, the streets are filled with processions, music, and dancing, providing visitors with a unique cultural experience. Gondar's local markets are also worth exploring, offering a variety of traditional handicrafts, textiles, and spices.
            In addition to Timkat, other festivals such as Meskel (Finding of the True Cross) and Fasika (Easter) are celebrated with great fervor in Gondar. These events offer a glimpse into the city's deep-rooted religious traditions and community spirit.
          </p>
 
        </div>
        <div className="gondar-section-accommodation">
          <h2 className="gondar-section-title">Accommodation</h2>
          <hr />
          <p className="gondar-section-text">
            Gondar offers a range of accommodation options to suit different budgets and preferences. From luxury hotels to budget guesthouses, visitors can find comfortable places to stay. Some popular choices include the Goha Hotel, which offers stunning views of the city, and the Taye Belay Hotel, known for its excellent service and amenities.
            For a more authentic experience, consider staying in one of the traditional guesthouses, where you can enjoy Ethiopian hospitality and home-cooked meals. These guesthouses often provide personalized services and insights into local culture.
          </p>
          <div className="gondar-image-group">
            <img src={AccommodationImage1} alt="Accommodation 1" className="gondar-image" />
            <img src={AccommodationImage2} alt="Accommodation 2" className="gondar-image" />
            <img src={AccommodationImage3} alt="Accommodation 2" className="gondar-image" />
          </div>
       
        </div>
        <h2 className="gondar-section-title">Markets & Museums</h2>
        <hr />

        <div className="gondar-section-markets-museums flex">
        <img src={MuseumImage} alt="Gondar Museum" className="gondar-single-image" />

          <p className="gondar-section-text">
            Gondar's markets are bustling with activity, offering a wide range of goods from fresh produce to handmade crafts. The city's museums, such as the Gondar Museum, provide insights into the region's history and culture. Visitors can learn about Gondar's royal past and view artifacts from different periods of Ethiopian history.
  
            The Ethnological Museum, housed in the former palace of Emperor Haile Selassie, is another notable attraction. It features exhibits on Ethiopian culture, history, and traditional arts, offering a comprehensive overview of the country's rich heritage.
          </p>
        </div>
        <div className="gondar-section-restaurants">
          <h2 className="gondar-section-title">Restaurants</h2>
          <hr />
          <p className="gondar-section-text">
            Gondar's culinary scene is diverse, offering a mix of traditional Ethiopian cuisine and international dishes. Visitors can enjoy meals at local restaurants such as Four Sisters Restaurant, known for its authentic Ethiopian dishes, or The Terrace Restaurant, which offers a variety of international cuisines. Both provide a delightful dining experience with a warm and welcoming atmosphere. For a unique dining experience, try one of the local eateries that offer traditional music and dance performances. These venues provide an immersive cultural experience while enjoying delicious Ethiopian food.
          </p>
          <div className="gondar-image-group">
            <img src={RestaurantImage1} alt="Restaurant 1" className="gondar-image" />
            <img src={RestaurantImage2} alt="Restaurant 2" className="gondar-image" />
            <img src={RestaurantImage3} alt="Restaurant 2" className="gondar-image" />
          </div>

        </div>
        <div className="gondar-section-hotels-lodges">
          <h2 className="gondar-section-title">Hotels & Lodges</h2>
          <hr />
          <p className="gondar-section-text">
            For those seeking luxurious accommodation, Gondar has several high-end hotels and lodges. The Goha Hotel offers panoramic views of the city, while the Florida International Hotel is known for its modern amenities and excellent service. These hotels provide comfortable and memorable stays for visitors.
          </p>
          <div className="gondar-image-group">
            <img src={HotelImage1} alt="Hotel 1" className="gondar-image" />
            <img src={HotelImage2} alt="Hotel 2" className="gondar-image" />
            <img src={HotelImage3} alt="Hotel 3" className="gondar-image" />
           
          </div>
          {/* <h2>SOme important Links</h2>
          <div className='flex'>
           <p><a href="https://www.booking.com" target="_blank">Booking.com</a></p> 
            <a href="https://www.tripadvisor.com" target="_blank">Tripadvisor</a>
           <p> 
           <a href="https://www.expedia.com" target="_blank">Expedia</a>

           </p>
           <p>
           <a href="https://www.hotels.com" target="_blank">Hotels.com</a>       </p></div> */}

    

        </div>
        <h2 className="gondar-section-title">Best Time to Visit</h2>
        <hr />

        <div className="gondar-section-best-time flex">
        <img src={WeatherImage} alt="best time tp visit" className="gondar-image" />

          <p className="gondar-section-text">
            The best time to visit Gondar is during the dry season, from October to March, when the weather is pleasant and suitable for sightseeing. This period also coincides with several cultural festivals, providing an opportunity to experience the local traditions and festivities.
            While the dry season is ideal, visiting during the rainy season (June to September) also has its charms, with lush green landscapes and fewer tourists. However, some attractions may be less accessible during this time.
          </p>
        </div>
        
        <h2 className="axum-section-title">Frequently Asked Questions</h2>
<hr />
<div className="faq-section">
<img src={FaqImage} alt="FAQ" className="faq-image axum-single-image" />
<div className="faq-content">
<p className="faq-intro-text">
Here are some frequently asked questions about visiting Gondar:
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



        <h2 className="gondar-section-title">Map of Gondar</h2>
<hr />
        <div className="gondar-section-map flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53051.846359239855!2d37.415248068882505!3d12.60112444620609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164328823d244edf%3A0x7826245358a8a65!2sGondar!5e1!3m2!1sen!2set!4v1717622621331!5m2!1sen!2set" width="600" height="450" allowfullscreen="" loading="lazy" ></iframe>

          <p className="gondar-section-text">
            Gondar is located in the Amhara Region of Ethiopia. The map below shows the city's layout and highlights key attractions and landmarks.

            Use this map to plan your itinerary and make the most of your visit to Gondar. Key locations include the Royal Enclosure, Debre Berhan Selassie Church, Fasilides Bath, and the local markets.
          </p>
        </div>
        <h2 className="gondar-section-title">Special Tips</h2>
        <hr />
        <div className="gondar-section-special flex">
          <img src={SpecialImage} alt="Special Tips" className="gondar-single-image" />
             
          <ul className="gondar-tips-list gondar-section-text">
          <p className="gondar-section-text">
            Here are some special tips for visitors to Gondar:
          </p>
            <li className="gondar-tip-item">Hire a local guide to enhance your experience and gain deeper insights into the history and culture of Gondar.</li>
            <li className="gondar-tip-item">Dress modestly, especially when visiting religious sites.</li>
            <li className="gondar-tip-item">Try the local cuisine, including traditional dishes like injera and doro wat.</li>
            <li className="gondar-tip-item">Carry small denominations of cash for easier transactions in local markets.</li>
            <li className="gondar-tip-item">Learn a few basic phrases in Amharic to interact with locals and show respect for the local culture.</li>
          </ul>
        </div>
 



        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c6nyhFeAgNM?si=WZpXiVOx20aozxG2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </section>
      <div className='tempofooter'></div>

      </div>
    </>
  );
};

export default GondarPage;