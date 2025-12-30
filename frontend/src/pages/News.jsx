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
    <div className="bg-hd-dark min-h-screen pt-20">
       <div className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-20">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop" 
                    alt="News Hero" 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-8xl font-condensed font-bold text-white mb-2 uppercase tracking-tight">
                    News
                </h1>
                <p className="text-xl text-gray-300 uppercase tracking-widest">
                    Ultime dal mondo H-D
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
                    image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop"
                 />
                 <NewsCard 
                    date="15 Dic 2025"
                    category="Eventi"
                    title="Grande successo per il Christmas Party"
                    excerpt="Oltre 500 partecipanti hanno celebrato con noi la chiusura dell'anno. Un ringraziamento speciale a tutto il Piacenza Chapter per l'organizzazione impeccabile."
                    image="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop"
                 />
                 <NewsCard 
                    date="02 Nov 2025"
                    category="Racing"
                    title="King of the Baggers: H-D domina ancora"
                    excerpt="Il team Factory Harley-Davidson conquista un'altra vittoria storica nel campionato MotoAmerica King of the Baggers. Scopri i dettagli della gara."
                    image="https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=2670&auto=format&fit=crop"
                 />
                 <NewsCard 
                    date="20 Ott 2025"
                    category="Accessori"
                    title="Nuova collezione Screamin' Eagle"
                    excerpt="Massimizza le prestazioni della tua moto con i nuovi kit Stage IV. Ora disponibili per tutti i motori Milwaukee-Eight 114 e 117."
                    image="https://images.unsplash.com/photo-1537368910025-bc005ca23c50?q=80&w=2574&auto=format&fit=crop"
                 />
                 <NewsCard 
                    date="05 Set 2025"
                    category="Lifestyle"
                    title="Collezione Autunno/Inverno in arrivo"
                    excerpt="Preparati per la stagione fredda con la nuova linea di giacche riscaldate e abbigliamento tecnico impermeabile. Stile e comfort senza compromessi."
                    image="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop"
                 />
                 <NewsCard 
                    date="01 Ago 2025"
                    category="Service"
                    title="Check-up estivo gratuito"
                    excerpt="Prima di partire per le vacanze, passa in officina per un controllo gratuito di livelli, pressione gomme e stato della batteria. Viaggia sicuro."
                    image="https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=2670&auto=format&fit=crop"
                 />
             </div>
        </div>
    </div>
  );
};

export default News;
