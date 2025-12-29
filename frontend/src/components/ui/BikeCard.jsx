import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BikeCard = ({ bike }) => {
  return (
    <div className="group relative w-full overflow-hidden bg-[#121212] border border-white/10 hover:border-hd-orange transition-all duration-500 flex flex-col">
      
      {/* AREA IMMAGINE (Sfondo Chiaro per integrare le foto studio) */}
      <div className="relative h-[300px] bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden flex items-center justify-center p-4 clip-diagonal-reverse">
        {/* Scritta di sfondo decorativa */}
        <h3 className="absolute top-2 left-4 text-[4rem] font-condensed font-bold text-gray-400/20 uppercase leading-none select-none z-0">
          {bike.model.split(' ')[0]}
        </h3>

        <img 
            src={bike.image} 
            alt={bike.model} 
            className="relative z-10 w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 drop-shadow-2xl"
        />
        
        {/* Badge Status */}
        <div className="absolute top-4 right-4 z-20 bg-hd-orange/90 backdrop-blur text-white px-3 py-1 clip-slant">
            <span className="text-xs font-bold uppercase tracking-widest">{bike.status || '2026'}</span>
        </div>
      </div>

      {/* AREA CONTENUTO (Dark) */}
      <div className="p-6 flex-grow flex flex-col justify-between relative z-10 -mt-8">
        <div>
            <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-8 bg-hd-orange group-hover:w-16 transition-all duration-300"></div>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{bike.category}</span>
            </div>
            
            <h3 className="font-condensed font-bold text-3xl text-white uppercase leading-none mb-1 group-hover:text-hd-orange transition-colors">
                {bike.model}
            </h3>
            <p className="text-gray-500 font-mono text-sm border-l-2 border-gray-700 pl-3 mb-4">
                {bike.version}
            </p>
        </div>

        <div className="flex items-end justify-between border-t border-white/10 pt-4 mt-2">
            <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-bold">A partire da</span>
                <span className="text-2xl font-bold text-white group-hover:text-hd-orange transition-colors">
                    € {bike.price.toLocaleString()}
                </span>
            </div>
            <Link to={`/inventory/${bike.vid}`} className="bg-white text-black p-2 rounded-full hover:bg-hd-orange hover:text-white transition-all transform group-hover:rotate-45">
                <ArrowUpRight size={20} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;