import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BikeCard = ({ bike }) => {
  return (
    <div className="group relative h-[500px] w-full overflow-hidden bg-[#121212] border border-white/10 hover:border-hd-orange transition-all duration-500">
      
      {/* BACKGROUND IMAGE ZOOM */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
            src={bike.image || 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2024/2024-street-bob-114/2024-street-bob-114-f58/360/2024-street-bob-114-f58-motorcycle-01.jpg'} 
            alt={bike.model} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      </div>

      {/* FLOATING BADGE */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1">
        <span className="text-xs font-bold uppercase text-white tracking-widest">{bike.status || 'IN STOCK'}</span>
      </div>

      {/* CONTENT AT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="h-1 w-12 bg-hd-orange mb-4 transition-all duration-500 group-hover:w-24"></div>
        
        <h3 className="font-condensed font-bold text-5xl text-white uppercase leading-none mb-2">
            {bike.model}
        </h3>
        <p className="text-gray-400 font-mono text-sm mb-4 border-l-2 border-gray-600 pl-2">
            {bike.version} // {new Date(bike.registrationDate).getFullYear()}
        </p>

        <div className="flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="text-3xl font-bold text-hd-orange">€ {bike.price.toLocaleString()}</span>
            <Link to={`/inventory/${bike.vid}`} className="bg-white text-black p-3 hover:bg-hd-orange hover:text-white transition-colors">
                <ArrowUpRight size={24} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;