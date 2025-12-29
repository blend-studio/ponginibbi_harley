import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const EventRow = ({ date, title, location, description }) => (
    <div className="flex flex-col md:flex-row gap-6 border-b border-white/10 py-8 group hover:bg-white/5 transition-colors px-4 -mx-4">
        <div className="md:w-1/4">
            <span className="text-hd-orange font-bold text-sm tracking-widest uppercase block mb-1">Data</span>
            <div className="font-condensed font-bold text-3xl text-white">{date}</div>
        </div>
        <div className="md:w-3/4">
             <h3 className="font-condensed font-bold text-2xl text-white uppercase mb-2 group-hover:text-hd-orange transition-colors">{title}</h3>
             <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <MapPin size={14} /> {location}
             </div>
             <p className="text-gray-400 max-w-2xl">{description}</p>
        </div>
        <div className="self-center">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-hd-orange group-hover:border-hd-orange transition-all">
                <ArrowRight size={18} />
            </button>
        </div>
    </div>
);

const Events = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <SectionTitle title="Eventi & Community" subtitle="RIDE WITH US" />

        {/* H.O.G. BANNER */}
        <div className="relative rounded-sm overflow-hidden mb-20 group">
             <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
             </div>
             <div className="relative z-10 p-12 md:p-24 max-w-4xl">
                 <div className="flex items-center gap-4 mb-6">
                     <Users className="text-hd-orange" size={32} />
                     <span className="text-white font-bold tracking-widest uppercase">Harley Owners Group™</span>
                 </div>
                 <h2 className="font-condensed font-bold text-5xl md:text-7xl text-white uppercase mb-6 leading-none">
                     Piacenza <span className="text-hd-orange">Chapter</span>
                 </h2>
                 <p className="text-xl text-gray-300 mb-8 max-w-xl">
                     Non guidare mai da solo. Unisciti al Chapter locale per vivere la vera esperienza Harley-Davidson. 
                     Raduni, cene, viaggi on the road e una fratellanza che dura una vita.
                 </p>
                 <button className="bg-hd-orange text-white px-8 py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors">
                     Diventa Socio H.O.G.
                 </button>
             </div>
        </div>

        {/* CALENDARIO */}
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
                <Calendar className="text-hd-orange" />
                <h3 className="font-condensed font-bold text-2xl text-white uppercase">Prossimi Appuntamenti</h3>
            </div>
            
            <EventRow 
                date="15-16 MARZO" 
                title="Spring Open House" 
                location="Ponginibbi Harley-Davidson, Piacenza"
                description="Scopri la nuova gamma 2026. Test ride gratuiti, musica dal vivo, street food e tanto altro. L'evento di apertura della stagione."
            />
            <EventRow 
                date="12 MAGGIO" 
                title="Freedom on Tour" 
                location="Piacenza Expo"
                description="Il truck ufficiale H-D arriva in città. Prenota la tua prova su strada dei nuovi modelli Touring e Cruiser."
            />
            <EventRow 
                date="20 GIUGNO" 
                title="Piacenza Night Run" 
                location="Partenza dallo Showroom"
                description="Un giro notturno attraverso le colline piacentine, seguito da una grigliata sotto le stelle riservata ai soci H.O.G."
            />
             <EventRow 
                date="SETTEMBRE" 
                title="End of Season Party" 
                location="To Be Announced"
                description="Chiudiamo la stagione in bellezza. Resta sintonizzato per i dettagli."
            />
        </div>

      </div>
    </div>
  );
};

export default Events;