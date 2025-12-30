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
            <Route path="/learn-to-ride/new-rider" element={<SimplePage title="Neofiti" subtitle="CORSO BASE" image="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop"><p>Dettagli corso neofiti...</p></SimplePage>} />
            <Route path="/learn-to-ride/skilled" element={<SimplePage title="Esperti" subtitle="CORSO AVANZATO" image="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop"><p>Dettagli corso esperti...</p></SimplePage>} />
            <Route path="/learn-to-ride/workshop" element={<SimplePage title="Workshop" subtitle="TECNICA" image="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop"><p>Dettagli workshop...</p></SimplePage>} />
            <Route path="/learn-to-ride/garage-party" element={<SimplePage title="Garage Party" subtitle="EVENTI" image="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop"><p>Dettagli garage party...</p></SimplePage>} />
            <Route path="/learn-to-ride/jumpstart" element={<SimplePage title="Jumpstart" subtitle="EXPERIENCE" image="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop"><p>Dettagli jumpstart...</p></SimplePage>} />

            {/* Service Routes */}
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/services/offers" element={<SimplePage title="Offerte Service" subtitle="PROMOZIONI" image="https://images.unsplash.com/photo-1537368910025-bc005ca23c50?q=80&w=2574&auto=format&fit=crop"><p>Scopri le nostre offerte stagionali per la manutenzione della tua moto.</p></SimplePage>} />
            <Route path="/services/hours" element={<AnimatedPage><Maintenance /></AnimatedPage>} />
            <Route path="/service-appointment" element={<AnimatedPage><ServiceAppointment /></AnimatedPage>} />
            <Route path="/services/promos" element={<SimplePage title="Promozioni" subtitle="SERVICE" image="https://images.unsplash.com/photo-1537368910025-bc005ca23c50?q=80&w=2574&auto=format&fit=crop"><p>Promozioni attive...</p></SimplePage>} />
            <Route path="/parts-request" element={<AnimatedPage><PartsRequest /></AnimatedPage>} />
            <Route path="/services/express-lane" element={<SimplePage title="Express Lane" subtitle="SERVIZIO RAPIDO" image="https://images.unsplash.com/photo-1537368910025-bc005ca23c50?q=80&w=2574&auto=format&fit=crop"><p>Servizio rapido senza appuntamento per interventi brevi (cambio olio, gomme, pastiglie freni).</p></SimplePage>} />
            <Route path="/winter-storage" element={<AnimatedPage><WinterStorage /></AnimatedPage>} />

            {/* Shop Routes */}
            <Route path="/accessories" element={<AnimatedPage><Accessories /></AnimatedPage>} />
            <Route path="/accessories/:id" element={<AnimatedPage><AccessoryDetail /></AnimatedPage>} />
            <Route path="/shop" element={<AnimatedPage><Shop /></AnimatedPage>} />
            <Route path="/shop/gift-cards" element={<SimplePage title="Gift Cards" subtitle="REGALA UN SOGNO" image="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop"><p>Le Gift Card Harley-Davidson sono il regalo perfetto per ogni appassionato.</p></SimplePage>} />
            <Route path="/parts" element={<AnimatedPage><PartsRequest /></AnimatedPage>} />
            <Route path="/shop/apparel" element={<AnimatedPage><Shop /></AnimatedPage>} />
            <Route path="/shop/offers" element={<SimplePage title="Offerte Shop" subtitle="SALDI" image="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop"><p>Scopri le offerte su abbigliamento e accessori.</p></SimplePage>} />

            {/* Events Routes */}
            <Route path="/events" element={<AnimatedPage><Events /></AnimatedPage>} />
            <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
            <Route path="/news" element={<AnimatedPage><News /></AnimatedPage>} />
            <Route path="/touring" element={<SimplePage title="Mondo Touring" subtitle="VIAGGI" image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop"><p>Scopri il piacere di viaggiare senza confini.</p></SimplePage>} />

            {/* Info Routes */}
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/team" element={<AnimatedPage><Team /></AnimatedPage>} />
            <Route path="/testimonials" element={<SimplePage title="Testimonianze" subtitle="DICONO DI NOI" image="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2671&auto=format&fit=crop"><p>Cosa dicono i nostri clienti.</p></SimplePage>} />
            <Route path="/community" element={<SimplePage title="Community" subtitle="H.O.G." image="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop"><p>Entra a far parte della grande famiglia Harley Owners Group.</p></SimplePage>} />
            <Route path="/loyalty" element={<SimplePage title="Programma Fedeltà" subtitle="REWARDS" image="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop"><p>Guadagna punti ad ogni acquisto e accedi a vantaggi esclusivi.</p></SimplePage>} />
            <Route path="/careers" element={<SimplePage title="Lavora con Noi" subtitle="CAREERS" image="https://images.unsplash.com/photo-1537368910025-bc005ca23c50?q=80&w=2574&auto=format&fit=crop"><p>Vuoi entrare nel team Ponginibbi? Inviaci il tuo CV.</p></SimplePage>} />
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