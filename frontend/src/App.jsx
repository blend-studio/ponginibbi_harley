import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Maintenance from './pages/Maintenance';
import Customization from './pages/Customization';
import WinterStorage from './pages/WinterStorage';
import AnimatedPage from './components/AnimatedPage';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-hd-dark font-sans text-white overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/inventory" element={<AnimatedPage><Inventory /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/services/customization" element={<Customization />} />
            <Route path="/services/winter-storage" element={<WinterStorage />} />
            <Route path="/shop" element={<AnimatedPage><Shop /></AnimatedPage>} />
            <Route path="/events" element={<AnimatedPage><Events /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;