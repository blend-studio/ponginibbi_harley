import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BikeCard = ({ bike }) => {
  return (
    <div className="group relative w-full overflow-hidden bg-[#121212] border border-white/10 hover:border-hd-orange transition-all duration-500 flex flex-col">
      
      {/* AREA IMMAGINE (Sfondo Chiaro per integrare le foto studio) */}
      <div className="relative h-[220px] sm:h-[260px] md:h-[300px] bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden flex items-center justify-center p-4 clip-diagonal-reverse">
        {/* Scritta di sfondo decorativa */}
        <h3 className="absolute top-2 left-4 text-[3rem] md:text-[4rem] font-condensed font-bold text-gray-400/20 uppercase leading-none select-none z-0">
          {bike.model.split(' ')[0]}
        </h3>

        <img
          src={bike.image}
          alt={bike.model}
          className="relative z-10 w-full h-auto max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 drop-shadow-2xl"
        />
      </div>
      {/* Badge Status (spostato fuori dall'area clip per evitare che venga tagliato) */}
      <div className="absolute top-4 right-4 z-30 bg-hd-orange text-white px-3 py-1.5 clip-slant shadow-[0_0_15px_rgba(255,102,0,0.4)] border border-white/20">
        <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.1em] drop-shadow-md">
          {(bike.status || '2026').toString().toUpperCase()}
        </span>
      </div>

      {/* AREA CONTENUTO (Dark) */}
      <div className="p-5 md:p-6 flex-grow flex flex-col justify-between relative z-10 -mt-6 md:-mt-8">
        <div>
            <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-6 md:w-8 bg-hd-orange group-hover:w-16 transition-all duration-300"></div>
                <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{bike.category}</span>
            </div>
            
            <h3 className="font-condensed font-bold text-2xl md:text-3xl text-white uppercase leading-none mb-1 group-hover:text-hd-orange transition-colors">
                {bike.model}
            </h3>
            <p className="text-gray-500 font-mono text-[12px] md:text-sm border-l-2 border-gray-700 pl-3 mb-4">
                {bike.version}
            </p>
        </div>

        <div className="flex items-end justify-between border-t border-white/10 pt-4 mt-2">
            <div className="flex flex-col">
                <span className="text-[10px] md:text-xs text-gray-500 uppercase font-bold">A partire da</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-hd-orange transition-colors">
                    € {bike.price.toLocaleString()}
                </span>
            </div>
            <Link to={`/inventory/${bike.vid}`} className="bg-white text-black p-2 rounded-full hover:bg-hd-orange hover:text-white transition-all transform group-hover:rotate-45">
                <ArrowUpRight size={18} md:size={20} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;