import React from 'react';
import { useParams, Link } from 'react-router-dom';
import accessories from '../data/accessories.json';

const AccessoryDetail = () => {
  const { id } = useParams();
  const item = accessories.find(a => a.id === id);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4">
        <h2 className="text-2xl font-bold">Accessorio non trovato</h2>
        <p className="mt-4 text-gray-400">L'articolo richiesto non è presente nel catalogo.</p>
        <Link to="/accessories" className="mt-6 inline-block text-hd-orange font-bold">Torna agli accessori</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="w-full rounded-md overflow-hidden bg-[#0b0b0b] border border-white/10">
          <img src={item.image} alt={item.name} className="w-full h-96 object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-condensed font-bold mb-4">{item.name}</h1>
          <p className="text-gray-400 mb-6">{item.description}</p>
          {Number(item.price) > 0 ? (
            <div className="mb-6">
              <div className="text-3xl text-hd-orange font-bold mb-2">€ {Number(item.price).toLocaleString('it-IT')}</div>
              <button className="bg-hd-orange text-black px-6 py-3 font-bold rounded-md">Aggiungi al carrello</button>
            </div>
          ) : (
            <div className="mb-6 text-gray-400">Promozione / banner informativo.</div>
          )}

          <div className="mt-8">
            <Link to="/accessories" className="text-gray-400 hover:text-white">← Torna agli accessori</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoryDetail;
