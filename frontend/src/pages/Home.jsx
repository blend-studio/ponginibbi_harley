import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import BikeCard from '../components/ui/BikeCard';
import { Wrench, Shield, Zap, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  // Enhanced Mock Data
  const featuredBikes = [
    { 
      vid: '1', 
      model: 'CVO Road Glide ST', 
      version: 'Milwaukee-Eight 121 HO', 
      price: 50600, 
      registrationDate: '2025-01-01', 
      image: 'https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop' 
    },
    { 
      vid: '2', 
      model: 'Street Glide', 
      version: 'Milwaukee-Eight 117', 
      price: 32900, 
      registrationDate: '2025-01-01', 
      image: 'https://images.unsplash.com/photo-1622185135505-2d795043dfeb?q=80&w=2670&auto=format&fit=crop' 
    },
    { 
      vid: '3', 
      model: 'Road King Special', 
      version: '114 Cubic Inches', 
      price: 29800, 
      registrationDate: '2025-01-01', 
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop' 
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      
      {/* 1. HERO MASSIVO */}
      <HeroSection />

      {/* 2. STRISCIA SCORREVOLE */}
      <div className="-mt-10 relative z-20 transform -rotate-1 origin-left">
         <Marquee />
      </div>

      {/* 3. LATEST DROPS (Le Moto) */}
      <section className="py-24 px-4 relative">
         <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="flex flex-col md:flex-row justify-between items-end mb-16"
            >
                <div>
                    <h2 className="text-outline text-6xl md:text-8xl font-condensed font-bold uppercase opacity-20 absolute -top-10 left-0 select-none z-0">Inventory</h2>
                    <h2 className="text-white text-5xl md:text-6xl font-condensed font-bold uppercase relative z-10">
                        Nuovi <span className="text-hd-orange">Arrivi</span>
                    </h2>
                </div>
                <Link to="/inventory" className="text-white border-b border-hd-orange pb-1 hover:text-hd-orange transition-colors uppercase font-bold tracking-widest text-sm mt-4 md:mt-0 flex items-center gap-2 group">
                    Vedi tutto lo stock <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16}/>
                </Link>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {featuredBikes.map(bike => (
                    <motion.div key={bike.vid} variants={fadeInUp}>
                      <BikeCard bike={bike} />
                    </motion.div>
                ))}
            </motion.div>
         </div>
      </section>

      {/* 4. PARALLAX SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden clip-diagonal-reverse bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2574&auto=format&fit=crop")' }}>
         <div className="absolute inset-0 bg-black/60"></div>
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
         >
             <h2 className="text-6xl md:text-9xl font-condensed font-bold text-white uppercase tracking-tighter mix-blend-overlay">
                Ride Free
             </h2>
             <p className="text-xl md:text-2xl text-white font-serif italic mt-4">
                "Four wheels move the body. Two wheels move the soul."
             </p>
         </motion.div>
      </section>

      {/* 5. SEZIONE CATEGORIE ASIMMETRICA */}
      <section className="py-20 bg-white text-black pb-40">
        <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-7xl md:text-9xl font-condensed font-bold uppercase mb-12 tracking-tighter leading-none"
            >
              Choose your<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-black to-gray-500">Fighter</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
                {/* Cruiser - Grande */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-8 bg-gray-200 relative group overflow-hidden cursor-pointer clip-corner"
                >
                    <img src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                       <h3 className="text-6xl font-condensed font-bold text-white uppercase italic translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Cruiser</h3>
                    </div>
                </motion.div>
                
                {/* Touring & Sport - Colonna destra */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex-1 bg-gray-800 relative group overflow-hidden cursor-pointer clip-corner"
                    >
                         <img src="https://images.unsplash.com/photo-1622185135505-2d795043dfeb?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                         <div className="absolute bottom-6 left-6 z-10">
                            <h3 className="text-4xl font-condensed font-bold text-white uppercase italic">Touring</h3>
                         </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex-1 bg-hd-orange relative group overflow-hidden cursor-pointer clip-corner"
                    >
                         <img src="https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply" />
                         <div className="absolute bottom-6 left-6 z-10">
                            <h3 className="text-4xl font-condensed font-bold text-white uppercase italic">Sport</h3>
                         </div>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. SERVICES GRID (Dark again) */}
      <section className="bg-[#121212] pt-20 pb-32 px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-hd-orange/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
            >
                <motion.div variants={fadeInUp} className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Wrench size={100} />
                    </div>
                    <Wrench size={48} className="text-hd-orange mb-6 group-hover:rotate-12 transition-transform relative z-10" />
                    <h3 className="text-3xl font-condensed font-bold text-white mb-4 relative z-10">MASTER TECHS</h3>
                    <p className="text-gray-400 relative z-10">Officina certificata con tecnici formati direttamente dalla Factory. Usiamo solo ricambi originali H-D.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Shield size={100} />
                    </div>
                    <Shield size={48} className="text-hd-orange mb-6 group-hover:scale-110 transition-transform relative z-10" />
                    <h3 className="text-3xl font-condensed font-bold text-white mb-4 relative z-10">WARRANTY</h3>
                    <p className="text-gray-400 relative z-10">Estensioni di garanzia e pacchetti di manutenzione programmata per viaggiare senza pensieri.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Zap size={100} />
                    </div>
                    <Zap size={48} className="text-hd-orange mb-6 group-hover:text-yellow-400 transition-colors relative z-10" />
                    <h3 className="text-3xl font-condensed font-bold text-white mb-4 relative z-10">CUSTOM KINGS</h3>
                    <p className="text-gray-400 relative z-10">Dallo Stage 1 alle trasformazioni radicali. Il nostro reparto custom realizza la moto dei tuoi sogni.</p>
                </motion.div>
            </motion.div>
        </div>
      </section>
      
      {/* 7. EVENTS / NEWSLETTER MINI SECTION */}
      <section className="py-20 bg-hd-orange text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
              <MapPin className="mx-auto mb-4" size={40} />
              <h2 className="text-5xl font-condensed font-bold uppercase mb-6">Visit Our Showroom</h2>
              <p className="text-xl mb-8">Via Emilia Pavese, 123 - Piacenza. Ti aspettiamo per un caffè e due chiacchiere sui motori.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button className="bg-black text-white px-8 py-4 font-bold uppercase hover:bg-white hover:text-black transition-colors">
                      Indicazioni Stradali
                  </button>
                  <button className="bg-white text-black px-8 py-4 font-bold uppercase hover:bg-black hover:text-white transition-colors">
                      Contattaci
                  </button>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;