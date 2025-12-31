import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { ArrowRight, Calendar, ShieldCheck, Map, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RentalFeature = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 p-6 md:p-8 border border-white/10 hover:border-hd-orange transition-colors group h-full">
    <Icon size={40} className="text-hd-orange mb-6 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-condensed font-bold uppercase mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

const Step = ({ number, title, text }) => (
    <div className="relative pl-12 pb-8 last:pb-0">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-hd-orange text-black font-bold flex items-center justify-center font-condensed text-lg">
            {number}
        </div>
        <h4 className="text-xl md:text-2xl font-condensed font-bold uppercase mb-2">{title}</h4>
        <p className="text-gray-400 text-sm md:text-base">{text}</p>
    </div>
);

const Rentals = () => {
  return (
    <div className="bg-hd-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" 
            alt="Harley Rental" 
            className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
            Authorized Rentals
          </div>
          <h1 className="text-6xl md:text-[10rem] font-condensed font-bold text-white uppercase italic leading-[0.85] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
            Noleggia la <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Libertà</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200 mb-8">
            Vivi l'esperienza Harley-Davidson per un giorno, un weekend o una settimana. 
            La strada ti chiama.
          </p>
          <Link 
            to="/rentals/booking"
            className="inline-block bg-hd-orange text-white px-8 md:px-10 py-3 md:py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant animate-fade-in-up delay-300 text-sm md:text-base"
          >
            Prenota Ora
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-24">
            <div>
                <SectionTitle title="Come Funziona" subtitle="PROCESS" />
                <div className="mt-12 space-y-4 border-l border-white/10 ml-2 md:ml-4 pl-6 md:pl-8 py-4">
                    <Step 
                        number="1" 
                        title="Scegli la tua Moto" 
                        text="Sfoglia la nostra flotta e seleziona il modello che hai sempre sognato di guidare. Touring, Cruiser o Sport." 
                    />
                    <Step 
                        number="2" 
                        title="Prenota le Date" 
                        text="Verifica la disponibilità e blocca il tuo periodo di noleggio. Puoi aggiungere assicurazioni extra e accessori." 
                    />
                    <Step 
                        number="3" 
                        title="Ritira e Parti" 
                        text="Vieni in concessionaria, sbrigheremo le pratiche velocemente e ti spiegheremo ogni dettaglio della moto prima di partire." 
                    />
                </div>
            </div>

            <div className="bg-white/5 p-6 md:p-10 border border-white/10 mt-8 lg:mt-0">
                <h3 className="text-2xl md:text-3xl font-condensed font-bold uppercase mb-8 flex items-center gap-3">
                    <AlertCircle className="text-hd-orange" /> Requisiti
                </h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <Check className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Patente di Guida</strong>
                            <p className="text-gray-400 text-sm">Patente A in corso di validità rilasciata da almeno 3 anni.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Check className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Età Minima</strong>
                            <p className="text-gray-400 text-sm">Devi avere almeno 25 anni compiuti.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Check className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Carta di Credito</strong>
                            <p className="text-gray-400 text-sm">Carta di credito (non prepagata) intestata al guidatore per il deposito cauzionale.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Check className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Abbigliamento</strong>
                            <p className="text-gray-400 text-sm">Casco omologato, giacca tecnica, guanti e scarpe chiuse sono obbligatori. Possiamo noleggiarli se non li hai.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Features */}
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-condensed font-bold uppercase text-center mb-12">Il Servizio Include</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RentalFeature 
                icon={ShieldCheck}
                title="Assicurazione Kasko"
                description="Viaggia sereno con la nostra copertura assicurativa completa (con franchigia) e assistenza stradale 24/7 in tutta Europa."
            />
            <RentalFeature 
                icon={Calendar}
                title="Modelli 2024/2025"
                description="La nostra flotta è costantemente aggiornata. Guiderai sempre moto con pochi chilometri, tagliandate e perfette."
            />
            <RentalFeature 
                icon={Map}
                title="Chilometraggio Illimitato"
                description="Per noleggi superiori a 3 giorni, il chilometraggio è illimitato. Per periodi più brevi, offriamo pacchetti flessibili."
            />
            </div>
        </div>

      </div>

      {/* CTA Footer */}
      <div className="bg-hd-orange text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <img src={`${import.meta.env.BASE_URL}images/ponginibbi-logo.png`} className="w-64 md:w-96" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-condensed font-bold uppercase mb-6">Pronto a Partire?</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Non lasciare che sia solo un sogno. Prenota oggi la tua esperienza Harley-Davidson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/rentals/booking" className="bg-black text-white px-10 py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant text-sm md:text-base">
                    Verifica Disponibilità
                </Link>
                <Link to="/inventory" className="bg-white text-black px-10 py-4 font-bold font-condensed uppercase hover:bg-hd-orange hover:text-white transition-all clip-slant text-sm md:text-base">
                    Vedi Moto
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
