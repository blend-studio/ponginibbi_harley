import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  // Chiudi menu mobile al cambio rotta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Top Bar - Info Ponginibbi */}
      <div className="bg-hd-gray text-xs font-sans text-gray-400 overflow-hidden relative z-50 border-b border-white/5">
         <div className="max-w-7xl mx-auto py-1 px-4 flex justify-between items-center">
            <div className="flex gap-4">
                <span className="flex items-center gap-1"><Phone size={12} /> 0523 123456</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> Via Emilia Pavese, Piacenza</span>
            </div>
            <div>PONGINIBBI GROUP</div>
         </div>
      </div>

      <nav className="sticky top-0 w-full z-40 bg-black border-b border-hd-orange transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
             {/* Logo Area */}
             <div className="flex items-center gap-3">
               <Link to="/">
                 <img src="/images/ponginibbi-logo.png" alt="Ponginibbi" className="h-9 w-auto" />
               </Link>
               <div className="h-6 w-px bg-white/30 mx-1"></div>
               <div className="flex flex-col">
                 <img src="/images/harley/2020-HDMC-horizon-wordmark CMYK-White.png" alt="Harley-Davidson" className="h-3 md:h-4 w-auto object-contain" />
               </div>
             </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <div className="ml-6 flex items-baseline space-x-6">
                {[
                  { name: 'MOTO', path: '/inventory' },
                  { name: 'ASSISTENZA', path: '/services' },
                  { name: 'NEGOZIO', path: '/shop' },
                  { name: 'EVENTI', path: '/events' },
                  { name: 'CHI SIAMO', path: '/contact' }
                ].map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link 
                            key={item.name}
                            to={item.path} 
                            className={`font-condensed text-base font-bold transition-all hover:text-hd-orange relative group ${isActive ? 'text-hd-orange' : 'text-white'}`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-hd-orange transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
                        </Link>
                    )
                })}
                <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-hd-orange text-white hover:bg-white hover:text-black px-4 py-1.5 rounded-sm font-condensed font-bold transition-all duration-300 clip-slant text-sm"
                >
                    CONTATTI
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-hd-orange p-2 transition-colors">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white hover:text-hd-orange">
                <X size={32} />
            </button>
            
            <div className="flex flex-col gap-6 items-center text-center">
              <Link to="/" className="font-condensed text-white text-4xl font-bold hover:text-hd-orange transition-colors">HOME</Link>
              <Link to="/inventory" className="font-condensed text-white text-4xl font-bold hover:text-hd-orange transition-colors">MOTO</Link>
              <Link to="/services" className="font-condensed text-white text-4xl font-bold hover:text-hd-orange transition-colors">ASSISTENZA</Link>
              <Link to="/shop" className="font-condensed text-white text-4xl font-bold hover:text-hd-orange transition-colors">NEGOZIO</Link>
              <Link to="/events" className="font-condensed text-white text-4xl font-bold hover:text-hd-orange transition-colors">EVENTI</Link>
              <Link to="/contact" className="font-condensed text-white text-4xl font-bold hover:text-hd-orange transition-colors">CHI SIAMO</Link>
              <button 
                  onClick={() => { setIsContactModalOpen(true); setIsOpen(false); }}
                  className="font-condensed text-hd-orange text-4xl font-bold mt-8"
              >
                  CONTATTI
              </button>
            </div>

            <div className="mt-auto mb-10 text-center text-gray-500 text-sm">
                <p>PONGINIBBI GROUP</p>
                <p>Official Harley-Davidson Dealer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;