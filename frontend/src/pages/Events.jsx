import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, MapPin, Users, ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventRow = ({ date, month, title, location, description, image }) => (
    <div className="flex flex-col md:flex-row gap-8 border-b border-white/10 py-10 group hover:bg-white/5 transition-colors px-6 -mx-6">
        <div className="md:w-32 flex flex-col items-center justify-center border border-white/20 p-4 h-32 bg-white/5">
            <span className="font-condensed font-bold text-4xl text-white block leading-none">{date}</span>
            <span className="text-hd-orange font-bold text-sm tracking-widest uppercase block mt-1">{month}</span>
        </div>
        <div className="md:w-2/3 flex flex-col justify-center">
             <h3 className="font-condensed font-bold text-3xl text-white uppercase mb-2 group-hover:text-hd-orange transition-colors">{title}</h3>
             <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <MapPin size={16} className="text-hd-orange" /> {location}
             </div>
             <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
        <div className="md:w-1/4 self-center flex justify-end">
            <button className="px-6 py-3 border border-white/20 text-white font-bold uppercase text-sm hover:bg-hd-orange hover:border-hd-orange transition-all clip-slant">
                Dettagli
            </button>
        </div>
    </div>
);

const Events = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-24 md:pt-36 pb-20">
      
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop" 
            alt="Harley Events" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-8xl font-condensed font-bold text-white mb-4 uppercase tracking-tight leading-none">
            Ride <span className="text-hd-orange">Together</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto uppercase tracking-widest">
            Eventi, Raduni e Vita di Club
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        
        {/* H.O.G. BANNER */}
        <div className="relative rounded-sm overflow-hidden mb-16 md:mb-24 group border border-white/10">
             <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-700" alt="HOG Chapter" />
                 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
             </div>
             <div className="relative z-10 p-8 md:p-24 max-w-3xl">
                 <div className="flex items-center gap-4 mb-6">
                     <Users className="text-hd-orange shrink-0" size={24} md:size={32} />
                     <span className="text-white font-bold tracking-widest uppercase text-xs md:text-sm">Harley Owners Group™</span>
                 </div>
                 <h2 className="font-condensed font-bold text-4xl md:text-7xl text-white uppercase mb-6 md:mb-8 leading-none">
                     Piacenza <span className="text-hd-orange">Chapter</span>
                 </h2>
                 <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
                     Non guidare mai da solo. Unisciti al Chapter locale per vivere la vera esperienza Harley-Davidson. 
                     Raduni domenicali, viaggi in tutta Europa, cene e una fratellanza che dura una vita.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-hd-orange text-white px-8 py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors text-sm md:text-base">
                        Diventa Socio
                    </button>
                    <button className="border border-white text-white px-8 py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors text-sm md:text-base">
                        Visita sito Chapter
                    </button>
                 </div>
             </div>
        </div>

        {/* CALENDARIO */}
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-6 gap-4">
                <div>
                    <h3 className="font-condensed font-bold text-3xl md:text-4xl text-white uppercase mb-2">Prossimi Eventi</h3>
                    <p className="text-gray-400 text-sm md:text-base">Non perderti i nostri appuntamenti.</p>
                </div>
                <Link to="/events" className="flex items-center gap-2 text-hd-orange font-bold uppercase hover:text-white transition-colors text-sm">
                    Vedi tutto il calendario <ArrowRight size={18} />
                </Link>
            </div>
            
            <EventRow 
                date="15"
                month="MAR"
                title="Spring Open House" 
                location="Ponginibbi Harley-Davidson, Piacenza"
                description="Scopri la nuova gamma 2026. Test ride gratuiti, musica dal vivo, street food e tanto altro. L'evento di apertura della stagione che stavi aspettando."
            />
            <EventRow 
                date="12"
                month="MAG"
                title="Freedom on Tour" 
                location="Piacenza Expo"
                description="Il truck ufficiale H-D arriva in città. Prenota la tua prova su strada dei nuovi modelli Touring e Cruiser. Un'occasione unica per provare tutta la gamma."
            />
            <EventRow 
                date="20"
                month="GIU"
                title="Piacenza Night Run" 
                location="Partenza dallo Showroom"
                description="Un giro notturno attraverso le colline piacentine, seguito da una grigliata sotto le stelle riservata ai soci H.O.G. Ritrovo ore 19:00."
            />
             <EventRow 
                date="TBA"
                month="SET"
                title="End of Season Party" 
                location="To Be Announced"
                description="Chiudiamo la stagione in bellezza. Resta sintonizzato per i dettagli, sarà una festa indimenticabile."
            />
        </div>

        {/* Gallery Teaser */}
        <div className="mt-20 md:mt-24 text-center">
             <Camera size={40} md:size={48} className="text-white mx-auto mb-6 opacity-50" />
             <h3 className="font-condensed font-bold text-2xl md:text-3xl text-white uppercase mb-4">Gallery Eventi</h3>
             <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                 Rivivi i momenti migliori. Sfoglia le foto dei nostri raduni, feste e viaggi.
             </p>
             <Link to="/gallery" className="inline-block border border-white/20 text-white px-8 md:px-10 py-3 font-condensed font-bold uppercase hover:bg-white hover:text-black transition-all clip-slant text-sm md:text-base">
                 Vai alla Gallery
             </Link>
        </div>

      </div>
    </div>
  );
};

export default Events;