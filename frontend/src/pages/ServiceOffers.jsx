import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';
import { Tag, Calendar, Wrench, CheckCircle, ArrowRight, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfferCard = ({ title, subtitle, price, discountPrice, features, validUntil, image, featured }) => (
    <div className={`relative group flex flex-col h-full border ${featured ? 'border-hd-orange bg-white/5' : 'border-white/10 bg-white/5'} overflow-hidden`}>
        {featured && (
            <div className="absolute top-4 right-4 z-20 bg-hd-orange text-white text-xs font-bold uppercase px-3 py-1 animate-pulse">
                Best Value
            </div>
        )}
        <div className="relative h-48 md:h-64 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-4 left-4 right-4">
                 <h3 className="text-xl md:text-2xl font-condensed font-bold text-white uppercase leading-none mb-1">{title}</h3>
                 <p className="text-hd-orange font-bold uppercase text-xs md:text-sm tracking-wider">{subtitle}</p>
            </div>
        </div>
        
        <div className="p-5 md:p-6 flex flex-col flex-grow">
            <div className="mb-6">
                {discountPrice ? (
                    <div className="flex items-end gap-3">
                        <span className="text-3xl md:text-4xl font-condensed font-bold text-white">€{discountPrice}</span>
                        <span className="text-lg md:text-xl font-condensed font-bold text-gray-500 line-through mb-1">€{price}</span>
                    </div>
                ) : (
                     <div className="text-3xl md:text-4xl font-condensed font-bold text-white">€{price}</div>
                )}
                <p className="text-gray-400 text-xs uppercase mt-2">IVA e Manodopera incluse</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle size={16} className="text-hd-orange shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                 <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase mb-4">
                    <Calendar size={14} /> Valida fino al {validUntil}
                 </div>
                 <Link 
                    to={`/service-appointment?offer=${encodeURIComponent(title)}`}
                    className={`w-full block text-center py-3 font-condensed font-bold uppercase transition-all clip-slant text-sm md:text-base ${featured ? 'bg-hd-orange text-white hover:bg-white hover:text-black' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
                 >
                    Prenota Offerta
                 </Link>
            </div>
        </div>
    </div>
);

const ServiceOffers = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen">
                 {/* Hero */}
                <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden mb-10 md:mb-20">
                    <div className="absolute inset-0">
                        <img
                            src="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060"
                            alt="Service Offers"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 text-center px-4 pt-8 md:pt-20 max-w-5xl">
                         <h1 className="text-3xl sm:text-4xl md:text-7xl font-condensed font-bold text-white mb-4 uppercase italic leading-[0.9] drop-shadow-2xl">
                            SPECIAL OFFERS <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">SERVICE</span>
                        </h1>
                        <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm">
                            SERVICE
                        </div>
                       
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Prenditi cura della tua Harley con le nostre offerte esclusive.
                        </p>
                    </div>
                </div>

        <div className="max-w-7xl mx-auto px-4 pb-20 md:pb-24">
             <SectionTitle title="Offerte Attive" subtitle="LIMITED TIME" />
             
             <p className="text-gray-400 max-w-3xl mb-12 text-base md:text-lg leading-relaxed">
                 Mantieni la tua moto al top delle prestazioni senza sorprese. 
                 I nostri pacchetti tutto incluso sono pensati per offrirti la massima trasparenza e la qualità del servizio ufficiale Harley-Davidson.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                 <OfferCard 
                    title="Spring Ready"
                    subtitle="Check-up Stagionale"
                    price="180"
                    discountPrice="149"
                    validUntil="30 Aprile 2026"
                    image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"
                    featured={true}
                    features={[
                        "Cambio Olio Motore (Screamin' Eagle® SYN3)",
                        "Sostituzione Filtro Olio (Cromato o Nero)",
                        "Controllo e rabbocco fluidi freni e frizione",
                        "Verifica tensione cinghia/catena",
                        "Controllo pressione e stato pneumatici",
                        "Test batteria e sistema di ricarica",
                        "Lavaggio completo a mano"
                    ]}
                 />
                 
                 <OfferCard 
                    title="Brake Special"
                    subtitle="Sicurezza Freni"
                    price="220"
                    discountPrice="199"
                    validUntil="31 Maggio 2026"
                    image="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060"
                    features={[
                        "Sostituzione pastiglie freni anteriori (coppia)",
                        "Sostituzione pastiglie freno posteriore",
                        "Spurgo e sostituzione totale liquido freni (DOT 4)",
                        "Pulizia pistoni pinze freno",
                        "Verifica dischi e tolleranze",
                        "Test su strada certificato"
                    ]}
                 />

                 <OfferCard 
                    title="Tire Combo"
                    subtitle="Cambio Gomme"
                    price="450"
                    validUntil="Sempre Valido"
                    image="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060"
                    features={[
                        "Coppia pneumatici Michelin® Scorcher® o Dunlop® H-D®",
                        "Montaggio ed equilibratura elettronica",
                        "Smaltimento pneumatici usati",
                        "Sostituzione valvole",
                        "Controllo cuscinetti ruota",
                        "Sconto 20% su eventuali pastiglie freno"
                    ]}
                 />
             </div>

             {/* Newsletter Promo Banner */}
             <div className="mt-16 md:mt-20 bg-hd-orange p-8 md:p-12 relative overflow-hidden">
                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                     <div className="text-center md:text-left">
                         <h3 className="text-3xl md:text-4xl font-condensed font-bold text-white uppercase mb-2">Iscriviti e Risparmia</h3>
                         <p className="text-black font-medium text-base md:text-lg max-w-xl">
                             Ricevi un buono sconto del 10% sul tuo primo tagliando iscrivendoti alla nostra newsletter.
                             Rimani aggiornato su promozioni esclusive e eventi.
                         </p>
                     </div>
                     <div className="flex flex-col md:flex-row w-full md:w-auto gap-2">
                         <input type="email" placeholder="La tua email" className="bg-white px-4 py-3 font-condensed font-bold uppercase outline-none w-full md:w-64" />
                         <button className="bg-black text-white px-6 py-3 font-condensed font-bold uppercase hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                             Iscriviti
                         </button>
                     </div>
                 </div>
                 {/* Decorative background icon */}
                 <Percent size={200} className="absolute -bottom-10 -right-10 md:w-[300px] md:h-[300px] text-white opacity-20 rotate-12" />
             </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ServiceOffers;
