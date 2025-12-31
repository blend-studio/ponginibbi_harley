import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isIpadPortrait, setIsIpadPortrait] = useState(false);

  useEffect(() => {
    const detect = () => {
      try {
        const ua = navigator.userAgent || navigator.vendor || window.opera || '';
        const isiPadUA = /iPad/.test(ua);
        const isiPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
        const isIpadDevice = isiPadUA || isiPadOS;
        const isPortrait = window.matchMedia ? window.matchMedia('(orientation: portrait)').matches : (window.innerHeight > window.innerWidth);
        const width = window.innerWidth || document.documentElement.clientWidth || 0;
        const isIpadBreakpoint = width >= 768 && width <= 1024;
        setIsIpadPortrait(Boolean(isIpadDevice && isPortrait && isIpadBreakpoint));
      } catch (e) {
        setIsIpadPortrait(false);
      }
    };

    detect();
    window.addEventListener('resize', detect);
    window.addEventListener('orientationchange', detect);
    return () => {
      window.removeEventListener('resize', detect);
      window.removeEventListener('orientationchange', detect);
    };
  }, []);

  return (
    <div className={`relative min-h-[100svh] md:h-screen w-full overflow-hidden bg-black clip-diagonal flex flex-col justify-center pb-24 md:pb-56 lg:pb-0 ${isIpadPortrait ? 'ipad-portrait-hero' : ''}`}>
      
      {/* BACKGROUND ANIMATO */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}images/HARLEY2.jpg`} alt="Background" className="w-full h-full object-cover opacity-60" />
        {/* Gradiente drammatico */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-20 max-w-7xl mx-auto py-12 md:pt-48 lg:py-0 hero-content">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 flex items-center gap-4 overflow-hidden"
        >
            <div className="h-[2px] w-8 md:w-12 bg-hd-orange"></div>
            <span className="text-hd-orange font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm lg:text-base">
              Official Dealer Piacenza
            </span>
        </motion.div>

        <h1 className="font-condensed font-bold text-5xl sm:text-7xl md:text-7xl lg:text-[10rem] leading-[0.9] md:leading-[0.85] text-white uppercase mix-blend-overlay opacity-90 overflow-hidden">
          <motion.span 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            La Nuova
          </motion.span>
          <motion.span 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600"
          >
            Gamma 2026
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 md:mt-8 max-w-lg text-gray-300 font-sans text-base md:text-lg border-l-4 border-hd-orange pl-4 md:pl-6"
        >
          La strada da percorrere inizia qui. Scopri i nuovi modelli e l'usato certificato nel nuovo store Ponginibbi.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6"
        >
            <Link to="/inventory" className="relative group overflow-hidden bg-hd-orange px-6 md:px-8 py-3 md:py-4 font-condensed font-bold text-base md:text-lg uppercase tracking-wider text-white clip-slant hover:bg-white hover:text-hd-black transition-all duration-300 inline-block text-center">
                <span className="relative z-10">Esplora Stock</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </Link>
            <Link to="/test-ride" className="px-6 md:px-8 py-3 md:py-4 border border-white/30 text-white font-condensed font-bold text-base md:text-lg uppercase tracking-wider hover:border-hd-orange hover:text-hd-orange transition-all duration-300 backdrop-blur-sm inline-block text-center">
                Prenota Test Ride
            </Link>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 md:bottom-32 lg:bottom-10 right-6 md:right-20 text-white/50 hidden sm:block"
      >
        <ChevronDown size={32} md:size={40} />
      </motion.div>
    </div>
  );
};

export default HeroSection;