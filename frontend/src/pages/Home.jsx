import React from 'react';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import BikeCard from '../components/ui/BikeCard';
import SectionTitle from '../components/ui/SectionTitle'; // (Usa quello che avevi)
import { Wrench, Shield, Zap } from 'lucide-react';

const Home = () => {
  // Mock data temporaneo
  const featuredBikes = [
    { vid: '1', model: 'Sportster S', version: 'Revolution Max 1250T', price: 17900, registrationDate: '2024-01-01', image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-sportster-s/2024-sportster-s-f85/360/2024-sportster-s-f85-motorcycle-01.jpg' },
    { vid: '2', model: 'Low Rider ST', version: 'Milwaukee-Eight 117', price: 24500, registrationDate: '2024-01-01', image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-low-rider-st/2024-low-rider-st-f36/360/2024-low-rider-st-f36-motorcycle-01.jpg' },
    { vid: '3', model: 'Fat Bob', version: '114 Cubic Inches', price: 21000, registrationDate: '2024-01-01', image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-fat-bob-114/2024-fat-bob-114-f56/360/2024-fat-bob-114-f56-motorcycle-01.jpg' },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      
      {/* 1. HERO MASSIVO */}
      <HeroSection />

      {/* 2. STRISCIA SCORREVOLE */}
      <div className="-mt-10 relative z-20">
         <Marquee />
      </div>

      {/* 3. LATEST DROPS (Le Moto) */}
      <section className="py-24 px-4 relative">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 className="text-outline text-6xl md:text-8xl font-condensed font-bold uppercase opacity-20 absolute -top-10 left-0 select-none">Inventory</h2>
                    <h2 className="text-white text-5xl md:text-6xl font-condensed font-bold uppercase relative z-10">
                        Nuovi <span className="text-hd-orange">Arrivi</span>
                    </h2>
                </div>
                <button className="text-white border-b border-hd-orange pb-1 hover:text-hd-orange transition-colors uppercase font-bold tracking-widest text-sm mt-4 md:mt-0">
                    Vedi tutto lo stock &rarr;
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredBikes.map(bike => (
                    <BikeCard key={bike.vid} bike={bike} />
                ))}
            </div>
         </div>
      </section>

      {/* 4. SEZIONE CATEGORIE ASIMMETRICA */}
      <section className="py-20 bg-white text-black clip-diagonal-up pb-40">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-8xl font-condensed font-bold uppercase mb-12 tracking-tighter">Choose your<br/>Fighter</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
                {/* Cruiser - Grande */}
                <div className="md:col-span-8 bg-gray-200 relative group overflow-hidden cursor-pointer">
                    <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-breakout-117/2024-breakout-117-f21/360/2024-breakout-117-f21-motorcycle-01.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <h3 className="absolute bottom-8 left-8 text-6xl font-condensed font-bold text-white uppercase italic">Cruiser</h3>
                </div>
                
                {/* Touring & Sport - Colonna destra */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="flex-1 bg-gray-800 relative group overflow-hidden cursor-pointer">
                         <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-road-glide/2024-road-glide-f57/360/2024-road-glide-f57-motorcycle-01.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <h3 className="absolute bottom-6 left-6 text-4xl font-condensed font-bold text-white uppercase italic">Touring</h3>
                    </div>
                    <div className="flex-1 bg-hd-orange relative group overflow-hidden cursor-pointer">
                         <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-sportster-s/2024-sportster-s-f85/360/2024-sportster-s-f85-motorcycle-01.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" />
                         <h3 className="absolute bottom-6 left-6 text-4xl font-condensed font-bold text-white uppercase italic">Sport</h3>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. SERVICES GRID (Dark again) */}
      <section className="bg-[#121212] pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group">
                <Wrench size={48} className="text-hd-orange mb-6 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-condensed font-bold text-white mb-4">MASTER TECHS</h3>
                <p className="text-gray-400">Officina certificata con tecnici formati direttamente dalla Factory. Usiamo solo ricambi originali H-D.</p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group">
                <Shield size={48} className="text-hd-orange mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-condensed font-bold text-white mb-4">WARRANTY</h3>
                <p className="text-gray-400">Estensioni di garanzia e pacchetti di manutenzione programmata per viaggiare senza pensieri.</p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group">
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