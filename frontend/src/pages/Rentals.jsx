import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { ArrowRight, Calendar, ShieldCheck, Map, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RentalFeature = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 p-8 border border-white/10 hover:border-hd-orange transition-colors group h-full">
    <Icon size={40} className="text-hd-orange mb-6 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-condensed font-bold uppercase mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Step = ({ number, title, text }) => (
    <div className="relative pl-12 pb-8 last:pb-0">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-hd-orange text-black font-bold flex items-center justify-center font-condensed text-lg">
            {number}
        </div>
        <h4 className="text-2xl font-condensed font-bold uppercase mb-2">{title}</h4>
        <p className="text-gray-400">{text}</p>
    </div>
);

const Rentals = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop" 
            alt="Harley Rental" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-hd-dark/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="block text-hd-orange font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-fade-in-up">Authorized Rentals</span>
          <h1 className="text-5xl md:text-8xl font-condensed font-bold text-white mb-6 uppercase tracking-tight animate-fade-in-up delay-100">
            Noleggia la <span className="text-hd-orange">Libertà</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Vivi l'esperienza Harley-Davidson per un giorno, un weekend o una settimana. 
            La strada ti chiama.
          </p>
          <Link 
            to="/rentals/booking"
            className="inline-block bg-hd-orange text-white px-10 py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant animate-fade-in-up delay-300"
          >
            Prenota Ora
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
                <SectionTitle title="Come Funziona" subtitle="PROCESS" />
                <div className="mt-12 space-y-4 border-l border-white/10 ml-4 pl-8 py-4">
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

            <div className="bg-white/5 p-10 border border-white/10">
                <h3 className="text-3xl font-condensed font-bold uppercase mb-8 flex items-center gap-3">
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
            <h2 className="text-4xl font-condensed font-bold uppercase text-center mb-12">Il Servizio Include</h2>
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
      <div className="bg-hd-orange text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <img src="/images/ponginibbi-logo.png" className="w-96" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl font-condensed font-bold uppercase mb-6">Pronto a Partire?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Non lasciare che sia solo un sogno. Prenota oggi la tua esperienza Harley-Davidson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/rentals/booking" className="bg-black text-white px-10 py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant">
                    Verifica Disponibilità
                </Link>
                <Link to="/inventory" className="border-2 border-white text-white px-10 py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant">
                    Vedi Moto
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
