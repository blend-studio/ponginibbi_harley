import React, { useState, useEffect } from 'react';
import { getBikes } from '../services/api';
import BikeCard from '../components/ui/BikeCard';
import SectionTitle from '../components/ui/SectionTitle';

const Inventory = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data se l'API non risponde ancora
  const mockBikes = [
    { vid: '1', model: 'SPORTSTER S', version: 'RH1250S', price: 17900, mileage: 0, registrationDate: '2024-01-01', image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-sportster-s/2024-sportster-s-f85/360/2024-sportster-s-f85-motorcycle-01.jpg' },
    { vid: '2', model: 'LOW RIDER ST', version: 'FXLRST', price: 24500, mileage: 1500, registrationDate: '2023-05-01', image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-low-rider-st/2024-low-rider-st-f36/360/2024-low-rider-st-f36-motorcycle-01.jpg' },
  ];

  useEffect(() => {
    // Sostituire con chiamata API reale
    // getBikes().then(data => setBikes(data));
    setTimeout(() => {
        setBikes(mockBikes);
        setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-hd-dark min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <SectionTitle title="Il Nostro Stock" subtitle="Pronta Consegna" />

        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filtri */}
            <div className="w-full lg:w-1/4">
                <div className="bg-hd-gray p-6 sticky top-24">
                    <h3 className="font-condensed text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">FILTRA</h3>
                    
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2 font-bold uppercase">Famiglia</label>
                        <select className="w-full bg-hd-dark text-white p-2 border border-gray-700 focus:border-hd-orange outline-none">
                            <option>Tutte</option>
                            <option>Sport</option>
                            <option>Cruiser</option>
                            <option>Grand American Touring</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2 font-bold uppercase">Stato</label>
                        <div className="flex gap-4">
                            <label className="flex items-center text-white text-sm">
                                <input type="checkbox" className="mr-2 accent-hd-orange" /> Nuovo
                            </label>
                            <label className="flex items-center text-white text-sm">
                                <input type="checkbox" className="mr-2 accent-hd-orange" /> Usato
                            </label>
                        </div>
                    </div>

                    <button className="w-full bg-white text-hd-black font-bold uppercase py-2 hover:bg-hd-orange hover:text-white transition-colors">
                        Applica Filtri
                    </button>
                </div>
            </div>

            {/* Grid Risultati */}
            <div className="w-full lg:w-3/4">
                {loading ? (
                    <div className="text-white text-center py-20">Caricamento motori...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bikes.map(bike => (
                            <BikeCard key={bike.vid} bike={bike} />
                        ))}
                    </div>
                )}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Inventory;