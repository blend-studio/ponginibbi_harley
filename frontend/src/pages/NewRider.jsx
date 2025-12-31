import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

const NewRider = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Neofiti" subtitle="CORSO BASE" />
          <div className="bg-white/5 border border-white/10 p-8 mt-8 space-y-6">
            <h2 className="text-2xl font-condensed font-bold text-white mb-2">Introduzione al corso</h2>
            <p className="text-gray-400 leading-relaxed">Questo corso è pensato per chi sale in sella per la prima volta: impari equilibrio, avviamento, gestione frizione e cambio, curva base e tecniche di frenata in totale sicurezza.</p>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Programma dettagliato</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong>Modulo 1 - Teoria (1h):</strong> norme, posizionamento, controllo moto e sicurezza.</li>
                <li><strong>Modulo 2 - Pratica in area chiusa (2h):</strong> partenza, arresto, curve lente, controllo velocità.</li>
                <li><strong>Modulo 3 - Uscita guidata (2h):</strong> applicazione su strada, cambi di marcia e brevi trasferimenti.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/50 p-4 rounded">
                <div className="text-sm text-gray-400">Durata</div>
                <div className="text-white font-bold">5 ore</div>
              </div>
              <div className="bg-black/50 p-4 rounded">
                <div className="text-sm text-gray-400">Costo</div>
                <div className="text-white font-bold">€ 149</div>
              </div>
              <div className="bg-black/50 p-4 rounded">
                <div className="text-sm text-gray-400">Partecipanti</div>
                <div className="text-white font-bold">Max 6 per turno</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Requisiti</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Età minima 16 anni</li>
                <li>Documento d'identità valido</li>
                <li>Abbigliamento adeguato (casco omologato consigliato)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Cosa è incluso</h3>
              <p className="text-gray-400">Moto, assicurazione per l'attività, casco e protezioni base in prestito (su richiesta). Certificato di partecipazione al termine del corso.</p>
            </div>

            <div className="pt-4">
              <Link to="/contact" className="inline-block bg-hd-orange text-white px-6 py-3 font-bold uppercase clip-slant">Prenota il tuo posto</Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NewRider;
