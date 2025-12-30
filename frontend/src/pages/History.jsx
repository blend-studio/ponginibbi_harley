import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const HistoryEvent = ({ year, title, description, image, align = 'left' }) => (
  <div className={`flex flex-col md:flex-row gap-8 mb-20 items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
     <div className="flex-1 w-full">
         <div className="relative overflow-hidden border border-white/10 group">
            <img src={image} alt={title} className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute top-4 left-4 bg-hd-orange text-white text-xl font-bold font-condensed px-3 py-1">
                {year}
            </div>
         </div>
     </div>
     <div className="flex-1 text-center md:text-left">
         <h3 className="text-4xl font-condensed font-bold text-white uppercase mb-4">{title}</h3>
         <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
     </div>
  </div>
);

const History = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-20">
       {/* Hero */}
       <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558980394-0a06c46e60e7?q=80&w=2670&auto=format&fit=crop" 
            alt="History" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-9xl font-condensed font-bold text-white mb-2 uppercase tracking-tighter">
            Legacy
          </h1>
          <p className="text-xl text-hd-orange uppercase tracking-[0.5em] font-bold">Since 19XX</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
         <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-condensed font-bold text-white uppercase mb-6">Una Passione di Famiglia</h2>
            <p className="text-gray-300 text-xl leading-relaxed">
                La storia del Gruppo Ponginibbi non è solo una cronologia di eventi. 
                È il racconto di una famiglia, di una città e dell'amore per i motori che batte forte da generazioni.
            </p>
         </div>

         <div className="relative">
             {/* Center Line for desktop */}
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
             
             <HistoryEvent 
                year="1958"
                title="Le Origini"
                description="Tutto inizia con una piccola officina meccanica nel cuore di Piacenza. La passione e la competenza tecnica diventano subito il marchio di fabbrica della famiglia Ponginibbi."
                image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop"
                align="left"
             />
             <HistoryEvent 
                year="2000"
                title="Nasce il Sogno Americano"
                description="Con l'arrivo del nuovo millennio, Ponginibbi abbraccia la leggenda. Diventiamo concessionaria ufficiale Harley-Davidson®, portando il mito di Milwaukee sulle strade emiliane."
                image="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop"
                align="right"
             />
             <HistoryEvent 
                year="2010"
                title="La Nuova Cattedrale"
                description="Inauguriamo la nuova sede in Via Emilia Pavese. Uno showroom moderno, un'officina all'avanguardia e uno spazio dedicato al Chapter e agli eventi. Il punto di ritrovo per tutti i bikers."
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                align="left"
             />
             <HistoryEvent 
                year="2024"
                title="Verso il Futuro"
                description="Oggi, come allora, guardiamo avanti. Abbracciamo l'evoluzione elettrica con LiveWire™, continuiamo a formare nuovi piloti con la Riding Academy e manteniamo viva la tradizione."
                image="https://images.unsplash.com/photo-1622185135505-2d795043df63?q=80&w=2670&auto=format&fit=crop"
                align="right"
             />
         </div>
      </div>
    </div>
  );
};

export default History;
