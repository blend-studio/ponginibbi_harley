import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

const Skilled = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Esperti" subtitle="CORSO AVANZATO" />
          <div className="bg-white/5 border border-white/10 p-8 mt-8 space-y-6">
            <h2 className="text-2xl font-condensed font-bold text-white mb-2">Per chi vuole affinare la tecnica</h2>
            <p className="text-gray-400">Sessioni intensive focalizzate su traiettorie, gestione dell'angolo di piega, frenata avanzata e controllo in emergenza. Ideale per chi guida regolarmente e vuole migliorare performance e sicurezza.</p>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Programma</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Analisi postura e setup moto</li>
                <li>Esercizi di frenata avanzata</li>
                <li>Esercitazioni su traiettorie e controsterzo</li>
                <li>Sessione su circuito chiuso con feedback istruttore</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-black/50 rounded">
                <div className="text-sm text-gray-400">Durata</div>
                <div className="text-white font-bold">6 ore</div>
              </div>
              <div className="p-4 bg-black/50 rounded">
                <div className="text-sm text-gray-400">Costo</div>
                <div className="text-white font-bold">€ 249</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Note</h3>
              <p className="text-gray-400">Richiesto un minimo di esperienza e patente valida; portare la propria moto o richiedere una moto scuola in prenotazione.</p>
            </div>

            <Link to="/contact" className="inline-block bg-hd-orange text-white px-6 py-3 font-bold uppercase clip-slant">Richiedi informazioni</Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Skilled;
