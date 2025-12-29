import React from 'react';
import { useParams, Link } from 'react-router-dom';
import catalog from '../data/motorcycles.json';
import { ArrowLeft } from 'lucide-react';

const BikeDetail = () => {
  const { vid } = useParams();
  const bike = catalog.find(b => b.vid === vid);

  if (!bike) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold">Moto non trovata</h2>
        <p className="mt-4">La moto richiesta non è presente nel catalogo.</p>
        <Link to="/inventory" className="inline-block mt-6 text-hd-orange">Torna all'inventario</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <div className="mb-6">
        <Link to="/inventory" className="inline-flex items-center gap-2 text-gray-300 hover:text-white">
          <ArrowLeft /> Torna indietro
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0b0b0b] p-6 border border-white/10">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-6">
          <img src={bike.image} alt={bike.model} className="w-full h-auto object-contain" />
        </div>

        <div className="p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-condensed font-bold mb-2">{bike.model}</h1>
            <p className="text-sm text-gray-400 mb-4">{bike.version}</p>

            <div className="mb-6">
              <span className="text-xs text-gray-400 uppercase">Categoria</span>
              <div className="text-white font-bold">{bike.category || '—'}</div>
            </div>

            <div className="mb-6">
              <span className="text-xs text-gray-400 uppercase">Prezzo</span>
              <div className="text-3xl font-bold text-hd-orange">€ {bike.price.toLocaleString('it-IT')}</div>
            </div>

            <div className="mb-6">
              <span className="text-xs text-gray-400 uppercase">Altri dettagli</span>
              <ul className="mt-2 text-gray-300">
                <li><strong>Versione:</strong> {bike.version || '—'}</li>
                <li><strong>Chilometraggio:</strong> {bike.mileage != null ? `${bike.mileage} km` : '—'}</li>
                <li><strong>Immatricolazione:</strong> {bike.registrationDate || '—'}</li>
                <li><strong>Stato:</strong> {bike.status || '—'}</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <a href="mailto:info@ponginibbi.it?subject=Info%20su%20%20${encodeURIComponent(bike.model)}" className="inline-block bg-hd-orange text-black font-bold px-6 py-3 hover:bg-white hover:text-hd-black transition-all">Richiedi info</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;
