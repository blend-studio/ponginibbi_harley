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
            src="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" 
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
                image="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060"
                align="left"
             />
             <HistoryEvent 
                year="2000"
                title="Nasce il Sogno Americano"
                description="Con l'arrivo del nuovo millennio, Ponginibbi abbraccia la leggenda. Diventiamo concessionaria ufficiale Harley-Davidson®, portando il mito di Milwaukee sulle strade emiliane."
                image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"
                align="right"
             />
             <HistoryEvent 
                year="2010"
                title="La Nuova Cattedrale"
                description="Inauguriamo la nuova sede in Via Emilia Pavese. Uno showroom moderno, un'officina all'avanguardia e uno spazio dedicato al Chapter e agli eventi. Il punto di ritrovo per tutti i bikers."
                image="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060"
                align="left"
             />
             <HistoryEvent 
                year="2024"
                title="Verso il Futuro"
                description="Oggi, come allora, guardiamo avanti. Abbracciamo l'evoluzione elettrica con LiveWire™, continuiamo a formare nuovi piloti con la Riding Academy e manteniamo viva la tradizione."
                image="https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060"
                align="right"
             />
         </div>
      </div>
    </div>
  );
};

export default History;
