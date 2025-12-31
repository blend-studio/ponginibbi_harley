import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsCard = ({ date, category, title, excerpt, image }) => (
    <div className="group cursor-pointer bg-white/5 border border-white/10 hover:border-hd-orange transition-all duration-300">
        <div className="relative overflow-hidden aspect-video">
             <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute top-4 left-4 bg-hd-orange text-white text-xs font-bold uppercase px-3 py-1">
                 {category}
             </div>
        </div>
        <div className="p-8">
             <div className="flex items-center gap-4 text-gray-500 text-xs font-bold uppercase mb-4">
                 <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
                 <span className="flex items-center gap-1"><User size={12} /> Ponginibbi Team</span>
             </div>
             <h3 className="text-2xl font-condensed font-bold text-white uppercase mb-4 leading-none group-hover:text-hd-orange transition-colors">
                 {title}
             </h3>
             <p className="text-gray-400 mb-6 line-clamp-3">
                 {excerpt}
             </p>
             <span className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm group-hover:gap-3 transition-all">
                 Leggi tutto <ArrowRight size={16} className="text-hd-orange" />
             </span>
        </div>
    </div>
);

const News = () => {
  return (
    <div className="bg-hd-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black mb-12 md:mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" 
            alt="Harley News" 
            className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
            Latest Updates
          </div>
          <h1 className="text-6xl md:text-[10rem] font-condensed font-bold text-white uppercase italic leading-[0.85] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
            H-D <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Journal</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200">
            Resta sempre aggiornato sulle novità del mondo Harley-Davidson e Ponginibbi Group.
          </p>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <NewsCard 
                    date="28 Dic 2025"
                    category="Modelli"
                    title="Nuova Gamma Touring 2026: L'evoluzione del viaggio"
                    excerpt="Harley-Davidson svela la nuova linea Touring con motori Milwaukee-Eight 121 VVT ancora più potenti e un sistema di infotainment completamente ridisegnato."
                    image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"
                 />
                 <NewsCard 
                    date="15 Dic 2025"
                    category="Eventi"
                    title="Grande successo per il Christmas Party"
                    excerpt="Oltre 500 partecipanti hanno celebrato con noi la chiusura dell'anno. Un ringraziamento speciale a tutto il Piacenza Chapter per l'organizzazione impeccabile."
                    image="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060"
                 />
                 <NewsCard 
                    date="02 Nov 2025"
                    category="Racing"
                    title="King of the Baggers: H-D domina ancora"
                    excerpt="Il team Factory Harley-Davidson conquista un'altra vittoria storica nel campionato MotoAmerica King of the Baggers. Scopri i dettagli della gara."
                    image="https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060"
                 />
                 <NewsCard 
                    date="20 Ott 2025"
                    category="Accessori"
                    title="Nuova collezione Screamin' Eagle"
                    excerpt="Massimizza le prestazioni della tua moto con i nuovi kit Stage IV. Ora disponibili per tutti i motori Milwaukee-Eight 114 e 117."
                    image="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060"
                 />
                 <NewsCard 
                    date="05 Set 2025"
                    category="Lifestyle"
                    title="Collezione Autunno/Inverno in arrivo"
                    excerpt="Preparati per la stagione fredda con la nuova linea di giacche riscaldate e abbigliamento tecnico impermeabile. Stile e comfort senza compromessi."
                    image="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060"
                 />
                 <NewsCard 
                    date="01 Ago 2025"
                    category="Service"
                    title="Check-up estivo gratuito"
                    excerpt="Prima di partire per le vacanze, passa in officina per un controllo gratuito di livelli, pressione gomme e stato della batteria. Viaggia sicuro."
                    image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"
                 />
             </div>
        </div>
    </div>
  );
};

export default News;
