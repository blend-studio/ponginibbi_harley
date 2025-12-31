import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';
import { Clock, Droplet, Disc, Settings, Battery, Gauge, Coffee, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon: Icon, title, description }) => (
    <div className="bg-white/5 p-6 border border-white/10 hover:border-hd-orange transition-all duration-300 group h-full">
        <Icon size={32} className="text-hd-orange mb-4 group-hover:scale-110 transition-transform" />
        <h4 className="text-lg font-condensed font-bold uppercase text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const Step = ({ number, title, description }) => (
    <div className="flex gap-6 items-start">
        <div className="w-12 h-12 rounded-full bg-hd-orange text-black font-condensed font-bold text-xl flex items-center justify-center shrink-0">
            {number}
        </div>
        <div>
            <h4 className="text-xl font-condensed font-bold uppercase text-white mb-2">{title}</h4>
            <p className="text-gray-400 text-sm md:text-base">{description}</p>
        </div>
    </div>
);

const ExpressLane = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black mb-12 md:mb-20">
            <div className="absolute inset-0">
                <img 
                    src="https://img.freepik.com/free-photo/mechanic-checking-motorcycle_114579-4475.jpg?t=st=1767096000~exp=1767099600~hmac=123456" 
                    alt="Express Lane" 
                    className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
                <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
                    Servizio Rapido
                </div>
                <h1 className="text-6xl md:text-[10rem] font-condensed font-bold text-white uppercase italic leading-[0.85] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
                    Express <span class="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Lane™</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200">
                    Nessun appuntamento necessario. Entra, rilassati e riparti in meno di un'ora.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                <div>
                    <SectionTitle title="Come Funziona" subtitle="NO APPOINTMENT" />
                    <p className="text-gray-400 mt-8 mb-8 text-lg leading-relaxed">
                        Il tempo è prezioso, specialmente quando la strada chiama. L'Express Lane™ è un servizio dedicato 
                        per interventi di manutenzione ordinaria e piccole riparazioni che richiedono meno di un'ora di lavoro.
                        Non serve prenotare: passa quando vuoi durante gli orari di apertura e ci prenderemo cura della tua moto
                        mentre tu ti godi un caffè.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/contact" className="bg-white text-black px-8 py-3 font-bold font-condensed uppercase hover:bg-hd-orange hover:text-white transition-all clip-slant inline-flex items-center gap-2">
                             <MapPin size={20} /> Dove Siamo
                        </Link>
                    </div>
                </div>
                
                {/* Process Steps */}
                <div className="bg-white/5 border border-white/10 p-8 md:p-12 space-y-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Clock size={150} />
                    </div>
                    <Step 
                        number="1"
                        title="Arriva al Service"
                        description="Parcheggia nella corsia dedicata Express Lane segnalata all'ingresso dell'officina."
                    />
                    <Step 
                        number="2"
                        title="Check-in Immediato"
                        description="Parla con un Service Consultant che verificherà la disponibilità e stimera i tempi."
                    />
                    <Step 
                        number="3"
                        title="Relax"
                        description="Approfitta della nostra area lounge, Wi-Fi gratuito e caffè mentre i nostri tecnici lavorano."
                    />
                    <Step 
                        number="4"
                        title="Ripartenza"
                        description="La tua moto è pronta. Pagamento rapido e sei di nuovo in strada in meno di 60 minuti."
                    />
                </div>
            </div>

            {/* Eligible Services Grid */}
            <div className="mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-condensed font-bold uppercase text-white mb-4">Servizi Inclusi</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I seguenti interventi sono garantiti entro un'ora e sono idonei per l'Express Lane.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceItem 
                        icon={Droplet}
                        title="Cambio Olio e Filtro"
                        description="Sostituzione olio motore e filtro olio con ricambi originali Harley-Davidson."
                    />
                    <ServiceItem 
                        icon={Disc}
                        title="Pastiglie Freni"
                        description="Controllo usura e sostituzione pastiglie freni anteriori o posteriori."
                    />
                    <ServiceItem 
                        icon={Gauge}
                        title="Controllo Gomme"
                        description="Verifica pressione e usura. Sostituzione singolo pneumatico (se disponibile a magazzino)."
                    />
                    <ServiceItem 
                        icon={Settings}
                        title="Manopole e Pedane"
                        description="Installazione di manopole, pedane passeggero o highway pegs."
                    />
                    <ServiceItem 
                        icon={Battery}
                        title="Batteria"
                        description="Test efficienza sistema di ricarica e sostituzione batteria."
                    />
                    <ServiceItem 
                        icon={Clock}
                        title="Tagliando 1.600 km"
                        description="Primo controllo (Break-in Service) per i modelli idonei."
                    />
                    <ServiceItem 
                        icon={Coffee}
                        title="Ispezione Sicurezza"
                        description="Controllo generale livelli, luci, cinghia e serraggi critici prima di un viaggio."
                    />
                    <ServiceItem 
                        icon={Settings}
                        title="Piccoli Accessori"
                        description="Montaggio tappi, cover e piccoli dettagli estetici bolt-on."
                    />
                </div>
            </div>

            {/* CTA / Hours Box */}
            <div className="bg-hd-orange text-white p-12 md:p-16 text-center relative overflow-hidden clip-diagonal-reverse">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-condensed font-bold uppercase mb-6">Siamo Pronti. E tu?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-12 mb-10">
                         <div>
                            <h4 className="font-bold uppercase text-xl mb-2 border-b-2 border-white/30 inline-block pb-1">Orari Express Lane</h4>
                            <ul className="mt-4 space-y-1 font-condensed text-lg">
                                <li>Lun - Ven: 08:30 - 12:30 | 14:30 - 18:30</li>
                                <li>Sabato: 09:00 - 12:30</li>
                            </ul>
                         </div>
                         <div className="flex items-center justify-center">
                            <div className="bg-black/20 p-6 backdrop-blur-sm rounded-lg border border-white/20">
                                <p className="text-lg mb-2">Hai dubbi sulla fattibilità?</p>
                                <a href="tel:+390523123456" className="flex items-center justify-center gap-2 text-2xl font-bold uppercase hover:text-black transition-colors">
                                    <Phone /> 0523 555 123
                                </a>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default ExpressLane;
