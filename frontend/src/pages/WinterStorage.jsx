import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';

const WinterStorage = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Winter Storage" subtitle="IL RIPOSO DEI GUERRIERI" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
              <div>
                  <h3 className="text-3xl font-condensed font-bold text-white mb-6 uppercase">Protezione totale per l'inverno</h3>
                  <div className="space-y-4 text-gray-300">
                      <p>Non lasciare la tua Harley al freddo e all'umidità. Il nostro servizio di rimessaggio invernale garantisce le migliori condizioni per la tua moto.</p>
                      <ul className="list-disc list-inside space-y-2 text-hd-orange font-bold">
                          <li>Ambiente Climatizzato e Sicuro</li>
                          <li>Mantenimento Carica Batteria</li>
                          <li>Trattamento Stabilizzante Benzina</li>
                          <li>Lavaggio e Check-up Pre-Rientro</li>
                      </ul>
                      <p>Riprendi la strada in primavera con una moto perfetta e pronta a mordere l'asfalto.</p>
                  </div>
              </div>
              <div className="rounded-sm overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1622185135505-2d795043dfeb?q=80&w=2670&auto=format&fit=crop" alt="Rimessaggio" />
              </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default WinterStorage;