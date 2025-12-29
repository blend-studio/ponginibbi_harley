import React from 'react';
import accessories from '../data/accessories.json';
import { Link } from 'react-router-dom';

const Accessories = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-condensed font-bold">Accessori</h1>
          <p className="text-gray-400">Accessori originali e consigliati per la tua Harley.</p>
        </div>
        <Link to="/shop" className="text-hd-orange font-bold">Vai allo shop</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.map(item => (
          <div key={item.id} className="bg-[#0b0b0b] border border-white/10 p-4">
            <div className="h-48 bg-gray-200 flex items-center justify-center mb-4">
              <img src={item.image} alt={item.name} className="object-contain h-full" />
            </div>
            <h3 className="text-xl font-bold mb-1">{item.name}</h3>
            <p className="text-gray-400 mb-3">{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-hd-orange font-bold">€ {item.price.toLocaleString('it-IT')}</div>
              <button className="bg-white text-black px-4 py-2 font-bold hover:bg-hd-orange hover:text-white transition-all">Aggiungi</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
