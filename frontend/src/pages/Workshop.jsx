import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

const Workshop = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Workshop" subtitle="TECNICA" />
          <div className="bg-white/5 border border-white/10 p-8 mt-8 space-y-6">
            <h2 className="text-2xl font-condensed font-bold text-white mb-2">Manutenzione e tecnica</h2>
            <p className="text-gray-400">Workshop pratici per imparare la manutenzione di base e le verifiche pre-partenza. Ideale per chi vuole viaggiare in sicurezza e autonomia.</p>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Argomenti trattati</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Controllo livelli e sostituzione olio</li>
                <li>Controllo impianto frenante e pastiglie</li>
                <li>Ispezione gomme e pressione</li>
                <li>Regolazioni e check pre-viaggio</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-black/50 rounded">
                <div className="text-sm text-gray-400">Durata</div>
                <div className="text-white font-bold">3 ore</div>
              </div>
              <div className="p-4 bg-black/50 rounded">
                <div className="text-sm text-gray-400">Costo</div>
                <div className="text-white font-bold">€ 89</div>
              </div>
              <div className="p-4 bg-black/50 rounded">
                <div className="text-sm text-gray-400">Max partecipanti</div>
                <div className="text-white font-bold">8</div>
              </div>
            </div>

            <Link to="/contact" className="inline-block bg-hd-orange text-white px-6 py-3 font-bold uppercase clip-slant">Iscriviti al workshop</Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Workshop;
