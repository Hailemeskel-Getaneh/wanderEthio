import React, {useState} from 'react';
import HeaderAddisAbaba from '../../pages//Destinations/headerAdisAbaba.jsx';
import "../../styles/DestinationStyles/AddissAbaba.css";
import EntotoImage from "../../assets/images/AddisAbaba/entoto.jpg";
import NationalMuseumImage from "../../assets/images/AddisAbaba/nationalMuseum.jpg";
import HolyTrinityCathedralImage from "../../assets/images/AddisAbaba/holyTrinityCathedral.jpg";
import EthnologicalMuseumImage from "../../assets/images/AddisAbaba/ethnologicalMuseum2.jpg";
import RedTerrorMartyrsMemorialMuseumImage from "../../assets/images/AddisAbaba/redTerrorMuseum.jpg";
import MerkatoMarketImage from "../../assets/images/AddisAbaba/merkatoMarket2.jpg";
import MeskelSquareImage from "../../assets/images/AddisAbaba/meskelSquare.jpg";
import AddisAbabaCityImage from "../../assets/images/AddisAbaba/A.A2.jpg";
import AddisAbabaCityImage2 from "../../assets/images/AddisAbaba/addisAbabaCity2.jpg";
import JupiterHotelImage from "../../assets/images/AddisAbaba/jupiterHotel.jpg";
import HiltonAddisAbabaImage from "../../assets/images/AddisAbaba/hiltonAddisAbaba.jpg";
import MarriottExecutiveApartmentsImage from "../../assets/images/AddisAbaba/marriottApartments.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FaqImage from "../../assets/images/AddisAbaba/addisAbabaCity1.jpg";


const AddisAbabaPage = () => {
  const [faqOpen, setFaqOpen] = React.useState({});
  const accommodations = [
    {
      name: "Jupiter International Hotel",
      image: JupiterHotelImage,
      description: "A luxurious hotel known for its elegant rooms, excellent service, and convenient location near city attractions."
    },
    {
      name: "Hilton Addis Ababa",
      image: HiltonAddisAbabaImage,
      description: "A renowned hotel offering spacious rooms, multiple dining options, and panoramic views of the city."
    },
    {
      name: "Marriott Executive Apartments",
      image: MarriottExecutiveApartmentsImage,
      description: "Ideal for extended stays, featuring fully furnished apartments, fitness facilities, and a central location."
    }
  ];

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
    { question: "Is Addis Ababa safe for tourists?", answer: "Addis Ababa is generally safe for tourists. Like any major city, it's important to take normal precautions such as avoiding isolated areas at night and keeping an eye on personal belongings. The city is known for its friendly people and vibrant culture, offering a rich experience for visitors." },
    { question: "What currency is used in Addis Ababa?", answer: "The currency used in Addis Ababa and throughout Ethiopia is the Ethiopian Birr (ETB). It's recommended to carry cash as credit cards are not widely accepted, especially outside major hotels and businesses. ATMs are available but not as common in some areas." },
    { question: "What languages are spoken in Addis Ababa?", answer: "The official language of Ethiopia is Amharic, but English is widely spoken, particularly in tourist areas, hotels, and restaurants. Learning a few basic phrases in Amharic can be appreciated by locals, although many people in Addis Ababa are accustomed to interacting in English." }
  ];

  return (
    <>
      <HeaderAddisAbaba />
      <div className="addis-ababa-container">
        <h1 className="addis-ababa-title">Discover Addis Ababa</h1>
        <div className="addis-ababa-main-image-container">
          <img src={AddisAbabaCityImage} alt="Addis Ababa City" className="addis-ababa-main-image" />
        </div>
        <div className="addis-ababa-section-about">
          <h2 className="addis-ababa-section-title">About Addis Ababa</h2>
          <hr />
          <p className="addis-ababa-section-text">
            Addis Ababa, the capital city of Ethiopia, is a bustling metropolis that blends rich history with vibrant culture. It is located at the heart of the country and serves as the diplomatic and political center. Visitors to Addis Ababa can explore a diverse range of attractions, from ancient landmarks and museums to bustling markets and vibrant neighborhoods.
          </p>
        </div>
        <div className="addis-ababa-section-attractions">
          <h2 className="addis-ababa-section-title">Top Attractions</h2>
          <hr />
          <ul className="addis-ababa-attractions-list">
            <h3 className="addis-ababa-attraction-title">Entoto Hill</h3>
            <li className='flex'>
              <img src={EntotoImage} alt="Entoto Hill" className="addis-ababa-attraction-image" />
              <p className="addis-ababa-attraction-text">
                Entoto Hill offers panoramic views of Addis Ababa and is known for its historic sites, including Emperor Menelik II's palace and the Entoto Maryam Church. Visitors can enjoy hiking trails and learn about the city's founding.
              </p>
            </li>
            <h3 className="addis-ababa-attraction-title">National Museum of Ethiopia</h3>
            <li className='flex'>
              <img src={NationalMuseumImage} alt="National Museum of Ethiopia" className="addis-ababa-attraction-image" />
              <p className="addis-ababa-attraction-text">
                The National Museum houses ancient artifacts, including the famous hominid fossil "Lucy". It provides insights into Ethiopia's rich cultural heritage and history spanning thousands of years.
              </p>
            </li>
            <h3 className="addis-ababa-attraction-title">Holy Trinity Cathedral</h3>
            <li className='flex'>
              <img src={HolyTrinityCathedralImage} alt="Holy Trinity Cathedral" className="addis-ababa-attraction-image" />
              <p className="addis-ababa-attraction-text">
                Holy Trinity Cathedral is an architectural masterpiece and a prominent religious site in Addis Ababa. It features beautiful stained glass windows, murals, and the tombs of notable figures.
              </p>
            </li>
            <h3 className="addis-ababa-attraction-title">Ethnological Museum</h3>
            <li className='flex'>
              <img src={EthnologicalMuseumImage} alt="Ethnological Museum" className="addis-ababa-attraction-image" />
              <p className="addis-ababa-attraction-text">
                Located within the former palace of Emperor Haile Selassie, the Ethnological Museum showcases Ethiopia's diverse cultures and traditions through exhibits of artifacts, clothing, and crafts.
              </p>
            </li>
            <h3 className="addis-ababa-attraction-title">Red Terror Martyrs Memorial Museum</h3>
            <li className='flex'>
              <img src={RedTerrorMartyrsMemorialMuseumImage} alt="Red Terror Martyrs Memorial Museum" className="addis-ababa-attraction-image" />
              <p className="addis-ababa-attraction-text">
                This museum commemorates victims of Ethiopia's Red Terror period. It offers historical insights through exhibits, documents, and personal stories, providing a sobering but important look into the country's recent history.
              </p>
            </li>
            <h3 className="addis-ababa-attraction-title">Merkato Market</h3>
            <li className='flex'>
              <img src={MerkatoMarketImage} alt="Merkato Market" className="addis-ababa-attraction-image" />
              <p className="addis-ababa-attraction-text">
                Merkato is one of Africa's largest open-air markets, bustling with vendors selling everything from spices and textiles to handicrafts and souvenirs. It's a vibrant place to experience local culture and shop for unique items.
              </p>
            </li>
            <h3 className="addis-ababa-attraction-title">Meskel Square</h3>
            <li className='flex'>
              <img src={MeskelSquareImage} alt="Meskel Square" className="addis-ababa-attraction-image" />
              <p className="addis-ababa-attraction-text">
                Meskel Square is a central gathering place in Addis Ababa, known for its celebrations and events. It offers a glimpse into daily life in the city and is a popular spot for people-watching and cultural events.
              </p>
            </li>
          </ul>
        </div>
        <div className="addis-ababa-section-accommodations">
          <h2 className="addis-ababa-section-title">Accommodations</h2>
          <hr />
          <div className="addis-ababa-accommodations-list">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="addis-ababa-accommodation-item flex">
                <img src={accommodation.image} alt={accommodation.name} className="addis-ababa-accommodation-image" />
                <div className="addis-ababa-accommodation-details">
                  <h3 className="addis-ababa-accommodation-title">{accommodation.name}</h3>
                  <p className="addis-ababa-accommodation-description">{accommodation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="addis-ababa-section-title">Weather and Best Time to Visit</h2>
        <hr />
        <div className="addis-ababa-section-weather flex">
       <img src={AddisAbabaCityImage2} alt="Merkato Market" className="addis-ababa-attraction-image" />
          <div className="addis-ababa-weather-details">
            <p className="addis-ababa-weather-text">
              Addis Ababa has a mild climate due to its high elevation. The city experiences two main seasons: the dry season from October to February and the rainy season from June to September. The best time to visit is during the dry season when temperatures are pleasant and rainfall is minimal, making it ideal for exploring outdoor attractions.
              Average temperatures range from 10°C (50°F) to 25°C (77°F) throughout the year, with cooler nights and mornings. Visitors should pack layers and a light jacket for evenings, even during warmer months.
            </p>
          </div>
        </div>
        <div className="addis-ababa-section-tips">
          <h2 className="addis-ababa-section-title">Travel Tips</h2>
          <hr />
          <ul className="addis-ababa-tips-list">
            <li className="addis-ababa-tip">
              <FontAwesomeIcon icon={faChevronDown} className="addis-ababa-tip-icon" />
              <div className="addis-ababa-tip-content">
                <h3 className="addis-ababa-tip-title">Currency and Payments</h3>
                <p className="addis-ababa-tip-text">
                  The local currency is the Ethiopian Birr (ETB). Credit cards are accepted in major hotels and some restaurants, but it's advisable to carry cash for smaller establishments and markets.
                </p>
              </div>
            </li>
            <li className="addis-ababa-tip">
              <FontAwesomeIcon icon={faChevronDown} className="addis-ababa-tip-icon" />
              <div className="addis-ababa-tip-content">
                <h3 className="addis-ababa-tip-title">Local Etiquette</h3>
                <p className="addis-ababa-tip-text">
                  Respect local customs, especially when visiting religious sites or interacting with locals. It's customary to remove shoes before entering places of worship.
                </p>
              </div>
            </li>
            <li className="addis-ababa-tip">
              <FontAwesomeIcon icon={faChevronDown} className="addis-ababa-tip-icon" />
              <div className="addis-ababa-tip-content">
                <h3 className="addis-ababa-tip-title">Safety</h3>
                <p className="addis-ababa-tip-text">
                  Addis Ababa is relatively safe, but exercise caution in crowded areas and at night. Avoid displaying valuables openly and use reputable taxis or hotel transportation.
                </p>
              </div>
            </li>
            <li className="addis-ababa-tip">
              <FontAwesomeIcon icon={faChevronDown} className="addis-ababa-tip-icon" />
              <div className="addis-ababa-tip-content">
                <h3 className="addis-ababa-tip-title">Local Cuisine</h3>
                <p className="addis-ababa-tip-text">
                  Explore Ethiopian cuisine, known for its diverse flavors and injera (a sourdough flatbread). Try traditional dishes like doro wat (spicy chicken stew) and injera with various stews (wats).
                </p>
              </div>
            </li>
          </ul>
        </div>

          {/* the css is on the lalibela page  */}

<h2 className="axum-section-title">Frequently Asked Questions</h2>
<hr />
<div className="faq-section">
<img src={FaqImage} alt="FAQ" className="faq-image axum-single-image" />
<div className="faq-content">
<p className="faq-intro-text">
Here are some frequently asked questions about visiting Addiss Ababa:
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
        <div className="addis-ababa-section-google-map">
          <h2 className="addis-ababa-section-title">Explore Addis Ababa</h2>
          <hr />
          <div className="addis-ababa-google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.2559038919!2d38.61298477151671!3d8.963140215728345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1718541143198!5m2!1sen!2set" width="98%" height="450" margin="35px"  allowfullscreen="" loading="lazy" ></iframe>
          </div>
        </div>
        <div className="bale-section-video">
          <h2 className="bale-section-title">Discover More</h2>
          {/* <hr /> */}
          <div className="bale-video-container">
            {showVideo ? (
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WPmElaPJ9rg?si=5gWCkHsU99ICJ3yS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            ) : (
              <button onClick={handleWatchVideo} className="watchVideoBtn">
                Watch Video
              </button>
            )}
          </div>
        </div>


     
      </div>
    </>
  );
};

export default AddisAbabaPage;

