import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBikes } from '../services/api';
import BikeCard from '../components/ui/BikeCard';
import SectionTitle from '../components/ui/SectionTitle';
import { Filter, X } from 'lucide-react';
import catalog from '../data/motorcycles.json';

const Inventory = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
        const [filterModelYearCurrent, setFilterModelYearCurrent] = useState(false);
        const [filterStatus, setFilterStatus] = useState({ new: false, used: false, demo: false });

    // Catalog loaded from frontend/src/data/motorcycles.json

  useEffect(() => {
    // Simulazione caricamento API da catalogo locale
    setTimeout(() => {
        setBikes(catalog);
        setLoading(false);
    }, 600);
  }, []);

  return (
    <div className="bg-hd-dark min-h-screen pt-24 md:pt-36 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-between items-center md:items-end mb-8 md:mb-12">
            <SectionTitle title="Il Nostro Stock" subtitle="Pronta Consegna" />
            <button 
                className="lg:hidden flex items-center gap-2 text-white border border-white/30 px-4 py-2 uppercase font-bold text-sm"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
                <Filter size={16} /> Filtri
            </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
            
            {/* Sidebar Filtri - Desktop Sticky / Mobile Modal */}
            <aside className={`
                fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-6 lg:static lg:bg-transparent lg:p-0 lg:w-1/4 lg:block lg:backdrop-blur-none
                ${showMobileFilters ? 'block' : 'hidden'}
            `}>
                <div className="flex justify-between items-center lg:hidden mb-8">
                    <h3 className="text-2xl font-condensed font-bold text-white uppercase">Filtri</h3>
                    <button onClick={() => setShowMobileFilters(false)} className="text-white"><X size={32} /></button>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 sticky top-24 backdrop-blur-sm">
                    <h3 className="font-condensed text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2 hidden lg:block">FILTRA</h3>
                    
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2 font-bold uppercase tracking-wider">Famiglia</label>
                        <select className="w-full bg-black/50 text-white p-3 border border-gray-700 focus:border-hd-orange outline-none transition-colors appearance-none">
                            <option>Tutte le famiglie</option>
                            <option>Sport</option>
                            <option>Cruiser</option>
                            <option>Grand American Touring</option>
                            <option>Adventure Touring</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2 font-bold uppercase tracking-wider">Stato</label>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center text-white text-sm cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filterStatus.new}
                                    onChange={() => setFilterStatus(prev => ({ ...prev, new: !prev.new }))}
                                    className="mr-3 w-4 h-4 accent-hd-orange"
                                /> 
                                <span className="group-hover:text-hd-orange transition-colors">Nuovo</span>
                            </label>
                            <label className="flex items-center text-white text-sm cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filterStatus.used}
                                    onChange={() => setFilterStatus(prev => ({ ...prev, used: !prev.used }))}
                                    className="mr-3 w-4 h-4 accent-hd-orange"
                                /> 
                                <span className="group-hover:text-hd-orange transition-colors">Usato</span>
                            </label>
                            <label className="flex items-center text-white text-sm cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filterStatus.demo}
                                    onChange={() => setFilterStatus(prev => ({ ...prev, demo: !prev.demo }))}
                                    className="mr-3 w-4 h-4 accent-hd-orange"
                                /> 
                                <span className="group-hover:text-hd-orange transition-colors">Demo</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center text-white text-sm cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={filterModelYearCurrent}
                                onChange={(e) => setFilterModelYearCurrent(e.target.checked)}
                                className="mr-3 w-4 h-4 accent-hd-orange"
                            />
                            <span className="group-hover:text-hd-orange transition-colors">Model Year corrente</span>
                        </label>
                    </div>

                    <div className="mb-8">
                        <label className="block text-gray-400 text-sm mb-2 font-bold uppercase tracking-wider">Prezzo Max</label>
                        <input type="range" min="10000" max="50000" className="w-full accent-hd-orange" />
                        <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                            <span>€ 10k</span>
                            <span>€ 50k</span>
                        </div>
                    </div>

                    <button className="w-full bg-white text-hd-black font-condensed font-bold uppercase py-3 hover:bg-hd-orange hover:text-white transition-all duration-300 clip-slant">
                        Applica Filtri
                    </button>
                </div>
            </aside>

            {/* Grid Risultati */}
            <div className="w-full lg:w-3/4">
                        {loading ? (
                    <div className="flex justify-center items-center h-64">
                         <div className="w-16 h-16 border-4 border-hd-orange border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                                        (() => {
                                            const currentYear = new Date().getFullYear();
                                            const filtered = bikes.filter(b => {
                                                if (filterModelYearCurrent) {
                                                    const regYear = b.registrationDate ? new Date(b.registrationDate).getFullYear() : null;
                                                    if (regYear !== currentYear) return false;
                                                }

                                                // Stato filtering: se almeno uno selezionato, mantieni solo quelli che matchano
                                                const activeStatuses = [];
                                                if (filterStatus.new) activeStatuses.push('new', 'nuovo');
                                                if (filterStatus.used) activeStatuses.push('used', 'usato');
                                                if (filterStatus.demo) activeStatuses.push('demo');

                                                if (activeStatuses.length > 0) {
                                                    const statusStr = (b.status || b.Stato || '').toString().toLowerCase();
                                                    const matches = activeStatuses.some(s => statusStr.includes(s));
                                                    if (!matches) return false;
                                                }

                                                return true;
                                            });

                                            return (
                                                <motion.div 
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                                >
                                                    {filtered.map(bike => (
                                                        <motion.div 
                                                            key={bike.vid}
                                                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                                        >
                                                            <BikeCard bike={bike} />
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )
                                        })()
                )}
            </div>

        </div>
                {/* Mobile fixed filter button (falls back if header button is hidden) */}
                <button
                    onClick={() => setShowMobileFilters(true)}
                    className="fixed bottom-6 right-4 z-50 lg:hidden bg-hd-orange text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                    aria-label="Apri filtri"
                >
                    <Filter size={18} />
                </button>
            </div>
    </div>
  );
};

export default Inventory;