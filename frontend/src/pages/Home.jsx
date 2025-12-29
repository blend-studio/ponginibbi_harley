import React from 'react';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import BikeCard from '../components/ui/BikeCard';
import BikeSlider from '../components/ui/BikeSlider';
import catalog from '../data/motorcycles.json';
import { Wrench, Shield, Zap } from 'lucide-react';

const Home = () => {
  // Featured bikes loaded from local catalog (first 8 items)
  const featuredBikes = catalog.slice(0, 8);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      
      {/* 1. HERO MASSIVO */}
      <HeroSection />

      {/* 2. STRISCIA SCORREVOLE */}
      <div className="-mt-10 relative z-20 rotate-1 hover:rotate-0 transition-transform duration-500">
         <Marquee />
      </div>

      {/* 3. LATEST DROPS (Le Moto) */}
      <section className="py-24 px-4 relative">
         <div className="max-w-7xl mx-auto">
            {/* Header Sezione */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                <div>
                    <h2 className="text-outline text-7xl md:text-9xl font-condensed font-bold uppercase opacity-10 absolute -top-16 left-0 select-none pointer-events-none">
                        Garage
                    </h2>
                    <h2 className="text-white text-5xl md:text-7xl font-condensed font-bold uppercase relative z-10 leading-[0.9]">
                        Nuovi <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Arrivi</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-md font-mono text-sm">
                        La gamma 2025/2026 è arrivata nello showroom di Piacenza. Potenza pura, tecnologia Milwaukee-Eight e stile senza compromessi.
                    </p>
                </div>
                <button className="hidden md:block border border-white/20 text-white px-6 py-2 hover:bg-white hover:text-black transition-all uppercase font-bold tracking-widest text-xs">
                    Vedi tutto lo stock &rarr;
                </button>
            </div>

            {/* SLIDER MOTO */}
            <div className="mt-10">
                <BikeSlider bikes={featuredBikes} />
            </div>            
            {/* Bottone Mobile */}
            <div className="mt-8 text-center md:hidden">
                <button className="border border-white/20 text-white px-8 py-3 w-full hover:bg-white hover:text-black transition-all uppercase font-bold tracking-widest text-xs">
                    Vedi tutto lo stock
                </button>
            </div>
         </div>
      </section>

      {/* 4. SEZIONE CATEGORIE (Rimane invariata ma sempre d'impatto) */}
      <section className="py-20 bg-white text-black clip-diagonal-up pb-40">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-6xl md:text-9xl font-condensed font-bold uppercase mb-12 tracking-tighter leading-none">
                Choose your<br/><span className="text-hd-orange">Legend</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
                {/* Cruiser - Grande */}
                <div className="md:col-span-8 bg-gray-200 relative group overflow-hidden cursor-pointer clip-corner">
                    <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-breakout-117/2024-breakout-117-f21/360/2024-breakout-117-f21-motorcycle-08.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                    <h3 className="absolute bottom-8 left-8 text-6xl md:text-8xl font-condensed font-bold text-white uppercase italic drop-shadow-lg z-10">Cruiser</h3>
                </div>
                
                {/* Touring & Sport */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="flex-1 bg-gray-800 relative group overflow-hidden cursor-pointer clip-corner">
                         <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-road-glide/2024-road-glide-f57/360/2024-road-glide-f57-motorcycle-08.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
                         <h3 className="absolute bottom-4 left-4 text-4xl font-condensed font-bold text-white uppercase italic drop-shadow-md">Touring</h3>
                    </div>
                    <div className="flex-1 bg-hd-orange relative group overflow-hidden cursor-pointer clip-corner">
                         <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-sportster-s/2024-sportster-s-f85/360/2024-sportster-s-f85-motorcycle-08.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply filter contrast-125" />
                         <h3 className="absolute bottom-4 left-4 text-4xl font-condensed font-bold text-white uppercase italic drop-shadow-md">Sport</h3>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="bg-[#121212] pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Wrench size={100} />
                </div>
                <Wrench size={48} className="text-hd-orange mb-6 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-condensed font-bold text-white mb-4">MASTER TECHS</h3>
                <p className="text-gray-400">Officina certificata con tecnici formati direttamente dalla Factory. Usiamo solo ricambi originali H-D.</p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Shield size={100} />
                </div>
                <Shield size={48} className="text-hd-orange mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-condensed font-bold text-white mb-4">WARRANTY</h3>
                <p className="text-gray-400">Estensioni di garanzia e pacchetti di manutenzione programmata per viaggiare senza pensieri.</p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={100} />
                </div>
                <Zap size={48} className="text-hd-orange mb-6 group-hover:text-yellow-400 transition-colors" />
                <h3 className="text-3xl font-condensed font-bold text-white mb-4">CUSTOM KINGS</h3>
                <p className="text-gray-400">Dallo Stage 1 alle trasformazioni radicali. Il nostro reparto custom realizza la moto dei tuoi sogni.</p>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;