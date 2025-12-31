import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

const GarageParty = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Garage Party" subtitle="EVENTI" />
          <div className="bg-white/5 border border-white/10 p-8 mt-8 space-y-6">
            <h2 className="text-2xl font-condensed font-bold text-white mb-2">Eventi e raduni</h2>
            <p className="text-gray-400">Organizziamo serate a tema, raduni e gite organizzate con itinerari selezionati. Partecipa alla community e scopri le prossime date.</p>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Prossimi appuntamenti</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Tour del Po - 15 Aprile 2026</li>
                <li>Garage Party Night - 12 Maggio 2026</li>
                <li>Weekend Touring Experience - 19-21 Giugno 2026</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Come partecipare</h3>
              <p className="text-gray-400">Iscriviti all'evento, paga la quota se richiesta e presentati in concessionaria il giorno indicato. Alcuni eventi richiedono registrazione anticipata.</p>
            </div>

            <Link to="/events" className="inline-block bg-hd-orange text-white px-6 py-3 font-bold uppercase clip-slant">Vedi tutti gli eventi</Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GarageParty;
