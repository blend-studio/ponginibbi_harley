import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-hd-orange py-4 overflow-hidden relative rotate-1 scale-105 z-20 border-y-4 border-black">
      <div className="whitespace-nowrap animate-marquee flex gap-10">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-black font-condensed font-bold text-4xl uppercase tracking-widest flex items-center gap-10">
            RIDE FREE <span className="text-white text-2xl">★</span> 
            PONGINIBBI GROUP <span className="text-white text-2xl">★</span> 
            SINCE 1965 <span className="text-white text-2xl">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;