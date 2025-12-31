import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BikeCard from '../components/ui/BikeCard';
import SectionTitle from '../components/ui/SectionTitle';
import { Filter, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import catalog from '../data/motorcycles.json';
import AnimatedPage from '../components/AnimatedPage';

const InventoryView = ({ type = 'all', title, subtitle }) => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filterFamily, setFilterFamily] = useState('Tutte le famiglie');
  const [priceMax, setPriceMax] = useState(50000);

  useEffect(() => {
    setTimeout(() => {
        let filtered = catalog;
        if (type === 'new') {
            filtered = catalog.filter(b => (b.status || '').toLowerCase().includes('new') || (b.status || '').toLowerCase().includes('nuovo'));
        } else if (type === 'used') {
            filtered = catalog.filter(b => (b.status || '').toLowerCase().includes('used') || (b.status || '').toLowerCase().includes('usato'));
        }
        setBikes(filtered);
        setLoading(false);
    }, 400);
  }, [type]);

  const displayBikes = bikes.filter(b => {
      if (filterFamily !== 'Tutte le famiglie' && b.category !== filterFamily) return false;
      if (b.price > priceMax) return false;
      return true;
  });

  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="mb-8">
             <Link to="/inventory" className="inline-flex items-center gap-2 text-gray-400 hover:text-hd-orange transition-colors mb-6 text-sm uppercase font-bold">
                <ArrowLeft size={16} /> Torna a tutto lo stock
            </Link>
            <div className="flex justify-between items-center md:items-end">
                <SectionTitle title={title || "Inventario"} subtitle={subtitle || "DISPONIBILITÀ IMMEDIATA"} />
                <button 
                    className="lg:hidden flex items-center gap-2 text-white border border-white/30 px-4 py-2 uppercase font-bold text-sm"
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                    <Filter size={16} /> Filtri
                </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 relative">
              
              {/* Sidebar Filtri */}
              <aside className={`
                  fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-6 lg:static lg:bg-transparent lg:p-0 lg:w-1/4 lg:block lg:backdrop-blur-none
                  ${showMobileFilters ? 'block' : 'hidden'}
              `}>
                  <div className="flex justify-between items-center lg:hidden mb-8">
                      <h3 className="text-2xl font-condensed font-bold text-white uppercase">Filtri</h3>
                      <button onClick={() => setShowMobileFilters(false)} className="text-white"><X size={32} /></button>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 sticky top-24 backdrop-blur-sm">
                      <h3 className="font-condensed text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2 hidden lg:block uppercase">Filtra</h3>
                      
                      <div className="mb-6">
                          <label className="block text-gray-400 text-sm mb-2 font-bold uppercase tracking-wider">Famiglia</label>
                          <select 
                            value={filterFamily}
                            onChange={(e) => setFilterFamily(e.target.value)}
                            className="w-full bg-black/50 text-white p-3 border border-gray-700 focus:border-hd-orange outline-none transition-colors appearance-none"
                          >
                              <option>Tutte le famiglie</option>
                              <option>Sport</option>
                              <option>Cruiser</option>
                              <option>Grand American Touring</option>
                              <option>Adventure Touring</option>
                          </select>
                      </div>

                      <div className="mb-8">
                          <label className="block text-gray-400 text-sm mb-2 font-bold uppercase tracking-wider">Prezzo Max: € {priceMax.toLocaleString()}</label>
                          <input 
                            type="range" 
                            min="5000" 
                            max="60000" 
                            step="1000"
                            value={priceMax}
                            onChange={(e) => setPriceMax(parseInt(e.target.value))}
                            className="w-full accent-hd-orange" 
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                              <span>€ 5k</span>
                              <span>€ 60k</span>
                          </div>
                      </div>

                      <button 
                        onClick={() => setShowMobileFilters(false)}
                        className="w-full bg-white text-hd-black font-condensed font-bold uppercase py-3 hover:bg-hd-orange hover:text-white transition-all duration-300 clip-slant"
                      >
                          Chiudi Filtri
                      </button>
                  </div>
              </aside>

              {/* Grid Risultati */}
              <div className="w-full lg:w-3/4">
                  {loading ? (
                      <div className="flex justify-center items-center h-64">
                           <div className="w-16 h-16 border-4 border-hd-orange border-t-transparent rounded-full animate-spin"></div>
                      </div>
                  ) : displayBikes.length > 0 ? (
                      <motion.div 
                          initial="hidden"
                          animate="visible"
                          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                          {displayBikes.map(bike => (
                              <motion.div 
                                  key={bike.vid}
                                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                              >
                                  <BikeCard bike={bike} />
                              </motion.div>
                          ))}
                      </motion.div>
                  ) : (
                      <div className="text-center py-20 bg-white/5 border border-white/10">
                          <p className="text-xl text-gray-400 uppercase font-condensed font-bold">Nessuna moto trovata con questi filtri.</p>
                          <button 
                            onClick={() => { setFilterFamily('Tutte le famiglie'); setPriceMax(50000); }}
                            className="mt-4 text-hd-orange font-bold uppercase hover:text-white"
                          >
                              Reset Filtri
                          </button>
                      </div>
                  )}
              </div>

          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default InventoryView;
