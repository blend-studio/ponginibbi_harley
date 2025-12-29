import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black clip-diagonal">
      
      {/* VIDEO BACKGROUND (Simulato con immagine per ora) */}
      <div className="absolute inset-0">
        <img 
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-road-glide/2024-road-glide-f57/360/2024-road-glide-f57-motorcycle-01.jpg?impolicy=myresize&rw=1600" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow" 
          alt="Hero"
        />
        {/* Gradiente drammatico */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        
        <div className="mb-4 flex items-center gap-4 overflow-hidden">
            <div className="h-[2px] w-12 bg-hd-orange"></div>
            <span className="text-hd-orange font-bold tracking-[0.4em] uppercase text-sm md:text-base animate-slide-in">
              Official Dealer Piacenza
            </span>
        </div>

        <h1 className="font-condensed font-bold text-7xl md:text-[10rem] leading-[0.85] text-white uppercase mix-blend-overlay opacity-90">
          American<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Muscle.</span>
        </h1>

        <p className="mt-8 max-w-lg text-gray-300 font-sans text-lg border-l-4 border-hd-orange pl-6">
          La potenza non chiede permesso. Scopri la nuova gamma 2025 e l'usato certificato nel nuovo store Ponginibbi.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">
            <button className="relative group overflow-hidden bg-hd-orange px-8 py-4 font-condensed font-bold text-xl uppercase tracking-wider text-white clip-slant hover:bg-white hover:text-hd-black transition-all duration-300">
                <span className="relative z-10">Esplora Stock</span>
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-condensed font-bold text-xl uppercase tracking-wider hover:border-hd-orange hover:text-hd-orange transition-all duration-300">
                Prenota Test Ride
            </button>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-20 right-10 md:right-20 animate-bounce text-white/50">
        <ChevronDown size={40} />
      </div>
    </div>
  );
};

export default HeroSection;