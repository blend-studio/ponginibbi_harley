import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';

const Customization = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Customizzazione" subtitle="RENDILA UNICA" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
              <div>
                  <h3 className="text-3xl font-condensed font-bold text-white mb-6 uppercase">Il tuo stile, la nostra arte</h3>
                  <div className="space-y-4 text-gray-300">
                      <p>Dallo Stage I per migliorare le performance del motore a trasformazioni radicali di telaio e carrozzeria. Il nostro reparto custom realizza la moto che hai sempre sognato.</p>
                      <ul className="list-disc list-inside space-y-2 text-hd-orange font-bold">
                          <li>Stage I, II, III & IV Performance</li>
                          <li>Scarichi e Filtri High-Flow</li>
                          <li>Verniciature Custom</li>
                          <li>Manubri e Comandi su Misura</li>
                      </ul>
                      <p>Collaboriamo con i migliori fornitori di parti speciali per garantirti un risultato unico e affidabile.</p>
                  </div>
              </div>
              <div className="rounded-sm overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=2670&auto=format&fit=crop" alt="Custom Bike Sportster S" />
              </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Customization;