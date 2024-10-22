// import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
//   useLocation
// } from 'react-router-dom';

// import Footer from './Components/Footer.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import QuestionPage from './pages/QuestionPage.jsx';
// import ContactPage from './pages/Contact.jsx';
// import Services from './pages/Services.jsx';
// import BookingPage from './pages/Booking.jsx';
// import RegistrationForm from './Components/RegistrationForm.jsx'; 
// import LoginForm from './Components/login.jsx';
// import CheckForBooking from './Components/CheckForBooking.jsx';


// import TermsPage from './Components/Terms.jsx';

// import ProtectedRoute from './Components/protectedRoute.jsx';

// import GondarPage from './pages/Destinations/Gondar.jsx';
// import LalibelaPage from './pages/Destinations/Lalibela.jsx';
// import SemenPage from './pages/Destinations/Semen.jsx';
// import OmoValleyPage from './pages/Destinations/Omo.jsx';
// import AxumPage from './pages/Destinations/Axum.jsx';
// import AwashPage from './pages/Destinations/Awash.jsx';
// import BahirDarPage from './pages/Destinations/Bahirdar.jsx';
// import BaleMountains from './pages/Destinations/Bale.jsx';
// import AddisAbabaPage from './pages/Destinations/AddissAbaba.jsx';
// import DebreLibanosPage from './pages/Destinations/DebreLIbanos.jsx';
// import DebreDamoPage from './pages/Destinations/DebreDamo.jsx';
// import HararPage from './pages/Destinations/Harar.jsx';

// import HikingPage from './pages/hikingPage.jsx';
// import CulturalTourPage from './pages/culturalTours.jsx';
// import WildlifeSafarisPage from './pages/wildLife.jsx';
// import PhotographyPage from './pages/PhotographPage.jsx';

// import Films from './pages/FilmsPage.jsx';
// import Foods from './pages/FoodsPage.jsx';
// import Dressing from './pages/DressingsPage.jsx';
// import Music from './pages/MusicsPage.jsx';

// import GalleryPage from './pages/GalleryPage.jsx';


// function ScrollToTop() {
//   const location = useLocation();

//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return null;
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <ScrollToTop />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/ask" element={<QuestionPage />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm/>} />
//           <Route path="/contact" element={<ContactPage />} />
        
//           <ProtectedRoute  path="/booking-form" element={<BookingPage />} /> 
//           <Route path="/booking" element={<CheckForBooking/>} />

//           <Route path="/destination/gondar" element={<GondarPage />} />
//           <Route path="/destination/lalibela" element={<LalibelaPage />} />
//           <Route path="/destination/semen-mountains" element={<SemenPage />} />
//           <Route path="/destination/omo" element={<OmoValleyPage />} />
//           <Route path="/destination/axum" element={<AxumPage />} />
//           <Route path="/destination/awash-NP" element={<AwashPage />} />
//           <Route path="/destination/bahirdar" element={<BahirDarPage />} />
//           <Route path="/destination/bale" element={<BaleMountains/>} />
//           <Route path="/destination/Addis-Ababa" element={<AddisAbabaPage/>} />
//           <Route path="/destination/debre-libanos" element={  <DebreLibanosPage/>} />
//           <Route path="/destination/debre-damo" element={  <DebreDamoPage/>} />
//           <Route path="/destination/harar" element={ <HararPage/>} />


//           <Route path="/todo/hiking" element={<HikingPage />} />
//           <Route path="/todo/Cultural-Tours" element={<CulturalTourPage />} />
//           <Route path="/todo/Wildlife" element={<WildlifeSafarisPage />} />
//           <Route path="/todo/Photography" element={<PhotographyPage />} />


//           <Route path="/additionals/films" element={<Films />} />
//           <Route path="/additionals/foods" element={<Foods />} />
//           <Route path="/additionals/dressings" element={<Dressing/>} />
//           <Route path="/additionals/musics" element={<Music/>} />

//           <Route path="/terms" element={<TermsPage />} />
//         </Routes>

//         <GalleryPage />

      

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './Components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import QuestionPage from './pages/QuestionPage.jsx';
import ContactPage from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import BookingPage from './pages/Booking.jsx';
import RegistrationForm from './Components/RegistrationForm.jsx'; 
import LoginForm from './Components/login.jsx';
import CheckForBooking from './Components/CheckForBooking.jsx';

import TermsPage from './Components/Terms.jsx';
import ProtectedRoute from './Components/protectedRoute.jsx';

import GondarPage from './pages/Destinations/Gondar.jsx';
import LalibelaPage from './pages/Destinations/Lalibela.jsx';
import SemenPage from './pages/Destinations/Semen.jsx';
import OmoValleyPage from './pages/Destinations/Omo.jsx';
import AxumPage from './pages/Destinations/Axum.jsx';
import AwashPage from './pages/Destinations/Awash.jsx';
import BahirDarPage from './pages/Destinations/Bahirdar.jsx';
import BaleMountains from './pages/Destinations/Bale.jsx';
import AddisAbabaPage from './pages/Destinations/AddissAbaba.jsx';
import DebreLibanosPage from './pages/Destinations/DebreLIbanos.jsx';
import DebreDamoPage from './pages/Destinations/DebreDamo.jsx';
import HararPage from './pages/Destinations/Harar.jsx';

import HikingPage from './pages/hikingPage.jsx';
import CulturalTourPage from './pages/culturalTours.jsx';
import WildlifeSafarisPage from './pages/wildLife.jsx';
import PhotographyPage from './pages/PhotographPage.jsx';

import Films from './pages/FilmsPage.jsx';
import Foods from './pages/FoodsPage.jsx';
import Dressing from './pages/DressingsPage.jsx';
import Music from './pages/MusicsPage.jsx';

import GalleryPage from './pages/GalleryPage.jsx';

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ask" element={<QuestionPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/booking-form" element={<BookingPage />} />
          </Route>
          
          <Route path="/booking" element={<CheckForBooking />} />

          <Route path="/destination/gondar" element={<GondarPage />} />
          <Route path="/destination/lalibela" element={<LalibelaPage />} />
          <Route path="/destination/semen-mountains" element={<SemenPage />} />
          <Route path="/destination/omo" element={<OmoValleyPage />} />
          <Route path="/destination/axum" element={<AxumPage />} />
          <Route path="/destination/awash-NP" element={<AwashPage />} />
          <Route path="/destination/bahirdar" element={<BahirDarPage />} />
          <Route path="/destination/bale" element={<BaleMountains />} />
          <Route path="/destination/Addis-Ababa" element={<AddisAbabaPage />} />
          <Route path="/destination/debre-libanos" element={<DebreLibanosPage />} />
          <Route path="/destination/debre-damo" element={<DebreDamoPage />} />
          <Route path="/destination/harar" element={<HararPage />} />

          <Route path="/todo/hiking" element={<HikingPage />} />
          <Route path="/todo/Cultural-Tours" element={<CulturalTourPage />} />
          <Route path="/todo/Wildlife" element={<WildlifeSafarisPage />} />
          <Route path="/todo/Photography" element={<PhotographyPage />} />

          <Route path="/additionals/films" element={<Films />} />
          <Route path="/additionals/foods" element={<Foods />} />
          <Route path="/additionals/dressings" element={<Dressing />} />
          <Route path="/additionals/musics" element={<Music />} />

          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <GalleryPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

