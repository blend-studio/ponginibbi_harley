import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const denominations = [50, 100, 200, 500];

const GiftCards = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-24 md:pt-36 pb-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <SectionTitle title="Gift Cards" subtitle="Regala un'emozione" />

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Le Gift Card Ponginibbi Harley-Davidson sono il regalo perfetto per chi ama la strada.
          Scegli l'importo, aggiungi un messaggio personalizzato e ritira in concessionaria o richiedi la spedizione.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {denominations.map((d) => (
            <div key={d} className="bg-white/5 border border-white/10 p-6 rounded-lg flex flex-col items-center justify-between">
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Gift Card</div>
                <div className="text-3xl md:text-4xl font-condensed font-bold text-white">€ {d}</div>
                <p className="text-gray-400 text-sm mt-3">Valida per acquisti e servizi in concessionaria.</p>
              </div>
              <Link to="/contact" className="mt-6 inline-block bg-hd-orange text-white px-6 py-2 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors">
                Richiedi ora
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg text-left">
          <h3 className="font-condensed font-bold text-2xl text-white mb-4">Come funziona</h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Scegli l'importo e clicca su "Richiedi ora".</li>
            <li>Compila il form di richiesta o contattaci direttamente.</li>
            <li>Ritira la Gift Card in concessionaria oppure richiedi la spedizione.</li>
            <li>La Gift Card è utilizzabile su prodotti e servizi secondo i termini in vigore.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
