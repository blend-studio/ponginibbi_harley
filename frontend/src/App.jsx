import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import BikeDetail from './pages/BikeDetail';
import Accessories from './pages/Accessories';
import AccessoryDetail from './pages/AccessoryDetail';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Maintenance from './pages/Maintenance';
import Customization from './pages/Customization';
import WinterStorage from './pages/WinterStorage';
import PlaceholderPage from './pages/PlaceholderPage';
import AnimatedPage from './components/AnimatedPage';

// New Pages
import Rentals from './pages/Rentals';
import RentalsBooking from './pages/RentalsBooking';
import Finance from './pages/Finance';
import LearnToRide from './pages/LearnToRide';
import TestRide from './pages/TestRide';
import Quote from './pages/Quote';
import ServiceAppointment from './pages/ServiceAppointment';
import PartsRequest from './pages/PartsRequest';
import Team from './pages/Team';
import History from './pages/History';
import SimplePage from './pages/SimplePage';
import Gallery from './pages/Gallery';
import News from './pages/News';
import ServiceOffers from './pages/ServiceOffers';
import ExpressLane from './pages/ExpressLane';
import ShopCategory from './pages/ShopCategory';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-hd-dark font-sans text-white overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            
            {/* Moto Routes */}
            <Route path="/inventory" element={<AnimatedPage><Inventory /></AnimatedPage>} />
            <Route path="/inventory/:vid" element={<AnimatedPage><BikeDetail /></AnimatedPage>} />
            
            <Route path="/rentals" element={<AnimatedPage><Rentals /></AnimatedPage>} />
            <Route path="/rentals/booking" element={<AnimatedPage><RentalsBooking /></AnimatedPage>} />
            
            <Route path="/finance" element={<AnimatedPage><Finance /></AnimatedPage>} />
            <Route path="/finance/request" element={<AnimatedPage><Quote /></AnimatedPage>} /> {/* Reusing Quote for finance request for now */}
            
            <Route path="/customization" element={<AnimatedPage><Customization /></AnimatedPage>} />
            <Route path="/test-ride" element={<AnimatedPage><TestRide /></AnimatedPage>} />
            <Route path="/quote" element={<AnimatedPage><Quote /></AnimatedPage>} />
            
            <Route path="/learn-to-ride" element={<AnimatedPage><LearnToRide /></AnimatedPage>} />
            {/* Learn to ride sub-pages could be SimplePage or section anchors */}
            <Route path="/learn-to-ride/new-rider" element={<SimplePage title="Neofiti" subtitle="CORSO BASE" image="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060"><p>Dettagli corso neofiti...</p></SimplePage>} />
            <Route path="/learn-to-ride/skilled" element={<SimplePage title="Esperti" subtitle="CORSO AVANZATO" image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"><p>Dettagli corso esperti...</p></SimplePage>} />
            <Route path="/learn-to-ride/workshop" element={<SimplePage title="Workshop" subtitle="TECNICA" image="https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060"><p>Dettagli workshop...</p></SimplePage>} />
            <Route path="/learn-to-ride/garage-party" element={<SimplePage title="Garage Party" subtitle="EVENTI" image="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060"><p>Dettagli garage party...</p></SimplePage>} />
            <Route path="/learn-to-ride/jumpstart" element={<SimplePage title="Jumpstart" subtitle="EXPERIENCE" image="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060"><p>Dettagli jumpstart...</p></SimplePage>} />

            {/* Service Routes */}
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/services/offers" element={<AnimatedPage><ServiceOffers /></AnimatedPage>} />
            <Route path="/services/hours" element={<AnimatedPage><Maintenance /></AnimatedPage>} />
            <Route path="/service-appointment" element={<AnimatedPage><ServiceAppointment /></AnimatedPage>} />
            <Route path="/services/promos" element={<SimplePage title="Promozioni" subtitle="SERVICE" image="https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060"><p>Promozioni attive...</p></SimplePage>} />
            <Route path="/parts-request" element={<AnimatedPage><PartsRequest /></AnimatedPage>} />
            <Route path="/services/express-lane" element={<AnimatedPage><ExpressLane /></AnimatedPage>} />
            <Route path="/winter-storage" element={<AnimatedPage><WinterStorage /></AnimatedPage>} />

            {/* Shop Routes */}
            <Route path="/accessories" element={<AnimatedPage><Accessories /></AnimatedPage>} />
            <Route path="/accessories/:id" element={<AnimatedPage><AccessoryDetail /></AnimatedPage>} />
            <Route path="/shop" element={<AnimatedPage><Shop /></AnimatedPage>} />
            <Route path="/shop/men" element={<ShopCategory category="men" title="Uomo" subtitle="APPAREL" />} />
            <Route path="/shop/women" element={<ShopCategory category="women" title="Donna" subtitle="APPAREL" />} />
            <Route path="/shop/helmets" element={<ShopCategory category="helmets" title="Caschi" subtitle="SAFETY" />} />
            <Route path="/shop/accessories" element={<ShopCategory category="accessories" title="Accessori" subtitle="LIFESTYLE" />} />
            <Route path="/shop/gift-cards" element={<SimplePage title="Gift Cards" subtitle="REGALA UN SOGNO" image="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060"><p>Le Gift Card Harley-Davidson sono il regalo perfetto per ogni appassionato.</p></SimplePage>} />
            <Route path="/parts" element={<AnimatedPage><PartsRequest /></AnimatedPage>} />
            <Route path="/shop/apparel" element={<AnimatedPage><Shop /></AnimatedPage>} />
            <Route path="/shop/offers" element={<SimplePage title="Offerte Shop" subtitle="SALDI" image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"><p>Scopri le offerte su abbigliamento e accessori.</p></SimplePage>} />

            {/* Events Routes */}
            <Route path="/events" element={<AnimatedPage><Events /></AnimatedPage>} />
            <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
            <Route path="/news" element={<AnimatedPage><News /></AnimatedPage>} />
            <Route path="/touring" element={<SimplePage title="Mondo Touring" subtitle="VIAGGI" image="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060"><p>Scopri il piacere di viaggiare senza confini.</p></SimplePage>} />

            {/* Info Routes */}
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/team" element={<AnimatedPage><Team /></AnimatedPage>} />
            <Route path="/testimonials" element={<SimplePage title="Testimonianze" subtitle="DICONO DI NOI" image="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060"><p>Cosa dicono i nostri clienti.</p></SimplePage>} />
            <Route path="/community" element={<SimplePage title="Community" subtitle="H.O.G." image="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060"><p>Entra a far parte della grande famiglia Harley Owners Group.</p></SimplePage>} />
            <Route path="/loyalty" element={<SimplePage title="Programma Fedeltà" subtitle="REWARDS" image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"><p>Guadagna punti ad ogni acquisto e accedi a vantaggi esclusivi.</p></SimplePage>} />
            <Route path="/careers" element={<SimplePage title="Lavora con Noi" subtitle="CAREERS" image="https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060"><p>Vuoi entrare nel team Ponginibbi? Inviaci il tuo CV.</p></SimplePage>} />
            <Route path="/history" element={<AnimatedPage><History /></AnimatedPage>} />
            
            {/* Fallback for legacy routes if needed */}
            <Route path="/services/maintenance" element={<AnimatedPage><Maintenance /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;