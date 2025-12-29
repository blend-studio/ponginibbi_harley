import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black clip-diagonal">
      
      {/* BACKGROUND ANIMATO */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="images/HARLEY2.jpg" 
          className="w-full h-full object-cover opacity-60" 
          alt="Harley Davidson Hero"
        />
        {/* Gradiente drammatico */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 flex items-center gap-4 overflow-hidden"
        >
            <div className="h-[2px] w-12 bg-hd-orange"></div>
            <span className="text-hd-orange font-bold tracking-[0.4em] uppercase text-sm md:text-base">
              Official Dealer Piacenza
            </span>
        </motion.div>

        <h1 className="font-condensed font-bold text-7xl md:text-[10rem] leading-[0.85] text-white uppercase mix-blend-overlay opacity-90 overflow-hidden">
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
          className="mt-8 max-w-lg text-gray-300 font-sans text-lg border-l-4 border-hd-orange pl-6"
        >
          La strada da percorrere inizia qui. Scopri i nuovi modelli e l'usato certificato nel nuovo store Ponginibbi.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-wrap gap-6"
        >
            <button className="relative group overflow-hidden bg-hd-orange px-8 py-4 font-condensed font-bold text-xl uppercase tracking-wider text-white clip-slant hover:bg-white hover:text-hd-black transition-all duration-300">
                <span className="relative z-10">Esplora Stock</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-condensed font-bold text-xl uppercase tracking-wider hover:border-hd-orange hover:text-hd-orange transition-all duration-300 backdrop-blur-sm">
                Prenota Test Ride
            </button>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 right-10 md:right-20 text-white/50"
      >
        <ChevronDown size={40} />
      </motion.div>
    </div>
  );
};

export default HeroSection;