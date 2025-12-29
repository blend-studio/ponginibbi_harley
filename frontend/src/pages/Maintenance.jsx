import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';

const Maintenance = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Manutenzione" subtitle="SERVICE UFFICIALE" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
              <div>
                  <h3 className="text-3xl font-condensed font-bold text-white mb-6 uppercase">La tua moto in mani esperte</h3>
                  <div className="space-y-4 text-gray-300">
                      <p>Il nostro team di tecnici Master è formato direttamente dalla Factory di Milwaukee. Utilizziamo solo diagnostica d'avanguardia e ricambi originali Genuine Motor Parts®.</p>
                      <ul className="list-disc list-inside space-y-2 text-hd-orange font-bold">
                          <li>Tagliandi Certificati</li>
                          <li>Diagnostica Elettronica</li>
                          <li>Riparazioni in Garanzia</li>
                          <li>Montaggio Accessori</li>
                      </ul>
                      <p>Affidaci la tua Harley per viaggiare in totale sicurezza e mantenere inalterato il valore del tuo investimento.</p>
                  </div>
              </div>
              <div className="rounded-sm overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=2670&auto=format&fit=crop" alt="Officina e Motore" />
              </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Maintenance;