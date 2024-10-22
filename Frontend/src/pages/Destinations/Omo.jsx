import React, { useState } from 'react';
import HeaderOmoValley from './Headeromo.jsx';
import "../../styles/DestinationStyles/omo.css";
import TribeImage1 from "../../assets/images/omo/tribe1.jpg";
import TribeImage2 from "../../assets/images/omo/tribe2.jpg";
import TribeImage3 from "../../assets/images/omo/tribe3.jpg";
import MarketImage from '../../assets/images/omo/market.jpg';
import AccommodationImage1 from '../../assets/images/omo/accommodation1.jpg';
import AccommodationImage2 from '../../assets/images/omo/accommodation2.jpg';
import AccommodationImage3 from '../../assets/images/omo/accommodation3.jpg';
import WeatherImage from '../../assets/images/omo/weather.jpg';
import MuseumImage from '../../assets/images/omo/museum.jpg';
import RestaurantImage1 from '../../assets/images/omo/restaurant1.jpg';
import RestaurantImage2 from '../../assets/images/omo/restaurant2.jpg';
import RestaurantImage3 from '../../assets/images/omo/restaurant3.jpg';
import HotelImage1 from '../../assets/images/omo/hotel1.jpg';
import HotelImage2 from '../../assets/images/omo/hotel4.jpg';
import HotelImage3 from '../../assets/images/omo/hotel3.jpg';
import FaqImage from '../../assets/images/omo/faq.jpg';
import MapImage from '../../assets/images/omo/map.jpg';
import SpecialImage from '../../assets/images/omo/special.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const OmoValleyPage = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [showVideo, setShowVideo] = useState(false);

  const toggleFaq = index => {
    setFaqOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleWatchVideo = () => {
    setShowVideo(true);
  };


  const faqs  = [
    {
      question: "What is the best time to visit Omo Valley?",
      answer: "The best time to visit Omo Valley is during the dry season, from October to March, when the weather is more favorable for travel and outdoor activities."
    },
    {
      question: "Are guided tours available?",
      answer: "Yes, guided tours are available and highly recommended to navigate the remote areas and to gain deeper insights into the local cultures."
    },
    {
      question: "What should I pack for a trip to Omo Valley?",
      answer: "Pack light, breathable clothing for the day, warmer layers for the evening, comfortable walking shoes, insect repellent, sun protection, and any personal medications."
    },
    {
      question: "Is it safe to visit Omo Valley?",
      answer: "Omo Valley is generally safe for tourists, but it is advisable to travel with a reputable tour operator and stay informed about local conditions and travel advisories."
    },
    {
      question: "Can I take photographs of the tribes?",
      answer: "Yes, but always ask for permission before taking photographs of the local people to respect their privacy and cultural sensitivity."
    }
  ];
  
  return (
    <>
      <HeaderOmoValley />
      <div className="omo-valley-container">
        <h1 className="omo-valley-title">Omo Valley</h1>
        <div className="omo-valley-main-image-container">
          {/* <GalleryOmoValley /> */}
        </div>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">About Omo Valley</h2>
          <hr />
          <p className="omo-valley-section-text">
            Omo Valley, located in southern Ethiopia, is a culturally rich region known for its diverse indigenous tribes and stunning landscapes. The valley is renowned for its vibrant traditions, intricate body art, and distinct ways of life, offering visitors a unique glimpse into some of the world's most ancient cultures.

            The valley is characterized by its remote and rugged terrain, which has helped to preserve the traditional lifestyles of its inhabitants. Visitors to the Omo Valley can experience a variety of unique cultural practices, from the elaborate lip plates of the Mursi tribe to the bull-jumping ceremonies of the Hamar. This region is a living museum, showcasing the enduring heritage of Ethiopia's indigenous peoples.
          </p>
        </section>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">History of Omo Valley</h2>
          <hr />
          <p className="omo-valley-section-text">
            The Omo Valley has been home to various indigenous tribes for centuries. These tribes have preserved their ancestral traditions and lifestyles despite the influences of modernization. The region is also an important archaeological site, with discoveries that provide insights into early human history.

            Archaeological findings in the Omo Valley date back to prehistoric times, offering valuable information about the evolution of early human societies. The area has yielded some of the oldest known fossil remains of Homo sapiens, making it a significant site for anthropologists and historians. These discoveries underscore the deep historical roots of the valley's current inhabitants.
 
            The interaction between the different tribes over the centuries has led to a rich tapestry of cultures, languages, and traditions. Despite external influences, the people of the Omo Valley have maintained a strong connection to their heritage, passing down customs and knowledge through generations. This resilience is evident in their daily lives, ceremonies, and artistic expressions.
          </p>
        </section>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">Getting There</h2>
          <hr />
          <p className="omo-valley-section-text">
            Omo Valley can be reached by flights from Addis Ababa to Jinka or Arba Minch, followed by a drive to the valley. Alternatively, visitors can take a road trip from Addis Ababa, which offers scenic views of Ethiopia's diverse landscapes. Guided tours are recommended for a more comprehensive and safe experience.

            The journey to Omo Valley is part of the adventure, with routes that take travelers through stunning Ethiopian highlands, verdant valleys, and along the Great Rift Valley. Road conditions can vary, so it's advisable to travel with experienced guides and reliable vehicles. For those interested in a deeper exploration, multi-day tours can be arranged to visit various tribal villages and natural landmarks.

            Visitors should also be prepared for basic accommodations in some areas, as the valley's remoteness means that luxury amenities are rare. However, the opportunity to immerse oneself in the rich cultures and breathtaking landscapes of Omo Valley makes the journey worthwhile. Remember to check travel advisories and local conditions before planning your trip.
          </p>
        </section>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">Top Attractions</h2>
          <hr />
          <p className="omo-valley-section-text">
            Omo Valley is home to numerous cultural and natural attractions. Highlights include:
          </p>
          <ul className="omo-valley-attractions-list">
            <li>
              <h3 className="omo-valley-attraction-title">Indigenous Tribes</h3>
              <p className="omo-valley-attraction-text">
                The Omo Valley is famous for its indigenous tribes, such as the Hamar, Mursi, and Karo. Each tribe has its unique customs, traditional dress, and body decorations. Visitors can interact with the tribes and learn about their rich cultural heritage.
         
                The Hamar tribe, known for their bull-jumping ceremony, which marks the initiation of young men into adulthood, is one of the most visually striking cultures in the valley. The Mursi are perhaps best known for the lip plates worn by their women, a sign of beauty and social status. The Karo people, with their elaborate body painting and scarification, are masters of aesthetic expression.
    
                Engaging with these tribes provides an unparalleled opportunity to witness traditional ways of life that have remained largely unchanged for centuries. Visitors are encouraged to approach these interactions with respect and openness, fostering a genuine cultural exchange.
              </p>
              
              <div className="omo-valley-image-group">
                <img src={TribeImage1} alt="Tribe 1" className="omo-valley-attraction-image" />
                <img src={TribeImage2} alt="Tribe 2" className="omo-valley-attraction-image" />
                <img src={TribeImage3} alt="Tribe 3" className="omo-valley-attraction-image" />
              </div>
          
            </li>
            <li>
              <h3 className="omo-valley-attraction-title">Natural Landscapes</h3>
              <p className="omo-valley-attraction-text">
                Beyond its cultural riches, the Omo Valley boasts diverse and stunning natural landscapes. The valley is part of the East African Rift system, featuring dramatic geological formations, lush riverbanks, and savannahs teeming with wildlife.
        
                One of the standout natural attractions is the Omo River, which flows through the valley and supports the livelihoods of many local communities. The river's ecosystem is home to a variety of flora and fauna, making it a great spot for nature enthusiasts and photographers. 
              </p>
            </li>
          </ul>
        </section>
        <h2 className="omo-valley-section-title">Culture & Traditions</h2>
        <hr />

        <section className="omo-valley-section flex">
          <img src={MarketImage} alt="Local Market" className="omo-valley-single-image" />
          <p className="omo-valley-section-text">
            Omo Valley is a melting pot of cultures with rich traditions and vibrant ceremonies. Festivals, such as the bull-jumping ceremony of the Hamar tribe, are significant cultural events that offer visitors a unique and immersive experience. The local markets are also vibrant, showcasing traditional crafts and foods.
  
       
            Each tribe in the Omo Valley has its own distinct traditions and practices. For example, the Mursi people are known for their elaborate lip plates and body scarification, which are important cultural symbols. The Karo tribe is famous for their intricate body painting, which they use to adorn themselves for ceremonies and daily life.
   
            Music and dance are integral parts of life in the Omo Valley. Traditional instruments and rhythmic dances play a crucial role in celebrations and rituals. 
          </p>
        </section>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">Accommodation</h2>
          <hr />
          <p className="omo-valley-section-text">
            While accommodation options in the Omo Valley are limited, there are a few lodges and campsites that offer comfortable stays. These accommodations provide basic amenities and are often located in scenic areas, allowing visitors to fully appreciate the beauty of the valley.
            Staying in the Omo Valley often means embracing a simpler lifestyle, with accommodations that emphasize eco-friendliness and cultural immersion. Many lodges are designed to blend seamlessly with the natural environment, providing a rustic yet comfortable experience. Guests can enjoy traditional Ethiopian hospitality, with meals often featuring local ingredients and dishes.
            For a more authentic experience, visitors can opt to stay in community-run guesthouses or homestays. 
          </p>
          <div className="omo-valley-image-group">
            <img src={AccommodationImage1} alt="Accommodation 1" className="omo-valley-attraction-image" />
            <img src={AccommodationImage2} alt="Accommodation 2" className="omo-valley-attraction-image" />
            <img src={AccommodationImage3} alt="Accommodation 3" className="omo-valley-attraction-image" />
          </div>
        </section>
        <h2 className="omo-valley-section-title">Weather & Best Time to Visit</h2>
        <hr />

        <section className="omo-valley-section flex">
          <img src={WeatherImage} alt="Weather" className="omo-valley-single-image" />

          <p className="omo-valley-section-text">
            The climate in Omo Valley varies throughout the year, with the dry season being the most popular time for visitors. The best time to visit is between October and March when the weather is cooler and more pleasant for travel and outdoor activities.
            During the dry season, the roads are more accessible, and the weather conditions are ideal for exploring the valley and participating in cultural events. The wet season, from April to September, brings heavier rains that can make travel more challenging, but it also transforms the landscape into a lush, green oasis.
            Visitors should prepare for the valley's varying temperatures, which can range from hot days to cooler nights. 
          </p>
        </section>
        <h2 className="omo-valley-section-title">Museums & Cultural Centers</h2>
        <hr />

        <section className="omo-valley-section flex">
          <img src={MuseumImage} alt="Museum" className="omo-valley-single-image" />

          <p className="omo-valley-section-text">
            For those interested in learning more about the history and cultures of the Omo Valley, visiting local museums and cultural centers is highly recommended. These institutions offer exhibits on the various tribes, their traditions, and the archaeological significance of the region.
            The South Omo Research Center and Museum in Jinka is a notable institution dedicated to the study and preservation of the region's cultural heritage. It houses a collection of artifacts, photographs, and documents that provide a comprehensive overview of the valley's diverse communities. Visitors can gain insights into the historical context and contemporary challenges faced by the indigenous peoples.
            
          </p>
        </section>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">Local Cuisine</h2>
          <p className="omo-valley-section-text">
            Ethiopian cuisine is renowned for its rich flavors and communal dining traditions. In Omo Valley, visitors can enjoy a variety of traditional dishes made from locally sourced ingredients. Staple foods include injera (a type of sourdough flatbread), wat (stew), and a variety of vegetables and legumes.
  
            Meals in Omo Valley often reflect the agricultural practices and seasonal availability of ingredients. Dishes are typically spiced with a blend of herbs and spices that create complex and robust flavors. Local markets are great places to sample fresh produce and traditional snacks, providing a taste of the valley's culinary heritage.
            Dining is often a communal affair, with food served on large platters for everyone to share. This practice emphasizes the importance of community and togetherness, making meals a central part of social life. 
          </p>
          <div className="omo-valley-image-group">
            <img src={RestaurantImage1} alt="Restaurant 1" className="omo-valley-attraction-image" />
            <img src={RestaurantImage2} alt="Restaurant 2" className="omo-valley-attraction-image" />
            <img src={RestaurantImage3} alt="Restaurant 3" className="omo-valley-attraction-image" />
          </div>
        </section>
        <h2 className="omo-valley-section-title">Local Markets</h2>
        <hr />

        <section className="omo-valley-section flex">
          <img src={MarketImage} alt="Local Market" className="omo-valley-single-image" />

          <p className="omo-valley-section-text">
            The local markets in Omo Valley are vibrant hubs of activity, offering a glimpse into the daily lives of the residents. These markets are perfect for shopping for traditional crafts, jewelry, and textiles made by the indigenous tribes. They also provide an opportunity to interact with locals and experience the lively atmosphere of a traditional Ethiopian market.
          
            Market days are often colorful events where traders from various tribes gather to sell their goods and exchange news. Visitors can find a variety of handmade items, including beadwork, pottery, and woven baskets. These markets are not only places of commerce but also social gatherings that play a crucial role in the community's cultural life.
       
            Bargaining is a common practice in these markets, and visitors are encouraged to engage in friendly haggling. 
          </p>
        </section>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">Hotels & Lodging</h2>
          <hr />
          <p className="omo-valley-section-text">
            While the Omo Valley is known for its remote and rustic charm, there are several hotels and lodges that offer comfortable accommodations for travelers. These establishments range from basic guesthouses to more upscale lodges that provide additional amenities and services.

            Many of the lodges are situated in picturesque locations, offering stunning views of the surrounding landscapes. These accommodations often incorporate local building materials and design elements, creating a blend of comfort and cultural authenticity. Staying at these lodges allows visitors to enjoy the natural beauty of the valley while experiencing the warmth of Ethiopian hospitality.
         
            Some lodges also offer guided tours and activities, such as bird watching, hiking, and visits to nearby tribal villages. 
          </p>
          <div className="omo-valley-image-group">
            <img src={HotelImage1} alt="Hotel 1" className="omo-valley-attraction-image" />
            <img src={HotelImage2} alt="Hotel 2" className="omo-valley-attraction-image" />
            <img src={HotelImage3} alt="Hotel 3" className="omo-valley-attraction-image" />
          </div>
        </section>
        <h2 className="omo-valley-section-title">Special Events & Festivals</h2>
        <hr />

        <section className="omo-valley-section flex">
          <img src={SpecialImage} alt="Special Event" className="omo-valley-single-image" />

          <p className="omo-valley-section-text">
            The Omo Valley is home to numerous special events and festivals that celebrate the region's rich cultural heritage. These events are often vibrant and colorful, featuring traditional music, dance, and rituals that offer visitors a unique cultural experience.
            One of the most notable events is the bull-jumping ceremony of the Hamar tribe, a rite of passage for young men that involves jumping over a line of bulls. This ceremony is accompanied by singing, dancing, and feasting, providing a fascinating insight into the tribe's cultural practices. Visitors who attend this event can witness the deep-rooted traditions that define the Hamar's way of life.
            Other festivals include the annual harvest celebrations, where communities come together to give thanks for a bountiful season. 
          </p>
        </section>
          <h2 className="omo-valley-section-title faq">FAQs</h2>
          <hr />
          
        

           
     


          {/* the css is on the lalibela page  */}

<h2 className="axum-section-title">Frequently Asked Questions</h2>
<hr />
<div className="faq-section">
<img src={FaqImage} alt="FAQ" className="faq-image axum-single-image" />
<div className="faq-content">
<p className="faq-intro-text">
Here are some frequently asked questions about visiting Omo National park:
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

        <h2 className="omo-valley-section-title">Location</h2>
<hr />
        <section className="omo-valley-section flex">
          {/* <img src={MapImage} alt="Map" className="omo-valley-single-image" /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865126.774059559!2d35.07744771138302!3d5.929554934277511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17a681e075dbcfc1%3A0x6fac33797a97c94d!2sOmo%20National%20Park!5e1!3m2!1sen!2set!4v1717527332926!5m2!1sen!2set" width="600" height="450" allowfullscreen="" loading="lazy" ></iframe>
          <p className="omo-valley-section-text">
            The Omo Valley is located in the southern part of Ethiopia, near the borders with Kenya and South Sudan. It is accessible via flights to nearby towns such as Jinka and Arba Minch, followed by a drive to the valley. The region's remote location contributes to its unique cultural and natural preservation.
            For travelers, reaching the Omo Valley is an adventure in itself. The journey offers a chance to see some of Ethiopia's diverse landscapes, from highland plateaus to lowland savannahs. Despite the challenges, the experience of exploring such a culturally rich and visually stunning region is immensely rewarding.
          </p>
        </section>
        <h2 className="omo-valley-section-title">Special Tips</h2>
          <hr />

        <section className="omo-valley-section flex">
        <img src={SpecialImage} alt="Special Tips" className="omo-valley-single-image" />
        


          <ul className="omo-valley-tips-list ">

            <li className="omo-valley-tip-item">Respect local customs and traditions. Always ask for permission before taking photos and be mindful of cultural sensitivities.</li>
            <li className="omo-valley-tip-item">Travel with a knowledgeable guide who can facilitate interactions with local communities and provide valuable insights into the region's culture and history.</li>
            <li className="omo-valley-tip-item">Pack essentials such as a good camera, comfortable clothing, and necessary medications. The remote location means that some amenities might not be readily available.</li>
            <li className="omo-valley-tip-item">Be prepared for varying weather conditions and bring appropriate gear for both hot days and cooler nights.</li>
            <li className="omo-valley-tip-item">Embrace the experience with an open mind and a spirit of adventure. The Omo Valley offers a unique and enriching travel experience unlike any other.</li>
          </ul>
        </section>
        <section className="omo-valley-section">
          <h2 className="omo-valley-section-title">Watch Video</h2>
          <p className="omo-valley-section-text">Get a glimpse of the vibrant culture and stunning landscapes of the Omo Valley through this video.</p>
          <button className="watchVideoBtn" onClick={handleWatchVideo}>Watch Video</button>
          {showVideo && (
            <div className="omo-valley-video-container">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/UR5poT7qrH8?si=qIkE8BFHb6lNfXex" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default OmoValleyPage;