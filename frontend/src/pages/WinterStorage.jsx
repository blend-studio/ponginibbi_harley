import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';
import { Thermometer, BatteryCharging, Droplets, CheckSquare, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="bg-white/10 p-3 rounded-sm text-hd-orange">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="text-xl font-condensed font-bold uppercase text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const WinterStorage = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen">
         {/* Hero */}
         <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060" 
                    alt="Winter Storage" 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4 pt-20">
                <h1 className="text-5xl md:text-8xl font-condensed font-bold text-white mb-6 uppercase tracking-tight">
                    Winter <span className="text-hd-orange">Storage</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Mentre tu riposi, noi ci prendiamo cura della tua Harley.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
              <div>
                  <SectionTitle title="Il Riposo dei Guerrieri" subtitle="SERVIZIO INVERNALE" />
                  <p className="text-gray-400 mt-8 mb-8 text-lg leading-relaxed">
                      L'inverno può essere duro per la tua moto. Umidità, freddo e inattività possono danneggiare batteria, pneumatici e guarnizioni.
                      Il nostro servizio di Winter Storage offre un ambiente controllato e sicuro dove la tua Harley può "svernare" in perfette condizioni, 
                      pronta per la prima accensione di primavera.
                  </p>
                  <div className="space-y-6">
                      <BenefitItem 
                        icon={Thermometer}
                        title="Ambiente Climatizzato"
                        description="Temperatura e umidità costanti per prevenire ossidazione e danni alle parti in gomma."
                      />
                      <BenefitItem 
                        icon={BatteryCharging}
                        title="Mantenimento Carica"
                        description="Collegamento costante a mantenitori di carica professionali per preservare la vita della batteria."
                      />
                      <BenefitItem 
                        icon={Droplets}
                        title="Trattamento Fluidi"
                        description="Aggiunta di stabilizzante carburante per prevenire depositi nel serbatoio e nel sistema di iniezione."
                      />
                      <BenefitItem 
                        icon={Shield}
                        title="Sicurezza H24"
                        description="Sistema di allarme e videosorveglianza collegato 24/7 per la massima tranquillità."
                      />
                  </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-10">
                  <h3 className="text-3xl font-condensed font-bold uppercase text-white mb-8 text-center">Check-list Ingresso</h3>
                  <ul className="space-y-4">
                      {[
                          "Lavaggio accurato e asciugatura",
                          "Controllo pressione pneumatici",
                          "Verifica livelli fluidi",
                          "Ispezione visiva generale",
                          "Lubrificazione catena/cinghia (se applicabile)",
                          "Check aggiornamenti software"
                      ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300 border-b border-white/5 pb-3 last:border-0">
                              <CheckSquare className="text-hd-orange shrink-0" /> {item}
                          </li>
                      ))}
                  </ul>
                  <div className="mt-10 text-center">
                      <p className="text-sm text-gray-400 mb-4">Posti limitati. Prenota ora il tuo spazio.</p>
                      <Link to="/contact" className="w-full block bg-hd-orange text-white py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant">
                          Prenota Rimessaggio
                      </Link>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default WinterStorage;