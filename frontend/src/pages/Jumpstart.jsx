import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

const Jumpstart = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Jumpstart™" subtitle="EXPERIENCE" />
          <div className="bg-white/5 border border-white/10 p-8 mt-8 space-y-6">
            <h2 className="text-2xl font-condensed font-bold text-white mb-2">Prova in sicurezza</h2>
            <p className="text-gray-400">Jumpstart™ permette di vivere l’esperienza Harley-Davidson guidando una moto con supporto e assistenza completa. Ideale per chi vuole sentire il sound e la risposta del motore senza necessità di patente.</p>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Cosa comprende</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Briefing iniziale con istruttore</li>
                <li>Sessione pratica assistita</li>
                <li>Foto ricordo e breve debrief</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-black/50 rounded">
                <div className="text-sm text-gray-400">Durata</div>
                <div className="text-white font-bold">30-45 minuti</div>
              </div>
              <div className="p-4 bg-black/50 rounded">
                <div className="text-sm text-gray-400">Costo</div>
                <div className="text-white font-bold">€ 29</div>
              </div>
            </div>

            <Link to="/contact" className="inline-block bg-hd-orange text-white px-6 py-3 font-bold uppercase clip-slant">Prenota la tua prova</Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Jumpstart;
